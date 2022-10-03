import React from 'react';
import '../../styles/Prices/PriceList.css';
import SliderPrice from '../SliderPrice';
import MyTitle from '../UI/title/MyTitle';



const PriceList = () => {
    return (
        <div className='price-list'>
            <div className="price-list__title">
                <MyTitle>Price list</MyTitle>
            </div>
            <div className="price-list__slider">
                <SliderPrice />
            </div>
        </div>
    );
};

export default PriceList;