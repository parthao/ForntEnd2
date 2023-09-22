import { Route } from "react-router-dom";
import Login from "./Login";
import ProfileV1 from "./components/ProfileV1";


function MyProtection(props)
{
    var userStatus = window.localStorage.getItem("isUserLoggedIn");
   
    console.log(userStatus);
    if(userStatus != null && userStatus != undefined && userStatus =="true")
    {
        
            return <ProfileV1></ProfileV1>;
        
        // return <Route exact path={props.path} 
        //     component={props.component}/>;
        
    }
    else
    {

        return <Login></Login>
    }
}
export default MyProtection