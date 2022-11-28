import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../shared/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { data: myOrders = [] } = useQuery({
        queryKey: ['/myorders', user?.email],
        queryFn: async () => {
            try {
                const res = await
                    fetch(`${process.env.REACT_APP_URL}/myorders?email=${user?.email}`, {
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    });
                const output = await res.json();
                return output
            }
            catch (err) {
                console.log(err)
            }
        }
    })
    return (
        <div className="overflow-x-auto w-full h-full">
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
                        myOrders.map((order, i) => <tr key={i}>
                            <th>{i + 1}</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={order.productImg} alt="Product img" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{order.productName}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {order.price} Tk
                            </td>
                            <td>
                                {order?.paid ? <p className='text-primary'>paid</p>
                                    :
                                    <Link to={`/dashboard/pay/${order._id}`}><button className='btn btn-sm btn-primary text-white'>Pay</button></Link>
                                }
                            </td>
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyOrders;