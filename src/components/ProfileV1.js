import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './style/profile.css'
import updprofile from "./Images/updprofile.png"
import updpass from "./Images/change-password-icon.png"
import order from "./Images/history.png"
import exit from "./Images/exit.png"
import { useHistory } from "react-router-dom";

function ProfileV1() {
    var history = useHistory();
    var Logout=()=>
    {
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
            history.push("/home");
            history.go("/home");
    }

    return (
        <div>
            <div className='row'>
                <div className='myacc2 col-sm-12 col-xs-12 col-md-12'>My Account</div>
            </div>
                <div className='row maintabdiv'>

                    <div className='mytab col-sm-12 col-xs-12 col-md-3'>
                        <img className='forimg ' src={updprofile}></img>
                        <div className='labeling'>Update Profile</div>
                    </div>

                    

                    <div className='mytab col-sm-12 col-xs-12 col-md-3'>
                        <img className='forimg' src={order}></img>
                        <div className='labeling'>Order History</div>
                    </div>

                    <div className='mytab col-sm-12 col-xs-12 col-md-3' onClick={Logout}>
                        <img className='forimg' src={exit}></img>
                        <div className='labeling'>Logout</div>
                    </div>
                </div>
            </div>
        



    )

}
export default ProfileV1;