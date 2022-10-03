import React from 'react';
import '../styles/GalleryPage.css';
import AnyQuestions from '../Components/AnyQuestions';
import OurWork from '../Components/OurWork';
import WoodWeWork from '../Components/WoodWeWork';
import Navbar from '../Components/UI/Navbar/Navbar';
import Footer from '../Components/Footer';

const Gallery = () => {
    return (
        <div className='gallery-page'>
            <Navbar className='navbar dark' />
            <div className="gallery-page__content">
                <div className="gallery-page__our-work">
                    <OurWork />
                </div>
                <WoodWeWork />
                <AnyQuestions />
            </div>
        </div>
    );
};

export default Gallery;