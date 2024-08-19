// library
import axios from 'axios'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
// icons
import { BsSendArrowUp } from "react-icons/bs";
import { TbPencilPlus } from "react-icons/tb";
import { GiBookshelf } from "react-icons/gi";
export default function AddBook_comp() {
    const [loading, setLoading] = useState(false)
    function fetchData(e) {
        setLoading(true);
        const data = e.target
        const formData = new FormData(data)
        const jsonData = Object.fromEntries(formData.entries())
        console.log(formData)
        axios.post('http://localhost:3000/A/add-book', formData)
            .then(res => {
                console.log(res.data)
                if (res.data) {
                    data.reset()
                } else {
                    console.log('there is a problem !!!')
                }
            })
        setLoading(false);
    }


    const [authors, setAuthors] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/A/add-book')
            .then(res => {
                setAuthors(res.data)
            })
    }, [])
    console.log(authors)
    console.log(1)

    return (
        <>
            <h2 className="text-capitalize d-flex align-items-end"><GiBookshelf size={"50px"} color='#03346E' /> add new book</h2>
            <form action="" method='dialog' className="add-book d-flex text-capitalize w-100 gap-4" onSubmit={fetchData}>
                <div className='w-50'>
                    <label htmlFor="" className="mb-1">book name</label>
                    <input type="text" className="form-control mb-3" name='name' placeholder="book name" />

                    <label htmlFor="" className="mb-1">Language of book</label>
                    <select name="language" id="" className="form-select mb-3">
                        <option value="Arabic">Arabic</option>
                        <option value="English">English</option>
                        <option value="Russian">Russian</option>
                        <option value="chines">chines</option>
                    </select>

                    <label htmlFor="" className="mb-1">departments</label>
                    <select name="department" id="" className="form-select mb-3">
                        <option value="history">history</option>
                        <option value="technology">technology</option>
                        <option value="computer">computer</option>
                        <option value="islamic">islamic</option>
                    </select>

                    <label htmlFor="" className="mb-1">book pages number</label>
                    <input type="number" name="pages_number" id="" className="form-control mb-3" />

                    <label htmlFor="" className="mb-1">author name</label>
                    <nav className='d-flex gap-3'>
                        <select name="author" id="" className="form-select mb-3">
                            {
                                authors.map(author => (
                                    <option key={author._id} value={author._id}>{author.arabic_name} {author.english_name}</option>
                                ))
                            }
                        </select>

                        <Link to="/A/add-author" className='btn btn-primary w-25 h-100'><TbPencilPlus size={"20px"} /></Link>
                    </nav>

                    <label htmlFor="" className="mb-1">book price</label>
                    <input type="number" name="price" id="" className="form-control mb-3" placeholder={0} />


                    <button type="submit" className="btn btn-success text-capitalize" disabled={loading}><BsSendArrowUp size={"20px"} className="mx-2" />send data</button>
                </div>
                <div className='w-50'>
                    <label htmlFor="" className="mb-1">book cover </label>
                    <input type="file" name="cover" id="" className="form-control mb-3" />

                    <label htmlFor="" className="mb-1">book file</label>
                    <input type="file" name="book" id="" className="form-control mb-3" />

                    <label htmlFor="" className="mb-1">about book </label>
                    <textarea name="description" id="" className="form-control mb-3" placeholder='write at least 200 words about this book' rows={4}></textarea>
                </div>
            </form>
        </>
    )
}

