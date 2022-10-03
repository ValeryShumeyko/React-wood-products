import React from 'react';
import '../styles/Footer.css';
import phone from '../img/icons/phone.svg';
import map from '../img/icons/map.svg';
import logo from '../img/icons/logo.svg';


const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__info">
                <div className="footer__info_logo">
                    <img src={logo} alt="" />
                </div>
                <div className="footer__info_phone">
                    <img src={phone} alt="" />
                    <p>+420 296 450 310</p>
                </div>
                <div className="footer__info_map">
                    <img src={map} alt="" />
                    <p>Na Plzeňce 1166/0 150 00</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;