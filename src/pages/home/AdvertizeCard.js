import React from 'react';
import { MdVerified } from 'react-icons/md';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const AdvertizeCard = ({ productItem }) => {
    //distructure product items
    const { condition, description, img, location, marketPrice, name, postTime, selersName, selingPrice, useTime, ramRoom, isVerified, categoryId } = productItem;
    if (productItem?.paid) {
        return;
    }


    return (
        <div className="card glass">
            <PhotoProvider>
                <PhotoView src={img}>
                    <Link><img src={img} className='h-80 w-full rounded-lg' alt="" /></Link>
                </PhotoView>
            </PhotoProvider>
            <h2 className="card-title p-3">{name}</h2>
            <div className="card-body pt-2">
                <p className='pb-2 text-primary text-lg font-medium'>Price:- TK {<strong>{selingPrice}</strong>} </p>
                <p>{ramRoom}</p>
                <p className='pb-2 font-medium'>Market Price:- {marketPrice}  Taka</p>
                <p className='pb-2 font-medium'>Condition:- {<strong>{condition}</strong>} </p>
                <p className='pb-2 font-medium'>Used time:- {useTime}</p>
                <p className='pb-2 font-medium'>Location:- {location} </p>
                <p className='pb-2 font-medium'>Post time:- {postTime === '' ? "Default" : postTime}</p>
                <p> {description}</p>
                <div className="card-actions justify-between mt-5">
                    <p className='text-lg'>Seller: <span className='font-bold'>{selersName}{isVerified && <MdVerified className='text-primary inline-block align-text-top' />}</span></p>

                    <Link to={`/category/${categoryId}`}><button className="btn mt-3 w-full btn-primary flex items-center text-white">See more</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AdvertizeCard;