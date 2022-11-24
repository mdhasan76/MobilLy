import React from 'react';
import vivologo from '../../assets/vivologo.png';
import realmelogo from '../../assets/realmelogo.png';
import samsunglogo from '../../assets/samesunglogo.png';
import { Link } from 'react-router-dom';


const ProductCategory = () => {
    return (
        <section className='py-10 bg-slate-50'>
            <div className='mb-10 text-center'>
                <h1 className='text-3xl sm:text-6xl font-semibold pb-7'>Category</h1>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
                <div className='border w-9/12 mx-auto hover:shadow-lg bg-white'>
                    <Link to='/'>
                        <img src={vivologo} className='h-44 sm:h-60 w-full' alt="" />
                        <div className='text-center p-2'>
                            <h4 className='text-lg font-semibold md:text-2xl pt-2'>VIVO</h4>
                            <p className='font-medium opacity-80'>{'3'} items</p>
                        </div></Link>
                </div>
                <div>
                    <div className='border w-9/12 mx-auto hover:shadow-lg bg-white'>
                        <Link to='/'>
                            <img src={samsunglogo} className='h-44 sm:h-60  w-full' alt="" />
                            <div className='text-center p-2'>
                                <h4 className='text-lg font-semibold md:text-2xl pt-2'>SAMSUNG</h4>
                                <p className='font-medium opacity-80'>{'3'} items</p>
                            </div></Link>
                    </div>
                </div>
                <div>
                    <div className='border w-9/12 mx-auto hover:shadow-lg bg-white'>
                        <Link to='/'>
                            <img src={realmelogo} className='h-44 sm:h-60  w-full' alt="" />
                            <div className='text-center p-2'>
                                <h4 className='text-lg font-semibold md:text-2xl pt-2'>Realme</h4>
                                <p className='font-medium opacity-80'>{'3'} items</p>
                            </div></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductCategory;