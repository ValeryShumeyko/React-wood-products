import React from 'react';
import AboutUs from '../Components/AboutUs';
import AnyQuestions from '../Components/AnyQuestions';
import Footer from '../Components/Footer';
import OurWork from '../Components/OurWork';
import Navbar from '../Components/UI/Navbar/Navbar';
import '../styles/AboutPage.css';

const About = () => {
    return (
        <div className='about-page'>
            <Navbar className='navbar dark' />
            <div className="about-page__content">
                <div className="about-page__about-us">
                    <AboutUs />
                </div>
                <OurWork />
                <AnyQuestions />
            </div>
        </div>
    );
};

export default About;