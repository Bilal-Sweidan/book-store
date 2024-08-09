// scss file
import './style/Authors_comp.scss'
// images
import author1 from '../assets/Authors/photo_2023-06-26_16-59-05.jpg'
export default function Authors_comp() {
    return (
        <main className=" position-relative">
            <img src={author1} className="card-img-top" alt="..." />
            <div className="about position-absolute">
                <ul>
                    <li>Mikl</li>
                    <li>Author</li>
                    <li>books : 10</li>
                </ul>
            </div>
        </main>
    )
}