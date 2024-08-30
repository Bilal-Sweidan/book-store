import axios from 'axios'
import UserContext from '../Context/Contexts'
import { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
// components
import Loading_comp from './Loading_comp'
// sass file
import './style/Book_comp.scss'
// icons
import {
    MdDownload,
    MdOutlineInsertComment,
    MdOutlineShoppingCartCheckout,
    MdOutlineStar,
    MdShare
} from "react-icons/md";



export default function Book_comp() {
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    const { Book_name } = useParams()

    const [isLoading, setLoading] = useState(false)

    const [book, setBook] = useState()
    const [author, setAuthor] = useState()
    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:3000/books/${Book_name}`)
            .then((res) => {
                if (res.data) {
                    setBook(res.data.book)
                    setAuthor(res.data.author)
                    console.log(res.data)
                }
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
            {
                // isLoading ? <Loading_comp /> :
                <main className='d-flex px-5'>
                    <div className='book-info-div  d-flex justify-content-center flex-wrap gap-5 p-4'>
                        <img src={new URL(`../assets/Books images/${book?.cover_image}`, import.meta.url).href} className='' alt="" />
                        <div className='w-50 rounded'>
                            <ul className='text-capitalize py-4'>
                                <li className='text-muted'>
                                    <strong>book name : </strong>{book?.name}
                                </li>
                                <li className='text-muted'>
                                    <strong>department : </strong>{book?.department.map(dep => (
                                        dep
                                    ))}
                                </li>
                                <li className='text-muted'>
                                    <strong>the Author : </strong>
                                    <Link to={`/authors/${author?.english_name}`}>{author?.english_name}</Link>
                                </li>
                                <li className='text-muted'>
                                    <strong>file size : </strong>{`${book?.file_size / 1024 * 1024}`.split('.')[0]} MB
                                </li>
                                <li className='d-flex text-muted'>
                                    <strong>extention : </strong>
                                    <p className='text-uppercase mx-2 fw-bold'>{book?.file_type.split('/')[1]}</p>
                                </li>
                                <li className='d-flex text-muted'>
                                    <strong>language : </strong>
                                    <p className='text-uppercase mx-2 fw-bold'>{"English"}</p>
                                </li>
                                <li className='text-muted'>
                                    <strong>pages : </strong>{book?.pages}
                                </li>
                                <li className='text-muted'>
                                    <strong>price : </strong>
                                    {
                                        book?.price != 0 ?
                                            <span className='text-primary'>
                                                {book?.price} $
                                            </span>
                                            :
                                            <span className='text-danger h5'>Free</span>
                                    }
                                </li>
                            </ul>
                            <footer className='position-absolute w-100'>
                                <button className='btn btn-light border-primary'><MdShare size={"25px"} className='mx-2' />share</button>
                                <button className='btn btn-light border-primary'><MdOutlineStar size={"25px"} className='mx-2' />rate</button>
                                <button className='btn btn-light border-primary'><MdOutlineInsertComment size={"25px"} className='mx-2' />review</button>
                                {
                                    book?.price != 0 ?
                                        !user ?
                                            <Link to="/Login" className='download-btn btn btn-light border border-primary'><MdOutlineShoppingCartCheckout size={"25px"} className='mx-2' /> buy</Link>
                                            :
                                            <a href={`../../public/Books/${book?.book_file}`} download={true} className='download-btn btn btn-light border border-primary'><MdOutlineShoppingCartCheckout size={"25px"} className='mx-2' /> buy</a>
                                        :
                                        !user ?
                                            <Link to="/Login" className='download-btn btn btn-light border-primary'><MdDownload size={"25px"} className='mx-2' />Download</Link>
                                            :
                                            <a href={`../../public/Books/${book?.book_file}`} download={true} className='download-btn btn btn-light border border-primary'><MdDownload size={"25px"} className='mx-2' />download</a>
                                }
                            </footer>
                        </div>
                        <div className='about-author d-flex rounded gap-5 p-4'>
                            <img src={`../../public/Authors/${author?.photo}`} alt="" className='rounded-circle' />
                            <div className='my-3 rounded p-3 text-wrap'>
                                <h2 className='text-capitalize'>{author?.english_name}</h2>
                                <p>
                                    {
                                        author?.about
                                    }
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, expedita neque. Reprehenderit necessitatibus dicta, qui quis vel obcaecati aperiam voluptas mollitia autem rerum repudiandae facilis, nisi odit alias accusamus. Et!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti quo unde tempora, quaerat esse facilis odit voluptatibus impedit tenetur ad illo excepturi aspernatur totam fugiat nobis. Sequi, ea perferendis.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti quo unde tempora, quaerat esse facilis odit voluptatibus impedit tenetur ad illo excepturi aspernatur totam fugiat nobis. Sequi, ea perferendis.
                                </p>
                            </div>
                        </div>
                        <div className='about-author d-flex rounded gap-5 p-4'>
                            <div className='my-3 rounded p-3 text-wrap'>
                                <h2 className='text-capitalize'>book description</h2>
                                <p className=''>
                                    {
                                        book?.about
                                    }
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, expedita neque. Reprehenderit necessitatibus dicta, qui quis vel obcaecati aperiam voluptas mollitia autem rerum repudiandae facilis, nisi odit alias accusamus. Et!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti quo unde tempora, quaerat esse facilis odit voluptatibus impedit tenetur ad illo excepturi aspernatur totam fugiat nobis. Sequi, ea perferendis.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti quo unde tempora, quaerat esse facilis odit voluptatibus impedit tenetur ad illo excepturi aspernatur totam fugiat nobis. Sequi, ea perferendis.
                                </p>

                            </div>
                            {/* <img src={`../../public/Authors/${book?.photo}`} alt="" className='rounded-circle' /> */}
                            <img src={new URL(`../assets/Books images/${book?.cover_image}`, import.meta.url).href} className='my-3' alt="" />
                        </div>
                    </div>
                </main>
            }
        </>
    )
}
