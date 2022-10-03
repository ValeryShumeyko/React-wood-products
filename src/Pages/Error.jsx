import React from 'react';
import '../styles/Error.css';
import Navbar from '../Components/UI/Navbar/Navbar';
import HomeTop from '../img/HomeTop.png';
import img404 from '../img/icons/404.svg';
import MyTitle from '../Components/UI/title/MyTitle';
import MyButton from '../Components/UI/button/MyButton';
import { Link } from 'react-router-dom';


const Error = () => {
    return (
        <div className='error-page'>
            <div className="main-block__image">
                <img src={HomeTop} alt="" className='main-block__image_item' />
            </div>
            <div className="main-block__image-bg">
                <div className="main-block__image-bg_item"></div>
            </div>
            <Navbar className='navbar' />
            <div className="error-page__content">
                <div className="img404">
                    <img src={img404} alt="" />
                </div>
                <div className="error-page__title">
                    <MyTitle>Woops</MyTitle>
                </div>
                <p>Oh, you must be lost, there is no such page.</p>
                <div className="error-page__button" onClick={() => window.scrollTo(0, 0)}>
                    <MyButton><Link to='/'>Go to the home page</Link></MyButton>
                </div>
            </div>
        </div>
    );
};

export default Error;