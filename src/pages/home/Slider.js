import React from 'react';
import { Link } from 'react-router-dom';
import realme from '../../assets/realmebanner.jpg'
import samsung from '../../assets/samsungbanner.webp'
import vivo from '../../assets/vivobanner2.jfif'
const Slider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={vivo} className="w-full h-[450px]" alt='vivo' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 bg-gradient-to-r from-slate-800 h-full items-center ml-[-20px] right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle ml-5">❮</a>
                    <div className='text-center'>
                        <h3 className='text-3xl sm:text-6xl text-white font-semibold'>New Vivo phone Collection</h3>
                        <p className='text-sm sm:text-lg py-3 text-white  opacity-90'>Clean Second Hand VIVO Phone. <br />
                            Get newest vivo second hand phone
                        </p>
                        <Link to='/' className='btn btn-secondary text-white text-lg duration-300 hover:bg-orange-600 hover:scale-105'>Buy Now</Link>
                    </div>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={samsung} className="w-full  h-[450px]" alt='samsung' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 bg-gradient-to-r from-slate-800 h-full items-center ml-[-20px] right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle ml-5">❮</a>
                    <div className='text-center'>
                        <h3 className='text-3xl sm:text-6xl text-white font-semibold'>New Samsung phone Collection</h3>
                        <p className='text-sm sm:text-lg py-3 text-white  opacity-90'>Clean Second Hand VIVO Phone. <br />
                            Get newest vivo second hand phone
                        </p>
                        <Link to='/' className='btn btn-secondary text-white text-lg duration-300 hover:bg-orange-600 hover:scale-105'>Buy Now</Link>
                    </div>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={realme} className="w-full h-[450px]" alt='realme' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 bg-gradient-to-r from-slate-800 h-full items-center ml-[-20px] right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle ml-5">❮</a>
                    <div className='text-center'>
                        <h3 className='text-3xl sm:text-6xl text-white font-semibold'>Newest Realme phone Collection</h3>
                        <p className='text-sm sm:text-lg py-3 text-white  opacity-90'>Clean Second Hand Realme Phone. <br />
                            Get newest vivo second hand phone
                        </p>
                        <Link to='/' className='btn btn-secondary text-white text-lg duration-300 hover:bg-orange-600 hover:scale-105'>Buy Now</Link>
                    </div>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;