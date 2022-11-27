import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['allbuyers'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_URL}/allbuyers`);
            const output = await res.json();
            return output
        }
    })
    const handleDelete = (buyer) => {
        const confirmModal = window.confirm(`Do you Want to Delete ${buyer.name} user?`)
        if (confirmModal) {
            fetch(`${process.env.REACT_APP_URL}/allbuyers/${buyer._id}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(dbData => {
                    if (dbData.acknowledged) {
                        toast.success("Delete Buyers")
                        refetch()
                    }
                })
        }
    }
    // console.log(query)
    return (
        <div className="overflow-x-auto w-full h-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>

                        </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        buyers.map((buyer, i) => <tr key={i}>
                            <th>{i + 1}</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={buyer?.img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{buyer?.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {buyer?.email}
                            </td>
                            <td>
                                <button onClick={() => handleDelete(buyer)} className='btn btn-primary bg-red-500 hover:bg-red-700 duration-300 border-none text-white btn-sm ml-2'>Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AllBuyers;