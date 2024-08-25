import axios from 'axios'
import UserContext from '../Context/Contexts'
import { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Loading_comp from './Loading_comp'

export default function Book_comp() {
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    const [book, setBook] = useState()
    const { Book_name } = useParams()

    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        console.log(Book_name)
        if (!user) {
            navigate('/Login')
        }
        setLoading(true)
        axios.get(`http://localhost:3000/${Book_name}`)
            .then((res) => {
                if (res.data) {
                    setBook(res.data)
                    console.log(res.data)
                }
                setTimeout(() => {
                    setLoading(false)
                }, 1000);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
            {
                isLoading ? <Loading_comp /> :
                    <main className='d-flex p-5 '>
                        <div className='m-auto d-flex gap-5'>
                            <img src={new URL(`../assets/Books images/${book?.cover_image}`, import.meta.url).href} className='w-25' alt="" />
                            <div>
                                <ul className='text-capitalize'>
                                    <li>
                                        <strong>book name : </strong>{book?.name}
                                    </li>
                                    <li>
                                        <strong>department : </strong>{book?.department.map(dep => (
                                            dep
                                        ))}
                                    </li>
                                    <li>
                                        <strong>the Author : </strong>{book?.author}
                                    </li>
                                    <li>
                                        <strong>file size : </strong>{`${book?.file_size / 1024 * 1024}`.split('.')[0]} MB
                                    </li>
                                    <li className=''>
                                        <strong>file type : </strong>{book?.file_type.split('/')[1]}
                                    </li>
                                    <li>
                                        <strong>pages : </strong>{book?.pages}
                                    </li>
                                    <li>
                                        <strong>price : </strong>{book?.price} <span className='text-primary'>$</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </main>
            }
        </>
    )
}
