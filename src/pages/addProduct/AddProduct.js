import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../shared/AuthProvider';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { user } = useContext(AuthContext)

    //handle data
    const handleAddProduct = (data) => {
        // const date = new Date();
        // console.log(date)
        // date.slice(0, 20);
        // data.postTime = date;
        // console.log(data)
    }
    // condition, description, img, location, marketPrice, name, postTime, selersName, selingPrice, useTime, ramRoom, isVerified, _id
    return (
        <div>
            <form onSubmit={handleSubmit(handleAddProduct)} className="bg-white max-w-3xl mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-first-name">
                            product Name
                        </label>
                        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Vivo y81"
                            {...register('name')}
                            required />
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Price
                        </label>
                        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="number" placeholder="$12500"
                            {...register('selingPrice')}
                            required />
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Market Price
                        </label>
                        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="number" placeholder="$20000"
                            {...register('marketPrice')}
                            required />
                    </div>
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Your Phone Number
                        </label>
                        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="number" placeholder="0171111222"
                            {...register('phoneNumber', {
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
                            required />
                        {errors.phoneNumber && <p className='text-red-500'>{errors.phoneNumber.message}</p>}
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-full px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-password">
                            Description
                        </label>
                        <textarea className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" placeholder="wright something about your porduct"
                            {...register('description')}
                            required></textarea>
                        <p className="text-grey-dark text-sm mb-3 opacity-80 font-bold italic">Your product description write up</p>
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-2">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-city">
                            Location
                        </label>
                        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="Brahmanbaria"
                            {...register('location')}
                            required />
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-state">
                            Condition type
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state"
                                {...register('condition')}
                            >
                                <option value='Excilent'>Excilent</option>
                                <option value="Good">Good</option>
                                <option value="Fair">Fair</option>
                            </select>
                            <div className="pointer-events-none absolute top-1/3 right-0 flex items-center px-2 text-grey-darker">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-state">
                            Product Category
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state"
                                {...register('categoryId')}
                            >
                                <option value='1'>VIVO</option>
                                <option value='2'>SAMSUNG</option>
                                <option value='3'>Realme</option>
                            </select>
                            <div className="pointer-events-none absolute top-1/3 right-0 flex items-center px-2 text-grey-darker">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-zip">
                            Use Time
                        </label>
                        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-zip" type="text" placeholder="5 month"
                            {...register('useTime')}
                            required />
                    </div>

                </div>
                <div>
                    <button className='btn btn-primary w-full mt-5 text-white'>Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;