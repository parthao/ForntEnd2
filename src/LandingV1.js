import React, { Component } from 'react';
import "./CSS/my.css"
import { Link, Route, Switch } from 'react-router-dom';
import Header from './HeaderV1';
import Home from './components/Home'
import Artifacts from './components/Artifacts'
import Coin from './components/Coin'
import Come from './components/Coming'
import About from './components/About'
import Contact from './components/Contact'
import "./style/rnav.css"
import user from './images/user.png'
import Footer from './components/Footer';
import MyAcc from './components/MyAcc';
import ProfileV1 from './components/ProfileV1';
import Registration from './RegistrationV1'
import ProductPage from './components/ProductPage';
import ProtectedRoute from './ProtectedRoute';
import Forgot from './components/Forget';
import Painting from './components/Painting';



function Landing() {
    return (
        <div>

            <Header className="poss"></Header>

            <div className='rbar fxdiv'>
                <Link className="text marginx" to="/home">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link className="text" to="/come">Coming Auction</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link className="text" to="/coin">Coin</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link className="text" to="/art">Artifacts</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link className="text" to="/paint">Painting</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link className="text" to="/contact">Contact</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link className="text" to="/about">About us</Link>

                <Link className="myacc" to="/profile">My Account  <img src={user} width="30px" height="30px" alt="Timeless Tresure"></img></Link>
            </div>
            <br></br>
            <div style={{ position: "absolute", position: "relative", marginLeft: "3%", marginRight: "3%" }} >
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/come" component={Come} />
                    <Route exact path="/coin" component={Coin} />
                    <Route exact path="/art" component={Artifacts} />
                    <Route exact path="/paint" component={Painting} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/about" component={About} />
                    
                    <ProtectedRoute exact path="/profile" component={ProfileV1} />
                    {/* <Route exact path="/myac" component={MyAcc} /> */}
                    <Route exact path="/reg" component={Registration} />
                    <Route exact path="/product/:id" component={ProductPage} />
                    <Route exact path="/forget" component={Forgot} />
                    {/* <ProtectedRoute exact path="/dashboard" component={Dashboard} /> */}
                    {/* <Route path="*" component={NotFound} /> */}
                </Switch>
            </div>
            <div >
                <Footer></Footer>
            </div>




        </div>
    )
}
export default Landing;