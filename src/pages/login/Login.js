import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import Header from '../../shared/Header';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../shared/AuthProvider';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { logInUser, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    //Log in User
    const handleLogIn = (event) => {
        event.preventDefault()
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        logInUser(email, password)
            .then(res => {
                toast.success("Log In sucessFul")
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError(err.message)
            })
    }


    //sign in with googel 
    const handleGoogle = () => {
        googleSignIn()
            .then(res => {
                toast.success("Log in Sucessfull")
            })
            .catch(err => {
                setError(err.message)
            })
    }
    return (
        <section>
            <Header />
            <div>
                <div className="hero min-h-[89vh] bg-gradient-to-bl from-indigo-500 via-purple-500 to-primary ">
                    <div className="hero-content">
                        <div className="w-full shadow-2xl bg-base-100 card-body ">
                            <form onSubmit={handleLogIn}>
                                <div className="form-control">
                                    <label className="label pb-0">
                                        <span className="label-text text-lg font-semibold"> Email</span>
                                    </label>
                                    <div>
                                        <AiOutlineMail className='inline-block text-lg font-medium' />
                                        <input type="email" name="email" placeholder="email" className="p-3 border-b-2 focus:outline-none focus:border-b-4 font-medium text-lg" />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label pb-0">
                                        <span className="label-text text-lg font-semibold">Password</span>
                                    </label>
                                    <div>
                                        <RiLockPasswordLine className='inline-block text-lg font-medium' />
                                        <input type="password" placeholder="Password" name='password' className="p-3 border-b-2 focus:outline-none focus:border-b-4 font-medium text-lg" />
                                    </div>
                                    <label className="labelt">
                                        <Link to="/" className="label-text-alt link link-hover block text-right  font-medium text-[16px] pt-2 opacity-80">Forgot password?</Link>
                                    </label>
                                </div>
                                <p className='text-sm text-red-500 py-2'>{error}</p>
                                <div className="form-control">
                                    <button className="btn text-white border-none rounded-full bg-gradient-to-bl from-indigo-500 to-primary">Login</button>
                                </div>
                            </form>
                            <div className="divider">OR</div>
                            <div className='text-center'>
                                <button className='bg-slate-300 p-3 rounded-full' onClick={handleGoogle}><FcGoogle className=' text-3xl w-full' /></button>
                            </div>

                            <p className='block text-center text-sm label opacity-80'>new to MobileLy?
                                <Link to='/register' className='label-text-alt link link-hover text-lg font-medium inline text-left'> register now</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;