import React from 'react';

const blog = ({blog}) => {
    const {date, title, _id} = blog;

    const deleteBlog = (id) =>{
        fetch("https://tranquil-gorge-87643.herokuapp.com/delete/" + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log("deleted successfully", result);
                alert("Product is deleted successfully!")
            })
    }
    return (
        <>
        <tr className='border-b-2 border-gray-400'>
            <td className='p-2'>{title}</td>
            <td>{date}</td>
            <td className='cursor-pointer hover:text-red-900' onClick={()=> deleteBlog(_id)}>Delete</td>
        </tr>
        </>
    );
};

export default blog;