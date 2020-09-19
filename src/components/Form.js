import React from 'react';
import IMask from 'imask';

class Form extends React.Component {
    render() {
        window.addEventListener('DOMContentLoaded', () => {
            const phoneInput = document.getElementById('phone-input');
            console.log(phoneInput);
            let phoneMask = IMask( phoneInput,
                {
                    mask: '+{7} (000) 000-00-00'
                });
        });
        return (
            <form className='form'>
                <h2>Добавьте новое объявление:</h2>
                <label className='form__label' htmlFor='title-input'>Заголовок:</label>
                <input className='form__title-input' id='title-input' type='text' maxLength='140' required/>
                <label className='form__label' htmlFor='content-input'>Текст объявления:</label>
                <textarea className='form__content-input' id='content-input' maxLength='300'/>
                <label className='form__label' htmlFor='phone-input'>Телефон:</label>
                <input className='form__phone-input' id='phone-input' type='tel' placeholder='+7 (___) ___-__-__'
                       required/>
                <label className='form__label' htmlFor='city-select'>Город:</label>
                <select className='form__city-select' id='city-select'>
                    <option className='form__city-option' disabled selected>Выберите город из списка</option>
                    <option className='form__city-option'>Москва</option>
                    <option className='form__city-option'>Санкт-Петербург</option>
                    <option className='form__city-option'>Казань</option>
                    <option className='form__city-option'>Нижний Новгород</option>
                </select>
                <button className='form__submit-btn' type='submit'>Сохранить</button>
            </form>
        )
    }

}

export default Form
