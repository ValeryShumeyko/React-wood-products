import React from 'react';
import '../../styles/Home/WoodItem.css';

import YesIcon from '../../img/icons/yes.svg';
import NoIcon from '../../img/icons/no.svg';



const WoodItem = (props) => {
    return (
        <div className='wood-item'>
            <img src={require('../../img/' + props.wood.img)} alt="" className='wood-item__image'/>
            <div className="wood-item__title">
                {props.wood.name}
            </div>
            <div className="wood-item__list">
                {props.wood.yes.map(yes =>
                    <div className="wood-item__list_item item">
                        <img src={YesIcon} alt="" className='item__icon'/>
                        {yes}
                    </div>
                )}
                {props.wood.no.map(no =>
                    <div className="wood-item__list_item item">
                        <img src={NoIcon} alt="" className='item__icon'/>
                        {no}
                    </div>
                )}
            </div>
        </div>
    );
};

export default WoodItem;