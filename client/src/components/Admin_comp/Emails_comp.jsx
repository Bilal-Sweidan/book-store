// axios
import axios from "axios"
import { useEffect, useState } from "react"
// libraries

export default function Emails_comp() {
    const [messages, setMessages] = useState([])
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        async function getMessages() {
            setLoading(true)
            const { data } = await axios.get(`http://localhost:3000/api/support_messages`)
            if (data.success) {
                setMessages(data)
                console.log(data)
            }
            setLoading(false)
        }
        getMessages()
    }, [])
    return (
        <>

        </>
    )
}
