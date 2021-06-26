import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import Posts from '../Components/Posts/Posts';

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Posts/>
        </div>
    );
};

export default HomePage;