import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import img from '../../images/pexels-alfonso-escalante-2832251.jpg'

const Posts = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("https://tranquil-gorge-87643.herokuapp.com/allBlogs")
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, []);

    console.log(blogs)
    return (
        <div className='flex lg:w-10/12 md:w-11/12 w-11/12 m-auto'>
            <div className=' lg:w-10/12 md:w-11/12 sm:w-full w-full  mt-10'>
                <h1 className='text-2xl font-black text-gray-500'>Recent Posts</h1>
                {
                    blogs.map(blog => <Post blog={blog} key={blog._id}></Post>)
                }
            </div>
            <div className='lg:w-2/12 md:w-3/12 md:block sm:hidden hidden ml-3 mt-20'>
                <div>
                    <img className='w-52 h-56 object-cover' src={img} alt="" />
                    <h1 className='mt-2 font-black'>Traveling Alone</h1>
                    <p className='mt-2 text-gray-800 font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum distinctio tenetur soluta.</p>
                </div>
            </div>
        </div>
    );
};

export default Posts;