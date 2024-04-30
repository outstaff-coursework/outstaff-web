import React from "react";
import './login.css';

import { faro } from '@grafana/faro-web-sdk';

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    componentDidMount() {
        document.title = 'Вход';
    }

    handleClick = () => {
        faro.api.pushError(new Error('Login button not implemented'));
    }

    render() {
        return (
            <div className='login-background'>
                <div className='login-panel'>
                    <div className='login-panel-strip'>
                        <h6>Вход</h6>
                    </div>
                    <form>
                        <input type='text' placeholder='Логин' />
                        <input type='password' placeholder='Пароль' />
                        <button onClick={this.handleClick}>Войти</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
