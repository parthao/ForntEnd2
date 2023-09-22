import "../style/logodiv.css"
import "../style/myfont.css"
import "../style/searchx.css"
import "../style/nav.css"
import "./style/footer.css"
import logo from "../images/natraj123.png"
function Footer() {
    return (
        <div className="divx">
            <span className='col-mob-logo desk-col-logo'><img src={logo} width="134" height="134" alt="Timeless Tresure"></img></span>
            <div className='logofont  col-mob-logo-text desk-col-logo-text'>Timeless<br></br>Treasures</div>
            <div style={{marginLeft:"3%",marginRight:"3%"}}>
                Follow Us

            </div>
        </div>  
    )
}
export default Footer