import React from 'react';

const Spiner = () => {
    return (
        <div className="flex items-center justify-center ">
            <div className="w-24 h-24 my-10 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
        </div>
    );
};

export default Spiner;