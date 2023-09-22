import "./style/intxt.css"
import "./style/myDiv.css"
import "./style/myfont.css"
import "./style/font.css"
import "./style/tdMenu.css"
import "./fonts/natraj.ttf"
import { Component } from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import logo from './images/natraj123.png';
import states from "./Json/states-and-districts.json"
import states1 from "./Json/state-districts.json"
import { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"
import userService from './service/user.service';
import { useHistory } from "react-router-dom";

function Registration() {
    var history = useHistory();
    const [statex, setStatex] = useState(states)
    const [statex1, setStatex1] = useState(states1)
    const [disct, setDist] = useState([])
    const [userregi, setUserregi] = useState([{ fnamex: "", lnamex: "", pass_w: "", emailx: "", mobilex: "", usraddress: "", pincode: "", country: "", user_type: "u" }])
    const [locate, setLocate] = useState([{ city: "", statex: "" }]);
    const [validx1, setValid1] = useState({ usrtype: "", passval: "" })
    const [errorValid, setErrror] = useState(false);
    const [successValid, setSuccess] = useState(false);
    
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );



    const validation = () => {

        if (userregi.user_type != undefined) {
            DoRegister();
        }
        else {
            setValid1(prevState => ({
                ...prevState,
                usrtype: "Please Select User"
            }));
        }
    }

    const DoRegister = () => {
        const userData = {
            f_name: userregi.fnamex,
            l_name: userregi.lnamex,
            pass_w: userregi.pass_w,
            email: userregi.emailx,
            mobile: userregi.mobilex,
            usraddress: userregi.usraddress,
            pincode: userregi.pincode,
            city: locate.city,
            statex: locate.statex,
            country: "India",
            type: userregi.user_type
        };

        userService
            .RegisMe(userData)
            .then(async response => {
                console.log(response.data)
                debugger
                if (response.data != "ER_DUP_ENTRY") {
                    //Email();
                    setSuccess(true);
                    // axios
                    // .post("http://localhost:9898/customers/reset", userData)
                    // .then(async response => {console.log(response.data)})
                    // .catch(error => {console.log(error.data)});
                    await delay(5000);
                    history.push("/profile");
                }
                else {
                    setErrror(true);
                }
            })
            .catch(error => {
                console.log(error.data)
            }
            );
    }

    const Email = () => {
        const userData = {
            fnamex: userregi.fnamex,
            lnamex: userregi.lnamex,
            emailx: userregi.emailx,
            user_type: userregi.user_type
        };

        userService
            .EmailMe(userData)
            .then(response => {
                console.log(response.data)
                

            })
            .catch(error => console.log(error));
    }

    const onTextChange = (e) => {
        setValid1(prevState => ({
            ...prevState,
            usrtype: ""
        }));

        var copyAll = { ...userregi };
        copyAll[e.target.name] = e.target.value;
        setUserregi(copyAll);
    }


    const handleState = (e) => {

        const getstateId = e.target.value;

        const getDist = states1.states.find(states => states.id === getstateId).districts
        const getStat = states1.states.find(states => states.id === getstateId)
        //const distName = getDist.map(k=> k.name)
        setLocate({ statex: getStat.name });
        setDist(getDist);
        // setCountryid(getstateId);
        debugger
        //console.log(getcountryId);
    }

    const handledist = (e) => {
        const dist = e.target.value;

        const myDist = statex1.states.find(states => states.name == locate.statex).districts.find(districts => districts.id == dist).name
        setLocate({ city: myDist, statex: locate.statex });
        console.log(myDist);
        debugger
        //setStateid(stateid);

    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setErrror(false);
        }, 5000);
    }, [errorValid]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSuccess(false);
            
        }, 5000);
    }, [successValid]);

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 720px)' })
    const Desktop = useMediaQuery({ query: '(min-width: 1200px)' })

    return (
        <div style={{ marginBottom: 100 }}>

            {
                <center>
                    <div className="mydiv">

                        <table>
                            <tr>
                                <td colSpan="2">
                                    <center>
                                        <h1 className="headx" >Registration</h1>
                                    </center>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <center><img src={logo} width="300" height="300" alt="Timeless Tresure"></img></center>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <center>
                                        <h1 className="minhead" >Timeless Treasure</h1>
                                    </center>
                                </td>
                            </tr>
                            <tr>
                                <td class="myTD">
                                    <label className="myLab" >First Name</label>
                                    <input type="text" placeholder="Enter First Name" className="textselect" name="fnamex" value={userregi.fnamex} onChange={onTextChange} />
                                </td>



                                <td class="myTD">
                                    <label for="l_name" className="myLab">Last Name</label>
                                    <input type="text" placeholder="Enter Last Name" className="textselect" name="lnamex" value={userregi.lnamex} onChange={onTextChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mydiv2" id="divFname" style={{ color: "red" }}></div>
                                </td>
                                <td>
                                    <div className="mydiv2" id="divLname" style={{ color: "red" }}></div>
                                </td>
                            </tr>
                            <tr>
                                <td class="myTD">
                                    <label className="myLab">Email</label>
                                    <input type="email" placeholder="Enter Email Address" className="emailselect" name="emailx" value={userregi.emailx} onChange={onTextChange} />
                                </td>
                                <td class="myTD">
                                    <label className="myLab">Mobile</label>
                                    <input type="number" placeholder="Enter Mobile Number" className="numberselect" name="mobilex" value={userregi.mobilex} onChange={onTextChange} />

                                </td>
                            </tr>
                            <tr>

                                <td>
                                    <div className="mydiv2" id="divUname" style={{ color: "red" }}></div>
                                </td>

                                <td>
                                    <div className="mydiv2" id="divEmail" style={{ color: "red" }}></div>
                                </td>
                            </tr>
                            <tr>
                                <td className="myTD">
                                    <label for="country" className="myLab">Country</label>
                                    <select className="userselect">
                                        <option>India</option>
                                    </select>

                                </td>
                                <td class="myTD">

                                    <label for="state" className="myLab">State</label>
                                    <select style={{ width: "100%" }} name='statex' onChange={(e) => handleState(e)} className="userselect" >
                                        <option value="" >--Select State--</option>
                                        {
                                            statex1.states.map((getstate, index) => (
                                                <option value={getstate.id} key={index}>{getstate.name}</option>
                                            ))

                                        }
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mydiv2" id="divMobile" style={{ color: "red" }}></div>
                                </td>
                                <td>
                                    <div className="mydiv2" id="divCity" style={{ color: "red" }}></div>
                                </td>
                            </tr>
                            <tr>
                                <td className="myTD">
                                    <label for="city" className="myLab">City</label>
                                    <select name='districs' onChange={(e) => handledist(e)} className="userselect">
                                        <option value="">--Select City--</option>
                                        {
                                            disct.map((getDistx, index) => (<option value={getDistx.id} key={index}>{getDistx.name}</option>))
                                        }


                                    </select>
                                </td>
                                <td className="myTD">
                                    <label for="pin" className="myLab">Pincode</label>
                                    <input type="number" id="numPin" placeholder="Enter Pincode" name="pincode" value={userregi.pincode} onChange={onTextChange}></input>

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mydiv2" id="divState" style={{ color: "red" }}></div>
                                </td>
                                <td>
                                    <div className="mydiv2" id="divCountry" style={{ color: "red" }}></div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" className="myTD">
                                    <label for="address" className="myLab">Address</label>
                                    <textarea className="txtarea" id="w3review" name="usraddress" rows="3" placeholder="Enter Address" value={userregi.usraddress} onChange={onTextChange}></textarea>

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mydiv2" id="divAddress" style={{ color: "red" }}></div>
                                </td>
                            </tr>
                            <tr>
                                <td className="myTD">
                                    <label for="password" className="myLab">Password</label>
                                    <input type="password" id="pswd" placeholder="Enter Password" name="pass_w" value={userregi.pass_w} onChange={onTextChange}></input>

                                </td>
                                <td className="myTD">
                                    <label for="password" className="myLab">Confirm Password</label>
                                    <input type="password" id="pswd" placeholder="Enter Password" name="pass_w" value={userregi.pass_w} onChange={onTextChange}></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mydiv2" id="divPin" style={{ color: "red" }}></div>
                                </td>
                                <td>
                                    <div className="mydiv2" id="divPassword" style={{ color: "red" }}></div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}><label><b>User Type</b></label>
                                    <select style={{ width: "100%" }} name='user_type' className="userselect" onChange={onTextChange}>
                                        <option value="">--Select User--</option>
                                        <option value="u">Customer</option>
                                        <option value="a">Artist</option>
                                        <option value="c">Coin Seller</option>
                                        <option value="p">Painter</option>
                                    </select>
                                    <div style={{ textAlign: "left", color: "red", marginBottom: "30px" }}>{validx1.usrtype}</div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" style={{ textAlign: "center" }}>
                                    <center><input type="button" value="SUBMIT" onClick={validation}></input></center>
                                </td>
                            </tr>
                        </table>

                    </div>

                    <div>
                        {errorValid && (
                            <div class="alert alert-danger" role="alert" style={{ marginTop: "50px" }}>
                                Email address aready Exist!!!!!!
                            </div>
                        )}

                        {successValid && (
                            <div class="alert alert-success" role="alert" style={{ marginTop: "50px" }}>
                                Thank You for Registration
                            </div>
                        )}
                    </div>
                </center>}
            {/* Desktop End */}

            {/* Mobile Start ↓ */}


            {/* {isTabletOrMobile &&
                <div>
                    <center><h1 className="headx" >Registration</h1></center>
                    <center><img src={logo} width="300" height="300" alt="Timeless Tresure"></img></center>
                    <center><h1 className="minhead" >Timeless Treasure</h1></center>

                    <label for="f_name" className="myLab" >First Name</label>
                    <input type="text" id="txtFname" placeholder="Enter First Name" className="textselect"></input>

                    <label for="l_name" className="myLab">Last Name</label>
                    <input type="text" id="txtLname" placeholder="Enter Last Name" className="textselect"></input>


                    <label for="email" className="myLab">Email</label>
                    <input type="email" id="emailAdd" placeholder="Enter Email Address" className="emailselect"></input>

                    <label for="mobile" className="myLab">Mobile</label>
                    <input type="number" id="mobileNo" placeholder="Enter Mobile Number"></input>


                    <label for="country" className="myLab">Country</label>
                    <select className="userselect">
                        <option>India</option>
                    </select>

                    <label for="state" className="myLab">State</label>
                    <select style={{ width: "100%" }} name='states' onChange={(e) => handleState(e)} className="userselect">
                        <option value="">--Select State--</option>
                        {
                            statex1.states.map((getstate, index) => (
                                <option value={getstate.id} key={index}>{getstate.name}</option>
                            ))

                        }
                    </select>

                    <label for="city" className="myLab">City</label>
                    <select name='statex' onChange={(e) => handledist(e)} className="userselect" >
                        <option value={userregi.statex}>--Select City--</option>
                        {
                            disct.map((getDistx, index) => (<option value={getDistx.id} key={index}>{getDistx.name}</option>))
                        }
                    </select>



                    <label for="pin" className="myLab">Pincode</label>
                    <input type="number" id="numPin" placeholder="Enter Pincode"></input>


                    <label for="address" className="myLab">Address</label>
                    <textarea className="txtarea" id="w3review" name="w3review" rows="3" placeholder="Enter Address"></textarea>


                    <label for="password" className="myLab">Password</label>
                    <input type="password" id="pswd" placeholder="Enter Password"></input>

                    <label for="password" className="myLab">Confirm Password</label>
                    <input type="password" id="pswd" placeholder="Enter Password"></input>

                    <select style={{ width: "100%" }} name='user' className="userselect">
                        <option value="Customer">Customer</option>
                        <option value="Artist">Artist</option>
                        <option value="Coin">Coin Seller</option>
                        <option value="Painter">Painter</option>
                    </select>

                    <center><input type="button" value="SUBMIT" onClick={DoRegister}></input></center>

                </div>
            } */}

        </div>




    )

}
export default Registration