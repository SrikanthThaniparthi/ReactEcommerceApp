import React, { useEffect, useState } from "react";
import "../styles.css"
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";
import { loadCart } from "../admin/helper/CartHelper";

export default function Home() {

  console.log("API", API);
  const [product, setProduct] = useState([])




  useEffect(() => {
    getAllProducts()
  }, [])




  const getAllProducts = () => {
    getProducts().then(data => {
      if (data.error) {
        console.log("error")
      }
      else {
        setProduct(data);
        console.log(data);
      }
    })
  }


  return (
    <Base tittle="Home Page" description="welcome to t-shirt store">
      <div className="row">
        {product.map((prod, index) => {
          return(
            <div key={index} className="col-4">
            <Card product={prod} />
          </div>
          )
        })}
      </div>

    </Base>

  );
}
