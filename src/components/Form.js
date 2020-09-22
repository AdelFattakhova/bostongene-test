import React from 'react';
import Inputmask from "inputmask";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            content: '',
            phone: '',
            city: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState(
            {
                title: document.getElementById('title-input').value,
                content: document.getElementById('content-input').value,
                phone: document.getElementById('phone-input').value,
                city: document.getElementById('city-select').value
            }
        )
    }

    render() {
        window.addEventListener('DOMContentLoaded', () => {
            const phoneInput = document.getElementById('phone-input');
            let im = new Inputmask("+7 (999) 999-99-99");
            im.mask(phoneInput);
        });

        return (
            <form className='form' id='form' onChange={this.handleChange}
                  onSubmit={(e) => {
                      e.preventDefault();
                      let phoneInput = document.getElementById('phone-input');
                      if (phoneInput.value.includes('_')) {
                          const error = document.createElement('span');
                          error.className = 'form__error';
                          error.innerText = 'Поле заполнено неверно!';
                          phoneInput.before(error);
                      } else {
                          if (document.getElementsByClassName('form__error')[0]) {
                              document.getElementsByClassName('form__error')[0].remove();
                          }
                          this.props.saveNewPosting(this.state.title, this.state.content,
                              this.state.phone, this.state.city);
                      }
                  }}>
                <h2 className='form__title'>Добавьте новое объявление:</h2>
                <label className='form__label form__label_req' htmlFor='title-input'>Заголовок: (макс. 140
                    символов)</label>
                <input className='form__input' id='title-input' type='text' maxLength='140' required/>
                <label className='form__label' htmlFor='content-input'>Текст объявления: (макс. 300 символов)</label>
                <textarea className='form__textarea' id='content-input' maxLength='300'/>
                <label className='form__label form__label_req' htmlFor='phone-input'>Телефон:</label>
                <input className='form__input' id='phone-input' type='tel' placeholder='+7 (___) ___-__-__'
                       required/>
                <label className='form__label' htmlFor='city-select'>Город:</label>
                <select className='form__select' id='city-select' defaultValue=''>
                    <option className='form__city-option' disabled></option>
                    <option className='form__city-option'>Москва</option>
                    <option className='form__city-option'>Санкт-Петербург</option>
                    <option className='form__city-option'>Казань</option>
                    <option className='form__city-option'>Нижний Новгород</option>
                </select>
                <button className='form__submit-btn' type='submit'>Сохранить
                </button>
            </form>
        )
    }
}

export default Form
