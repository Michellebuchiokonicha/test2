// import 'bootstrap/dist/css/bootstrap.min.css';
import css from '../../styles/Header.module.css'
import Image from 'next/image';
import { Nav } from "react-bootstrap";

export default function Header() {
    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     {/* <a className="navbar-brand" href="#">Navbar</a>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button> */}
        //     <div className="collapse navbar-collapse" >
        //         <ul className="navbar-nav d-flex flex-row gap-5 p-5">
        //             <li className="nav-item active p-5 m-5">
        //                 <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#">Features</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#">Pricing</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link disabled" href="#">Disabled</a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
        <nav>
            <ul className={css.mimi}>
                <li>
                    <ul>
                        <li>
                            {/* <Image src='/' width={50} height={50} alt='Logo' /> */}
                            Logo
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>Books & Resources</li>
                        <li>Meet a Mentor</li>
                        <li>Scholarships ans Financial aid</li>
                        <li>Woman of the month</li>
                        <li>About</li>
                        <li>Valid Dreams</li>
                        <li>Network with women</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>Signup</li>
                        <li>Help, let us talk</li>
                    </ul>
                </li>

            </ul>
        </nav>
    )
}