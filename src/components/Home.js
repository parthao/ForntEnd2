import "./style/home.css"
import coin from "./Images/coin.png"
import art from "./Images/Arti.png"
import paint from "./Images/Paint.png"
import "./style/currentAuc.css"
import Product from "./ProductCard"
import axios from "axios";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react"
import Ban1 from "../images/banner1.png"
import Ban2 from "../images/banner2.png"
import productService from '../service/product.service';

function Home() {
  
  
  var [product, setProd] = useState([]);

  useEffect(() => {
    productService
      .getAll()
      .then(response => {
        console.log(response.data)
        setProd(response.data);
        debugger
      })
      .catch(error => console.log(error));


    // axios
    //   .get("http://localhost:8292/api/Product")
    //   .then(response => {
    //     console.log(response.data)
    //     setProd(response.data);
    //     debugger
    //   })
    //   .catch(error => console.log(error));

  }, [])

  return (
    <div>

      <div className="imagediv">
        <img  className="imagediv" src={Ban2}></img>
      </div>


      <div className="logodiv" style={{ position: "relative" }}>
        <img src={coin} className="mainlogo"></img>
        <img src={art} className="mainlogo"></img>
        <img src={paint} className="mainlogo"></img>
      </div>

      <div className="headline">Current Auction<hr></hr></div>

      <div className="currentAuc1">
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
          {product.map((k) => {
            return (
              <SwiperSlide>
                <Product exact imagex={k.p_imgloc} heading={k.p_name} deatils={k.p_descp} productid={k.p_id}></Product>
              </SwiperSlide>
            )

          })}

        </Swiper>

      </div>

      <div className="imagediv">
      <img  className="imagediv" src={Ban1}></img>

      </div>

      <div className="headline">Coin<hr></hr></div>

      <div className="currentAuc1">
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
          {product.map((k) => {
            if (k.p_category == "c") {
              return (
                <SwiperSlide>
                  <Product exact imagex={k.p_imgloc} heading={k.p_name} deatils={k.p_descp} productid={k.p_id}></Product>
                </SwiperSlide>
              )
            }
          })}

        </Swiper>

      </div>

      <div className="headline">Painting<hr></hr></div>

      <div className="currentAuc1">
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
         {product.map((k) => {
            if (k.p_category == "p") {
              return (
                <SwiperSlide>
                  <Product exact imagex={k.p_imgloc} heading={k.p_name} deatils={k.p_descp} productid={k.p_id}></Product>
                </SwiperSlide>
              )
            }
          })}

        </Swiper>

      </div>

      <div className="headline">Artifacts <hr></hr></div>

      <div className="currentAuc1">
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
         {product.map((k) => {
            if (k.p_category == "a") {
              return (
                <SwiperSlide>
                  <Product exact imagex={k.p_imgloc} heading={k.p_name} deatils={k.p_descp} productid={k.p_id}></Product>
                </SwiperSlide>
              )
            }
          })}

        </Swiper>

      </div>


    </div>


  )
}
export default Home