import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({toggle}) => {
    return (
        <nav className='flex lg:justify-center md:justify-center sm:justify-between justify-between h-20 items-center shadow-lg  w-full bg-gray-50 fixed z-10'>
            <Link to='/' className='lg:hidden md:hidden px-8 text-custom text-2xl text-yellow-600'>New Day</Link>
            <div className='px-8 hover:text-pink-600 cursor-pointer md:hidden' onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </div>
            <div className='md:block hidden'>
                <Link className='p-6 font-black hover:text-pink-600' to='/'>Home</Link>
                <Link className='p-6 font-black hover:text-pink-600' to='about'>About</Link>
                <Link to='/' className='px-8 text-custom text-2xl text-yellow-600'>New Day</Link>
                <Link className='p-6 font-black hover:text-pink-600' to='contact'>Contact</Link>
                <Link className='p-6 font-black hover:text-pink-600' to='blogs'>Blog</Link>
                <Link className='p-6 font-black hover:text-pink-600' to='addBlog'>Admin</Link>
            </div>
        </nav>
    );
};

export default Navbar;