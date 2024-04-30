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
            peoples: [],
        }
    }

    changeSearchWord(search_word) {
        if (search_word == '') {
            this.setState({peoples: []})
            return
        }
        let url = base_url + '/users/' + search_word;
        axios.get(url).then(res => {
            let data = res.data;
            let new_peoples = []
            data['items'].forEach(element => {
                new_peoples.push(
                    <div className='header-content-left-search-list-item'>
                        <a href={'/user/' + String(element.user_id)}>
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

    genSearchList() {
        
    }

    getSearchList() {
        if (this.state.peoples == []) {
            return
        }
        return this.state.peoples
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
                    <div className='header-content-right' />
                </div>
            </div>
        );
    }
}

export default Header;
