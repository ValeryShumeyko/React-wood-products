import React from 'react';
import '../../styles/Home/AdvantagesWorking.css';
import MyTitle from '../UI/title/MyTitle';
import Img from '../../img/Advantages.png';
import { useState } from 'react';
import MyButton from '../UI/button/MyButton';
import done from '../../img/icons/done.png';

const AdvantagesWorking = () => {
    const [text] = useState([
        {
            id: 1,
            text: 'In-house carpentry production',
        },
        {
            id: 2,
            text: 'We only treat wood with environmentally friendly and safe products',
        },
        {
            id: 3,
            text: 'Prices from the manufacturer, no extra charges',
        }
    ])
    const [modalCallActive, setModalCallActive] = useState(false);
    const [modalCallThankActive, setModalCallThankActive] = useState(false);
    const [name1Content, setName1Content] = useState('');
    const [phone1Content, setPhone1Content] = useState('');
    const [time1Content, setTime1Content] = useState('');
    const [date1Content, setDate1Content] = useState('');
    const [comment1Content, setComment1Content] = useState('');
    const [phone1Error, setPhone1Error] = useState(null);

    const openModal = () => {
        setModalCallActive(true);
        document.body.classList.add('_lock');
    }
    const closeModal = () => {
        setModalCallActive(false);
        document.body.classList.remove('_lock');
        setName1Content('');
        setPhone1Content('');
        setTime1Content('');
        setDate1Content('');
        setComment1Content('');
        document.querySelector('.input-name').classList.remove('invalid');
        document.querySelector('.input-phone').classList.remove('invalid');
        document.querySelector('.phone-error').classList.remove('active');
        document.querySelector('.required-error').classList.remove('active');
    }
    const testPhone = () => {
        const res = /^((8|\+)[\- ]?)?(\(?\d{0,}\)?[\- ]?)?[\d\-() ]{1,}$/
        res.test(phone1Content.toLowerCase()) ? setPhone1Error(false) : setPhone1Error(true)
    }
    const submitForm = () => {
        if (name1Content === '') {
            document.querySelector('.input1-name').classList.add('invalid');
        } else {
            document.querySelector('.input1-name').classList.remove('invalid');
        }
        if (phone1Content === '') {
            document.querySelector('.input1-phone').classList.add('invalid');
            document.querySelector('.phone1-error').classList.remove('active');
        } else if (phone1Error) {
            document.querySelector('.phone1-error').classList.add('active');
            document.querySelector('.input1-phone').classList.add('invalid');
        } else if (!phone1Error) {
            document.querySelector('.phone1-error').classList.remove('active');
            document.querySelector('.input1-phone').classList.remove('invalid');
        }
        if (name1Content === '' || phone1Content === '') {
            document.querySelector('.required1-error').classList.add('active');
        } else {
            document.querySelector('.required1-error').classList.remove('active');
        }
        if (name1Content !== '' && phone1Content !== '' && !phone1Error) {
            closeModal();
            setModalCallThankActive(true);
        }
    }

    return (
        <>
            <div className={modalCallActive ? 'modal-order active' : 'modal-order'}>
                <div className="modal-order__wrapper" onClick={closeModal}>
                    <div className="modal-order__content" onClick={(e) => { e.stopPropagation(); }}>
                        <h1>Call me back</h1>
                        <p className="required1-error">Please fill out the required fields</p>
                        <p className="phone1-error">Please enter a valid phone number</p>
                        <div className="modal-order__content_flex">
                            <input type="text" onChange={e => setName1Content(e.target.value)} value={name1Content} className='input1-name' placeholder='Name' />
                            <input type="tel" onInput={testPhone} onChange={e => setPhone1Content(e.target.value)} value={phone1Content} className='input1-phone' placeholder='Phone' />
                            <input type="date" onChange={e => setDate1Content(e.target.value)} value={date1Content} placeholder='Date' />
                            <input type="text" onChange={e => setTime1Content(e.target.value)} value={time1Content} className='input1-time' placeholder='Time ' />
                            <div className="modal-order__textarea_container">
                                <textarea onChange={e => setComment1Content(e.target.value)} value={comment1Content} placeholder='Comments'></textarea>
                            </div>
                        </div>
                        <div className="modal-order__button" onClick={submitForm}>
                            <MyButton>Submit</MyButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className={modalCallThankActive ? 'modal-order active' : 'modal-order'}>
                <div className="modal-order-thank__wrapper" onClick={() => setModalCallThankActive(false)}>
                    <div className="modal-order__content" onClick={(e) => e.stopPropagation()}>
                        <div className="thank__icon_container">
                            <img src={done} alt="" className='thank__icon' />
                        </div>
                        <h1 className='thank__title thank-order__title'>Thank you for your message!</h1>
                        <p className="thank__text">Your submission is received and we will contact you soon.</p>
                    </div>
                </div>
            </div>
            <div className='advantages-working'>
                <div className="advantages-working__title">
                    <MyTitle>Advantages working with us</MyTitle>
                </div>
                <div className="advantages-working__content content">
                    <div className="content__image">
                        <img src={Img} alt="" />
                    </div>
                    <div className="content__text">
                        {text.map(item =>
                            <p key={item.id}>{item.text}</p>
                        )}
                    </div>
                </div>
                <div className="advantages-working__button" onClick={openModal}>
                    <MyButton>Receive a consultation</MyButton>
                </div>
            </div>
        </>
    );
};

export default AdvantagesWorking;