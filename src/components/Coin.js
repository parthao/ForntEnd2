import Product from "./ProductCard"
import coinn from "../Json/product.json"
import "./style/coinpage.css"
import { useEffect, useState } from "react"
import productService from '../service/product.service';
function Coin() {
    var [product, setProd] = useState([]);


    useEffect(() => {
        productService
            .GetAllProduct()
            .then(response => {
                console.log(response.data)
                setProd(response.data);
            })
            .catch(error => console.log(error));
    }, [])
    return (
        <div>
            <div className="row">
                <div className="currauc">All Coins</div>
            </div>
            <div className="row">

                {product.map((k) => {
                    if (k.p_category == "c") {
                        return (

                            <Product exact imagex={k.p_imgloc} heading={k.p_name} deatils={k.p_descp} productid={k.p_id}></Product>

                        )
                    }
                })}


            </div>
        </div>
    )
}
export default Coin