import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { useLoaderData } from 'react-router-dom'

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIP_KEY}`)
const Pay = () => {
    const data = useLoaderData();
    // console.log(data)
    return (
        <div className='max-w-lg mt-10'>
            <p className='text-3xl font-bold my-3'>Payment</p>
            <Elements stripe={stripePromise}>
                <CheckoutForm bookData={data} />
            </Elements>
        </div>
    );
};

export default Pay;