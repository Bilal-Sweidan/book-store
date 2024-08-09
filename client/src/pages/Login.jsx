import book from '../assets/Book.png'
import './style/Login.scss'

import { Link, useNavigate  } from 'react-router-dom';
// icons
import { IoLogInOutline  } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import axios from 'axios'
export default function Login() {
    const navigate = useNavigate()
    function fetch_data(e){
        const data = e.target
        const formData = new FormData(data)
        const jsonForm = Object.fromEntries(formData.entries()) 
        axios.post('http://localhost:3000/login',jsonForm)
        .then(res => {
            console.log(res.data)
            if(res.data.role == "Admin"){
                navigate('/A')
            }else if(res.data.role == 'Publisher'){
                navigate('/P')
            }else{
                navigate('/U')
            }
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
                <div className="right-div d-flex align-items-center justify-content-center col-6">
                    <div className='w-75 h-75 px-3'>
                        <h2 className='mb-5'>Sign in</h2>
                        <form action="" method='dialog' className='px-3' onSubmit={fetch_data}>
                            <div className='mb-3'>
                                <label htmlFor="" className='form-label text-capitalize fw-bold'>email address</label><br />
                                <input type="text" name="email" id="" placeholder='Enter Your Email' className='form-control py-2' />
                            </div>
                            <div>
                                <label htmlFor="" className='form-label text-capitalize fw-bold'>password</label><br />
                                <input type="password" name="password" id="" placeholder='Enter Password' aria-describedby='asd123KJLSFJA#$@%@#' className='form-control py-2' />
                            </div>

                            <button type='submit' className='btn btn-primary my-4 w-100'>Log in <IoLogInOutline className='mx-2' size={'30px'}/></button>
                            <hr />
                            <button className='btn btn-dark w-100 p-2 text-capitalize fw-bold'>
                                <FcGoogle size={'30px'}/> log in with google
                            </button>
                        </form>

                        <p className='no-account text-center mt-5 '>
                            I do not have an account yet ? <Link to='/sign-up' className='text-capitalize'>Sign Up</Link>  
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}