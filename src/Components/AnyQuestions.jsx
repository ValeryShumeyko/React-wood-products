import React, { useEffect, useState } from 'react';
import '../styles/AnyQuestions.css';
import MyButton from './UI/button/MyButton';
import MyTitle from './UI/title/MyTitle';
import Wood from '../img/wood.png';
import done from '../img/icons/done.png';

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'isPhone':
                    const re = /^((8|\+)[\- ]?)?(\(?\d{0,}\)?[\- ]?)?[\d\-() ]{1,}$/
                    re.test(String(value).toLowerCase()) ? setPhoneError(false) : setPhoneError(true)
                    break;
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || phoneError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }

    }, [isEmpty, phoneError])

    return {
        isEmpty,
        minLengthError,
        phoneError,
        inputValid
    }
}

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = (e) => {
        setDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid,
    }
}

const AnyQuestions = () => {
    const name = useInput('', { isEmpty: true })
    const phone = useInput('', { isEmpty: true, isPhone: true })
    const [thankActive, setThankActive] = useState(false);
    const openModal = () => {
        name.onBlur(true);
        phone.onBlur(true);
        if ((name.isDirty || phone.isDirty) && (name.inputValid && phone.inputValid)) {
            setThankActive(true);
        }
    }

    return (
        <div className='any-questions'>
            <div className="any-questions__title">
                <MyTitle>Any Questions?</MyTitle>
            </div>
            <div className="any-questions__content content">
                {(!thankActive)
                    ?
                    <form className='content__form'>
                        {((name.isDirty && name.isEmpty) || (phone.isDirty && phone.isEmpty)) && <div className='error-text'>Please fill out the required fields</div>}
                        {(phone.isDirty && phone.phoneError) && <div className='error-text'>Please enter a valid phone number</div>}
                        {(name.isDirty && name.isEmpty)
                            ?
                            <input onChange={e => name.onChange(e)} onBlur={e => name.onBlur(e)} value={name.value} style={{ border: '4px solid #6C200B' }} name='name' type="text" placeholder='Your name' className='form-name' />
                            :
                            <input onChange={e => name.onChange(e)} onBlur={e => name.onBlur(e)} value={name.value} name='name' type="text" placeholder='Your name' className='form-name' />
                        }
                        {(phone.isDirty && (phone.isEmpty || phone.phoneError))
                            ?
                            <input onChange={e => phone.onChange(e)} onBlur={e => phone.onBlur(e)} value={phone.value} style={{ border: '4px solid #6C200B' }} name='phone' type="phone" placeholder='Your telephone number' className='form-phone' />
                            :
                            <input onChange={e => phone.onChange(e)} onBlur={e => phone.onBlur(e)} value={phone.value} name='phone' type="phone" placeholder='Your telephone number' className='form-phone' />
                        }
                        <div className="textarea__container">
                            <textarea name="question" className='form-textarea' placeholder='Your question'></textarea>
                        </div>
                        <div className="form-button" onClick={openModal}>
                            <MyButton>Send</MyButton>
                        </div>
                    </form>
                    :
                    <div className='content__thank'>
                        <div className="thank__icon_container">
                            <img src={done} alt="" className='thank__icon' />
                        </div>
                        <h1 className='thank__title'>Thank you for your message!</h1>
                        <p className="thank__text">Your submission is received and we will contact you soon.</p>
                    </div>
                }
                <div className="content__text">
                    <p>Write to us and we will be sure to answer all your questions and give you a comprehensive consultation.</p>
                    <img src={Wood} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AnyQuestions;