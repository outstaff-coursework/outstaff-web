import React from "react";
import Header from '../../components/header/header.js';
import Footer from '../../components/footer/footer.js';
import {base_url} from "../../constants.js";
import Stripe from "../../stripe.js"
import data from '../../data.json';
import axios from "axios";
import './calendar.css';

class Calendar extends React.Component {
    render() {
        return (
            <>
                <Header />
                    <div className='calendar'>
                        <div className='calendar-data'>
                            <div className='calendar-data-panel'>
                                <h6>23</h6>
                                <span>Апреля</span>
                            </div>
                            <div className='calendar-data-space'>
                                <Stripe data={data} is_horizontal={false} date={'2024-04-23'} />
                            </div>
                        </div>

                        <div className='calendar-data'>
                            <div className='calendar-data-panel'>
                                <h6>24</h6>
                                <span>Апреля</span>
                            </div>
                            <div className='calendar-data-space'>
                                <Stripe data={data} is_horizontal={false} date={'2024-04-24'} />
                            </div>
                        </div>

                        <div className='calendar-data'>
                            <div className='calendar-data-panel'>
                                <h6>25</h6>
                                <span>Апреля</span>
                            </div>
                            <div className='calendar-data-space'>
                                <Stripe data={data} is_horizontal={false} date={'2024-04-25'} />
                            </div>
                        </div>

                        <div className='calendar-data'>
                            <div className='calendar-data-panel'>
                                <h6>26</h6>
                                <span>Апреля</span>
                            </div>
                            <div className='calendar-data-space'>
                                <Stripe data={data} is_horizontal={false} date={'2024-04-26'} />
                            </div>
                        </div>

                        <div className='calendar-data'>
                            <div className='calendar-data-panel'>
                                <h6>27</h6>
                                <span>Апреля</span>
                            </div>
                            <div className='calendar-data-space'>
                                <Stripe data={data} is_horizontal={false} date={'2024-04-27'} />
                            </div>
                        </div>

                        <div className='calendar-data'>
                            <div className='calendar-data-panel'>
                                <h6>28</h6>
                                <span>Апреля</span>
                            </div>
                            <div className='calendar-data-space'>
                                <Stripe data={data} is_horizontal={false} date={'2024-04-28'} />
                            </div>
                        </div>

                        <div className='calendar-data'>
                            <div className='calendar-data-panel'>
                                <h6>29</h6>
                                <span>Апреля</span>
                            </div>
                            <div className='calendar-data-space'>
                                <Stripe data={data} is_horizontal={false} date={'2024-04-29'} />
                            </div>
                        </div>
                    </div>
            </>
        );
    }
}

export default Calendar;
