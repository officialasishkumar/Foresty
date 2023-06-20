import React from 'react'
import { GiThunderBlade } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import mapmarker from '../../assets/mapmarker.png'

const footer = () => {
    return (
        <div>
            <hr className='hidden sm:block px-10 bg-gray-100 h-[1px] mt-[50px]' />
            <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-center gap-10 md:gap-[100px] p-10 pb-20 sm:pb-10 sm:my-[20px]">
                <hr className='w-4/5 h-[1px] bg-gray-300 sm:hidden' />
                <div className="flex flex-col items-center justify-center gap-3">
                    <img className="w-[100px] my-[50px] sm:my-[0px]" src={mapmarker} alt="logo" />
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                    <h2 className="text-xl font-bold">Know Us</h2>
                    <a href={'https://github.com/officialasishkumar/Foresty'} className='hover:underline'>
                        About our project
                    </a>
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                    <h2 className="text-xl font-bold">Contact & Help</h2>
                    <Link to="/contact" className='hover:underline'>
                        Contact
                    </Link>
                    <Link to="/feedback" className='hover:underline'>
                        FeedBack
                    </Link>
                    <a href="https://github.com/officialasishkumar/Foresty/issues" target="_blank" className='hover:underline'>
                        Report a Issue
                    </a>
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                    <h2 className="text-xl font-bold">Social Media</h2>
                    <a href="https://twitter.com/Forestify_It" target="_blank">
                        <div>
                            <svg className="inline" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="20" height="20"
                                viewBox="0 0 48 48"><path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path></svg>
                            <span className="py-2 hover:underline transition-all pl-2">Forestify's Twitter </span>
                        </div>
                    </a>
                </div>
            </div>
            <div className="bg-black flex justify-between px-[7vw] sm:flex-row flex-col py-5">
                <p className="text-center text-white ">Copyright&copy; Foresty 2023</p>
                <p className="text-center text-white sm:pt-0 pt-4">Powered by Foresty</p>
            </div>
        </div>
    )
}

export default footer