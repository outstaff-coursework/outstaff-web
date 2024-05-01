import React from "react";
import axios from "axios";
import {base_url} from "../../constants";
import './login.css';


class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    componentDidMount() {
        document.title = 'Вход';
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(base_url + '/login', {
            username: event.target[0].value,
            password: event.target[1].value
        }, {
            withCredentials: true
        })
        .then(function (response) {
            if (response.status === 200) {
                localStorage.setItem('username', event.target[0].value)
                window.location.replace('user/' + event.target[0].value);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div className='login-background'>
                <div className='login-panel'>
                    <div className='login-panel-strip'>
                        <h6>Вход</h6>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' placeholder='Логин' />
                        <input type='password' placeholder='Пароль' />
                        <button>Войти</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
