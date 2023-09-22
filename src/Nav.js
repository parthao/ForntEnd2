
import "./CSS/my.css"
import "./style/rnav.css"
import { Link } from 'react-router-dom';
import user from './images/user.png'

function Nav()
{
    return(
        <div className='rbar'>
            <Link className="text marginx" to="/profile" >Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="text">Coming Auction</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="text">Coin</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="text">Artifacts</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="text">Painting</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="text">Contact</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="text">About us</Link>
            <div className="myacc">My Account  <img src={user} width="30px" height="30px" alt="Timeless Tresure"></img></div>
        </div>
    )
}
export default Nav