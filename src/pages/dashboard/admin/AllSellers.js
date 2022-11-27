import React from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['allsellers'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_URL}/allsellers`);
            const output = await res.json();
            return output
        }
    })

    //Delete User 
    const handleDelete = (seller) => {
        const confirmModal = window.confirm(`Do you Want to Delete ${seller.name} user?`)
        if (confirmModal) {
            fetch(`${process.env.REACT_APP_URL}/allsellers/${seller._id}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(dbData => {
                    if (dbData.acknowledged) {
                        toast.success("Delete Sellers Sucessful")
                        refetch()
                    }
                })
        }
    }

    //verify User
    const handleVerify = (id) => {
        fetch(`${process.env.REACT_APP_URL}/verifyseller/${id}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`verified sucessfull seller`)
                    refetch()
                }
            })
    }

    return (
        <div className="overflow-x-auto w-full h-full">
            {
                sellers.length === 0 ? <div className='text-center text-4xl mt-10'>
                    no Data Found
                </div> :
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
                                sellers.map((seller, i) => <tr key={i}>
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
                                        {seller.email}
                                    </td>
                                    <td>
                                        {
                                            seller.isVerified ? <span className='text-green-500 font-medium'>Verified</span> :
                                                <button onClick={() => handleVerify(seller._id)} className='btn btn-sm btn-primary text-white'>Verify</button>
                                        }
                                        <button onClick={() => handleDelete(seller)} className='btn btn-primary bg-red-500 hover:bg-red-700 duration-300 border-none text-white btn-sm ml-2'>Delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>

                    </table>
            }
        </div>
    );
};

export default AllSellers;