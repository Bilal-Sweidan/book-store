// icons
import { IoSearch } from "react-icons/io5";
import { MdOutlinePersonAddAlt, MdOutlinePlaylistRemove } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
// css font 
import '../../fonts.css'
// sass file
import './AllBooks.scss'
import './SettingMenu.scss'
// 
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from 'axios'
// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SettingMenu({ deleteBook, data, setSettingMenu }) {

    return (
        <div className="setting-menu rounded text-bg-light position-absolute d-flex justify-content-between align-items-center" style={{ top: "75%", right: "5%" }}>
            <div className="d-flex">
                <button className="btn btn-light d-flex align-items-center justify-content-center gap-1 rounded" onClick={() => deleteBook(data._id)}><AiTwotoneDelete color="red" size={"25px"} />delete</button>
                <button className="btn btn-light d-flex align-items-center justify-content-center px-3 py-2 gap-1 rounded" onClick={() => get(data._id)}><AiTwotoneEdit color="green" size={"25px"} />edite</button>
            </div>
            <div className="text-bg-danger h-100 d-flex align-items-center px-1" onClick={() => setSettingMenu(false)}>
                <MdOutlinePlaylistRemove className="" size={"25px"} />
            </div>
        </div>
    )
}



export default function AllBooks() {
    const [authors, setAuthors] = useState([])
    const [isLoading, setLoading] = useState(false)
    let [pageNumber, setPageNumber] = useState(0)
    async function getAuthors() {
        setLoading(true)
        try {
            const { data } = await axios.get('http://localhost:3000/api/authors')
            setAuthors(data.authors)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
        setLoading(false)
    }
    useEffect(() => {
        getAuthors()
    }, [])

    const [settingMenu, setSettingMenu] = useState(false)
    const [checkAll, setCheckAll] = useState(false)
    const [data, setData] = useState()

    async function deleteBook(bookID) {
        try {
            const { data } = await axios.delete(`http://localhost:3000/A/delete-book/${bookID}`)
            if (data?.success) {
                console.log("deleted")
                toast("deleted successfuly !!!")
                setSettingMenu(false)
                getAuthors()
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <header className="w-100 d-flex align-items-center justify-content-between">
                <div className="">
                    <h3 className="text-capitalize" style={{ fontFamily: "BebasNeue" }}>authors</h3>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <div className="text-capitalize " style={{ fontFamily: "SUSE" }}>
                        <span className="mx-2 text-success fw-bold">
                            {authors?.length}
                        </span>
                        authors
                    </div>
                    <label htmlFor="search" className="form-control d-flex align-items-center p-0">
                        <IoSearch size={"20px"} className="mx-2" />
                        <input type="search" name="" id="search" className="form-control border-0" placeholder="Search......." />
                    </label>
                    <Link to={'/add-author'} className="btn btn-primary col-lg-4 text-capitalize d-flex align-items-center justify-content-center gap-2"><MdOutlinePersonAddAlt size={"22px"} />add author</Link>
                </div>
            </header>
            <section className="book-table-div py-2 ">
                <>
                    <header className="text-bg-dark">
                        <ul className="d-flex text-capitalize px-0 m-0" style={{ listStyle: "none" }}>
                            <li className=" px-4 py-2 selected">all</li>
                            {/* <li className=" px-4 py-2">most sales</li>
                            <li className=" px-4 py-2">greater rate</li> */}
                        </ul>
                    </header>
                    <section className="table-body vh-100 overflow-auto">
                        <header>
                            <ul className="d-flex text-capitalize p-0 py-2 m-0" style={{ listStyle: "none" }}>
                                <li className="check-box text-center px-3"><input type="checkbox" name="" className="form-check-input" id="" onClick={() => { setSettingMenu(!settingMenu); setCheckAll(!checkAll) }} /></li>
                                <li className="">name</li>
                            </ul>
                        </header>
                        <section className="text-bg-dark h-50 position-relative">
                            {
                                authors.map((author, index) => {
                                    return (
                                        <ul className="d-flex m-0 text-capitalize p-0 py-2" style={{ listStyle: "none", backgroundColor: index % 2 != 0 ? "#333" : null }} onClick={() => { setSettingMenu(!settingMenu); setData(author) }}>
                                            <li className="check-box text-center px-3"><input type="checkbox" name="" className="form-check-input" id="" onChange={() => setSettingMenu(!settingMenu)} /></li>
                                            <li className="text-nowrap">{author?.english_name}</li>
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
                {
                    settingMenu && <SettingMenu data={data} setSettingMenu={setSettingMenu} deleteBook={deleteBook} />
                }
                <ToastContainer />
            </section>
        </>
    )
}
