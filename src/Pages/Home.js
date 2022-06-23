import React from 'react';
import { Routes } from 'react-router-dom';

import Banner from './Banner';
import Card from './Card';
import Login from './Login/Login';
import Update from './Update';



const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Card></Card>
            <Update></Update>
            <Login></Login>
        </div>
    );
};

export default Home;