import { useState } from 'react';
import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import axios from "axios";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useHistory } from "react-router-dom";


function Forgot() {
    const [validx1, setValid1] = useState({ emailval: "", passval: "" })
    const [forget, setForget] = useState({ email: "", pass: "" ,cpass:""})
    var history = useHistory();

    const [OTP, setOTP] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleCheckOTP = () => {
        var userData = {
            email:forget.email,
            pass:forget.pass,
            OTP :OTP
        }
       // debugger

        axios
            .put("http://localhost:8292/api/OTPMatch", userData)
            .then(response => {
                console.log(response.data)
                if(response.data == "Change")
                {
                    history.push("/profile");
                }
                else{

                }
            })
            .catch(error => console.log(error));

       // setShow(false)
    };

    var verify =()=>
    {
        handleShow();
        var userData = {
            email:forget.email,
            pass:forget.pass
        }
        debugger

        axios
            .post("http://localhost:8292/api/ForgetPass", userData)
            .then(response => {
                console.log(response.data)
                
            })
            .catch(error => console.log(error));
    }


    var OnTextChanged = (args) => {
        var copyoflogin = { ...forget };
        copyoflogin[args.target.name] = args.target.value;
        setForget(copyoflogin);
    }



    return (
        <div className='container d-flex justify-content-center'>
            <div className="shadow p-3 mb-5 bg-white rounded col-md-7 ">
                <div className='row' style={{ padding: "20px" }}>
                    <div style={{ textAlign: "left" }}> <label ><b>Email Address</b></label></div>
                    <input type="text" className="emailselect" name="email" placeholder="Enter New Password" onChange={OnTextChanged} value={forget.email} />
                    <div style={{ textAlign: "left", color: "red", marginBottom: "30px" }}>{validx1.emailval}</div>

                    <div style={{ textAlign: "left" }}> <label ><b>New Password</b></label></div>
                    <input type="text" className="emailselect" name="pass" placeholder="Enter New Password" onChange={OnTextChanged} value={forget.pass} />
                    <div style={{ textAlign: "left", color: "red", marginBottom: "30px" }}>{validx1.emailval}</div>

                    <div style={{ textAlign: "left" }}><label><b>Confirm Password</b></label></div>
                    <input type="password" placeholder="Enter Confirm Password" name="cpass" value={forget.cpass} onChange={OnTextChanged} />
                    <div style={{ textAlign: "left", color: "red", marginBottom: "30px" }}>{validx1.passval}</div>

                    <input type="button" value="SUBMIT" className="submitx" onClick={verify} />

                    
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>OTP Verification</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                            <div>
                <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} secure={false} renderInput={(props) => <input {...props} />}/>
        </div>
                            </div>


                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleCheckOTP}>
                                Check
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </div>
            </div>
        </div>



    );
}
export default Forgot;
