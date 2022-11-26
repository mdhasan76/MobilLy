import React, { useContext } from 'react';
import { AuthContext } from '../../shared/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast'

const Modal = ({ productData, setProductData, refetch }) => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { name, selingPrice, img } = productData;

    const handleBook = (data) => {
        // console.log(data)
        data.productImg = img;
        fetch(`${process.env.REACT_APP_URL}/booking`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(postData => {
                if (postData.acknowledged) {
                    toast.success("Booked Product Successful")
                    setProductData(null)
                    refetch()
                }
            })


    }

    return (
        <div>
            <input type="checkbox" id="buynow-modal" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleSubmit(handleBook)} className="modal-box relative">
                    <label onClick={() => setProductData(null)} htmlFor="buynow-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>


                    <h3 className="text-lg font-bold mb-6">{name}</h3>
                    <label className="block tracking-wide text-grey-darker font-bold mb-2" htmlFor="grid-first-name">
                        Email
                    </label>
                    <input type="email" className='w-full border p-3 mb-5 rounded-lg bg-gray-300 font-semibold'
                        defaultValue={user.email}
                        {...register('email')}
                        readOnly />

                    <label className="block tracking-wide text-grey-darker font-bold mb-2" htmlFor="grid-first-name">
                        Your Name
                    </label>
                    <input type="text" className='w-full border p-3 mb-5 rounded-lg' defaultValue={user?.displayName}
                        {...register('userName')}
                        readOnly />
                    <label className="block tracking-wide text-grey-darker font-bold mb-2" htmlFor="grid-first-name">
                        Your Number
                    </label>
                    <input type="Number" className='w-full border p-3 mb-5 rounded-lg' placeholder='Phone Number'
                        {...register('userNumber', {
                            maxLength: {
                                value: 11,
                                message: "Number must be 11 char"
                            },
                            minLength: {
                                value: 11,
                                message: 'number must be 11 char'
                            }

                        }
                        )}
                    />
                    {errors.userNumber && <p className='text-red-500 mb-2'>{errors.userNumber.message}</p>}
                    <label className="block tracking-wide text-grey-darker font-bold mb-2" htmlFor="grid-first-name">
                        Product Name
                    </label>
                    <input type="text" defaultValue={name} className='w-full border p-3 mb-5 rounded-lg'
                        {...register('productName')}
                        readOnly />
                    <label className="block tracking-wide text-grey-darker font-bold mb-2" htmlFor="grid-first-name">
                        Price
                    </label>
                    <input type="text" defaultValue={selingPrice} className='w-full border p-3 mb-5 rounded-lg'
                        {...register('price')}
                        readOnly />
                    <label className="block tracking-wide text-grey-darker font-bold mb-2" htmlFor="grid-first-name">
                        Where you meet?
                    </label>
                    <input type="text" placeholder='Dhaka' className='w-full border p-3 mb-5 rounded-lg'
                        {...register('meetLocation', { required: "Meet Location is required" })}
                    />
                    {errors.meetLocation && <p className='text-red-500'>{errors.meetLocation.message}</p>}

                    <button className='w-full btn-primary font-bold text-white  p-3 mb-5 rounded-lg'>
                        Book
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Modal;