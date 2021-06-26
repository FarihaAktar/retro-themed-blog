import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import img from '../../images/pexels-alfonso-escalante-2832251.jpg'

const Posts = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/allBlogs")
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, []);


    return (
        <div className='flex w-10/12 m-auto'>
            <div className=' w-9/12  mt-10'>
                <h1 className='text-2xl font-black text-gray-500'>Recent Posts</h1>
                {
                    blogs.map(blog => <Post blog={blog} key={blog._id}></Post>)
                }
            </div>
            <div className='w-2/12 ml-3 mt-20'>
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