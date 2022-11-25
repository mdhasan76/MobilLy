import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import { MdVerified } from 'react-icons/md'

const ProductCard = ({ productItem }) => {
    //distructure product items
    const { condition, description, img, location, marketPrice, name, postTime, selersName, selingPrice, useTime, ramRoom, isVerified, _id } = productItem;

    //Bookin function
    const handleBook = (id) => {
        console.log(id, 'Booked')
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
                    <button onClick={() => handleBook(_id)} className="btn btn-primary text-white">Book now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;