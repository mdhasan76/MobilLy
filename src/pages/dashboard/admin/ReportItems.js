import React from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const ReportItems = () => {
    const { data: reportItems = [], refetch } = useQuery({
        queryKey: ['allsellers'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_URL}/reportitems`);
            const output = await res.json();
            return output
        }
    })

    // delete report data 
    const handleDelete = (id) => {
        const confirmModal = window.confirm(`Do you Want to Delete This Item?`)
        if (confirmModal) {
            fetch(`${process.env.REACT_APP_URL}/deleteReportItem/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(dbData => {
                    if (dbData.acknowledged) {
                        toast.success("Deleted Sucessful")
                        refetch()
                    }
                })
        }
    }
    return (
        <div className="overflow-x-auto w-full h-full">
            {
                reportItems.length === 0 ? <div className='text-center text-4xl mt-10'>
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
                                reportItems.map((item, i) => <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.selersName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(item.itemId)} className='btn btn-primary bg-red-500 hover:bg-red-700 duration-300 border-none text-white btn-sm ml-2'>Delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>

                    </table>
            }
        </div>
    );
};

export default ReportItems;