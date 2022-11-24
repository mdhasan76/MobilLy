import React from 'react';
import { Link } from 'react-router-dom';
import img404 from '../../assets/img404.jpg'

const Error404 = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='text-center'>
                <img src={img404} alt="" />
                <Link to='/' className='btn btn-primary mt-3 text-white'>Back to Home</Link>
            </div>
        </div>
    );
};

export default Error404;