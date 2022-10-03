import React from "react";

function Arrows({ prevSlide, nextSlide }) {
    return (
        <div className="arrows">
            <span className="prev" onClick={prevSlide}>
                <svg width="57" height="54" viewBox="0 0 57 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 27L27 52M54.0833 27H2H54.0833ZM2 27L27 2L2 27Z" stroke="#A3B8D7" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
            <span className="next" onClick={nextSlide}>
                <svg width="57" height="54" viewBox="0 0 57 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M54.0833 27L29.0833 52M2 27H54.0833H2ZM54.0833 27L29.0833 2L54.0833 27Z" stroke="#A3B8D7" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
        </div>
    );
}

export default Arrows;