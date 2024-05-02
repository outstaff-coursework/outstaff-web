import React from "react";
import Header from '../../components/header/header.js';
import {base_url} from "../../constants.js";
import Stripe from "../../stripe.js"
import axios from "axios";
import './calendar.css';

class Calendar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            data_list: [],
            dates: []
        }
    }

    loadInfo() {
        if (this.state.id == '') {
            return
        }
        let url = base_url + '/calendar/' + this.state.id + '?count=7';
        axios.get(url, {
            withCredentials: true
        }).then(res => {
            let data = res.data;
            this.setState({
                data_list: data.events,
                dates: data.dates
            })
        }).catch(error => {
            console.log(error);
            this.setState({
                is_error: true,
                error_name: error.response.status,
            });
            if (error.response.status === 401) {
                window.location.replace('/login');
            }
            if (error.response.status === 404) {
                this.setState({
                    error_text: 'Пользователь не найден',
                });
            } else {
                this.setState({
                    error_text: 'Произошла ошибка. Попробуйте позже',
                });
            }
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.id !== this.state.id) {
            document.title = this.state.id;
            this.loadInfo();
        }
    }

    componentDidMount() {
        let path = window.location.pathname;
        for (let i = path.length - 1; i > -1; --i) {
            if (path[i] === '/') {
                this.setState({id: path.slice(i + 1, path.length)});
                break;
            }
        }
    }

    getDayAndMonth(idx) {
        let month_to_name = {
            '01': 'Января',
            '02': 'Февраля',
            '03': 'Марта',
            '04': 'Апреля',
            '05': 'Мая',
            '06': 'Июня',
            '07': 'Июля',
            '08': 'Августа',
            '09': 'Сентября',
            '10': 'Октября',
            '11': 'Ноября',
            '12': 'Декабря',
        }
        if (this.state.dates.length <= idx) {
            return (
                <div className='calendar-data-panel'>
                    <h6>...</h6>
                    <span>...</span>
                </div>
            )
        }
        let year_month_day = this.state.dates[idx].split('-')
        return (
            <div className='calendar-data-panel'>
                <h6>{year_month_day[2]}</h6>
                <span>{month_to_name[year_month_day[1]]}</span>
            </div>
        )
    }

    getStripe(idx) {
        if (this.state.dates.length <= idx) {
            return (
                <></>
            )
        }
        let data = []
        for (let i = 0; i < this.state.data_list.length; i++) {
            if (this.state.data_list[i].start_date === this.state.dates[idx]) {
                let obj = this.state.data_list[i]
                let end_time = obj.end_time.slice(0, obj.end_time.length - 3)
                let participants = obj.participants
                for (let j = 0; j < participants.length; j++) {
                    participants[j] = participants[j].slice(7, participants[j].length)
                }
                if (end_time == '00:00') {
                    end_time = '23:59'
                }
                data.push({
                    start: obj.start_time.slice(0, obj.start_time.length - 3),
                    end: end_time,
                    name: obj.summary,
                    description: obj.description,
                    participants: obj.participants
                })
            }
        }
        let readonly = false
        let username = localStorage.getItem('username')
        if (username != this.state.id) {
            readonly = true
        }
        return (
            <Stripe data={{meetings: data}} is_horizontal={false} date={this.state.dates[idx]} readonly={readonly} />
        )
    }

    render() {
        return (
            <>
                <Header />
                <div className='calendar' style={{ zIndex: '10' }}>
                    <div className='calendar-data' style={{ zIndex: '900' }}>
                        {this.getDayAndMonth(0)}
                        <div className='calendar-data-space'>
                            {this.getStripe(0)}
                        </div>
                    </div>

                    <div className='calendar-data' style={{ zIndex: '800' }}>
                        {this.getDayAndMonth(1)}
                        <div className='calendar-data-space'>
                            {this.getStripe(1)}
                        </div>
                    </div>

                    <div className='calendar-data' style={{ zIndex: '700' }}>
                        {this.getDayAndMonth(2)}
                        <div className='calendar-data-space'>
                            {this.getStripe(2)}
                        </div>
                    </div>

                    <div className='calendar-data' style={{ zIndex: '600' }}>
                        {this.getDayAndMonth(3)}
                        <div className='calendar-data-space'>
                            {this.getStripe(3)}
                        </div>
                    </div>

                    <div className='calendar-data' style={{ zIndex: '500' }}>
                        {this.getDayAndMonth(4)}
                        <div className='calendar-data-space'>
                            {this.getStripe(4)}
                        </div>
                    </div>

                    <div className='calendar-data' style={{ zIndex: '400' }}>
                        {this.getDayAndMonth(5)}
                        <div className='calendar-data-space'>
                            {this.getStripe(5)}
                        </div>
                    </div>

                    <div className='calendar-data' style={{ zIndex: '300' }}>
                        {this.getDayAndMonth(6)}
                        <div className='calendar-data-space'>
                            {this.getStripe(6)}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Calendar;
