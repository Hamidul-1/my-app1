import React from 'react';
import { Routes } from 'react-router-dom';

import Banner from './Banner';
import Card from './Card';
import Login from './Login/Login';
import Update from './Update';



const Home = () => {
    return (
        <div>
            <Banner></Banner><br></br>
            <Card></Card>
            <Update></Update>
            <Login></Login>
        </div>
    );
};

export default Home;