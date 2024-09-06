import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import './style/Home.scss'
import Main from "./Main";
import UserContext from "../Context/Contexts";
import { useContext, useState } from "react";

// icons
import { IoLanguageSharp,IoSettings } from "react-icons/io5";
import { MdOutlineFollowTheSigns,MdSupportAgent } from "react-icons/md";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";
import { RiMapPinUserFill,RiUserSettingsLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";

function Language_list() {
    return (
        <main className='prompt-list d-none text-bg-light position-absolute rounded-xl'>
            <ul className="m-0 ">
                <li className="list-arrow text-center"><IoMdArrowDropup size={"30px"} /></li>
                <li><Link to="/a" className="text-dark text-decoration-none">Arabic</Link></li>
                <li><Link to="/" className="text-dark text-decoration-none">English</Link></li>
            </ul>
        </main>
    )
}

export default function User() {
    const path = useLocation().pathname
    const navigate = useNavigate()
    const { user, setUser, logout } = useContext(UserContext)

    const [userMenu, setUserMenu] = useState(false)

    return (
        <>
            <header className="main-header px-3 py-1">
                <div className="right-div">
                    <ul>
                        <li className="d-flex align-items-center text-light"><IoMdArrowDropdown /> about</li>
                        <li className="d-flex align-items-center text-light"><Link to="/books/authors" className="text-light text-decoration-none">authores</Link> </li>
                        <li className="d-flex align-items-center text-light"><Link to="/books/categories" className="text-light text-decoration-none">books category</Link></li>
                    </ul>
                </div>
                <div className="center-div">
                    <Link to='/' className="logo text-decoration-none text-light fw-bold">Light Store</Link>
                </div>
                <div className="left-div">
                    <div className="language-btn mx-3">
                        <MdOutlineDarkMode size={'25px'} color="#021526" className="language-btn text-light" />
                    </div>
                    <div className="language-btn mx-3">
                        <IoLanguageSharp size={'25px'} color="#021526" className="language-btn text-light" onClick={() => document.querySelector('.prompt-list').classList.toggle('d-none')} />
                    </div>
                    <Language_list className=" d-none" />
                    {
                        !user ?
                            <Link to="/Login" className="d-flex justify-content-center align-items-center text-decoration-none text-transform-capitalize">
                                <p className=" text-light m-0 px-2 fs-s fw-bold">Log in</p>
                                <MdOutlineFollowTheSigns size={"30px"} color="white" title="sign in" />
                            </Link>
                            :
                            <>
                                <RiMapPinUserFill color={userMenu ? "#6EACDA" : "white"} size={"35px"} className="user-icon" onClick={() => setUserMenu(!userMenu)} />
                                {
                                    userMenu &&
                                    <div className="user-menu px-3 py-2 text-center rounded ">
                                        <Link to="/setting" className="d-flex justify-content-around align-items-center text-decoration-none text-transform-capitalize py-1  my-2 m-auto">
                                            <FaUserCircle size={"25px"} color="black" title="sign in" />
                                            <p className="text-capitalize text-dark m-0 px-2 fs-s fw-bold" onClick={() => {}}>profile</p>
                                        </Link>

                                        <Link to="/setting" className="d-flex justify-content-around align-items-center text-decoration-none text-transform-capitalize py-1  my-2 m-auto">
                                            <MdSupportAgent size={"25px"} color="black" title="sign in" />
                                            <p className="text-capitalize text-dark m-0 px-2 fs-s fw-bold" onClick={() => {}}>support</p>
                                        </Link>

                                        <Link to="/setting" className="d-flex justify-content-around align-items-center text-decoration-none text-transform-capitalize py-1  my-2 m-auto">
                                            <IoSettings size={"25px"} color="black" title="sign in" />
                                            <p className="text-capitalize text-dark m-0 px-2 fs-s fw-bold" onClick={() => {}}>setting</p>
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
                            </>
                    }
                </div>
            </header>
            <section className="display-section">
                {
                    path === '/' && <Main />
                }
                <Outlet />
            </section>
        </>
    )
}
