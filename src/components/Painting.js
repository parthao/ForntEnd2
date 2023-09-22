import { useEffect, useState } from "react"
import productService from '../service/product.service';
import Product from "./ProductCard"
function Painting()
{
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
    return(
        <div>
            <div className="row">
                <div className="currauc">All Painting</div>
            </div>
            <div className="row">
             {product.map((k) => {
            if (k.p_category == "p") {
              return (
                
                <Product exact imagex={k.p_imgloc} heading={k.p_name} deatils={k.p_descp} productid={k.p_id}></Product>
                
              )
            }
          })}
        </div>
        </div>
    )
}
export default Painting