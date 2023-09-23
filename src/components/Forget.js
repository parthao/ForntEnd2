import { useState,useEffect } from 'react';
import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import axios from "axios";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useHistory } from "react-router-dom";
import userService from '../service/user.service';


function Forgot() {
    const [validx1, setValid1] = useState({ emailval: "", passval: "" ,cpassval:""})
    const [forget, setForget] = useState({ email: "", pass: "" ,cpass:""})
    const [listEmail, setEmails] = useState([])
    var history = useHistory();
    var i=0;
    const [OTP, setOTP] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var onSubmit = () => {
        var i = 0;
        if (forget.email == "") {
            setValid1(prevState => ({
                ...prevState,
                emailval: "Please enter Email"
            }));
            i = 0;
        }
        else {
            setValid1(prevState => ({
                ...prevState,
                emailval: ""
            }));
            i = i + 1;
        }

        if (forget.pass == "") {
            setValid1(prevState => ({
                ...prevState,
                passval: "Please enter Password"
            }));
            i = 0;
        }
        else {
            setValid1(prevState => ({
                ...prevState,
                passval: ""
            }));
            i = i + 1;
        }

        if (forget.cpass == "") {
            setValid1(prevState => ({
                ...prevState,
                cpassval: "Please enter Confirm Password"
            }));
            i = 0;
        }
        else {
            setValid1(prevState => ({
                ...prevState,
                cpassval: ""
            }));
            i = i + 1;
        }

        if (forget.cpass != forget.pass) {
            setValid1(prevState => ({
                ...prevState,
                cpassval: "Confirm Password and Password not match"
            }));
            i = 0;
        }
        else {
            setValid1(prevState => ({
                ...prevState,
                cpassval: ""
            }));
            i = i + 1;
        }

        if (i == 4) {
            verify();
        }
    }

    useEffect(() => {
        userService
          .AllUser()
          .then(response => {
            console.log(response.data)
            setEmails(response.data);
            debugger
          })
          .catch(error => console.log(error));
    
    
      }, [])

    const handleCheckOTP = () => {
        var userData = {
            email:forget.email,
            pass:forget.pass,
            OTP :OTP
        }
       // debugger

       userService
            .OTPME(userData)
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

    var verifyEmail =()=>
    {
       // i=0;
        console.log(listEmail);
        debugger
        listEmail.map((k)=>{
            
            if(k==forget.email)
            {
                setValid1({emailval:" "});
                 i = 1;
                 
            }
            
            if(i!=1)
            {
                debugger
                setValid1({emailval:"Please Check your email Address!!!!!"});
                
            }
        })
      
    }

    var verifyEmailMain =()=>
    {
       // i=0;
        console.log(listEmail);
        debugger
        listEmail.map((k)=>{
            
            if(k==forget.email)
            {
                setValid1({emailval:" "});
                 i = 1;
                 onSubmit();
            }
            
            if(i!=1)
            {
                debugger
                setValid1({emailval:"Please Check your email Address!!!!!"});
                
            }
        })
      
    }

    var verify =()=>
    {
        handleShow();
        var userData = {
            email:forget.email,
            pass:forget.pass
        }
        debugger

        userService
            .ForgetME(userData)
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
                    <input type="text" className="emailselect" name="pass" placeholder="Enter New Password" onChange={OnTextChanged} value={forget.pass} onClick={verifyEmail}/>
                    <div style={{ textAlign: "left", color: "red", marginBottom: "30px" }}>{validx1.passval}</div>

                    <div style={{ textAlign: "left" }}><label><b>Confirm Password</b></label></div>
                    <input type="password" placeholder="Enter Confirm Password" name="cpass" value={forget.cpass} onChange={OnTextChanged} />
                    <div style={{ textAlign: "left", color: "red", marginBottom: "30px" }}>{validx1.cpassval}</div>

                    <input type="button" value="SUBMIT" className="submitx" onClick={verifyEmailMain} />

                    
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
