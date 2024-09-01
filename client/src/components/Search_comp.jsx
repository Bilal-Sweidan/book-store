import axios from 'axios'
import { useEffect, useState } from 'react'

// scss file
import './style/Search_comp.scss'
// components
import Books_card from './Books_card_comp'
import Loading_comp from './Loading_comp'
export default function Search_comp() {
    const [books, setBooks] = useState([])
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:3000/')
            .then(res => {
                setBooks(res.data)
            })
        setLoading(false)
    }, [])
    return (
        <>
            <main className='w-100 vh-100'>
                <div className='search-div w-100 bg-dark position-abolute'>

                </div>
                <div className='w-100 p-5'>
                    <form action="" className='d-flex w-100'>
                        <div className='w-50 m-auto d-flex align-items-center justify-content-center'>
                            <input type="search" className='form-control' placeholder='search....' />
                            <button type='submit' className='btn btn-primary'>search</button>
                        </div>
                    </form>
                </div>

                <div className='books-div d-flex justify-content-center gap-4 px-5 flex-wrap'>
                    {
                        books.map(book => (
                            <Books_card key={book._id} data={book} />
                        ))
                    }
                </div>
            </main>
        </>
    )
}
