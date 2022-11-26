import React, { useContext } from 'react';
import { AuthContext } from '../../shared/AuthProvider';
import { useForm } from 'react-hook-form';

const Modal = ({ productData, setProductData, refetch }) => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { name, selingPrice } = productData;

    const handleBook = (data) => {
        console.log(data)
        setProductData(null)
        refetch()
    }

    return (
        <div>
            <input type="checkbox" id="buynow-modal" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleSubmit(handleBook)} className="modal-box relative">
                    <label htmlFor="buynow-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>


                    <h3 className="text-lg font-bold mb-6">{name}</h3>

                    <input type="email" className='w-full border p-3 mb-5 rounded-lg bg-gray-300 font-semibold'
                        defaultValue={user.email}
                        {...register('email')}
                        disabled />


                    <input type="text" className='w-full border p-3 mb-5 rounded-lg' defaultValue={user?.displayName}
                        {...register('userName')}
                        readOnly />

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
                        required
                    />
                    {errors.userNumber && <p className='text-red-500 mb-2'>{errors.userNumber.message}</p>}

                    <input type="text" defaultValue={name} className='w-full border p-3 mb-5 rounded-lg'
                        {...register('productName')}
                        readOnly />

                    <input type="text" defaultValue={selingPrice} className='w-full border p-3 mb-5 rounded-lg'
                        {...register('price')}
                        readOnly />

                    <input type="text" placeholder='Dhaka' className='w-full border p-3 mb-5 rounded-lg'
                        {...register('meetLocation', { required: "Meet Location is required" })}
                    />
                    {errors.meetLocation && <p className='text-red-500'>{errors.meetLocation.message}</p>}

                    <button className='w-full btn-primary text-white  p-3 mb-5 rounded-lg'>
                        Book
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Modal;