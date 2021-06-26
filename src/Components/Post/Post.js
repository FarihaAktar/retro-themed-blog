import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ blog }) => {
    const {title, description, date, imageURL, _id} = blog;
    return (
        <div>
            <div className='lg:flex md:flex-colum lg:mt-10 md:mt-12 sm:mt-16 mt-16' >
                <img className='lg:w-96 md:w-11/12 sm:w-11/12 w-11/12 lg:h-64 md:h-72 sm:h-72 h-72 object-cover' src={imageURL} alt="" />
                <div className='lg:w-6/12 md:w-10/12 sm:10/12 w-10/12 lg:ml-10 md:ml-0 lg:mt-0 md:mt-7 mt-7'>
                    <h1 className='text-2xl font-black'>{title}</h1>
                    <p className='text-gray-500 mt-2'>{date}</p>
                    <p className='mt-3 mb-8 text-gray-800 font-medium' >{description.slice(0, 170)}...</p>
                    <Link className='underline text-red-400 font-thin hover:text-black' to={'/singleBlog/'+ _id}>Continue Reading</Link>
                </div>
            </div>
        </div>
    );
};

export default Post;