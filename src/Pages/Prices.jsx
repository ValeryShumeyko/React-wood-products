import React from 'react';
import AnyQuestions from '../Components/AnyQuestions';
import Footer from '../Components/Footer';
import PriceList from '../Components/prices/PriceList';
import Navbar from '../Components/UI/Navbar/Navbar';
import '../styles/PricesPage.css';


const Prices = () => {
    return (
        <div>
            <Navbar className='navbar dark' />
            <div className="prices-page__content">
                <PriceList />
                <AnyQuestions />
            </div>
        </div>
    );
};

export default Prices;