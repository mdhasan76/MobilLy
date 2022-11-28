import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spiner from '../../shared/Spiner'
import AdvertizeCard from './AdvertizeCard';

const Advertise = () => {
    ;
    const { data: advertizeItems = [], isLoading } = useQuery({
        queryKey: ['advertizeitems'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_URL}/advertizeitems`);
            const output = await res.json();
            return output;
        }
    })
    console.log(advertizeItems);

    if (isLoading) {
        return <Spiner />
    }
    return (
        <div >
            {advertizeItems.length > 0 &&
                <div>
                    <h1 className='text-3xl mb-10 text-center sm:text-6xl font-semibold pb-7'>Advertize Items</h1>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mb-10 p-3'>
                        {

                            advertizeItems.map(item => <AdvertizeCard productItem={item} key={item._id} />)
                        }
                    </div>
                </div>}
        </div>
    );
};

export default Advertise;