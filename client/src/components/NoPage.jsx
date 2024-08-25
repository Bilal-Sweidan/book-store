import disconnected from '../assets/disconnected.png'
// scss file
import './style/NoPage.scss'
export default function Nopage() {
    return (
        <div className="noPage d-flex align-items-center justify-content-center">
            <h1><span className='text-danger'>404</span> !</h1>
            <img src={disconnected} alt="" />
        </div>
    )
}