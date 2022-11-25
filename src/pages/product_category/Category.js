import React from 'react';
import { useLoaderData } from 'react-router-dom'
import ProductCard from './ProductCard';
const Category = () => {
    const data = useLoaderData();
    console.log(data[0])
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mb-10'>
            {
                data.map(product => <ProductCard
                    key={product._id}
                    productItem={product}
                />)
            }
        </div>
    );
};

export default Category;