import React from 'react'
import './style/admin.css'
import { useEffect, useState } from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import logo from '../images/natraj123.png'
import Auction from './AutionPage';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Landing from '../LandingV1';
import admintService from '../service/admin.service';

function Admin() {
  var [product, setProd] = useState([]);

  var DoAuction = (id) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Auction id={id}></Auction>);
  }

   var logout = () =>{
            window.localStorage.removeItem("isUserLoggedIn");
            window.localStorage.removeItem("utype");

            const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
       <BrowserRouter><Landing/></BrowserRouter>
    );
   }

  var RemoveAuction =(id) =>{
    admintService
      .delAuction(id)
      .then(response => {
        console.log(response.data)
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Admin></Admin>);
      })
      .catch(error => console.log(error));
  }
  useEffect(() => {
    admintService
      .getAll()
      .then(response => {
        console.log(response.data)
        setProd(response.data);
        debugger
      })
      .catch(error => console.log(error));
  }, [])
  return (
    <div>
      <div class="jumbotron">
        <div className='container adminProfile '>
          <div className='row'>
            <img className='adminlogo col-md-6' src={logo}></img>
            <div className='adminText col-md-8'>Welcome Administrator</div>
            <div className='LogoutText col-md-1' onClick={logout}>Logout</div>
          </div>

        </div>
      </div>
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Title</th>
            <th>Product Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {product.map(e => {
            if(e.AucId == 0)
            {
              return (
                <tr>
                  <td>{e.PId}</td>
                  <td>{e.PName}</td>
                  <td>{e.PCost}</td>
                  <td>{<button onClick={() => { DoAuction(e.PId)}} className="btn btn-info">Add to Auction</button>}</td>
                </tr>
              )

            }
            else{

              return (
                <tr>
                  <td>{e.PId}</td>
                  <td>{e.PName}</td>
                  <td>{e.PCost}</td>
                  <td>{<button onClick={() => { RemoveAuction(e.AucId) }} className="btn btn-danger">Remove from Auction</button>}</td>
                </tr>
              )

            }
           
          })}
        </tbody>
      </table>
    </div>

  )
}

export default Admin