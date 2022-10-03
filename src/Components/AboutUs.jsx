import React from 'react';
import '../styles/AboutUs.css';
import MyButton from './UI/button/MyButton'

import img1 from '../img/4.png';
import img2 from '../img/5.png';
import img3 from '../img/6.png';
import MyTitle from './UI/title/MyTitle';

const AboutUs = () => {
    return (
        <div className='about-us'>
            <div className="about-us__text">
                <div className='title'>
                    <MyTitle>About Us</MyTitle>
                </div>
                <p>BIO CWT  - We manufacture solid wood products according to individual drawings. We make chairs, armchairs, wardrobes, beds and much more in our own workshop, equipped with all the necessary industrial equipment.</p>
            </div>
            <div className="about-us__image">
                <div className="about-us__image_item">
                    <img src={img1} alt="" />
                </div>
                <div className="about-us__image_item">
                    <img src={img2} alt="" />
                </div>
                <div className="about-us__image_item">
                    <img src={img3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;