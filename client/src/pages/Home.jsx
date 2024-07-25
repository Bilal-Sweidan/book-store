import { Link, Outlet } from "react-router-dom";
import './style/Home.scss'

// fontawesome icons
import { FaAccessibleIcon } from "react-icons/fa";
import { IoLogInOutline, IoLanguageSharp } from "react-icons/io5";
import { MdOutlineFollowTheSigns } from "react-icons/md";
import { FaLanguage } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";

// react bootstrap
import NavDropdown from 'react-bootstrap/NavDropdown';

function Home() {
    return (
        <>
            <header className="main-header text-bg-light px-3 py-1">
                <div className="right-div">
                    <ul>
                        <li className="d-flex align-items-center"><IoMdArrowDropdown /> authores</li>
                        <li className="d-flex align-items-center"><IoMdArrowDropdown /> about</li>
                        <li className="d-flex align-items-center"><IoMdArrowDropdown /> books category</li>
                    </ul>
                    {/* <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Authores"
                        menuVariant="dark"
                    >
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="about"
                        menuVariant="dark"
                    >
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="books category"
                        menuVariant="dark"
                    >
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown> */}
                </div>
                <div className="center-div ">
                    <Link to='/' className="logo text-decoration-none text-dark fw-bold">Light Store</Link>
                </div>
                <div className="left-div">
                    <div className="language-btn mx-3">
                        <IoLanguageSharp size={'25px'} color="#021526" className="language-btn" />
                    </div>
                    <Link to="/Login" className="d-flex justify-content-center align-items-center text-decoration-none text-transform-capitalize">
                        <p className=" text-light m-0 px-2 fs-s fw-bold">Log in</p>
                        <MdOutlineFollowTheSigns size={"30px"} color="white" title="sign in" />
                    </Link>
                </div>
            </header>
            <section className="display-section">
                <Outlet />
            </section>
        </>
    )
}

export default Home;