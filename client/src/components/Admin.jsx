import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
// userContext
import UserContext from "../Context/Contexts";
import { useContext, useEffect, useState } from "react";
// sass file
import './style/Home.scss'
// sass file for admin only
import './Admin.scss'
// icons
import { IoMdList } from "react-icons/io";
import { MdOutlineDarkMode, MdOutlineFollowTheSigns, MdSupportAgent } from "react-icons/md";
import { RiMapPinUserFill, RiAccountPinCircleFill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { SiBookstack } from "react-icons/si";
import { BiSolidPencil } from "react-icons/bi";

export default function Admin() {
    const path = useLocation().pathname
    const navigate = useNavigate()
    const location = useLocation()
    const { setUser, logout } = useContext(UserContext)
    const [userMenu, setUserMenu] = useState(false)

    const [li_status, setLi_Status] = useState([true, false, false, false])
    useEffect(() => {
        switch (location.pathname) {
            case "/":
                setLi_Status([true, false, false, false])
                break
            case "/accounts":
                setLi_Status([false, true, false, false])
                break
        }
    }, [location])
    return (
        <main>
            <header className="main-header text-bg-dark px-3 py-2 w-100">
                <div className="right-div">
                    <IoMdList size={'30px'} onClick={() => document.querySelector('.sidebar').classList.toggle('open')} />
                </div>
                <div className="center-div ">
                    <Link to='/' className="logo text-decoration-none fw-bold">Light Store</Link>
                </div>
                <div className="left-div">
                    <div className="language-btn mx-3">
                        <MdOutlineDarkMode size={'25px'} color="white" className="language-btn" />
                    </div>
                    <RiMapPinUserFill color={userMenu ? "#6EACDA" : "white"} size={"35px"} className="user-icon" onClick={() => setUserMenu(!userMenu)} />
                    {
                        userMenu &&
                        <div className="user-menu px-3 py-2 text-center rounded">
                            <Link to="/setting" className="d-flex justify-content-around align-items-center text-decoration-none text-transform-capitalize py-1  my-2 m-auto">
                                <FaUserCircle size={"25px"} color="black" title="sign in" />
                                <p className="text-capitalize text-dark m-0 px-2 fs-s fw-bold" onClick={() => { }}>profile</p>
                            </Link>

                            <Link to="/setting" className="d-flex justify-content-around align-items-center text-decoration-none text-transform-capitalize py-1  my-2 m-auto">
                                <MdSupportAgent size={"25px"} color="black" title="sign in" />
                                <p className="text-capitalize text-dark m-0 px-2 fs-s fw-bold" onClick={() => { }}>support</p>
                            </Link>

                            <Link to="/setting" className="d-flex justify-content-around align-items-center text-decoration-none text-transform-capitalize py-1  my-2 m-auto">
                                <IoSettings size={"25px"} color="black" title="sign in" />
                                <p className="text-capitalize text-dark m-0 px-2 fs-s fw-bold" onClick={() => { }}>setting</p>
                            </Link>

                            <Link className="rounded d-flex justify-content-center align-items-center text-decoration-none text-transform-capitalize bg-dark py-1 my-2 m-auto">
                                <p className=" text-light m-0 px-2 fs-s fw-bold" onClick={() => {
                                    logout()
                                    setUser(null)
                                }}>Log out</p>
                                <MdOutlineFollowTheSigns size={"25px"} color="white" title="sign in" />
                            </Link>
                        </div>
                    }
                </div>
            </header>
            <section className="view-section d-flex w-100">
                <div className="sidebar open h-100 py-3 text-bg-dark">
                    {/* <p className="mx-2 my-0 h5">Accounts</p>
                    <hr className="mx-2" /> */}
                    <ul className="text-capitalize p-0">
                        <Link to='/' className="">
                            <li className="d-flex gap-4 align-items-center mb-2 mx-2 rounded text-light" style={{ backgroundColor: li_status[0] ? "#b8b8b89a" : "" }}>
                                <AiFillHome color="white" size={"25px"} />
                                home
                            </li>
                        </Link>
                        <Link to='/accounts' className="">
                            <li className="d-flex gap-4 align-items-center mb-2 mx-2 rounded text-light">
                                <RiAccountPinCircleFill color="white" size={"25px"} />
                                accounts
                            </li>
                        </Link>
                        <Link to='/our-books' className="">
                            <li className="d-flex gap-4 align-items-center mb-2 mx-2 rounded text-light">
                                <SiBookstack color="white" size={"25px"} />
                                books
                            </li>
                        </Link>
                        <Link to='/authors'>
                            <li className="d-flex gap-4 align-items-center mb-2 mx-2 rounded text-light">
                                <BiSolidPencil color="white" size={"25px"} />
                                author
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="viewer px-3 py-3">
                    {
                        path === '/' && (
                            <>
                                <p className="text-center text-capitalize mt-5 h3 text-danger">Admin Dashboard</p>
                            </>
                        )
                    }
                    <Outlet />
                </div>
            </section>
        </main>
    )
}