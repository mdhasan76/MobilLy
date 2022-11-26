import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Modal from './Modal';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom'
import Spiner from '../../shared/Spiner';

const Category = () => {
    const [productData, setProductData] = useState(null);
    // const data = useLoaderData();

    const { id } = useParams()
    //load data using trantack query
    const query = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products/${id}`);
            const output = await res.json();
            return output;
        }
    })
    const { data = [], isLoading, refetch } = query;
    // console.log(data)
    if (isLoading) {
        return <Spiner />
    }
    // console.log(data[0])
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mb-10'>
            {
                data.map(product => <ProductCard
                    key={product._id}
                    productItem={product}
                    setProductData={setProductData}
                />)
            }
            {

                productData && <Modal
                    productData={productData}
                    setProductData={setProductData}
                    refetch={refetch}
                />
            }
        </div>
    );
};

export default Category;