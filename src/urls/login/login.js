import React from "react";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import {base_url} from "../../constants";
import 'react-toastify/dist/ReactToastify.css';
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

        const notify_error = () => toast.error('Неправильный логин или пароль!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
        });

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
            return (notify_error());
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
                <ToastContainer />
            </div>
        );
    }
}

export default Login;
