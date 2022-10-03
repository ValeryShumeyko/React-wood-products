import React, { useState } from 'react';
import SliderContentPrice from './SliderContentPrice';
import imageSlider from './ImageSlider';
import Arrows from './Arrows';
import Dots from './Dots';

import '../styles/Slider.css';
import '../styles/SliderPrice.css'


const len = imageSlider.length - 1;

function Slider(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div>
            <div className='slider-container'>
                <div className='slider-container'>
                    <SliderContentPrice activeIndex={activeIndex} imageSlider={imageSlider} />
                </div>
                <Arrows
                    prevSlide={() =>
                        setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                    }
                    nextSlide={() =>
                        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                    }
                />
            </div>
            <div className='all-dots-price'>
                <Dots activeIndex={activeIndex} imageSlider={imageSlider} onclick={activeIndex => setActiveIndex(activeIndex)} />
            </div>
        </div>
    )
}

export default Slider;