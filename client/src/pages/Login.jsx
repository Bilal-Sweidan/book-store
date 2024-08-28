import book from '../assets/Book.png'

import './style/Login.scss'

import axios from 'axios'
import { useContext, useEffect, useState } from 'react';
import UserContext from '../Context/Contexts';
import { Link, useNavigate,Navigate, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie'
// icons
import { IoLogInOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
    const navigate = useNavigate()

    const {user,fetch_data,isPending} = useContext(UserContext)
    // useEffect(() => {
    //     if(user?.role === "User"){
    //         navigate('/')
    //     }else if(user?.role === 'Admin'){
    //         navigate('/A')
    //     }
    // })
    const location = useLocation()
    if(user){
        return <Navigate to="/" state={{from: location}} replace />
    }

    return (
        <>
            {
                // isLoading ? <h1 className='text-center'>loading........</h1> :
                    <section className="main-section d-flex">
                        <div className="left-div col-6 vh-100 bg-primary d-flex align-items-center justify-content-center">
                            <img src={book} alt="" className='w-75 h-75' />
                        </div>
                        <div className="right-div d-flex align-items-center justify-content-center col-6">
                            <div className='w-75 h-75 px-3'>
                                <h2 className='mb-5'>Sign in</h2>
                                <form action="" method='dialog' className='px-3' onSubmit={ async (e) => {
                                    fetch_data(e)
                                    if(user){
                                        navigate('/')
                                    }
                                }}>
                                    <div className='mb-3'>
                                        <label htmlFor="" className='form-label text-capitalize fw-bold'>email address</label><br />
                                        <input type="text" name="email" id="" placeholder='Enter Your Email' className='form-control py-2' />
                                    </div>
                                    <div>
                                        <label htmlFor="" className='form-label text-capitalize fw-bold'>password</label><br />
                                        <input type="password" name="password" id="" placeholder='Enter Password' aria-describedby='asd123KJLSFJA#$@%@#' className='form-control py-2' />
                                    </div>

                                    <button type='submit' className='btn btn-primary my-4 w-100' disabled={isPending}>Log in <IoLogInOutline className='mx-2' size={'30px'} /></button>
                                    <hr />
                                    <button className='btn btn-dark w-100 p-2 text-capitalize fw-bold' >
                                        <FcGoogle size={'30px'} /> log in with google
                                    </button>
                                </form>

                                <p className='no-account text-center mt-5 '>
                                    I do not have an account yet ? <Link to='/sign-up' className='text-capitalize'>Sign Up</Link>
                                </p>
                            </div>
                        </div>
                    </section>
            }
        </>
    )
}