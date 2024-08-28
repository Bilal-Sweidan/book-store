import './style/Books_card_comp.scss'
import { Link } from 'react-router-dom'
// axios 
import axios from 'axios'
// images

// icons 
import { IoStar } from "react-icons/io5";
import { useContext, useEffect, useState } from 'react';
import UserContext from '../Context/Contexts';


export default function Books_card_comp({ data }) {
    const [author, setAuthor] = useState([])
    useEffect(() => {
        axios.post('http://localhost:3000/getAuthor_name', { author_id: data.author })
            .then(res => {
                setAuthor(res.data)
            })
    }, [])
    const { user } = useContext(UserContext)
    return (
        <Link to={`/${data.name}`} className='cards d-flex p-1 text-center'>
            <div className='w-50 h-100 p-3'>
                <img src={new URL(`../assets/Books images/${data.cover_image}`, import.meta.url).href} alt="" className='h-100' />
            </div>
            <div className='h-100 w-75 p-2 text-dark text-capitalize'>
                <ul>
                    <li><h4>{data.name}</h4></li>
                    <li className=''>{author.english_name}</li>
                    <li>{data.department}</li>
                    <li className='py-1'><IoStar color='orange' className='mx-1' size={"20px"} /><IoStar color='orange' className='mx-1' size={"20px"} /><IoStar color='orange' className='mx-1' size={"20px"} /><IoStar color='orange' className='mx-1' size={"20px"} /><IoStar color='orange' className='mx-1' size={"20px"} /></li>
                </ul>
                <div className='book-info d-flex justify-content-around text-capitalize text-center'>
                    <div>
                        <p className='title fw-bold'>pages</p>
                        <p>{data.pages}</p>
                    </div>
                    <div>
                        <p className='title fw-bold'>Donwloads</p>
                        <p>2 B</p>
                    </div>
                    <div>
                        <p className='title fw-bold'>reviews</p>
                        <p>224 M</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}