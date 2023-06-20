import React from 'react'
import { client } from '../client'
import { useState, useEffect } from 'react'
import logo from '../assets/mapmarker.png'
import { useParams } from 'react-router-dom'
import { getUserInfoProfile } from '../utils/data'
import profileimagehome from '../assets/profileimagehome.svg'

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [res, setRes] = useState(null);
  const [coins, setCoins] = useState(0);
  const [trees, setTrees] = useState(0);
  const [water, setWater] = useState(0);

  useEffect(() => {
    const queryString = getUserInfoProfile(id);
    client.fetch(queryString)
      .then((res) => {
        setUser({
          _id: res[0]._id,
          _createdAt: res[0]._createdAt,
          userName: res[0].userName,
          image: res[0].image,
        });
        setRes(res);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    if (Array.isArray(res)) {
      const temp = res[0];
      setCoins(temp.coinsHave ? temp.coinsHave : 0);
      setWater(temp.watered?.length ? temp.watered?.length : 0);
      setTrees(temp.treesPlanted?.length ? temp.treesPlanted?.length : 0);
    }
  }, [res])

  return (
    <>
      <div className='flex flex-col w-full items-center'>
        <div className="h-370 2xl:h-510 relative w-4/5 user-background mb-15 sm:mb-20">
          <img
            className='absolute bottom-[80px] sm:bottom-0 right-1/2 translate-x-[50%] translate-y-[50%] rounded-full w-20 h-20 shadow-xl object-cover'
            src={user?.image}
            alt="user-pic"
          />
        </div>
        <div className="flex justify-between items-center w-4/5 border-2 p-3 rounded-lg drop-shadow-2xl">
          <p className="font-semibold text-sm sm:text-xl flex flex-row items-center gap-5">
            <img src={user?.image} alt="" className="rounded-lg w-[25px]" />
            <p> {user?.userName}</p>
          </p>
          <p className='text-gray-500 text-xs sm:text-sm'>
            Joined on {user?._createdAt.substr(0, 10)}
          </p>
        </div>
        {/* for devices with xl display */}
        <div className="hidden xl:flex flex-row w-4/5 mb-[100px] gap-2 border-2 border-gray-200 mt-10 p-2">
          <div className='flex justify-center bg-green-200 items-center border-2 border-gray-200 p-3 w-1/2'>
            <img src={profileimagehome} className="w-1/2" alt="" />
          </div>
          <div className='flex flex-col w-1/2 p-3 border-gray-200 border-2'>
            <div className='flex justify-center items-center flex-row w-full h-1/2 border-b-2 border-gray-200'>
              <div className='w-1/2 h-full border-r-2 border-gray-300 p-2'>
                <div className='text-extrabold flex relative jusitfy-center items-center w-full h-full '>
                  <div className='flex justify-center items-center absolute left-0 right-0 bottom-0 top-0 -z-50 bg-green-200 rounded-xl' />
                  <div className='flex flex-col justify-between items-center p-3 pb-6 absolute left-0 right-0 bottom-0 top-0 z-50'>
                    <p className="uppercase text-gray-600 font-bold">Trees Planted</p>
                    <p className='font-extrabold text-3xl md:text-5xl text-green-900'>{trees}</p>
                  </div>
                </div>
              </div>
              <div className='w-1/2 h-full p-2'>
                <div className='text-extrabold flex relative jusitfy-center items-center w-full h-full '>
                  <div className='flex justify-center items-center absolute left-0 right-0 bottom-0 top-0 -z-50 bg-blue-200 rounded-xl' />
                  <div className='flex flex-col justify-between items-center p-3 pb-6 absolute left-0 right-0 bottom-0 top-0 z-50'>
                    <p className="uppercase text-gray-600 font-bold">Trees watered</p>
                    <p className='font-extrabold text-3xl md:text-5xl text-blue-900'>{water}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center flex-row w-full h-1/2'>
              <div className='text-extrabold flex relative jusitfy-center items-center w-full h-full '>
                <div className='flex justify-center items-center absolute left-0 right-0 bottom-0 top-0 -z-50 bg-yellow-200 rounded-xl' />
                <div className='flex flex-col justify-between items-center p-3 pb-9 absolute left-0 right-0 bottom-0 top-0 z-50'>
                  <p className="uppercase text-gray-600 font-bold">Coins have</p>
                  <p className='font-extrabold text-3xl md:text-5xl text-red-900'>{coins}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* For other devices */}
        <div className='xl:hidden mt-10 w-4/5 border-gray-200 rounded-lg'>
          <div className='hidden sm:flex flex-row w-full p-2 items-center'>
            <div className='flex flex-col justify-between items-center p-5 w-1/3 rounded-l-lg bg-green-200'>
              <p className="uppercase text-gray-600 font-bold">Trees planted</p>
              <p className='font-extrabold text-3xl md:text-5xl text-green-700'>{trees}</p>
            </div>
            <div className='flex flex-col justify-between items-center p-5 w-1/3 border-x-2 border-blue-300 bg-green-200'>
              <p className="uppercase text-gray-600 font-bold">Trees watered</p>
              <p className='font-extrabold text-3xl md:text-5xl text-blue-700'>{water}</p>
            </div>
            <div className='flex flex-col justify-between items-center p-5 w-1/3 rounded-r-lg bg-green-200'>
              <p className="uppercase text-gray-600 font-bold">Coins Have</p>
              <p className='font-extrabold text-3xl md:text-5xl text-red-700'>{coins}</p>
            </div>
          </div>
          <div className='sm:hidden flex flex-col w-full items-center'>
            <div className='flex flex-row gap-3 justify-between rounded-t-lg items-center p-5 w-full bg-green-200'>
              <p className="uppercase text-gray-600 text-sm font-bold">Trees planted</p>
              <p className='font-extrabold text-4xl text-green-700'>{trees}</p>
            </div>
            <div className='flex flex-row justify-between border-y-2 border-green-300 items-center p-5 w-full bg-green-200'>
              <p className="uppercase text-gray-600 text-sm font-bold">Trees watered</p>
              <p className='font-extrabold text-4xl text-blue-700'>{water}</p>
            </div>
            <div className='flex flex-row justify-between items-center rounded-b-lg p-5 w-full bg-green-200'>
              <p className="uppercase text-gray-600 text-sm font-bold">Coins Have</p>
              <p className='font-extrabold text-4xl text-red-700'>{coins}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Profile