import './style/Main.scss'
import { Link, Navigate, useNavigate } from 'react-router-dom';
// images
import reader from '../assets/reader2.png'
import readerChild from '../assets/child reader.png'
import books from '../assets/best books.webp'
// icons 
import { GiBlackBook,GiBookmarklet } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { useState } from 'react';
// Components
import Books_card from './Books_card_comp';
export default function Main() {
    const navigate = useNavigate()
    const [searchWord,setSearchWord] = useState()
    return (
        <>
            <div className="main-div bg-light d-flex w-100 p-2">
                <div className="left-div col-6  d-flex align-items-center justify-content-center">
                    <div>
                        <h2>
                            <span className='text-primary'>Improve</span> your live with our books <GiBlackBook size={'50px'} color='#03346E' />
                        </h2>
                        <p>
                            the reading is the best way to become the persone <br /> who you looking for
                            <br />
                            do not wait start right now. <GiBookmarklet size={'50px'} color='#03346E'/>
                        </p>

                        <form action="" method='dialog'>
                            <label htmlFor="" className='d-flex mt-5'>
                                <input type="text" name="search" id="" placeholder='Seach.....' className='form-control border-3' onChange={(e) => setSearchWord(e.target.value)} />
                                <button type='submit' className='btn btn-primary px-4' onClick={() => navigate(`/search/${searchWord}`)}><IoSearch size={'30px'}/> </button>
                            </label>
                        </form>

                        <div className='w-100 d-flex align-items-center justify-content-center mt-5'>
                            <Link to="/search/" className='go-btn btn btn-primary px-5 fw-bold'>let's go</Link>
                        </div>
                    </div>
                </div>
                <div className="right-div d-flex align-items-center justify-content-center col-6">
                    <img src={reader} alt="" className='w-50' />
                    <img src={readerChild} alt="" className='child-img w-25 mt-5' />
                </div>
            </div>

            {/* about books */}
            <div className='about-books-div d-flex w-100 bg-dark vh-100'>
                <div className='col-6  d-flex align-items-center justify-content-center'>
                    <img src={books} alt="" className='w-100 vh-100'/>
                </div>
                <div className='text-center col-6 text-light p-5 d-flex align-items-center justify-content-center'>
                    <div>
                        <h1 className='text-capitalize'>
                            best books and the most pupular in the world
                        </h1>
                        <p className='w-75 m-auto'>
                            There are any success person in the world you can not find them reader so if you want
                            to go in from success door you must start reading.
                        </p>
                        <Link to='/search/' className='mt-4 px-4 btn btn-success text-capitalize'>find truth now <GiBookmarklet size={'25px'} color='#021526'/></Link>
                    </div>
                </div>
            </div>
            <div className='w-100 p-2 vh-100'>
                <h2 className='text-center mt-3 text-uppercase'>explore our books</h2>
                <div className='books'>
                    <Books_card/>
                </div>
            </div>
        </>
    )
}