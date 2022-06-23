import React from 'react';
import { Routes } from 'react-router-dom';

import Banner from './Banner';
import Card from './Card';
import Login from './Login/Login';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Card></Card>
            <Login></Login>
        </div>
    );
};

export default Home;