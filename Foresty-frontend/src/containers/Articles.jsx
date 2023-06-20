import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from '../components/HeaderFooter/Navbar';
import LoadingBar from "react-top-loading-bar";
import ArticleComp1 from "../components/ArticleComp1";

const Articles = () => {
    return (
        <>
            <ArticleComp1 />
        </>
    )
}

export default Articles;
