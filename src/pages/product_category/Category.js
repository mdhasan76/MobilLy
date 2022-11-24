import React from 'react';
import { useLoaderData } from 'react-router-dom'
const Category = () => {
    const data = useLoaderData()
    return (
        <div>
            product id {data.length}
        </div>
    );
};

export default Category;