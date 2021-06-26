import React from 'react';
import { Link } from 'react-router-dom';
const DropDown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? 'grid grid-rows-5 text-center items-center bg-gray-50' : 'hidden'}>
            <Link className='p-6 font-black hover:text-yellow-600' to='/'>Home</Link>
            <Link className='p-6 font-black hover:text-yellow-600' to='about'>About</Link>
            <Link className='p-6 font-black hover:text-yellow-600' to='contact'>Contact</Link>
            <Link className='p-6 font-black hover:text-yellow-600' to='blogs'>Blog</Link>
            <Link className='p-6 font-black hover:text-yellow-600' to='addBlog'>Admin</Link>
        </div>
    );
};

export default DropDown;