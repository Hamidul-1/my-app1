import React from 'react';
import { Routes } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import Card from './Card';
import Footer from './Footer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Card></Card>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;