import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/HeaderFooter/Navbar';
import LoadingBar from 'react-top-loading-bar';
import SolutionComponent from '../components/Home/SolutionComponent';
import Component2Home from '../components/Home/Component2Home';
import PlantATree from '../components/Home/PlantATree';
import WaterATree from '../components/Home/WaterATree';
import Rewards from '../components/Rewards';
import Articles from './Articles';
const Home = ({ loginReq }) => {

    return (
        <div className='flex flex-col gap-20'>
            <SolutionComponent />
            <Component2Home />
            <PlantATree />
            <WaterATree />
            <Rewards />
        </div>
    )
}

export default Home