import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import Header from '../../shared/Header';
import { BiUser } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { ImImage } from 'react-icons/im';
import { AiOutlineMail } from 'react-icons/ai';
import { AuthContext } from '../../shared/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createNewUser, updateUser } = useContext(AuthContext);
    const imgbbAPI = process.env.REACT_APP_imgbb;
    const navigate = useNavigate();
    const [dataLoading, setDataLoading] = useState(false)

    //Log in User
    const handlesingUp = (data) => {
        const img = data.img[0];
        setDataLoading(true)
        // upload img in imgbb 
        const formData = new FormData();
        formData.append('image', img)
        fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${imgbbAPI}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgdata => {
                const userImg = imgdata.data.url;

                //Create user
                createNewUser(data.email, data.password)
                    .then(res => {
                        //update userName and img
                        updateUser(data.name, userImg)
                            .then(() => {
                                toast.success("Create Your accoutn")
                                console.log(res.user);
                                setDataLoading(false)
                                navigate('/')
                            })
                            .catch(err => toast.error(err.message))
                    })
                    .catch(err => console.log(err))
            })
    }
    return (
        <section>
            <Header />
            <div>
                <div className="hero min-h-[89vh] bg-gradient-to-bl from-indigo-500 via-purple-500 to-primary ">
                    <div className="hero-content">
                        <div className="w-full shadow-2xl bg-base-100 card-body ">
                            <form onSubmit={handleSubmit(handlesingUp)}>
                                <div className="form-control">
                                    <label className="label pb-0">
                                        <span className="label-text text-lg font-semibold">Your Name</span>
                                    </label>
                                    <div>
                                        <BiUser className='inline-block text-lg font-medium' />
                                        <input type="text" placeholder="name" className="p-3 border-b-2 focus:outline-none focus:border-b-4 font-medium text-lg"
                                            {...register('name', { required: "name is require" })} />
                                        {
                                            errors.name && <p className='text-red-500'>{errors.name.message}</p>
                                        }
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label pb-0">
                                        <span className="label-text text-lg font-semibold">Your img</span>
                                    </label>
                                    <div>
                                        <ImImage className='inline-block text-lg font-medium' />
                                        <input type="file" placeholder="img" className="p-3 border-b-2 focus:outline-none focus:border-b-4 font-medium text-lg"
                                            {...register('img', { required: "img is require" })} />
                                        {
                                            errors.img && <p className='text-red-500'>{errors.img.message}</p>
                                        }
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label pb-0">
                                        <span className="label-text text-lg font-semibold"> Email</span>
                                    </label>
                                    <div>
                                        <AiOutlineMail className='inline-block text-lg font-medium' />
                                        <input type="email" placeholder="email" className="p-3 border-b-2 focus:outline-none focus:border-b-4 font-medium text-lg"
                                            {...register('email', { required: "email dite hobe vai" })} />
                                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label pb-0">
                                        <span className="label-text text-lg font-semibold">Password</span>
                                    </label>
                                    <div>
                                        <RiLockPasswordLine className='inline-block text-lg font-medium' />
                                        <input type="password" placeholder="Password" name='password' className="p-3 border-b-2 focus:outline-none focus:border-b-4 font-medium text-lg"
                                            {...register("password",
                                                {
                                                    required: "Password Required",
                                                    minLength: { value: 6, message: "Min 6 charecter pass use" },
                                                    pattern: {
                                                        value: /(?=.*[A-Z])/,
                                                        message: "Use 1 capital letter"
                                                    }
                                                })}
                                        />
                                        {errors?.password && <p className='text-red-500'>{errors?.password.message}</p>}
                                    </div>

                                    <p className='block text-right text-sm label opacity-80'>Have account?
                                        <Link to='/login' className='label-text-alt link link-hover font-medium inline'> login</Link> </p>
                                </div>
                                <div className="form-control mt-3">
                                    {dataLoading ? <button className="btn text-white border-none rounded-full bg-gradient-to-bl from-indigo-500 to-primary"> <svg className="animate-spin bg-white h-5 w-5 mr-3" viewBox="0 0 24 24"></svg> </button> : <button className="btn text-white border-none rounded-full bg-gradient-to-bl from-indigo-500 to-primary">Register </button>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;