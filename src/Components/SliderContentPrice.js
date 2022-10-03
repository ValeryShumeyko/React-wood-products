import React from 'react';

function SliderContent({ activeIndex, imageSlider }) {
    return (
        <section>
            {imageSlider.map((slide, index) => (
                <div
                    key={index}
                    className={index === activeIndex ? "slides slides-price active" : "inactive"}
                >
                    {/*<img className='slide-image' src={slide.urls} />*/}
                    <div className='wrapper-block slide-image'>
                        <div className='row'>
                            <div className='block big'>
                                <div className='block__container'>
                                    <div className='block__item'>
                                        <div className='bold name'>{slide.tree}</div>
                                    </div>
                                    <div className='block__item'>
                                        <div className='bold'>délka</div>
                                        <div>{slide.col11.a}</div>
                                        <div>{slide.col11.b}</div>
                                        <div>{slide.col11.c}</div>
                                        <div>{slide.col11.d}</div>
                                    </div>
                                    <div className='block__item'>
                                        <div className='bold'>šiřka</div>
                                        <div>{slide.col21.a}</div>
                                        <div>{slide.col21.b}</div>
                                        <div>{slide.col21.c}</div>
                                        <div>{slide.col21.d}</div>
                                    </div>
                                    <div className='block__item'>
                                        <div className='bold'>tloustka</div>
                                        <div>{slide.col31.a}</div>
                                        <div>{slide.col31.b}</div>
                                        <div>{slide.col31.c}</div>
                                        <div>{slide.col31.d}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='block'>
                                <div className='block__container'>
                                    <div className='block__item'>
                                        <div className='bold'>m3</div>
                                        <div>{slide.col41.a}</div>
                                        <div>{slide.col41.b}</div>
                                        <div>{slide.col41.c}</div>
                                        <div>{slide.col41.d}</div>
                                    </div>
                                    <div className='block__item'>
                                        <div className='bold'>cena m3</div>
                                        <div>{slide.col51.a}</div>
                                        <div>{slide.col51.b}</div>
                                        <div>{slide.col51.c}</div>
                                        <div>{slide.col51.d}</div>
                                    </div>
                                    <div className='block__item orange'>
                                        <div className='bold'>cena ks.</div>
                                        <div>{slide.col61.a}</div>
                                        <div>{slide.col61.b}</div>
                                        <div>{slide.col61.c}</div>
                                        <div>{slide.col61.d}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='block big'>
                                <div className='block__container'>
                                    <div className='block__item'>
                                        <div className='bold'>{slide.tree}</div>
                                    </div>
                                    <div className='block__item'>
                                        <div>{slide.col12.a}</div>
                                        <div>{slide.col12.b}</div>
                                        <div>{slide.col12.c}</div>
                                    </div>
                                    <div className='block__item'>
                                        <div>{slide.col22.a}</div>
                                        <div>{slide.col22.b}</div>
                                        <div>{slide.col22.c}</div>
                                    </div>
                                    <div className='block__item'>
                                        <div>{slide.col32.a}</div>
                                        <div>{slide.col32.b}</div>
                                        <div>{slide.col32.c}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='block'>
                                <div className='block__container'>
                                    <div className='block__item'>
                                        <div>{slide.col42.a}</div>
                                        <div>{slide.col42.b}</div>
                                        <div>{slide.col42.c}</div>
                                    </div>
                                    <div className='block__item'>
                                        <div>{slide.col52.a}</div>
                                        <div>{slide.col52.b}</div>
                                        <div>{slide.col52.c}</div>
                                    </div>
                                    <div className='block__item orange'>
                                        <div>{slide.col62.a}</div>
                                        <div>{slide.col62.b}</div>
                                        <div>{slide.col62.c}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default SliderContent;