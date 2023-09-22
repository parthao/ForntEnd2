import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react"
import ReactDOM from 'react-dom/client';
import Admin from "./Admin"
import admintService from '../service/admin.service';

export default function AutionPage(props) {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndtDate, setSelectedEndDate] = useState(null);
    const [autionx1, setAuctionx] = useState({ p_id: ""})
    var [product,setProd] = useState([]);
    var [disp,setDisp] = useState("none");

    var OnTextChanged = (args) => {
        var copyofauction = { ...autionx1 };
        copyofauction[args.target.name] = args.target.value;
        setAuctionx(copyofauction);
    }

    useEffect(() => {
      admintService
          .getProduct(props.id)
          .then(response => {
            console.log(response.data)
            setProd(response.data);
            debugger
          })
          .catch(error => console.log(error));
      }, [])

      const startMinDate = () => {
        const today = new Date().toISOString().split('T')[0];
        return today;
    };

    const endMinDate = () => {
      
      const today = selectedStartDate;
      return today;
  };

  var onCancle = () =>
  {
    const root = ReactDOM.createRoot(document.getElementById('root'));
                        root.render(<Admin></Admin>);
  }
    
    var onSubmit = () =>
    {
      const prod = {
       product_p_id:product.p_id,
        start_date:selectedStartDate,
        end_date:selectedEndtDate
      }
    debugger
    admintService
        .addAuction(prod)
        .then(async response => {
          console.log(response.data)
          debugger
          const root = ReactDOM.createRoot(document.getElementById('root'));
                        root.render(<Admin></Admin>);
  
        })
        .catch(error => {
          console.log(error.data)
        }
        );
    }
  return (
    <div className='row' style={{marginTop:"10px"}}>
        <div className='col-md-6'>
           <div class="jumbotron">
            <div class="container">
                <img src={product.p_imgloc} width={300}></img>
                <h1>{product.p_name}</h1>
                <h2>Cost :- {product.base_price}</h2>
                
            </div>
           </div>
        </div>
    
        <div className="col-md-5" >
           
            <center>
                <h1 className="minhead" style={{marginTop:"10px" ,marginLeft:"20px",marginRight:"20px"}}>Timeless Treasure</h1>
            </center>

            <div style={{ textAlign: "left" }}> <label ><b>Aution Starting Date</b></label></div>
            <input type="date" className="emailselect" name="start"  onChange={(e) => {setSelectedStartDate(e.target.value);setDisp("block")}} min={startMinDate}/>
            <div style={{ textAlign: "left", color: "red", marginBottom: "30px" }}></div>

            <div style={{display: disp}}>
            <div style={{ textAlign: "left" }}><label><b>Aution Ending Date</b></label></div>
            <input type="date" className="emailselect" name="end"  onChange={(e) => setSelectedEndDate(e.target.value)}  min={endMinDate()}/>
            <div style={{ textAlign: "left", color: "red", marginBottom: "30px" }}></div>
            </div>
            
            <input type="button" value="SUBMIT" className="submitx" onClick={onSubmit} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="CANCLE" className="submitx" onClick={onCancle} />

           
        </div>
    
</div>
  )
}
