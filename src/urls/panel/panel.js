import React from "react";
import Header from '../../components/header/header.js';
import Footer from '../../components/footer/footer.js';
import NotFound from '../not_found/not_found.js';
import './panel.css';
import {base_url} from "../../constants.js";
import Stripe from "../../stripe.js"

import axios from "axios";


class Panel extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(base_url + '/register', {
            username: event.target[0].value,
            password: event.target[1].value,
            is_admin: false,
            first_name: event.target[2].value,
            last_name: event.target[3].value,
            patronymic: event.target[4].value,
            email: event.target[5].value,
            phone_number: event.target[6].value,
            telegram: event.target[7].value,
            position: event.target[8].value,
            photo_url: event.target[9].value,
            name_of_unit: event.target[10].value,
            date_of_birth: event.target[11].value,
            start_date: event.target[12].value,
            meta: '',
            manager_username: 0,
            user_about: '',
        }, {
            withCredentials: true
        })
    }


    render() {
        return (
            <>
                <Header />
                <div className='page'>
                    <h1>Добавить пользователя</h1>
                    <div className='page-panel'>
                        <form onSubmit={this.handleSubmit}>
                            <input type='text' placeholder='Логин' />
                            <input type='password' placeholder='Пароль' />
                            <input type='text' placeholder='Имя' />
                            <input type='text' placeholder='Фамилия' />
                            <input type='text' placeholder='Отчество' />
                            <input type='text' placeholder='Электронная почта' />
                            <input type='text' placeholder='Телефон' />
                            <input type='text' placeholder='Telegram-адрес' />
                            <input type='text' placeholder='Должность' />
                            <input type='text' placeholder='URL фотографии' />
                            <input type='text' placeholder='Полная должность' />
                            <input type='text' placeholder='Дата рождения' />
                            <input type='text' placeholder='Дата выхода на работу' />
                            <button>Добавить</button>
                        </form>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Panel;
