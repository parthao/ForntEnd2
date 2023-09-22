import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import "../style/addproduct.css"
import { useState } from 'react';
import storage from '../FireBase';
import { useHistory } from "react-router-dom";
import productService from '../../service/product.service';

function AddProduct(props) {
  var history = useHistory();
  const [image, setImage] = useState('');
  const [Url, setUrl] = useState('');
  const [AddProduct, setProd] = useState([{ title: "", size: "", weight: "", bprice: "", material: "", descp: "" }]);
  var userType = window.localStorage.getItem("utype");
  var userID = window.localStorage.getItem("ID");
   const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

  

  const upload = () => {
    const randomnumber=Math.floor(Math.random()  * (200 - 1 + 1)) + 1;
    if (image == null)
      return;
    storage.ref(`/images/${randomnumber}${image.name}`).put(image)
      .on("state_changed", alert("Success"), alert, () => {
        // Getting Download Link
        storage.ref("images").child(`${randomnumber}${image.name}`).getDownloadURL()
          .then((url) => {
            setUrl(url);
            DoAddProd(url);
          })
      });


  }

  const DoAddProd = (url) => {

    const prod = {
      p_name: AddProduct.title,
      p_descp: AddProduct.descp,
      p_size: AddProduct.size,
      p_weight: AddProduct.weight,
      P_material: AddProduct.material,
      base_price: AddProduct.bprice,
      p_imgloc: url,
      p_category: userType,
      usr_id: userID
    }
  
    productService
      .create(prod)
      .then(async response => {
        console.log(response.data)
        await delay(2000);
        history.push("/myprofile2");

      })
      .catch(error => {
        console.log(error.data)
      }
      );
  }

  const onTextChange = (e) => {
    var copyAll = { ...AddProduct };
    copyAll[e.target.name] = e.target.value;
    setProd(copyAll);
  }

  return (
    
    <div>
      <div>{props.prodid}</div>
      <div className="jumbotron" style={{ marginTop: "20px" }}>
        <div className="container">
          <div className='row'>

            <div className='col-md-4'>
              <div class="label mylable">Product Title</div>
              <div class="input-group">
                <input type="text" class="form-control" id="exampleInputAmount" placeholder="Name" value={AddProduct.title} name="title" onChange={onTextChange} />
              </div>
            </div>

            <div className='col-md-4'>
              <div class="label mylable">Product Size</div>
              <div class="input-group">
                <input type="number" class="form-control" id="exampleInputAmount" placeholder="Size" name="size" value={AddProduct.size} onChange={onTextChange} />
              </div>
            </div>


            <div className='col-md-4'>
              <div class="label mylable">Product Weight</div>
              <div class="input-group">
              </div>
              <input type="number" class="form-control" id="exampleInputAmount" placeholder="Weight" name="weight" value={AddProduct.weight} onChange={onTextChange} />
            </div>
          </div>


          <div className='row'>

            <div className='col-md-4'>
              <div class="label mylable">Product Image</div>
              <div class="input-group">
                <input type="file" class="form-control" id="exampleInputAmount" placeholder="Image Location"  onChange={(e) => { setImage(e.target.files[0]) }} />
              </div>
            </div>

            <div className='col-md-4'>
              <div class="label mylable">Product Price</div>
              <div class="input-group">
                <input type="number" class="form-control" id="exampleInputAmount" placeholder="Base Price" name="bprice" value={AddProduct.bprice} onChange={onTextChange} />
              </div>
            </div>


            <div className='col-md-4'>
              <div class="label mylable">Product Material</div>
              <div class="input-group">
                <input type="text" class="form-control" id="exampleInputAmount" placeholder="Material Type" name="material" value={AddProduct.material} onChange={onTextChange} />
              </div>
            </div>

          </div>

          <div className='row'>
            <div className='col-md-12'>
              <div class="label mylable">Product Description</div>
              <div class="input-group">
                <textarea rows="5" class="form-control" id="exampleInputAmount" placeholder="Product Description" name="descp" value={AddProduct.descp} onChange={onTextChange} />
              </div>
            </div>
          </div>

          <div className='row mydiv100 ' style={{ marginTop: "20px" }}>
            <div>


              &nbsp;&nbsp;
              <button type="button" class="btn btn-primary shiftRight " style={{ marginLeft: "20px" }} onClick={upload}>Add Ptoduct</button>
              <button type="button" class="btn btn-danger shiftRight" >Reset</button>
              &nbsp;&nbsp;

              &nbsp;&nbsp;
            </div>
          </div>


        </div>
      </div>
      
      {/* <img src={Url}></img> */}
    </div>

  )
}

export default AddProduct