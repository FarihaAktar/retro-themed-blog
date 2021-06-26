import React from 'react';
import './Header.css'
import img from '../../images/3364874-marble_carrara_002.png'

const Header = () => {
    return (
        <header className='header-background flex flex-col items-center justify-center' >
            <div className='flex flex-col items-center justify-center relative'>
                <img className='lg:w-28 md:w-24 w-24' src={img} alt="" />
                <div className='flex items-center justify-center'>
                    <div className='lg:w-40 md:w-32 sm:w-24 w-24 bg-white h-px mr-2'></div>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl text-gray-50'>Welcome To New Day</h1>
                    <div className='lg:w-40 md:w-32 sm:w-24 w-24 bg-white h-px ml-2'></div>
                </div>
            </div>
            <div>
                <h1 className='text-yellow-100 lg:tracking-wider tracking-normal text-center' style={{fontFamily: `'Lobster', cursive`}}>Popular blog writers know how to communicate with their target audience</h1>
            </div>
        </header>
    );
};

export default Header;