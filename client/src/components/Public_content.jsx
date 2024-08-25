import { Link, Outlet , useLocation} from "react-router-dom";
import './style/Home.scss'

// Icons
import { IoLanguageSharp } from "react-icons/io5";
import { MdOutlineFollowTheSigns } from "react-icons/md";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";
// pages
import Main from "../components/Main";

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

export default function Public_content() {
    const path = useLocation().pathname
    return (
        <>
            <header className="main-header text-bg-light px-3 py-1">
                <div className="right-div">
                    <ul>
                        <li className="d-flex align-items-center"><IoMdArrowDropdown /> authores</li>
                        <li className="d-flex align-items-center"><IoMdArrowDropdown /> about</li>
                        <li className="d-flex align-items-center"><IoMdArrowDropdown /> books category</li>
                    </ul>
                </div>
                <div className="center-div ">
                    <Link to='/' className="logo text-decoration-none text-dark fw-bold">Light Store</Link>
                </div>
                <div className="left-div">
                    <div className="language-btn mx-3">
                        <MdOutlineDarkMode size={'25px'} color="#021526" className="language-btn" />
                    </div>
                    <div className="language-btn mx-3">
                        <IoLanguageSharp size={'25px'} color="#021526" className="language-btn" onClick={() => document.querySelector('.prompt-list').classList.toggle('d-none')} />
                    </div>
                    <Language_list className=" d-none" />
                    <Link to="/Login" className="d-flex justify-content-center align-items-center text-decoration-none text-transform-capitalize">
                        <p className=" text-light m-0 px-2 fs-s fw-bold">Log in</p>
                        <MdOutlineFollowTheSigns size={"30px"} color="white" title="sign in" />
                    </Link>
                </div>
            </header>
            <section className="display-section">
                {
                    path === '/' && <Main />
                }
                <Outlet />
            </section>
            <footer className="footer w-100 h-25 text-bg-primary">
                copy right for bilal sweidan
            </footer>
        </>
    )
}
