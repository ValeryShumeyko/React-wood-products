import React from 'react';
import '../styles/ContactPage.css';
import Navbar from '../Components/UI/Navbar/Navbar';
import MyTitle from '../Components/UI/title/MyTitle';
import phone from '../img/icons/phone.svg';
import map from '../img/icons/map.svg';
import Footer from '../Components/Footer';



const Contact = () => {
    return (
        <div className='contact-page'>
            <Navbar className='navbar dark' />
            <div className="contact-page__content">
                <div className="contact-page__content_text">
                    <div className="contact-page__title">
                        <MyTitle>Contact</MyTitle>
                    </div>
                    <div className="contact-page__content_text-phone">
                        <img src={phone} alt="" />
                        <p>+420 296 450 310</p>
                    </div>
                    <div className="contact-page__content_text-map">
                        <img src={map} alt="" />
                        <p>Na Plzeňce 1166/0 150 00</p>
                    </div>
                </div>
                <div className="contact-page__content_map">
                    <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Na%20Plze%C5%88ce%20150%2000%20+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;