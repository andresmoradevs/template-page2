import * as React from "react";
import logo from './logo.png'
import './Navbar.css';

function Navbar() {
    return (
    <div>
        <header>
            <img src={logo} className="logoImg"alt="" />
            <nav>
                <ul className="nav_links">
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Servicios y productos</a></li>
                    <li><a href="#">Contáctanos</a></li>
                </ul>
                
            </nav>
            <svg xmlns="http://www.w3.org/2000/svg" className="main_btn" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <a className="cta" href="#"><button>Whatsapp</button></a>
        </header>
        
    </div>
    )
}
   

export default Navbar;