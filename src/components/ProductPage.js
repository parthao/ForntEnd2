
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './style/productpage.css'
import { Rating } from 'react-simple-star-rating'
import { useEffect,useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Product from "./ProductCard";
import 'swiper/css';
import 'swiper/css/navigation';
import  {useHistory, useParams} from 'react-router-dom';
import React from 'react';
import CountdownTimer from './Timer/CountdownTimer';
import { Modal, Button, ModalBody } from 'react-bootstrap'
import productService from '../service/product.service';


function ProductPage(props) {
    const [validx1, setValid1] = useState({ base: "", current: "" })
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const hideClose = () => setShow(false);
    const handleClose = () => {
        setShow(false)
        history.push("/home");
    };

    var params = useParams();
    var history = useHistory();
    
    const [rating, setRating] = useState(0);
    var [product,setProd] = useState([]);
    var [product1,setProd1] = useState([]);
    var [auction,aucProd] = useState([]);
    var [bid,bidProd] = useState([{bidamount: ""}]);
    var [highBid , setHighBid] =  useState(0);
    
    const [DAYS,setDate] = useState();
    const [NOW_IN_MS,setNow] = useState(new Date().getTime());
    const dateTimeAfterThreeDays = NOW_IN_MS + DAYS;

    // Catch Rating value
    const handleRating2 = (rate: number) => {
        setRating(rate)
        
        // other logic
    }
    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value: number, index: number) => console.log(value, index)

    useEffect(() => {
        productService
        .productByID(params.id)
          .then(response => {
            console.log(response.data)
            setProd(response.data);
            
          })
          .catch(error => console.log(error));

          productService
          .GetProductOnJoinFromAuction()
      .then(response => {
        console.log(response.data)
        setProd1(response.data);
        
      })
      .catch(error => console.log(error));

      
      productService
      .GetProducAuctionByID(params.id)
      .then(response => {
        console.log(response.data)
        aucProd(response.data);
        setDate(new Date(response.data.map((k)=>k.end_date)).getTime()-NOW_IN_MS);
        
      })
      .catch(error => console.log(error));


      productService
      .BiddingStoredProcedure(params.id)
      .then(response => {
        console.log(response.data)
       setHighBid(response.data.HighBid);
       
        //debugger
      })
      .catch(error => console.log(error));


      }, []);

      
     

      var onTextChange=(args)=>{
        const copyOfbit = {...bid}
        copyOfbit[args.target.name]=args.target.value;
        bidProd(copyOfbit);
    }

    var bidValidation=()=>{
        var i = 0;
        if(bid.bidamount<highBid)
        {
            setValid1(prevState => ({
                ...prevState,
                current: "Please enter Greater than Current Price"
            }));
            i = 0;
        }
        else
        {
            setValid1(prevState => ({
                ...prevState,
                current: ""
            }));
            i = i + 1;
        }

        if(bid.bidamount<product.base_price)
        {
            setValid1(prevState => ({
                ...prevState,
                base: "Please enter Greater than Base Price"
            }));
            i = 0;
        }
        else
        {
            setValid1(prevState => ({
                ...prevState,
                base: ""
            }));
            i = 1+1;
        }

        if(i==2)
        {
            debugger
            placeBid();
        }
    }

    var placeBid=()=>{
        var bidx={
            usr_id:window.localStorage.getItem("ID"),
            p_id:params.id,
            user_bid_price: bid.bidamount
        }
        debugger
        productService
        .Bid(bidx)
        .then(async response=>{
            console.log(response.data)
            handleShow();

        })
            .catch(error => {
                console.log(error.data)
            }
            );
    }

    return (
        <div>
            {/* <div>{params.id}</div> */}
          
            <div className='row'>
                <div className='row col-sm-12 col-xs-12 col-md-6'>
                    <img className='col-sm-12 col-md-12 col-xs-12' src={product.p_imgloc}>
                    </img>
                    
                    
                </div>

                <div className='col-sm-12 col-md-6'>
                    <div className='pagehead'>{product.p_name}</div>
                    <div className='details'>{product.p_descp}</div>
                    <div>Artist Name </div>
                    <div className='demo'>
                        <Rating
                            allowFraction
                            onClick={handleRating2}
                            onPointerEnter={onPointerEnter}
                            onPointerLeave={onPointerLeave}
                            onPointerMove={onPointerMove}
                        /* Available Props */
                        />
                        <hr></hr>
                    </div>
                    <div className='row'>
                        <div className='base  col-sm-12 col-md-6'>Base Price </div> <div className='bprice  col-sm-12 col-md-6'>₹{product.base_price} </div>
                        <div style={{ textAlign: "left", color: "red", marginBottom: "30px" }}>{validx1.base}</div>
                    </div>
                    <div className='row'>
                        <div className='base  col-sm-12 col-md-6'>Current Price </div> <div className='bprice  col-sm-12 col-md-6'>₹{highBid} </div>
                        <div style={{ textAlign: "left", color: "red", marginBottom: "30px" }}>{validx1.current}</div>
                    </div>
                    <hr></hr>
                    <div className='row'>
                        <div className='col-sm-12 col-md-10'><input type="number" placeholder="Enter Amount" name="bidamount" className='bprice' onChange={onTextChange} value={bid.bidamount}/> </div>
                    </div>
                    
                    <div className='row'>
                        <CountdownTimer targetDate={dateTimeAfterThreeDays}/>
                        <div className='base  col-sm-12 col-md-10'>  <input type="button" value="Place Bid" className="submitx" onClick={bidValidation} /></div>
                    </div>

                </div>
            </div>
            <div className='row'>
                | <div className='bdatils col-sm-6 col-md-2'>About the Product</div> |<div className='bdatils col-sm-6 col-md-2'>Product Details</div>|
                <hr></hr>
            </div>
            <div className='row'>
                <div className='btext'><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p></div>
            </div>

            <div className='row'>
                <div className='similar'>Similar Products</div>

            </div>
            <div className='row'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={3}
                    navigation
                    breakpoints={{
                        // when window width is >= 340px
                        340: {
                            width: 200,
                            spaceBetween: 100,
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            width: 768,
                            slidesPerView: 3,
                        },
                        // when window width is >= 1040px
                        1040: {
                            width: 1040,
                            slidesPerView: 3,
                        },
                    }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')} >
                    {product1.map((k) => {
            if (k.p_category == product.p_category && k.p_id!=params.id) {
              return (
                <SwiperSlide>
                  <Product exact imagex={k.p_imgloc} heading={k.p_name} deatils={k.p_descp} productid={k.p_id}></Product>
                </SwiperSlide>
              )
            }
          })}

                </Swiper>

            </div>


            <Modal show={show} onHide={hideClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thank You For Bidding</Modal.Title>
                    </Modal.Header>

                    <ModalBody>
                    <div>Thank you for participating in our auction! Your bid is greatly appreciated. May the highest bidder win, and good luck to all!</div>
                    </ModalBody>
                    
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            OK
                        </Button>
                        
                    </Modal.Footer>
                </Modal>



        </div >
    )
}
export default ProductPage