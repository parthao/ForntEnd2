import React, { Component } from 'react';
import "./CSS/my.css"
import { Link, Route, Switch } from 'react-router-dom';
import logo from './images/natraj123.png'
import "./style/logodiv.css"
import "./style/myfont.css"
import "./style/searchx.css"
import "./style/nav.css"
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import "./reactive/mobile.css"
import "./reactive/desk.css"

function Header() {
   
    var userStatus = window.localStorage.getItem("isUserLoggedIn");
    var first = window.localStorage.getItem("first");
    var last = window.localStorage.getItem("last");

    var Welcome = () => {
        if (userStatus != null && userStatus != undefined && userStatus == "true") {
            return (<div className='desk-welcome mobi-search'>Welcome<br></br><div style={{ fontSize: "20px" }}>{first} {last}</div></div>)
        }
        else {

        }
    }

    return (
        <div>
            <div >
                <span className='col-mob-logo desk-col-logo'><img src={logo} width="134" height="134" alt="Timeless Tresure"></img></span>
                <div className='logofont  col-mob-logo-text desk-col-logo-text'>Timeless<br></br>Treasures</div>
                <div><input name="" value="" className='desk-search mobi-search' placeholder='Search Products......'></input></div>
                {
                    Welcome()
                }   
                
            </div>
        </div>
    )
}
export default Header;