import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../../../styles/Navbar.css';

import logo from '../../../img/icons/logo.svg';


const Navbar = (props) => {
    const [menuActive, setMenuActive] = useState(false);
    const menuOpen = () => {
        setMenuActive(!menuActive);
        if (menuActive) {
            document.body.style.overflow = null;
        } else {
            document.body.style.overflow = 'hidden';
        }
    }
    const bodyUnlock = () => {
        document.body.style.overflow = null
    }

    return (
        <div className={props.className}>
            <div className="navbar__container">
                <Link to="/" onClick={bodyUnlock}> <img src={logo} className="logo-img" /> </Link>
                <div className={menuActive ? "icon-menu__container active" : "icon-menu__container"} onClick={menuOpen}>
                    <div className="icon-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={menuActive ? "navbar__blur active" : "navbar__blur"} onClick={() => setMenuActive(false)}>
                    <div className={menuActive ? "navbar__links active" : "navbar__links"} onClick={(e) => e.stopPropagation()}>
                        <Link to="/gallery" className="navbar__links_item" onClick={bodyUnlock}>Gallery</Link>
                        <Link to="/prices" className="navbar__links_item" onClick={bodyUnlock}>Prices for services</Link>
                        <Link to="/about" className="navbar__links_item" onClick={bodyUnlock}>About us</Link>
                        <Link to="/contact" className="navbar__links_item" onClick={bodyUnlock}>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;