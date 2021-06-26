import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import img from '../images/pexels-rachel-claire-6127371.jpg';
import img2 from '../images/volcano.jpg'

const SingleBlog = () => {
    const { id } = useParams()

    const [singlePost, setSinglePost] = useState({})

    useEffect(() => {
        fetch("https://tranquil-gorge-87643.herokuapp.com/singlePost/" + id)
            .then(res => res.json())
            .then(data => {
                setSinglePost(data[0])
            })
    });

    const { title, description, imageURL, date } = singlePost;
    return (
        <div className='flex lg:w-10/12 md:w-11/12 sm:w-11/12 w-11/12 m-auto'>
            <div className=' mt-14 lg:w-9/12 md:w-10/12 sm:w-full w-full p-5'>
                <p className='text-gray-500'>{date}</p>
                <h1 className='text-4xl font-black mt-6'>{title}</h1>
                <p className='mt-6 text-2xl text-gray-600 w-10/12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, perspiciatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, aspernatur.</p>
                <img className='mt-6 w-11/12 h-96 object-cover' src={imageURL} alt="" />
                <p className='mt-8 w-11/12'>{description}</p>
                <h2 className='text-2xl font-black mt-3'>More About The Topic</h2>
                <p className='mt-2 w-11/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quo error inventore voluptates asperiores. Et laborum sed provident. Perspiciatis, itaque?</p>
            </div>
            <div className='lg:w-2/12 md:w-2/12 w-2/12 md:block sm:hidden hidden ml-3 mt-60'>
                <h1 className='text-2xl text-gray-500 font-black'>Related Post</h1>
                <div className='mt-3'>
                    <img className='w-52 h-56 object-cover' src={img} alt="" />
                    <h1 className='mt-2 font-black'>Traveling Alone</h1>
                    <p className='mt-2 text-gray-800 font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum distinctio tenetur soluta.</p>
                </div>
                <div className='mt-14'>
                    <img className='w-52 h-56 object-cover' src={img2} alt="" />
                    <h1 className='mt-2 font-black'>Active Volcano</h1>
                    <p className='mt-2 text-gray-800 font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum distinctio tenetur soluta.</p>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;