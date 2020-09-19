import React from 'react';

function Form() {
    return (
        <form className='form'>
            <h2>Добавьте новое объявление:</h2>
            <label className='form__label' htmlFor='title-input'>Заголовок:</label>
            <input className='form__title-input' id='title-input' type='text' placeholder='' maxLength='140' required/>
            <label className='form__label' htmlFor='content-input'>Текст объявления:</label>
            <textarea className='form__content-input' id='content-input' placeholder='' maxLength='300'/>
            <label className='form__label' htmlFor='phone-input'>Телефон:</label>
            <input className='form__phone-input' id='phone-input' type='tel'
                   pattern='\+7\s([0-9]{3})\s[0-9]{3}\-[0-9]{2}\-[0-9]{2}' required/>
            <label className='form__label' htmlFor='city-select'>Город:</label>
            <select className='form__city-select' id='city-select' placeholder='Выберите город из списка'>
                <option className='form__city-option'>Москва</option>
                <option className='form__city-option'>Санкт-Петербург</option>
                <option className='form__city-option'>Казань</option>
                <option className='form__city-option'>Нижний Новгород</option>
            </select>
            <button className='form__submit-btn' type='submit'>Сохранить</button>
        </form>
    )
}

export default Form

//- Заголовок: не более 140 символов (обязательное поле);
// - Текст объявления: не более 300 символов (необязательное поле);
// - Телефон: номер в формате +7 (ххх) ххх-хх-хх (обязательное поле);
// - Выбор города из списка: Москва, Санкт-Петербург, Казань, Нижний Новгород (необязательное поле);
