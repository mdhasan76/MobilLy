import React from 'react';
import { MdSecurity } from 'react-icons/md';
import { GiReturnArrow } from 'react-icons/gi';
import { BiSupport } from 'react-icons/bi';


const Testimonial = () => {
    return (
        <div className='grid  sm:grid-cols-3 gap-5 my-16 text-center'>
            <div className=' mb-5'>
                <MdSecurity className='w-full text-center text-4xl md:text-6xl' />
                <p className='text-lg md:text-2xl pt-2'>30 Days return period</p>
            </div>
            <div className=' mb-5'>
                <span>
                    <BiSupport className='w-full text-center text-4xl md:text-6xl' />
                </span>
                <p className='text-lg md:text-2xl pt-2'>24 hours Support</p>
            </div>
            <div className=' mb-5'>
                <span>
                    <GiReturnArrow className='w-full text-center text-4xl md:text-6xl' />
                </span>
                <p className='text-lg md:text-2xl pt-2'>7 Days return period</p>
            </div>
        </div>
    );
};

export default Testimonial;