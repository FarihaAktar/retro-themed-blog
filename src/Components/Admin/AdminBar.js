import React from 'react';
import { Link } from 'react-router-dom';

const AdminBar = () => {
    return (
        <nav className='flex justify-center items-center bg-gray-700 shadow-2xl'>
            <Link className='p-6 font-black hover:text-yellow-600 text-white' to='/addBlog'>ADD BLOG</Link>
            <Link to='/' className='px-8 text-2xl text-white text-custom hover:text-yellow-600'>New Day</Link>
            <Link className='p-6 font-black hover:text-yellow-600 text-white' to='/manageBlog'>MANAGE BLOG</Link>
        </nav>
    );
};

export default AdminBar;