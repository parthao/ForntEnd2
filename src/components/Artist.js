import React from 'react'
import logo from "../images/natraj123.png"
import "./style/artist.css"
import proff from "./Images/profile.png"
import addpord from "./Images//addproduct.png"
import edit from "./Images/edit.png"
import updatepass from "./Images/change-password-icon.png"
import Landing from '../LandingV1';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import ArtistProfile from './Artist/ArtistProfile'
import { Link, Route ,Switch} from 'react-router-dom/cjs/react-router-dom.min'
import AddProduct from './Artist/AddProduct'
import AritstUpdate from './Artist/AritstUpdate'
import ArtistPass from './Artist/ArtistPass'


function Artist() {
 
  var first = window.localStorage.getItem("first");
  var last = window.localStorage.getItem("last");
  var userType = window.localStorage.getItem("utype");
  


  const logout = () => {

    window.localStorage.removeItem("isUserLoggedIn", "true");
    window.localStorage.removeItem("first");
    window.localStorage.removeItem("last");
    window.localStorage.removeItem("emailID");
    window.localStorage.removeItem("pass");
    window.localStorage.removeItem("address");
    window.localStorage.removeItem("pincode");
    window.localStorage.removeItem("utype");
    window.localStorage.removeItem("city");
    window.localStorage.removeItem("statex");
    window.localStorage.removeItem("country");
    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
       <BrowserRouter><Landing /></BrowserRouter>
    );
   
  }

  return (
    <BrowserRouter>
    <div>
      <div className='row'>
        <div className='col-md-3 fixed-top back' style={{ height: "100%" }}>
          <div className='row'>
            <div className='col-md-12 cent'>
              <img className="logo" src={logo} />
            </div>
            <div className='headd' style={{ marginTop: -30 }}>Welcome</div>
            <div className='headd'>{first} {last}</div>
            <div className='headd' style={{ fontSize: 20, marginTop: -4 }}>{userType == "a" ? "Artist" : userType == "p" ? "Painter" : userType == "c" ? "Coin Seller" : ""} .</div>
            <hr></hr>
          </div>
          <div className='row'>
            <Link className="linkx" to="/myprofile2"><div className='col-md-12 smtext'>
              <img className="smlogo" src={proff}></img> &nbsp;&nbsp;&nbsp; My Profile
            </div></Link>
          </div>
          <hr></hr>
          <div className='row'>
          <Link className="linkx" to="/addproduct11"><div className='col-md-12 smtext'>
              <img className="smlogo" src={addpord}></img> &nbsp;&nbsp;&nbsp; Add Product
            </div></Link>
          </div>
          <hr></hr>
          <div className='row'>
          <Link className="linkx" to="/updateprofile"><div className='col-md-12 smtext'>
              <img className="smlogo" src={edit}></img> &nbsp;&nbsp;&nbsp; Update Profile
            </div></Link>
          </div>
          <hr></hr>
        <div className='row'>
        <div className='col-md-12 smtext' onClick={logout}>
              <img className="smlogo" src={proff}></img> &nbsp;&nbsp;&nbsp; Logout
            </div>
          </div>
          <hr></hr>
        </div>
        <div class="col-sm-9 offset-sm-3 col-xs-9 offset-xs-3 two">
         <Switch>
          <Route exact path="/myprofile2" component={ArtistProfile}/>
          <Route exact path="/addproduct11" component={AddProduct}/>
          <Route exact path="/updateprofile" component={AritstUpdate}/>
         </Switch>
        </div>
      </div>
    </div>
    </BrowserRouter>




  )
}

export default Artist