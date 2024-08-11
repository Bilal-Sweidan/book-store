// library
import axios from 'axios'
import { useState } from 'react';
import { Link } from 'react-router-dom'
// icons
import { BsSendArrowUp } from "react-icons/bs";
import { TbPencilPlus } from "react-icons/tb";
import {  GiBookmarklet } from "react-icons/gi";
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
            })
        setLoading(false);
    }

    return (
        <>
            <h2 className="text-capitalize"><GiBookmarklet size={"50px"} color='#03346E'/> add new book</h2>
            <form action="" method='dialog' className="add-book d-flex text-capitalize w-100" onSubmit={fetchData}>
                <div className='w-50'>
                    <label htmlFor="" className="mb-1">book name</label>
                    <input type="text" className="form-control mb-3" name='name' placeholder="book name" />

                    <label htmlFor="" className="mb-1">departments</label>
                    <select name="department" id="" className="form-select mb-3">
                        <option value="history">history</option>
                        <option value="technology">technology</option>
                        <option value="computer">computer</option>
                    </select>

                    <label htmlFor="" className="mb-1">book pages number</label>
                    <input type="number" name="pages_number" id="" className="form-control mb-3" />
                    
                    <label htmlFor="" className="mb-1">author name</label>
                    <nav className='d-flex gap-3'>
                        <select name="author" id="" className="form-select mb-3">
                            <option value="أحمد شوقي,ahmad shawky">أحمد شوقي,ahmad shawky</option>
                            <option value="سلمان العودة">سلمان العودة</option>
                            <option value="سعد العتي">سعد العتيق</option>
                        </select>

                        <Link to="/A/add-author" className='btn btn-primary w-25 h-100'><TbPencilPlus size={"20px"}/></Link>
                    </nav>

                    <label htmlFor="" className="mb-1">book price</label>
                    <input type="number" name="price" id="" className="form-control mb-3" placeholder={0} />

                    <label htmlFor="" className="mb-1">book cover </label>
                    <input type="file" name="cover" id="" className="form-control mb-3" />

                    <button type="submit" className="btn btn-success text-capitalize" disabled={loading}><BsSendArrowUp size={"20px"} className="mx-2" />send data</button>
                </div>
                <div className='w-50 px-4'>
                    <label htmlFor="" className="mb-1">about book </label>
                    <textarea name="description" id="" className="form-control mb-3" placeholder='write at least 200 words about this book' rows={4}></textarea>
                </div>
            </form>
        </>
    )
}

