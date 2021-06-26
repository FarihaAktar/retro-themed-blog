import React, { useEffect, useState } from 'react';
import AdminBar from './AdminBar';
import Blog from './blog';

const ManageBlog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch("https://tranquil-gorge-87643.herokuapp.com/manageBlog")
        .then(res=> res.json())
        .then(data =>{
            setBlogs(data)
        })
    },[])


    return (
        <div>
            <AdminBar />
            <div className='add-blog-section h-screen'>
                <div className='flex justify-center items-center pt-10'>
                    <div className='rounded-full border-gray-700 border-4 mr-8'></div>
                    <h1 className='text-center text-3xl text-custom' >Manage Your Blogs</h1>
                    <div className='rounded-full border-gray-700 border-4 ml-8'></div>
                </div>
                <table className='table-auto lg:w-10/12 md:w-11/12 sm:w-full w-full m-auto mt-14'>
                    <thead className=''>
                        <tr className='border-b-2 border-gray-400'>
                            <th className='w-1/2 text-custom text-2xl'>Title</th>
                            <th className='w-1/4 text-custom text-2xl'>Date</th>
                            <th className='w-1/4 text-custom text-2xl'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blogs?.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageBlog;