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
            login: event.target[0].value,
            lastName: event.target[1].value
        })
        .then(function (response) {
            console.log(response);
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
