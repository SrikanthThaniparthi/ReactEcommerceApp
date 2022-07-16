import React, { useEffect, useState } from "react";
import "../styles.css"
import { API } from "../backend";
import Base from "../core/Base";
import Card from "../core/Card";
import { loadCart } from "./helper/CartHelper";
import StripeCheckout from "../core/helper/StripeCheckout";
import PaymentB from "./PaymentB";



const Cart = () => {

    console.log("API", API);
    const [products, setProduct] = useState([])

    useEffect(() => {
        setProduct(loadCart())
        console.log("cart", setProduct(loadCart()));
    }, [])



    const loadAllProdcuts = () => {

        return (
            <div>
                <h2>this section is load to products</h2>
                {products && products.map((product, index) => {
                    return (

                        <Card key={index} product={product} removeCart={true} addtoCart={false}></Card>

                    )
                })}
            </div>
        )
    }



    const loadCheckOut = () => {
        return (
            <div>
                <h2>this section is Checkout</h2>
            </div>
        )
    }

    return (
        <Base tittle="Cart Page" description="Ready to CheckOut">
            <div className="row">
                <div className="col-6">
                    {loadAllProdcuts()}
                </div>
                <div className="col-6">
                    {loadCheckOut()}
                    <StripeCheckout products={products} />

                    <PaymentB products={products}/>
                </div>
            </div>

        </Base>

    );
}


export default Cart;