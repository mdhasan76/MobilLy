import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../shared/AuthProvider';
import Spiner from '../../../shared/Spiner';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const { data: myProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['allsellers'],
        queryFn: async () => {
            const res =
                await fetch(`${process.env.REACT_APP_URL}/dashboard/myproducts/${user?.email}`);
            const output = await res.json();
            return output
        }
    })

    const handleDelete = (id) => {
        fetch(`${process.env.REACT_APP_URL}/myproducts/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Delete sucessful");
                    refetch()
                }
            })
    }

    const handleAddvertize = (id) => {
        fetch(`${process.env.REACT_APP_URL}/advertize/${id}`, {
            method: "PUT"
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Advertize sucessful");
                    refetch()
                }
            })
    }
    if (isLoading) {
        return <Spiner />
    }
    return (
        <div>
            <div className="overflow-x-auto w-full h-full">
                {
                    myProducts.length === 0 ? <div className='text-center text-4xl mt-10'>
                        You Have No product
                    </div> :
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>

                                    </th>
                                    <th>Name</th>
                                    <th>price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myProducts?.map((seller, i) => <tr key={i}>
                                        <th>{i + 1}</th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={seller.img} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{seller.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Tk {seller.selingPrice}
                                        </td>
                                        <td>
                                            {
                                                seller.advertize ? <span className='text-green-500 font-medium'>advertized</span> :
                                                    <button onClick={() => handleAddvertize(seller._id)} className='btn btn-sm btn-primary text-white'>Advertize</button>
                                            }
                                            <button onClick={() => handleDelete(seller._id)} className='btn btn-primary bg-red-500 hover:bg-red-700 duration-300 border-none text-white btn-sm ml-2'>Delete</button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>

                        </table>
                }
            </div>
        </div>
    );
};

export default MyProducts;