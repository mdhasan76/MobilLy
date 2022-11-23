import React from 'react';
import { RiEmotionSadLine } from 'react-icons/ri';
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='text-center'>
                <RiEmotionSadLine className='text-9xl w-full' />
                <p className='text-center text-4xl py-2'>Opss! page not found</p>
                <Link to='/' className='btn btn-primary mt-3 text-white'>Back to Home</Link>
            </div>
        </div>
    );
};

export default Error404;