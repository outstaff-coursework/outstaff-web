import React from "react";
import './header.css';
import {base_url} from "../../constants";
import logo from '../../resources/logo.png'

import axios from "axios";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded_search: false,
            loaded_logout: false,
            logged_in: false,
            peoples: [],
        }
    }

    changeSearchWord(search_word) {
        if (search_word == '') {
            this.setState({peoples: []})
            return
        }
        let url = base_url + '/users/' + search_word;
        axios.get(url, {
            withCredentials: true
        }).then(res => {
            let data = res.data;
            let new_peoples = []
            data['items'].forEach(element => {
                new_peoples.push(
                    <div className='header-content-left-search-list-item'>
                        <a href={'/user/' + String(element.username)}>
                            <div className='header-content-left-search-list-item-a'>
                                <span className='header-content-left-search-list-item-name'>{element.name}</span>
                                <span className='header-content-left-search-list-item-position'>{element.position}</span>
                            </div>
                        </a>
                    </div>
                )
            });
            this.setState({peoples: new_peoples})
        }).catch(error => {
            console.log(error);
        });
    }

    getSearchList() {
        if (this.state.peoples == []) {
            return
        }
        return this.state.peoples
    }

    getUserPanel() {
        let username = localStorage.getItem('username')
        if (username === '') {
            return (
                <span href='/login'>Войти</span>
            )
        } else {
            return (
                <span>{username}</span>
            )
        }
    }

    getLogout() {
        if (!this.state.loaded_logout) {
            return
        }
        return (
            <div className='header-content-right-logout-panel-logout' onClick={(event) => {
                localStorage.setItem('username', '')
                window.location.replace('/login');
            }}>
                <span>Выйти</span>
            </div>
        )
    }

    render() {
        return (
            <div className='header'>
                <div className='header-content'>
                    <div className='header-content-left'>
                        <div className='header-content-left-logo-section'>
                            <div className='header-content-left-logo-section-logo'>
                                <img src={logo} alt='logo' />
                            </div>
                            <h5 className='header-content-left-logo-section-name'>Outstaff</h5>
                        </div>
                        <input type='text' placeholder='🔍 Поиск...' className='header-content-left-search' onChange={(event) => {this.changeSearchWord(event.target.value)}} />
                        <div className='header-content-left-search-list'>{this.getSearchList()}</div>
                    </div>
                    <div className='header-content-right' >
                        <div className='header-content-right-user-panel' onClick={(event) => {
                            if (localStorage.getItem('username') === '') {
                                window.location.replace('/login');
                            }
                            this.setState({loaded_logout: !this.state.loaded_logout})
                        }}>{this.getUserPanel()}</div>
                        <div className='header-content-right-logout-panel'>{this.getLogout()}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
