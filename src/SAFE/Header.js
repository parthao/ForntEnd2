import React, { Component } from 'react';
import "./CSS/my.css"
import { Link, Route, Switch } from 'react-router-dom';
import logo from './images/natraj123.png' 
import "./style/logodiv.css"
import "./style/myfont.css"
import "./style/searchx.css"
import "./style/nav.css"
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import MyProtection from './MyProtection';
import Profile from './Profile';
import { useMediaQuery } from 'react-responsive'

function Header() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return (
        
        <div>
            <div className="row container">
                <img src={logo} width="134" height="134" alt="Timeless Tresure" className='col-md-2 col-sm-12' ></img>
                <div className='logofont col-md-3 col-sm-12 center-block'>Timeless<br></br>Treasures</div>
                <div className='col-md-5 col-sm-12'><input name="" value="" className='srch' placeholder='Search Products......'></input></div><div className='cirser col-md-2' style={{ zIndex: '1' }}></div>
            </div>

            <div className='bar'>
                <div className="container">
                    <div className='row col-sm-12'>
                        <div className='col-md-1 textx'>Home</div>
                        <div className='col-md-1 coming'>Coming Auction</div>
                        <div className='col-md-1 textx'>Coin</div>
                        <div className='col-md-1 coming'>Artifacts</div>
                        <div className='col-md-1 coming'>Painting</div>
                        <div className='col-md-1 coming'>Contact Us</div>
                        <div className='col-md-1 coming'>About Us</div>
                    </div>

                </div>

            </div>

            <Switch>
                <MyProtection exact path="/profile" component={Profile} />
            </Switch>


        </div>
    )
}
export default Header;