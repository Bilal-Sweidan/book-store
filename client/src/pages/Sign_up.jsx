import book from '../assets/Book.png'
import './style/Login.scss'

import { Link,Navigate, useNavigate  } from 'react-router-dom';
// icons
import { IoLogInOutline  } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import axios from 'axios'
import { useState } from 'react';

export default function Sign_up() {
    const navigate = useNavigate();
    function fetch_data(e){
        const data = e.target
        const formData = new FormData(data)
        const jsonForm = Object.fromEntries(formData.entries()) 
        axios.post('http://localhost:3000/sign-up',jsonForm)
        .then(res => {
            console.log(res.data)
            navigate('/login')
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <>
            <section className="main-section d-flex">
                <div className="left-div col-6 vh-100 bg-primary d-flex align-items-center justify-content-center">
                    <img src={book} alt="" className='w-75 h-75' />
                </div>
                <div className="right-div d-flex mt-4 justify-content-center col-6">
                    <div className='w-75 h-75 px-3'>
                        <h2 className='mb-3'>Sign up</h2>
                        <form action="" method='dialog' className='px-3' onSubmit={fetch_data}>
                            <div className='mb-3'>
                                <label htmlFor="" className='form-label text-capitalize fw-bold'>name</label><br />
                                <input type="text" name="name" id="" placeholder='Enter Your name' className='form-control py-2' />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="" className='form-label text-capitalize fw-bold'>phone number</label><br />
                                <input type="tel" name="number" id="" placeholder='+963.............' className='form-control py-2' />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="" className='form-label text-capitalize fw-bold'>email address</label><br />
                                <input type="text" name="email" id="" placeholder='Enter Your Email' className='form-control py-2' />
                            </div>
                            <div>
                                <label htmlFor="" className='form-label text-capitalize fw-bold'>set password</label><br />
                                <input type="password" name="password" id="" placeholder='Enter Password' aria-describedby='asd123KJLSFJA#$@%@#' className='form-control py-2' />
                            </div>

                            <button type='submit' className='btn btn-primary my-4 w-100'>Sign up <IoLogInOutline className='mx-2' size={'30px'}/></button>
                            <hr />
                            <button className='btn btn-dark w-100 p-2 text-capitalize fw-bold'>
                                <FcGoogle size={'30px'}/> Sign up with google
                            </button>
                        </form>

                        <p className='no-account text-center mt-5 '>
                            I already have an account ? <Link to='/login' className='text-capitalize'>Sign in</Link>  
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}