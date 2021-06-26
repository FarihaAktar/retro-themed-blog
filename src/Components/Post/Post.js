import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ blog }) => {
    const {title, description, date, imageURL, _id} = blog;
    return (
        <div>
            <div className='flex mt-10'>
                <img className='w-96 h-64 object-cover' src={imageURL} alt="" />
                <div className='w-6/12 ml-10 '>
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