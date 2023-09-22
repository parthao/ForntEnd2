import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import "../style/artist.css"
import { useEffect, useState } from "react"
import axios from "axios";
import productService from '../../service/product.service';

export default function ArtistProfile() {
  var userID = window.localStorage.getItem("ID");
  var userType = window.localStorage.getItem("utype");
  var first = window.localStorage.getItem("first");
  var last = window.localStorage.getItem("last");
  var emailID = window.localStorage.getItem("emailID");
  var address = window.localStorage.getItem("address");
  var pincode = window.localStorage.getItem("pincode");
  var city = window.localStorage.getItem("city");
  var statex = window.localStorage.getItem("statex");
  var country = window.localStorage.getItem("country");
  var [product,setProd] = useState([]);
  debugger
  useEffect(() => {
    const ID = {
      usr_id: userID
    }
    productService
    .getUserProduct(ID)
      .then(response => {
        console.log(response.data)
        setProd(response.data);
      })
      .catch(error => console.log(error));
  }, [])

  var DoDelete = ()=>
  {

  }
  return (
    <div>
      <div class="jumbotron">
        <div className='container profile'>
          <div className='row'>
            <h1 className='headd' style={{ color: 'black' }}>{userType == "a" ? "Artist" : userType == "p" ? "Painter" : userType == "c" ? "Coin Seller" : ""} Profile</h1>
            <div className='row'><div className='col-md-6'>First Name: {first}</div>  <div className='col-md-6'>Last Name: {last}</div></div>
            <div className='row'><div>Email: {emailID}</div></div>
            <div className='row'><div className='col-md-6'>Country: {country}</div>  <div className='col-md-6'>State: {statex}</div></div>
            <div className='row'><div className='col-md-6'>City: {city}</div> <div className='col-md-6'>Pincode: {pincode}</div></div>

            <div className='row'><div className='col-md-12'>Address: {address}</div></div>

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
         {product.map(e =>{
          return(
            <tr>
              <td>{e.p_id}</td>
              <td>{e.p_name}</td>
              <td>{e.base_price}</td>
              <td>{<button onClick={()=>{DoDelete(e.p_id);}} className="btn btn-danger">Delete</button>}</td>
            </tr>
          )
         })}
        </tbody>
      </table>
      
    </div >




  )
}
