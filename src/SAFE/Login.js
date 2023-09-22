import { useState } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { useHistory } from "react-router-dom";
function Login() {
    var history = useHistory();
    const [loginx1, setLoginx] = useState({ mobileno: "", pin: "" })
    const [mobix ,setMobi] = useState("");
    const [pin ,setPin] = useState("");


    var OnTextChanged = (args) => {
        var copyoflogin = {...loginx1};
        copyoflogin[args.target.name] = args.target.value;
        setLoginx(copyoflogin);
    }
    var validx =()=>
    {
        var i="true"

        if(loginx1.mobileno == "")
        {
            setMobi("Please Insert Values");
            i="false"
        }
        else
        {
            setMobi("");
            i="true"
        }

        if(loginx1.pin == "")
        {
            setPin("Please Insert Values");
            i="false"
        }
        else
        {
            setPin("");
            i="true"
        }

        if(i=="true")
        {
            loginx();
        }
        else{

        }
        debugger
    }

    var loginx = () => {
     var helper = new XMLHttpRequest;
        helper.onreadystatechange = () => {
            if (helper.status == 200 && helper.readyState == 4) {
                var data = JSON.parse(helper.responseText)
                console.log(data.length==1)
                debugger
                if(data.length==1)
                {

                    window.sessionStorage.setItem("isUserLoggedIn" , "true");
                   window.sessionStorage.setItem("userid" , data[0].custid);
                   window.sessionStorage.setItem("username" , data[0].custname);
                   window.sessionStorage.setItem("usermobi" , data[0].mobileno);
                   window.sessionStorage.setItem("userpin" , data[0].pin);
                    history.push("/profile");
                }
                else
                {
                    console.log("BAd situation")
                    window.sessionStorage.setItem("isUserLoggedIn" , "false");
                }
            }
        }
        helper.open("POST", "http://localhost:5000/login")
        helper.setRequestHeader("content-type","application/json");
        helper.send(JSON.stringify(loginx1));
    }


    return (
        <div>
            <table>
                <tr>
                    <td>Mobile Number:</td>
                    <td> <input type="number" name="mobileno" onChange={OnTextChanged} value={loginx1.mobileno}></input> <div>{mobix}</div></td>
                </tr>
                <tr>
                    <td>Pin:</td>
                    <td><input type="password" name="pin" onChange={OnTextChanged} value={loginx1.pin}></input> <div>{pin}</div></td>
                </tr>
                <tr>
                    <td colSpan={2}><button type="button" className='btn btn-primary' onClick={validx}>Sing In</button></td>
                </tr>
            </table>

        </div>
    )
}
export default Login