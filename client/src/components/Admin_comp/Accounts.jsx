// icons
import { IoSearch } from "react-icons/io5";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { FiUserX } from "react-icons/fi";
import { RiUserSettingsLine } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
// fonts css file
import '../../fonts.css'
// 
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Loading_comp from "../Loading_comp";
import UserContext from '../../Context/Contexts'
// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Accounts() {
    const [accounts, setAccount] = useState([])
    const [isLoading, setLoading] = useState(false)
    async function getAccounts() {
        setLoading(true)
        try {
            const { data } = await axios.get('http://localhost:3000/api/accounts')
            setAccount(data)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
        setLoading(false)
    }
    useEffect(() => {
        getAccounts()
    }, [])

    const { user } = useContext(UserContext)
    async function handleRole(e, userId) {
        const newData = {
            userId: userId,
            role: e.target.value
        }
        try {
            const { data } = await axios.put('http://localhost:3000/A/change-account-role', newData)
            if (data.success) {
                toast(`role has changed successfulty`)
                getAccounts()
            } else {
                toast(`role has changed <red>failed<red/>`)
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <header className="w-100 d-flex align-items-center justify-content-between">
                <div>
                    <h3 style={{ fontFamily: "BebasNeue" }}>Memebers</h3>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <div className="text-capitalize">
                        <span className="mx-2 text-success fw-bold">
                            {accounts?.length}
                        </span>
                        members
                    </div>
                    <label htmlFor="search" className="form-control d-flex align-items-center p-0">
                        <IoSearch size={"20px"} className="mx-2" />
                        <input type="search" name="" id="search" className="form-control border-0" placeholder="Search......." />
                    </label>
                    <Link className="btn btn-primary col-lg-4 text-capitalize d-flex align-items-center justify-content-center gap-2"><MdOutlinePersonAddAlt size={"22px"} />add member</Link>
                </div>
            </header>
            <section className="accounts-section py-4">
                {
                    isLoading ? <Loading_comp /> :
                        accounts.map(account => (
                            <>
                                <div key={account._id} className="w-100 border-top border-2 border-dark d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center gap-2 p-1">
                                        <img src={`../../../public/Authors/1724096343101.png`} className="rounded-circle" style={{ width: "5%" }} alt="" />
                                        <div className="text-capitalize fw-bold">{account?.name}</div>
                                        <div className="" style={{ color: "#555" }}>{account?.email}</div>
                                        {
                                            account?.status === "Boss" &&
                                            < div className="rounded text-bg-danger px-2 text-capitalize" style={{ color: "#555" }}>boss</div>
                                        }
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <select name="account_role" id="" disabled={user._id === account._id || account?.status === "Boss"} className="form-select" onChange={(e) => { handleRole(e, account._id); }}>
                                            <option value={account?.role} className="" defaultValue>{account?.role}</option>
                                            {account?.role === "Admin" ?
                                                <>
                                                    <option value="User">User</option>
                                                </>
                                                :
                                                <>
                                                    <option value="Admin">Admin</option>
                                                </>}
                                        </select>
                                        {user._id !== account._id &&
                                            <>
                                                <CiMenuKebab size={"30px"} style={{ cursor: "pointer" }} />
                                                {/* <FiUserX size={"35px"} style={{ cursor: "pointer" }} />
                                                        <RiUserSettingsLine size={"35px"} style={{ cursor: "pointer" }} /> */}
                                            </>
                                        }
                                    </div>
                                </div >
                            </>
                        ))
                }
                <ToastContainer />
            </section >
        </>
    )
}
