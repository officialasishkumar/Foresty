import { GiPlantWatering } from "react-icons/gi";
import Spinner2 from '../components/Spinner2';
import { client, urlFor } from '../client'
import React, { useState, useEffect } from 'react'
import { MdDelete } from 'react-icons/md';
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { RxCrossCircled } from 'react-icons/rx'
import { getTreesForMap, getUserById } from "../utils/data";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import LoginBtn from '../components/LoginBtn';
import { FaExclamation } from 'react-icons/fa'
import { TiTick } from 'react-icons/ti'
import mapmarker from "../assets/mapmarker.png";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MAPBOX_token = process.env.REACT_APP_MAPBOX_TOKEN;

const YlocationBtnStyles =
  "bg-gray-300 w-full cursor:default text-green-500 rounded-lg text-bold p-4";
const NlocationBtnStyles =
  "bg-gray-300 w-full hover:bg-gray-400 text-red-500 rounded-lg text-bold p-4";

const Water = () => {

  const [name, setName] = useState(null);
  const [user, setUser] = useState(null);
  const [address, setAddress] = useState(
    JSON.parse(localStorage.getItem("location"))
  );
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState(false);
  const [imageAsset, setImageAsset] = useState(null);
  const [wrongImageType, setWrongImageType] = useState(false);
  const [trees, setTrees] = useState(null);
  const [treeField, setTreeField] = useState(null);
  const [isFilled, setIsFilled] = useState(false);
  const [success, setSuccess] = useState(false);

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    client
      .fetch(getTreesForMap)
      .then((trees) => {
        setTrees(trees);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const getLocationThroughIp = () => {
    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IPGEO_TOKEN}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setAddress({ lat: res.latitude, long: res.longitude });
      })
      .catch((err) => console.log(err));
  };

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, altWay);
    } else {
      getLocationThroughIp();
    }
  }

  async function showPosition(position) {
    setAddress({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    });
  }

  function altWay() {
    getLocationThroughIp();
  }

  const uploadImage = (e) => {
    const { type, name } = e.target.files[0];
    if (type === 'image/png' || type === 'image/svg' || type === 'image/jpg' || type === 'image/gif' || type === 'image/jpeg') {
      setWrongImageType(false);
      setLoading(true);
      client.assets
        .upload('image', e.target.files[0], { contentType: type, filename: name })
        .then((document) => {
          setImageAsset(document);
          setLoading(false);
        })
        .catch((error) => {
          console.log("image upload error: ", error);
        })
    } else {
      setWrongImageType(true);
    }
  }

  function submitWaterTree() {
    setSuccess(false);
    setClicked(true);
    const date = new Date().toISOString().substr(0, 10);
    if (imageAsset?._id && address && treeField) {
      const doc = {
        _type: 'watereddata',
        TreeWatered: {
          _type: 'reference',
          _ref: treeField?._id,
        },
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageAsset?._id,
          },
        },
        wateredBy: {
          _type: 'reference',
          _ref: user?.sub,
        }
      };

      client.create(doc)
        .then((res) => {
          console.log("watered data created")
          client.patch(treeField?._id)
            .setIfMissing({ watered: [] })
            .append('watered', [{
              _type: 'reference',
              _key: `tree-${res?._id}`,
              _ref: res?._id,
            }])
            .commit()
            .then((res) => {
              console.log("tree data updated")
            })
            .catch((err) => {
              console.log("tree data update error: ", err)
            })

          client.patch(user?.sub)
            .setIfMissing({ coinsHave: 0 })
            .inc({ coinsHave: 10 })
            .setIfMissing({ watered: [] })
            .append('watered', [{
              _type: 'reference',
              _ref: res?._id,
              _key: `user-${res?._id}`,
            }])
            .commit()
            .then((res) => {
              setTreeField(null);
              setIsFilled(null)
              setImageAsset(null);
              setClicked(false);
              console.log("user data updated")
              setSuccess(true);
            })
            .catch((err) => {
              console.log("user data update error: ", err)
            })
        })
        .catch((err) => {
          console.log("watered data create error: ", err)
        })
    }
    else {
      setFields(true);
      setTimeout(() => {
        setFields(false);
      }, 5000);
    }
  }

  useEffect(() => {
    localStorage.getItem("user") !== "undefined"
      ? (
        setUser(JSON.parse(localStorage.getItem("user")))
      ) : localStorage.clear();
  }, []);
  return (
    <>
      <div className="absolute top-0 bottom-0 left-0 right-0 -z-50 bgimagewater"></div>
      <div className="flex flex-col px-[20px] md:px-[50px] justify-center ">
        <div className="text-center py-20 pt-28 text-5xl font-extrabold font-green text-blue-600">
          Water a plant and help it become a Tree.
        </div>

        {!treeField ? (
          <div className="p-3 text-red-900 text-xl font-semibold text-center">
            * Please select the tree you want to water
          </div>
        ) : (
          <div className="flex gap-2 flex-row justify-center items-center p-3 text-xl text-green-900 font-semibold text-center">
            <p>Selected</p> <TiTick />
            <p></p>
          </div>
        )}

        <div className="w-full relative h-[50vh] md:h-[80vh]">
          {treeField && (
            <div className="absolute flex flex-col items-center p-1 top-1 right-1 rounded-lg border-2 border-green-300 bg-green-200 z-20 h-[150px] w-[100px] md:h-[200px] md:w-[140px]">
              <a href={`/tree/${treeField?._id}`}>
                {treeField?.plant_image &&
                  <img src={urlFor(treeField?.plant_image).url()} className="w-[45px] rounded-full h-[45px] mt-[12px]" alt="tree-icon" />
                }
              </a>
              <p className="text-xs md:text-sm mt-[10px] md:mt-[35px]"> {treeField?.plantedDate.substr(0, 10)}</p>
              <p className="text-xs md:text-sm"> {treeField?.species}</p>
              <Link to={`/userprofile/${treeField?.plantedby._id}`}>
                <p className="text-xs md:text-sm hover:underline">{treeField?.plantedby.userName}</p>
              </Link>
              <Link to={'/tree/' + treeField?._id}>
                <p className="text-xs mt-2 sm:mt-3  md:text-sm underline">View Tree</p>
              </Link>
            </div>
          )}
          <Map
            initialViewState={{
              latitude: address.lat,
              longitude: address.long,
              zoom: 10,
              bearing: 0,
              pitch: 0,
            }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={MAPBOX_token}
          >
            <GeolocateControl position="top-left" />
            <FullscreenControl position="top-left" />
            <NavigationControl position="top-left" />
            <ScaleControl />
            {trees?.map((tree) =>
              tree?.location?.lat && tree?.location?.lng &&
              (
                <Marker
                  key={tree?._id}
                  latitude={tree?.location?.lat}
                  longitude={tree?.location?.lng}
                  onClick={(e) => {
                    e.originalEvent.stopPropagation();
                    setTreeField(tree);
                    setIsFilled(true);
                  }}
                  anchor="bottom"
                >
                  <button
                    className={treeField === tree ?
                      "w-[25px] border-2 border-green-900 p-[2px] rounded-xl hover:cursor-pointer z-50"
                      : "w-[25px] border-2 border-green-500 p-[2px] rounded-xl hover:cursor-pointer z-50"
                    }
                  >
                    <img src={mapmarker} alt="map-marker-icon" />
                  </button>
                </Marker>
              )
            )}
          </Map>
        </div>
        <div>
          <div className="flex flex-col items-center gap-10 px-5 py-10">
            <p className="text-3xl md:text-4xl text-center font-bold border-b-gray-300 w-full border-b-2 pb-6">
              Steps for watering a plant
            </p>
            <div className="text-md sm:text-lg md:text-2xl font-semibold flex flex-col items-center">
              <div className="listwater">
                <GiPlantWatering className="hidden sm:block" />
                <p>Step 1: Locate a plant near you in the map.</p>
              </div>
              <div className="listwater">
                <GiPlantWatering className="hidden sm:block" />
                <p>
                  Step 2: Click on the leaf icon on the map to navigate to it.
                </p>
              </div>
              <div className="listwater">
                <GiPlantWatering className="hidden sm:block" />
                <p>Step 3. Water the plant and click a picture to verify.</p>
              </div>
              <div className="listwater">
                <GiPlantWatering className="hidden sm:block" />
                <p>Step 4. Upload the picture below and get rewards.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl md:text-4xl text-center font-bold border-b-gray-300 w-full border-b-2 pb-6">
              Please enter the details of your plant
            </p>
            <p className="mt-10 flex text-red-900 text-xl flex-col gap-3 w-full items-center">
              * Form must be filled on the spot
            </p>
            {user ? (
              <div className="flex flex-col items-center gap-10 w-full p-8">
                <div className="flex flex-row relative items-center justify-center gap-2 w-full md:w-1/2">
                  <Link to={`/userprofile/${user?.sub}`} className="cursor-pointer absolute top-0 right-0 left-0 bottom-0" />

                  <img
                    src={user?.picture}
                    alt="user-profile"
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="font-bold">{user.name}</p>
                </div>
                <div className="w-full lg:w-3/5 flex flex-col">
                  <label className="flex flex-row items-center gap-3">
                    {!isFilled ? (
                      <>
                        <p className="text-red-800 font-bold">Please Select the tree you want to water from the above map</p>
                        <FaExclamation className="text-red-800" />
                      </>
                    ) : (
                      <>
                        <p className="font-bold text-green-800">Tree has been Selected</p>
                        <TiTick className="font-green-800" />
                      </>
                    )}
                  </label>
                  {
                    isFilled &&
                    <div className="flex flex-col text-blue-900 mt-4">
                      <a href={`https://www.google.com/maps/place/${treeField?.location.lat},${treeField?.location.lng}`} target="_blank" className="flex flex-row gap-3 items-center">
                        <p className="text-sm sm:text-md font-bold hover:underline">Click to navigate to the tree</p>
                        <ArrowForwardIcon />
                      </a>
                    </div>
                  }
                </div>
                <div className="flex flex-col gap-3 w-full items-center">
                  <p className="w-full lg:w-3/5 font-bold">
                    Upload Image of the planted sapling
                  </p>
                  <div className="flex justify-center items-center flex-col border-2 bg-gray-200 w-full lg:w-3/5 border-dashed border-gray-400 p-3 h-380">
                    {loading && <Spinner2 />}
                    {wrongImageType && <p>Wrong Image Type</p>}
                    {!imageAsset ? (
                      <label>
                        <div className="flex flex-col items-center justify-center h-full">
                          <div className="flex flex-col items-center h-full justify-center">
                            <p className="font-bold text-2xl">
                              <AiOutlineCloudUpload />
                            </p>
                            <p className="text-lg">Click to upload</p>
                          </div>
                          <p className="mt-32 text-gray-400">
                            use high quality JPG, SVG, PNG, GIF less than 20 MB
                          </p>
                        </div>
                        <input
                          type="file"
                          name="upload-image"
                          onChange={uploadImage}
                          className="w-0 h-0"
                        />
                      </label>
                    ) : (
                      <div className="relative h-full">
                        <img
                          src={imageAsset?.url}
                          alt="uploaded-pic"
                          className="h-full w-full"
                        />
                        <button
                          type="button"
                          className="absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
                          onClick={(e) => { e.preventDefault(); setImageAsset(null) }}
                        >
                          <MdDelete />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div class="w-full lg:w-3/5 flex justify-center items-center">
                  <button
                    type="button"
                    onClick={() => {
                      getLocation();
                    }}
                    className={address ? YlocationBtnStyles : NlocationBtnStyles}
                  >
                    Give Location Access
                  </button>
                </div>
                <div>
                  <button onClick={submitWaterTree} className="bg-green-800 rounded-xl active:bg-green-700 transition-all ease-in text-white font-bold p-2 w-40 outline-none">
                    Submit
                  </button>
                </div>
                {fields && (
                  <div className="rounded-xl w-full p-3 bg-red-200 font-red-800">
                    Please fill all the fields
                  </div>
                )}
              </div>
            ) : (
              <div className="mt-10 flex flex-col gap-4 justify-center items-center h-[50vh] w-full border-dashed border-2 shadow-xl rounded-xl border-gray-400 bg-gray-200">
                <p className="text-lg text-gray-500">
                  Login is required to fill the form
                </p>
                <LoginBtn />
              </div>
            )}
          </div>
        </div>
      </div >
      {clicked ? success ? (
        <div className="flex flex-row rounded-lg items-center justify-between p-2 gap-2 z-50 m-4 bottom-0 bg-green-300 fixed right-0 w-[300px] sm:w-[400px] h-[50px]" >
          <p>
            water data added successfully
          </p>
          <RxCrossCircled className="cursor-pointer" onClick={() => setClicked(false)} />
        </div>
      ) : (
        <div className="flex flex-row rounded-lg items-center justify-between p-2 gap-2 z-50 m-4 bottom-0 bg-green-300 fixed right-0 w-[100px] sm:w-[100px] h-[50px]">
          <Spinner />
          <RxCrossCircled className="cursor-pointer" onClick={() => setClicked(false)} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Water
