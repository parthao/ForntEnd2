import { useState } from "react"
import "./style/card.css"
import { useHistory } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Modal, Button, ModalBody } from 'react-bootstrap'



function Product(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        history.push("/profile");
    };
    const handleShow = () => setShow(true);
    const hideClose = () => setShow(false);


    var history = useHistory();
    var id = props.productid;
    var productPage = () => {
        var userType = window.localStorage.getItem("utype");
        var userStatus = window.localStorage.getItem("isUserLoggedIn")
       
        if (userStatus != null && userStatus != undefined && userStatus == "true") {
            history.push("/product/" + id);
            history.go("/product/" + id );
        }
        else {
            debugger
            handleShow()
        }
    }

    return (
        <div className="carddiv">
            {/* <div className="cardbuttondiv"><img className="cardimg" src={require(`${props.imagex}`)}></img></div> */}
            <div className="cardbuttondiv"><img className="cardimg" src={props.imagex}></img></div>
            <div className="cardheading">{props.heading}</div>
            <div className="textcss">{props.deatils.toString().substring(0, 100) + "....."}</div>
            <div><button className="cardbutton" onClick={productPage}>Bid Now</button></div>

            <Modal show={show} onHide={hideClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Please Login First</Modal.Title>
                    </Modal.Header>

                    <ModalBody>
                    <div>Step into the World of Bidding Excitement: Secure your access to exclusive auctions by logging in now! Your winning opportunities await beyond the login page. Join our vibrant community of bidders and start placing your bids on unique treasures. Embrace the thrill of online auctions – login today to start bidding and winning!</div>
                    </ModalBody>
                    
                    <Modal.Footer>
                        <Button variant="secondary" onClick={hideClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            SignIn/SignUP
                        </Button>
                    </Modal.Footer>
                </Modal>
        </div>
    )
}
export default Product