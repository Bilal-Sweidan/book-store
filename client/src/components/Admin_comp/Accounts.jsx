// icons
import { IoSearch } from "react-icons/io5";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { FiUserX } from "react-icons/fi";
import { RiUserSettingsLine } from "react-icons/ri";
// 
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Loading_comp from "../Loading_comp";


export default function Accounts() {
    const [accounts, setAccount] = useState([])
    const [isLoading,setLoading] = useState(false)
    useEffect(() => {
        async function getAccounts() {
            setLoading(true)
            try {
                const { data } = await axios.get('http://localhost:3000/api/accounts')
                setAccount(data)
            } catch (err) {
                console.log(err)
            }
            setLoading(false)
        }
        getAccounts()
    }, [])
    return (
        <>
            <header className="w-100 d-flex align-items-center justify-content-between">
                <div>
                    <h3>Memebers</h3>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <div className="text-capitalize">
                        <span className="mx-2 text-success">
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
                    isLoading ? <h1>Loading ........</h1>:
                    accounts.map(account => {
                        return (
                            <>
                                <div className="w-100 border-top border-2 border-dark d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center gap-2 p-1">
                                        <img src={`../../../public/Authors/1724096343101.png`} className="" style={{ width: "5%" }} alt="" />
                                        <div className="text-capitalize fw-bold">{account?.name}</div>
                                        <div className="" style={{ color: "#555" }}>{account?.email}</div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <FiUserX size={"35px"} style={{cursor: "pointer"}}/>
                                        <RiUserSettingsLine size={"35px"} style={{cursor: "pointer"}} />
                                        <select name="" id="" className="form-select">
                                            <option value={account?.role} className="" selected>{account?.role}</option>
                                            {
                                                account?.role === "Admin" ?
                                                    <>
                                                        <option value="User">User</option>
                                                    </>
                                                    :
                                                    <>
                                                        <option value="Admin">Admin</option>
                                                    </>
                                            }
                                        </select>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </section>
        </>
    )
}
