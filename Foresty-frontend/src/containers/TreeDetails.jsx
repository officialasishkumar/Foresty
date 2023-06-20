import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { client, urlFor } from '../client';
import { getTreeById } from '../utils/data';
import mapmarkericon from '../assets/mapmarker.png'
import badTree from '../assets/badTree.jpg'
import goodTree from '../assets/goodTree.jpg'
import GrownTree from '../assets/GrownTree.jpg';

import Map, {
    Marker,
    Popup,
    NavigationControl,
    FullscreenControl,
    ScaleControl,
    GeolocateControl,
} from "react-map-gl";
import CardSkeleton from '../components/CardSkeleton';

const MAPBOX_token = process.env.REACT_APP_MAPBOX_TOKEN;

const TreeDetails = () => {
    const [tree, setTree] = useState(null);
    const [cntWatered, setCntWatered] = useState(0);
    const { id } = useParams();
    const queryString = getTreeById(id);
    const [today, setToday] = useState(new Date());
    const [date, setDate] = useState(new Date());
    const [diff, setDiff] = useState(0);
    const [loading, setLoading] = useState(true);
    const [treeHealth, setTreeHealth] = useState("");

    useEffect(() => {
        client.fetch(queryString)
            .then((res) => {
                setTree(res[0]);
                setCntWatered(res[0].watered?.length)
                const year = res[0].plantedDate.slice(0, 4);
                const month = res[0].plantedDate.slice(5, 7);
                const day = res[0].plantedDate.slice(8, 10);
                setLoading(false);
                setDate(new Date(year, month - 1, day))
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        setDiff(diffDate(today, date))
    }, [])

    useEffect(() => {
        const ratio = cntWatered / diff;
        if (ratio < 0.5) {
            setTreeHealth("Bad")
        } else {
            setTreeHealth("Good")
        }
        if (diff > 90) {
            setTreeHealth("Grown")
        }
    }, [])

    function diffDate(date1, date2) {
        const diffInMilliseconds = date1.getTime() - date2.getTime();
        return diffInMilliseconds / (1000 * 60 * 60 * 24);
    }

    return (
        <div className="flex flex-col md:flex-row p-4 mt-[80px] flex-col gap-2">
            <div className="flex flex-col items-center gap-3 w-full md:w-1/2">
                {
                    loading ?
                        <CardSkeleton /> :
                        <div className="border-2 border-gray-300 mb-[10px] relative">

                            <div className='flex justify-center items-center w-[50px] h-[50px] rounded-lg shadow-xl bg-green-200 absolute right-1 top-1'>
                                {
                                    treeHealth === "Bad" &&
                                    <img src={badTree} className="w-[40px] h-[40px]" alt="" />
                                }
                                {
                                    treeHealth === "Good" &&
                                    <img src={goodTree} className="w-[40px] h-[40px]" alt="" />
                                }
                                {
                                    treeHealth === "Grown" &&
                                    <img src={GrownTree} className="w-[40px] h-[40px]" alt="" />
                                }
                            </div>
                            {tree?.plant_image &&
                                <img src={urlFor(tree?.plant_image).url()} className="h-[50vh]" alt="" />
                            }
                        </div>
                }
                <p className='font-semibold  uppercase'>
                    {treeHealth === "Bad" && <p className='text-red-600'>This tree needs water</p>}
                    {treeHealth === "Good" && <p className='text-green-600'>This tree is doing good</p>}
                    {treeHealth === "Grown" && <p className='text-blue-600'>This tree has grown</p>}
                </p>
                <hr className='w-full bg-gray-100 h-[1px] w-[380px]' />
                <p className='font-bold uppercase'>{tree?.species}</p>
                <hr className='w-full bg-gray-100 h-[1px] w-[380px]' />
                <p className='font-semibold uppercase'>
                    Planted On: {tree?.plantedDate}
                </p>
                <hr className='w-full bg-gray-100 h-[1px] w-[380px]' />
                <p className='flex gap-2 font-semibold uppercase'>
                    <p>Planted By:</p>
                    <a href={`/userprofile/${tree?.plantedby?._id}`} className="hover:underline">
                        {tree?.plantedby.userName}
                    </a>
                </p>
                <hr className='w-full bg-gray-100 h-[1px] w-[380px]' />
                <p className='flex gap-2 font-semibold uppercase'>
                    No of times Watered: {cntWatered}
                </p>
            </div>
            <div className="flex items-center justify-center mt-20 md:mt-0 w-full md:w-[500px] h-[50vh]">
                {tree &&
                    <Map
                        initialViewState={{
                            latitude: tree?.location?.lat,
                            longitude: tree?.location?.lng,
                            zoom: 15,
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
                        <Marker
                            key={tree?._id}
                            latitude={tree?.location?.lat}
                            longitude={tree?.location?.lng}
                            anchor="bottom"
                        >
                            <button
                                className="w-[25px] border-2 border-green-500 p-[2px] rounded-xl hover:cursor-pointer z-50"
                            >
                                <img src={mapmarkericon} alt="map-marker-icon" />
                            </button>
                        </Marker>
                    </Map>
                }
            </div>
        </div >
    )
}

export default TreeDetails