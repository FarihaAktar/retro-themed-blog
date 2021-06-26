import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import Posts from '../Components/Posts/Posts';
import DropDown from '../Components/DropDown/DropDown';

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    useEffect(()=>{
        const hideMenu = ()=>{
            if(window.innerWidth > 768 && isOpen){
                setIsOpen(false);
            }
        }
        window.addEventListener('resize', hideMenu)

        return()=>{
            window.removeEventListener('resize', hideMenu)
        }
    })
    return (
        <div>
            <Navbar toggle={toggle}/>
            <DropDown isOpen={isOpen} toggle={toggle}/>
            <Header/>
            <Posts/>
        </div>
    );
};

export default HomePage;