import React from 'react'
import { Link } from 'react-router-dom'
import reward from '../assets/reward.svg'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const Rewards = () => {
    return (
        <div className='flex flex-col md:flex-row mx-12 text-4xl gap-32 items-center mt-[70px]'>
            <img src={reward} className="order-1 md:order-1 md:w-[40%] w-full" alt='Planting_tree' />
            <div className='flex flex-col gap-2 order-2 md:order-2'>
                <p className='bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-red-600'>
                    Exciting rewards to our environment warriors
                </p>
                <Link to='/rewards'>
                    <span className='text-green-900 font-bold text-xl nav-links'>
                        Explore our rewards  <ArrowForwardIcon />
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default Rewards
