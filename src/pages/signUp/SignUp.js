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
                const user = {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    img: userImg,
                    title: data.title

                }
                // console.log(user)
                //Create user
                createNewUser(data.email, data.password)
                    .then(res => {
                        //update userName and img
                        updateUser(data.name, userImg)
                            .then(() => {
                                //saveData on database
                                fetch(`${process.env.REACT_APP_URL}/users`, {
                                    method: "POST",
                                    headers: {
                                        'content-type': 'application/json',
                                        authorization: `bearer ${localStorage.getItem('token')}`
                                    },
                                    body: JSON.stringify(user)
                                })
                                    .then(res => res.json())
                                    .then(dbdata => {
                                        if (dbdata.acknowledged) {
                                            // console.log(data)
                                            console.log(dbdata)
                                            toast.success("Create Your account successfull")
                                            console.log(res.user);
                                            setDataLoading(false)
                                            navigate('/')
                                        }
                                    })
                            })
                            .catch(err => {
                                toast.error(err.message)
                                setDataLoading(false)
                            })
                    })
                    .catch(err => {
                        console.log(err)
                        setDataLoading(false)
                    })
            })
    }
    return (
        <section>
            <Header />
            <div className=' bg-gradient-to-bl from-indigo-500 via-purple-500 to-primary'>
                <div className="hero min-h-[89vh] ">
                    <div className="hero-content max-w-lg">
                        <div className="w-full shadow-2xl bg-white card-body ">
                            <form onSubmit={handleSubmit(handlesingUp)}>
                                <div className="form-control mb-3">
                                    <label className="label pb-0">
                                        <span className="label-text text-lg font-semibold"><BiUser className='inline-block text-lg font-medium mr-2' />Your Name</span>
                                    </label>
                                    <input type="text" placeholder="name" className="p-3 border-b-2 focus:outline-none focus:border-b-4 font-medium text-lg"
                                        {...register('name', { required: "name is require" })} />
                                    {
                                        errors.name && <p className='text-red-500'>{errors.name.message}</p>
                                    }
                                </div>
                                <div className="form-control mb-3">
                                    <label className="label pb-0">
                                        <span className="label-text text-lg font-semibold"><ImImage className='inline-block text-lg font-medium mr-2' />Your img</span>
                                    </label>

                                    <input type="file" placeholder="img" className="p-3 border-b-2 focus:outline-none focus:border-b-4"
                                        {...register('img', { required: "img is require" })} />
                                    {
                                        errors.img && <p className='text-red-500'>{errors.img.message}</p>
                                    }
                                </div>
                                <div className="form-control mb-3">
                                    <label className="label pb-0">
                                        <span className="label-text text-lg font-semibold">
                                            <AiOutlineMail className='inline-block text-lg font-medium mr-2' /> Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="p-3 border-b-2 focus:outline-none focus:border-b-4 font-medium text-lg"
                                        {...register('email', { required: "email dite hobe vai" })} />
                                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                                </div>
                                <div className="form-control mb-3">
                                    <label className="label pb-0">
                                        <span className="label-text text-lg font-semibold">
                                            <RiLockPasswordLine className='inline-block text-lg font-medium mr-2' />Password</span>
                                    </label>
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

                                    <p className='block text-right text-sm label opacity-80'>Have account?
                                        <Link to='/login' className='label-text-alt link link-hover font-medium inline'> login</Link> </p>
                                </div>
                                <div className='p-3'>
                                    <span>Want to: </span>
                                    <select {...register('title')} className='p-2 font-medium'>
                                        <option value="buyer">Buyer</option>
                                        <option value="seller">Seller</option>
                                    </select>
                                </div>
                                <div className="form-control mt-3">
                                    {dataLoading === true ? <button className="btn text-white border-none rounded-full bg-gradient-to-bl from-indigo-500 to-primary"> <svg className="animate-spin bg-white h-5 w-5 mr-3" viewBox="0 0 24 24"></svg> </button> : <button className="btn text-white border-none rounded-full bg-gradient-to-bl from-indigo-500 to-primary">Register </button>}
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