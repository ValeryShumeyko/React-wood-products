import React from 'react';
import '../styles/Home/Home.css';
import SolidWood from '../Components/home/SolidWood';
import WoodWeWork from '../Components/WoodWeWork';
import OurWork from '../Components/OurWork';

import HomeTop from '../img/HomeTop.png';
import AdvantagesWorking from '../Components/home/AdvantagesWorking';
import AboutUs from '../Components/AboutUs';
import AnyQuestions from '../Components/AnyQuestions';
import Navbar from '../Components/UI/Navbar/Navbar';
import Footer from '../Components/Footer';


const Home = () => {
    return (
        <div className='main-block'>
            <div className="main-block__image">
                <img src={HomeTop} alt="" className='main-block__image_item' />
            </div>
            <div className="main-block__image-bg">
                <div className="main-block__image-bg_item"></div>
            </div>
            <Navbar className='navbar' />
            <div className="home-page__content">
                <SolidWood />
                <WoodWeWork />
                <OurWork />
                <AdvantagesWorking />
                <AboutUs />
                <AnyQuestions />
            </div>
        </div>
    );
};

export default Home;