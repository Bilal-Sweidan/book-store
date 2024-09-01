import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
// userContext
import UserContext from "../Context/Contexts";
import { useContext, useState } from "react";
// sass file
import './style/Home.scss'
// sass file for admin only
import './Admin.scss'
// icons
import { IoLanguageSharp } from "react-icons/io5";
import { MdOutlineFollowTheSigns } from "react-icons/md";
import { IoMdList, IoMdArrowDropup } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiBookmarkPlus } from "react-icons/ci";
import { RiQuillPenLine, RiMapPinUserFill, RiUserSettingsLine,RiAccountPinCircleFill  } from "react-icons/ri";
import { PiBooksLight } from "react-icons/pi";

function Language_list() {
    return (
        <main className='prompt-list text-bg-light position-absolute rounded-xl mt-2'>
            <ul className="m-0 ">
                <li className="list-arrow text-center"><IoMdArrowDropup size={"30px"} /></li>
                <li><Link to="/a" className="text-dark text-decoration-none">Arabic</Link></li>
                <li><Link to="/" className="text-dark text-decoration-none">English</Link></li>
            </ul>
        </main>
    )
}
export default function Admin() {
    const path = useLocation().pathname
    const navigate = useNavigate()
    const { setUser, logout } = useContext(UserContext)

    const [langPrompt, setLangPrompt] = useState(false)
    const [userMenu, setUserMenu] = useState(false)
    return (
        <>
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
                    <div className="language-btn mx-3">
                        <IoLanguageSharp size={'25px'} color="white" className="language-btn" onClick={() => setLangPrompt(!langPrompt)} />
                        {
                            langPrompt && <Language_list className=" d-none" />
                        }
                    </div>
                    <RiMapPinUserFill color={userMenu ? "#6EACDA" : "white"} size={"35px"} className="user-icon" onClick={() => setUserMenu(!userMenu)} />
                    {
                        userMenu &&
                        <div className="user-menu px-3 py-2 text-center rounded">
                            <Link className="d-flex justify-content-center align-items-center text-decoration-none text-transform-capitalize bg-dark py-1 my-2">
                                <p className=" text-light m-0 px-2 fs-s fw-bold" onClick={() => {
                                    logout()
                                    setUser(null)
                                }}>Log out</p>
                                <MdOutlineFollowTheSigns size={"25px"} color="white" title="sign in" />
                            </Link>
                            <Link to="/setting" className="d-flex justify-content-center align-items-center text-decoration-none text-transform-capitalize bg-dark py-1  my-2">
                                <p className="text-capitalize text-light m-0 px-2 fs-s fw-bold" onClick={() => {

                                }}>setting</p>
                                <RiUserSettingsLine size={"25px"} color="white" title="sign in" />
                            </Link>
                        </div>
                    }
                </div>
            </header>
            <section className="view-section d-flex w-100">
                <div className="sidebar open h-100 py-3 text-bg-dark">
                    <p className="mx-2 my-0 h5">Accounts</p>
                    <hr className="mx-2" />
                    <ul className="text-capitalize p-0">
                        <Link to='/accounts' className="">
                            <li className="d-flex gap-2 align-items-center mb-2 mx-2 rounded">
                                <RiAccountPinCircleFill  color="orange" size={"22px"} />
                                accounts
                            </li>
                        </Link>
                    </ul>
                    <p className="mx-2 my-0 h5">Books</p>
                    <hr className="mx-2" />
                    <ul className="text-capitalize p-0">
                        <Link to='/our-books' className="">
                            <li className="d-flex gap-2 align-items-center mb-2 mx-2 rounded">
                                <PiBooksLight color="orange" size={"22px"} />
                                all books
                            </li>
                        </Link>
                        <Link to='/add-book' className="">
                            <li className="d-flex gap-2 align-items-center mb-2 mx-2 rounded">
                                <CiBookmarkPlus color="orange" size={"22px"} />
                                new book
                            </li>
                        </Link>
                        <Link to='/add-author'>
                            <li className="d-flex gap-2 align-items-center mb-2 mx-2 rounded">
                                <RiQuillPenLine color="orange" size={"22px"} />
                                new author
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="viewer px-3 py-3">
                    {
                        path === '/' && (
                            <>
                                admin page
                            </>
                        )
                    }
                    <Outlet />
                </div>
            </section>
        </>
    )
}