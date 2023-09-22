import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
//import Login from './Login';
import Profile from './Profile';
import Registration from './RegistrationV1';
//import Reactivex from './Reactive';
//import Header from './HeaderV1';
import Landing from './LandingV1';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   // <BrowserRouter><Login /></BrowserRouter>
    <BrowserRouter><Landing/></BrowserRouter>
);


