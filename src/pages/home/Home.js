import React from 'react';
import ProductCategory from './ProductCategory';
import Slider from './Slider';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Slider />
            <Testimonial />
            <ProductCategory />
        </div>
    );
};

export default Home;