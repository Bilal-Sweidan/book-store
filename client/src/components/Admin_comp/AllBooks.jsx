// icons
import { IoColorFill, IoSearch } from "react-icons/io5";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// css font 
import '../../fonts.css'
// sass file
import './AllBooks.scss'
// 
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from 'axios'

export default function AllBooks() {
    const [books, setBooks] = useState([])
    const [authors, setAuthors] = useState([])
    const [isLoading, setLoading] = useState(false)
    let [pageNumber, setPageNumber] = useState(0)
    useEffect(() => {
        async function getBooks() {
            setLoading(true)
            try {
                const { data } = await axios.get('http://localhost:3000/api/books')
                setBooks(data.books)
                setAuthors(data.authors)
                console.log(data)
            } catch (err) {
                console.log(err)
            }
            setLoading(false)
        }
        getBooks()
    }, [])


    return (
        <>
            <header className="w-100 d-flex align-items-center justify-content-between">
                <div className="">
                    <h3 className="text-capitalize" style={{ fontFamily: "BebasNeue" }}>our Books</h3>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <div className="text-capitalize " style={{ fontFamily: "SUSE" }}>
                        <span className="mx-2 text-success fw-bold">
                            {books?.length}
                        </span>
                        Books
                    </div>
                    <label htmlFor="search" className="form-control d-flex align-items-center p-0">
                        <IoSearch size={"20px"} className="mx-2" />
                        <input type="search" name="" id="search" className="form-control border-0" placeholder="Search......." />
                    </label>
                    <Link to={'/add-book'} className="btn btn-primary col-lg-4 text-capitalize d-flex align-items-center justify-content-center gap-2"><MdOutlinePersonAddAlt size={"22px"} />add book</Link>
                </div>
            </header>
            <section className="book-table-div py-2">
                {
                    // isLoading ? <h3>loading......</h3> :
                    <>
                        <header className="text-bg-dark">
                            <ul className="d-flex text-capitalize px-0 m-0" style={{ listStyle: "none" }}>
                                <li className=" px-4 py-2 selected">all</li>
                                <li className=" px-4 py-2">most sales</li>
                                <li className=" px-4 py-2">greater rate</li>
                            </ul>
                        </header>
                        <section className="table-body vh-100 overflow-auto">
                            <header>
                                <ul className="d-flex text-capitalize p-0 py-2 m-0" style={{ listStyle: "none" }}>
                                    <li className="check-box text-center px-3"><input type="checkbox" name="" className="form-check-input" id="" /></li>
                                    <li className="">name</li>
                                    <li className="">author</li>
                                    <li className="">category</li>
                                    <li className="">date</li>
                                    <li className="">language</li>
                                    <li className="">file type</li>
                                    <li className="">price</li>
                                    {/* <li className="">rate</li> */}
                                </ul>
                            </header>
                            <section className="text-bg-dark h-50 position-relative">
                                {
                                    books.map((book, index) => {
                                        return (
                                            <ul className="d-flex m-0 text-capitalize p-0 py-2" style={{ listStyle: "none", backgroundColor: index % 2 != 0 ? "#333" : null }}>
                                                <li className="check-box text-center px-3"><input type="checkbox" name="" className="form-check-input" id="" /></li>
                                                <li className="text-nowrap">{book?.name}</li>
                                                <li className="text-nowrap">
                                                    {
                                                        authors?.map(author => {
                                                            return book?.author === author?._id ? author.english_name : null
                                                        })
                                                    }
                                                </li>
                                                <li className="text-nowrap">{book?.department}</li>
                                                <li className="text-nowrap">{book?.createdAt}</li>
                                                <li className="text-nowrap">{book?.language || "English"}</li>
                                                <li className="text-nowrap text-uppercase">{book?.file_type.split('/')[1]}</li>
                                                <li className="text-nowrap">{book?.price || (<p className="m-0 text-success">Free</p>)}</li>
                                            </ul>
                                        )
                                    })
                                }
                                <footer className="table-footer d-flex align-items-center justify-content-center position-absolute bottom-0 w-100 p-3">
                                    <div className="d-flex gap-3 text-capitalize">
                                        <div className="" style={{ cursor: "pointer", hover: { color: "red" } }} onClick={() => setPageNumber(pageNumber--)}><IoIosArrowBack size={"15px"} />prev</div>
                                        <div className="">{pageNumber}</div>
                                        <div style={{ cursor: "pointer", hover: { color: "red" } }} onClick={() => { setPageNumber(pageNumber++); console.log(pageNumber) }}>next<IoIosArrowForward size={"15px"} /></div>
                                    </div>
                                </footer>
                            </section>
                        </section>
                    </>
                }

            </section>
        </>
    )
}
// cover_image
// about
// language *
// file_size
// pages
// file_type *
// fame
// price *
// book_file
