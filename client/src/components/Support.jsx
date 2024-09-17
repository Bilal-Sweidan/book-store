import { useState, useEffect, useContext } from "react"

// axios
import axios from 'axios'
// react icons
import { BsSendArrowUp } from "react-icons/bs";
// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import
import UserContext from "../Context/Contexts";
export default function Support() {
    const [otherForm, setOtherForm] = useState(false)
    const {user} = useContext(UserContext) 
    const [isLoading,setLoading ] = useState(false)
    async function sendEmail(e) {
        setLoading(true)
        const input = e.target
        const formData = new FormData(input)
        formData.append('username',user.name)
        const jsonForm = Object.fromEntries(formData.entries())
        const { data } = await axios.post(`http://localhost:3000/support_message`,jsonForm)
        if(data.success){
            toast("sended successfuly => ")
        }else{
            toast("send email failed => ")
        }
        setLoading(false)
    }
    return (
        <main className="w-100 py-3 px-5" style={{ height: "calc(100vh - 64px)" }}>
            <h3 className="text-capitalize">support</h3>
            <form action="" method="dialog" className="px-3" onSubmit={sendEmail}>
                <div className="mb-2 text-capitalize">
                    <label htmlFor="">problem title</label>
                </div>
                <select name="problem_title" id="" className="form-select w-25 text-capitalize" onChange={(e) => {
                    if (e.target.value === "other") {
                        setOtherForm(true)
                    } else {
                        setOtherForm(false)
                    }
                }}>
                    <option value="technical" defaultValue={"technical"}>technical</option>
                    <option value="wrong content">wrong content</option>
                    <option value="other">other</option>
                </select>
                {
                    otherForm &&
                    <>
                        <div className="my-2 text-capitalize">
                            <label htmlFor="">other</label>
                        </div>
                        <input type="text" name="other_problem_title" className="form-control w-25" placeholder="other" />
                    </>
                }
                <div className="my-2 text-capitalize">
                    <label htmlFor="">email text</label>
                </div>
                <textarea name="problem_text" id="" className="p-2 form-control w-25"  placeholder="what is your problem ? "></textarea>

                <button type="submit" className="btn btn-success my-3 text-capitalize" disabled={isLoading}><BsSendArrowUp size={"20px"} className="mx-2" />send Email</button>
            </form>
            <ToastContainer className="z-3 mt-25"/> 
        </main>
    )
}
