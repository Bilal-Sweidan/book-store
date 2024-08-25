// import { Link, Outlet, redirect, useLocation } from "react-router-dom";
// import { useContext, useState } from "react";
// import './style/Home.scss'

// import UserContext from "../Context/Contexts";
// // pages
// import Admin from "../components/Admin";
// import User from "../components/User";
// import Loading_comp from "../components/Loading_comp";
// import Public_content from "../components/Public_content";
// function Home() {
//     const path = useLocation().pathname
//     const { user,isLoading } = useContext(UserContext)

//     if(isLoading){
//         return <Loading_comp/>
//     }
//     if (!user) {
//         return <Public_content/>
//     }else if(user?.role === 'Admin'){
//         return <Admin />
//     }else if(user.role === 'User'){
//         return <User/>
//     }

//     // return (
//     //     <>
//     //         {
//     //             isLoading ? <Loading_comp />
//     //                 :
//     //                 !user ?
//     //                     <>
//     //                         <header className="main-header text-bg-light px-3 py-1">
//     //                             <div className="right-div">
//     //                                 <ul>
//     //                                     <li className="d-flex align-items-center"><IoMdArrowDropdown /> authores</li>
//     //                                     <li className="d-flex align-items-center"><IoMdArrowDropdown /> about</li>
//     //                                     <li className="d-flex align-items-center"><IoMdArrowDropdown /> books category</li>
//     //                                 </ul>
//     //                             </div>
//     //                             <div className="center-div ">
//     //                                 <Link to='/' className="logo text-decoration-none text-dark fw-bold">Light Store</Link>
//     //                             </div>
//     //                             <div className="left-div">
//     //                                 <div className="language-btn mx-3">
//     //                                     <MdOutlineDarkMode size={'25px'} color="#021526" className="language-btn" />
//     //                                 </div>
//     //                                 <div className="language-btn mx-3">
//     //                                     <IoLanguageSharp size={'25px'} color="#021526" className="language-btn" onClick={() => document.querySelector('.prompt-list').classList.toggle('d-none')} />
//     //                                 </div>
//     //                                 <Language_list className=" d-none" />
//     //                                 <Link to="/Login" className="d-flex justify-content-center align-items-center text-decoration-none text-transform-capitalize">
//     //                                     <p className=" text-light m-0 px-2 fs-s fw-bold">Log in</p>
//     //                                     <MdOutlineFollowTheSigns size={"30px"} color="white" title="sign in" />
//     //                                 </Link>
//     //                             </div>
//     //                         </header>
//     //                         <section className="display-section">
//     //                             {
//     //                                 path === '/' && <Main />
//     //                             }
//     //                             <Outlet />
//     //                         </section>
//     //                         <footer className="footer w-100 h-25 text-bg-primary">
//     //                             copy right for bilal sweidan
//     //                         </footer>
//     //                     </>
//     //                     :
//     //                     user?.role === 'Admin' ? <Admin />
//     //                         :
//     //                         user?.role === 'User' && <User />
//     //         }
//     //     </>
//     // )
// }

// export default Home;