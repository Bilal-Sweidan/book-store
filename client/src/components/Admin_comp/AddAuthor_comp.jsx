// library
import axios from 'axios'
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
// icons
import { BsSendArrowUp } from "react-icons/bs";
import { RiQuillPenLine } from "react-icons/ri";
import UserContext from '../../Context/Contexts';
import Nopage from '../NoPage';

export default function AddAuthor_comp() {
    const [loading, setLoading] = useState(false)
    function fetchData(e) {
        const data = e.target
        const formData = new FormData(data)
        const jsonData = Object.fromEntries(formData.entries())
        console.log(formData)
        setLoading(true);
        axios.post('http://localhost:3000/A/add-author', formData)
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
    const { user } = useContext(UserContext)
    console.log(user)

    return (
        <>
            {
                user?.role === 'Admin' ?
                <>
                    <h2 className="text-capitalize d-flex align-items-center"><RiQuillPenLine size={"50px"} color='#03346E' /> add new author</h2>
                    <form action="" method='dialog' className="add-book d-flex text-capitalize w-100 gap-4" onSubmit={fetchData}>
                        <div className='w-50'>
                            <label htmlFor="" className="mb-1">arabic author name</label>
                            <input type="text" className="form-control mb-3" name='arabic_name' placeholder="author name" />

                            <label htmlFor="" className="mb-1">english author name</label>
                            <input type="text" className="form-control mb-3" name='english_name' placeholder="author name" />

                            <label htmlFor="" className="mb-1">author photo</label>
                            <input type="file" name="author_photo" id="" className="form-control mb-3" />

                            <label htmlFor="" className="mb-1">about the author </label>
                            <textarea name="about" id="" className="form-control mb-3" placeholder='write at least 200 words about this author' rows={4}></textarea>

                            <button type="submit" className="btn btn-success text-capitalize" disabled={loading}><BsSendArrowUp size={"20px"} className="mx-2" />send data</button>
                        </div>
                    </form>
                </>
                :
                <Nopage/>
            }
        </>
    )
}

