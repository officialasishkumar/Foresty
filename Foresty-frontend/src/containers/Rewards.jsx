import React from 'react'
import { Routes, Route } from 'react-router-dom';
import RewardsPageComp1 from '../components/RewardsPageComp1';
import RewardsPageComp2 from '../components/RewardsPageComp2';


const Rewards = () => {
    return (
        <>
            <RewardsPageComp1 />
            <RewardsPageComp2 />
        </>
    )
}

export default Rewards