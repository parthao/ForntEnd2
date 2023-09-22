import "./style/selection.css"
import coin from "./Images/coin.png"
import art from "./Images/Arti.png"
import paint from "./Images/Paint.png"
import user from "./Images/team.png"
import { useHistory } from "react-router-dom";
function Selection() {
    var history = useHistory();

    function changeBackground1(e) {
        e.target.style.background = 'red';
      }
      function changeBackground2(e) {
        e.target.style.background = '#c09c5d';
      }
    return (
        <div >
            <center>
                <div className="selecttab">
                    <div className="maintab" /*onMouseEnter={changeBackground1} onMouseLeave={changeBackground2}*/><img src={user} className="mainlogo1"></img><br></br><h5 className="h5Header">User</h5></div>
                    <div className="maintab" /*onMouseOver={changeBackground1} onMouseLeave={changeBackground2}*/><img src={art} className="mainlogo1"></img><br></br><h5 className="h5Header">Artist</h5></div>
                    <div className="maintab" /*onMouseOver={changeBackground1} onMouseLeave={changeBackground2}*/><img src={paint} className="mainlogo1"></img><br></br><h5 className="h5Header">Painter</h5></div>
                </div>
            </center>
        </div>
    )
}
export default Selection