import React from 'react';
import '../styles/Home/OurWork.css';
import Slider from './Slider';
import MyTitle from './UI/title/MyTitle';



const OurWork = () => {
    return (
        <div className='our-work'>
            <div className="our-work__title">
                <MyTitle>Our Work</MyTitle>
            </div>
            <div className="our-work__slider">
                <Slider/>
            </div>
        </div>
    );
};

export default OurWork;