import React from 'react';
import Advertise from './Advertise';
import ProductCategory from './ProductCategory';
import Slider from './Slider';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Slider />
            <Testimonial />
            <ProductCategory />
            <Advertise />
        </div>
    );
};

export default Home;