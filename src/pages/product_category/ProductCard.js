import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import { MdVerified } from 'react-icons/md';
import { GoReport } from 'react-icons/go';
import toast from 'react-hot-toast';


const ProductCard = ({ productItem, setProductData }) => {
    //distructure product items
    const { condition, description, img, location, marketPrice, name, postTime, selersName, selingPrice, useTime, ramRoom, isVerified } = productItem;
    if (productItem?.paid) {
        return;
    }

    //Bookin function
    // const handleBook = (id) => {
    //     console.log(id, 'Booked')
    // }
    const handleReport = (item) => {
        const reportItemData = {
            itemId: item._id,
            img: item.img,
            selersName: item.selersName
        }
        fetch(`${process.env.REACT_APP_URL}/reportitem`, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(reportItemData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`Item report`)
                }
            })
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
                    <button onClick={() => handleReport(productItem)} className="btn btn-primary border-none bg-orange-400 hover:bg-orange-600 btn-sm text-white"><GoReport className='mr-2 text-lg' /> Report item</button>
                    <label onClick={() => setProductData(productItem)} htmlFor="buynow-modal" className="btn mt-3  w-full btn-primary flex items-center text-white">Booked now</label>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;