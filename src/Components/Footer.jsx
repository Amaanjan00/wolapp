import logo from '../assets/wollogo.png'
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <>
            <div className="footer-container">

                <img src={logo} alt="" />

                <div className="footer-menu">
                    <h4>Menu</h4>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/cars'>Cars</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-menu">
                    <h4>Important Links</h4>
                    <ul>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                        <li><a href="">Credits</a></li>
                    </ul>
                </div>

                <div className="footer-menu">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="">Login</a></li>
                        <li><a href="">inquirywol@gmail.com</a></li>
                        <li><a href="">+971 524322330</a></li>
                    </ul>
                </div>
            </div>

            <div className="copyright">
                &copy; Wheels On Luxury | Car Rental L.L.C. All rights reserved
            </div>
        </>
    );
}

export default Footer