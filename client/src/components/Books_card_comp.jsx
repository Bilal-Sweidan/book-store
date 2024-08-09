import './style/Books_card_comp.scss'

// images
import Book1 from '../assets/Books images/book1.png'
// icons 
import { IoStar } from "react-icons/io5";
export default function Books_card_comp() {
    return (
        <div className='cards d-flex p-1'>
            <div className='w-50 h-100 p-3'>
                <img src={Book1} alt="" className='h-100' />
            </div>
            <div className='h-100 w-75 p-2 text-dark text-capitalize'>
                <ul>
                    <li><h4>Quran</h4></li>
                    <li className=''>God</li>
                    <li>Holy , islamic</li>
                    <li className='py-1'><IoStar  color='orange' className='mx-1' size={"20px"}/><IoStar  color='orange' className='mx-1' size={"20px"}/><IoStar  color='orange' className='mx-1' size={"20px"}/><IoStar  color='orange' className='mx-1' size={"20px"}/><IoStar  color='orange' className='mx-1' size={"20px"}/></li>
                </ul>
                <div className='book-info d-flex justify-content-around text-capitalize text-center'>
                    <div>
                        <p className='title fw-bold'>pages</p>
                        <p>614</p>
                    </div>
                    <div>
                        <p className='title fw-bold'>Donwloads</p>
                        <p>2 B</p>
                    </div>
                    <div>
                        <p className='title fw-bold'>reviews</p>
                        <p>224 M</p>
                    </div>
                </div>
            </div>
        </div>
    )
}