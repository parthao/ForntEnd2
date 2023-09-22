import { Route } from "react-router-dom";
//import Login from "./Login";
import MyAcc from "./components/MyAcc";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Artist from "./components/Artist";
import Admin from "./components/Admin"

function ProtectedRoute(props)
{
    var userType = window.localStorage.getItem("utype");
    var userStatus = window.localStorage.getItem("isUserLoggedIn")
    
    if(userStatus != null && userStatus != undefined && userStatus =="true")
    {
        if(userType!="u")
        {
            if(userType == "ADMIN")
            {
                const root = ReactDOM.createRoot(document.getElementById('root'));
                root.render(<Admin></Admin>);
            }
            else{
                const root = ReactDOM.createRoot(document.getElementById('root'));
                        root.render(<Artist></Artist>);
            }
            
        }
        else{
            return <Route exact path={props.path} 
            component={props.component}/>;
        }
        
    }
    else
    {

        return <MyAcc></MyAcc>
    }
}
export default ProtectedRoute