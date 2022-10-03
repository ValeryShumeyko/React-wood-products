import React, { useState } from 'react';
import '../../styles/Home/SolidWood.css';
import MyButton from '../UI/button/MyButton'
import img1 from '../../img/1.png';
import img2 from '../../img/2.png';
import img3 from '../../img/3.png';
import MyTitle from '../UI/title/MyTitle';
import '../../Components/UI/Modal/ModalOrder.css';
import done from '../../img/icons/done.png';




const SolidWood = () => {

    const typeWoods = [
        {
            id: 1,
            name: 'Ash',
        },
        {
            id: 2,
            name: 'Pine',
        },
        {
            id: 3,
            name: 'Beech',
        },
        {
            id: 4,
            name: 'Oak',
        },
        {
            id: 5,
            name: 'Alder',
        },
        {
            id: 6,
            name: 'Cherry',
        },
        {
            id: 7,
            name: 'Walnut',
        },
    ]
    const [modalActive, setModalActive] = useState(false);
    const [modalOrderThankActive, setModalOrderThankActive] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownSelected, setDropdownSelected] = useState('');
    const [checkboxActive, setCheckboxActive] = useState(false);
    const [nameContent, setNameContent] = useState('');
    const [phoneContent, setPhoneContent] = useState('');
    const [emailContent, setEmailContent] = useState('');
    const [cityContent, setCityContent] = useState('');
    const [m3Content, setM3Content] = useState('');
    const [commentContent, setCommentContent] = useState('');
    const [phoneError, setPhoneError] = useState(null);
    const [emailError, setEmailError] = useState(null);

    const openModal = () => {
        setModalActive(true);
        document.body.classList.add('_lock');
    }
    const closeModal = () => {
        setModalActive(false);
        document.body.classList.remove('_lock');
        setNameContent('');
        setPhoneContent('');
        setEmailContent('');
        setCityContent('');
        setM3Content('');
        setCommentContent('');
        setDropdownSelected('');
        setCheckboxActive(false);
        document.querySelector('.input-name').classList.remove('invalid');
        document.querySelector('.input-phone').classList.remove('invalid');
        document.querySelector('.input-email').classList.remove('invalid');
        document.querySelector('.phone-error').classList.remove('active');
        document.querySelector('.email-error').classList.remove('active');
        document.querySelector('.required-error').classList.remove('active');
        document.querySelector('.modal-order__checkbox').classList.remove('error');
    }
    const openDropdown = (e) => {
        e.stopPropagation();
        setDropdownOpen(!dropdownOpen);
    }
    const testPhone = () => {
        const re = /^((8|\+)[\- ]?)?(\(?\d{0,}\)?[\- ]?)?[\d\-() ]{1,}$/
        re.test(phoneContent.toLowerCase()) ? setPhoneError(false) : setPhoneError(true)
    }
    const testEmail = () => {
        const res = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
        res.test(emailContent.toLowerCase()) ? setEmailError(false) : setEmailError(true)
    }
    const submitForm = () => {
        if (nameContent === '') {
            document.querySelector('.input-name').classList.add('invalid');
        } else {
            document.querySelector('.input-name').classList.remove('invalid');
        }
        if (phoneContent === '') {
            document.querySelector('.input-phone').classList.add('invalid');
            document.querySelector('.phone-error').classList.remove('active');
        } else if (phoneError) {
            document.querySelector('.phone-error').classList.add('active');
            document.querySelector('.input-phone').classList.add('invalid');
        } else if (!phoneError) {
            document.querySelector('.phone-error').classList.remove('active');
            document.querySelector('.input-phone').classList.remove('invalid');
        }
        if (emailContent === '') {
            document.querySelector('.input-email').classList.add('invalid');
            document.querySelector('.email-error').classList.remove('active');
        } else if (emailError) {
            document.querySelector('.email-error').classList.add('active');
            document.querySelector('.input-email').classList.add('invalid');
        } else if (!emailError) {
            document.querySelector('.email-error').classList.remove('active');
            document.querySelector('.input-email').classList.remove('invalid');
        }
        if (!checkboxActive) {
            document.querySelector('.modal-order__checkbox').classList.add('error');
        } else {
            document.querySelector('.modal-order__checkbox').classList.remove('error');
        }
        if (nameContent === '' || phoneContent === '' || emailContent === '') {
            document.querySelector('.required-error').classList.add('active');
        } else {
            document.querySelector('.required-error').classList.remove('active');
        }
        if (nameContent !== '' && phoneContent !== '' && emailContent !== '' && !phoneError && !emailError && checkboxActive) {
            closeModal();
            setModalOrderThankActive(true);
        }
    }

    return (
        <>
            <div className={modalActive ? 'modal-order active' : 'modal-order'}>
                <div className="modal-order__wrapper" onClick={closeModal}>
                    <div className="modal-order__content" onClick={(e) => { e.stopPropagation(); setDropdownOpen(false); }}>
                        <h1>Order form</h1>
                        <p className="required-error">Please fill out the required fields</p>
                        <p className="phone-error">Please enter a valid phone number</p>
                        <p className="email-error">Please enter a valid email address</p>
                        <div className="modal-order__content_flex">
                            <input type="text" onChange={e => setNameContent(e.target.value)} value={nameContent} className='input-name' placeholder='Your name' />
                            <input type="tel" onInput={testPhone} onChange={e => setPhoneContent(e.target.value)} value={phoneContent} className='input-phone' placeholder='Your phone' />
                            <input type="email" onInput={testEmail} onChange={e => setEmailContent(e.target.value)} value={emailContent} className='input-email' placeholder='Your email' />
                            <input type="text" onChange={e => setCityContent(e.target.value)} value={cityContent} placeholder='Your city' />
                            <div className={dropdownOpen ? "modal-order__dropdown active" : "modal-order__dropdown"} >
                                {(dropdownSelected === '')
                                    ?
                                    <div className="modal-order__dropdown_title" onClick={openDropdown}>Type of wood</div>
                                    :
                                    <div className="modal-order__dropdown_title" onClick={openDropdown}>{dropdownSelected}</div>
                                }
                                <ul className="modal-order__dropdown_body" onClick={(e) => e.stopPropagation()}>
                                    {typeWoods.map(type =>
                                        <li
                                            key={type.id}
                                            onClick={
                                                (e) => {
                                                    setDropdownSelected(type.name);
                                                    setDropdownOpen(false);
                                                }}>{type.name}</li>
                                    )}
                                </ul>
                            </div>
                            <input type="text" onChange={e => setM3Content(e.target.value)} value={m3Content} placeholder='m3' />
                            <div className="modal-order__textarea_container">
                                <textarea onChange={e => setCommentContent(e.target.value)} value={commentContent} placeholder='Comments'></textarea>
                            </div>
                        </div>
                        <div
                            className={checkboxActive ? "modal-order__checkbox active" : "modal-order__checkbox"}
                            onClick={() => setCheckboxActive(!checkboxActive)}
                        >
                            I agree to the processing of personal data
                        </div>
                        <div className="modal-order__button" onClick={submitForm}>
                            <MyButton>Submit</MyButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className={modalOrderThankActive ? 'modal-order active' : 'modal-order'}>
                <div className="modal-order-thank__wrapper" onClick={() => setModalOrderThankActive(false)}>
                    <div className="modal-order__content" onClick={(e) => e.stopPropagation()}>
                        <div className="thank__icon_container">
                            <img src={done} alt="" className='thank__icon' />
                        </div>
                        <h1 className='thank__title thank-order__title'>Thank you for your message!</h1>
                        <p className="thank__text">Your submission is received and we will contact you soon.</p>
                    </div>
                </div>
            </div>
            <div className='solid-wood'>
                <div className="solid-wood__text">
                    <div className='title'>
                        <MyTitle>Solid wood products</MyTitle>
                    </div>
                    <p>Oak, beech, ash from <span>1700 CZK</span> per m3</p>
                    <div className='solid-wood__text_button' onClick={openModal}>
                        <MyButton >Order</MyButton>
                    </div>
                </div>
                <div className="solid-wood__image">
                    <div className="solid-wood__image_item">
                        <img src={img1} alt="" />
                    </div>
                    <div className="solid-wood__image_item">
                        <img src={img2} alt="" />
                    </div>
                    <div className="solid-wood__image_item">
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>
        </>

    );
};

export default SolidWood;