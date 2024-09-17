// icons
import { IoSearch } from "react-icons/io5";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { BiSend } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa6";
// axios
import axios from "axios"
import { useEffect, useState } from "react"
// libraries
import { Link } from 'react-router-dom'
import Loading_comp from "../Loading_comp";
export default function Emails_comp() {
    const [messages, setMessages] = useState([])
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        async function getMessages() {
            setLoading(true)
            const { data } = await axios.get(`http://localhost:3000/api/support_messages`)
            if (data.success) {
                setMessages(data.messages)
                console.log(data.messages)
            }
            setLoading(false)
        }
        getMessages()
    }, [])
    return (
        <>
            <header className="w-100 d-flex align-items-center justify-content-between">
                <div className="">
                    <h3 className="text-capitalize" style={{ fontFamily: "BebasNeue" }}>support Email box</h3>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <div className="text-capitalize d-flex" style={{ fontFamily: "SUSE" }}>
                        <span className="mx-2 text-success fw-bold">
                            {messages?.length || 0}
                        </span>
                        <p className="text-capitalize m-0">
                            emails
                        </p>
                    </div>
                    <label htmlFor="search" className="form-control d-flex align-items-center p-0">
                        <IoSearch size={"20px"} className="mx-2" />
                        <input type="search" name="" id="search" className="form-control border-0" placeholder="Search......." />
                    </label>
                    <Link to={'/email/send-email'} className="btn btn-primary col-lg-4 text-capitalize d-flex align-items-center justify-content-center gap-2">send email<BiSend size={"22px"} /></Link>
                </div>
            </header>
            <section className="w-100 h-100 py-2">
                {
                    isLoading ? <Loading_comp /> :
                        messages?.map((message) => {
                            return (
                                <div className="w-100 text-bg-light d-flex align-items-center gap-2 p-2 pointer">
                                    <input type="checkbox" name="" id="" className="" />
                                    <FaRegStar size={"20px"} className="pointer" />
                                    <p className="m-0 text-capitalize">
                                        {message?.username}
                                    </p>
                                    <p className="m-0 mx-4 w-50">
                                        {message?.text}
                                    </p>
                                    <div>
                                        {message?.date}
                                    </div>
                                </div>
                            )
                        })
                }
            </section>
        </>
    )
}
