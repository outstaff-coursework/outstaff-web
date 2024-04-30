import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UserInfo from './urls/user_info/user_info.js';
import Login from './urls/login/login.js';
import NotFound from './urls/not_found/not_found.js';
import Calendar from './urls/calendar/calendar.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/calendar/*' element={<Calendar />} />
            <Route path='/user/*' element={<UserInfo />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound name='404' text='Страница не найдена' />} />
        </Routes>
    </BrowserRouter>
);
