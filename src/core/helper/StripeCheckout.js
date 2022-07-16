import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { emptyCart, loadCart } from "../../admin/helper/CartHelper";
import { isAuthenicated } from "../../auth/helper";
import StripeCheckoutButton from "react-stripe-checkout";
import { API } from "../../backend";
import { createOrder } from "../../core/helper/OrderHelper"

const StripeCheckout = ({ products }) => {

    const [data, setData] = useState(
        {
            loading: false,
            success: false,
            error: false,
            address: ""
        }
    )

    const { user, token } = isAuthenicated()
    // const userId = isAuthenicated().user._id;

    const getFinalPrice = () => {
        debugger
        let amount = 0;

        products.map((produt, index) => {
            amount = produt.price + amount
        })
        console.log("amount", amount)
        return amount;


    }


    const makePayment = (token) => {


        const body = {
            token,
            products,
        }
        const headers = {
            "Content-Type": "application/json"
        }
        return fetch(`${API}/stripepayment`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        }).then(response => {
            console.log("response", response);
        }).catch(err => console.log(err))

        //
    }


    const showStripeButton = () => {
        return isAuthenicated() ? (
            <StripeCheckoutButton stripeKey="pk_test_51LLVgLSIZPGMuewvkYMhIiF4i1RyAnPTezSNinDvASxiKaKi686kmJgD1eE2sEmjBreT9OJlpiggXuwMCmB7VOZv00tjAK93nK" token={makePayment} amount={getFinalPrice() * 100} name="Buy T shirts" shippingAddress="" billingAddress>
                <button className="btn btn-success">Pay with Stripe</button>
            </StripeCheckoutButton>


        ) : (
            <Link to="/signin">
                <button className="btn btn-warning">Sign In</button>
            </Link>
        )
    }


    const myErrorMessage = () => {

    }

    return (
        <div>
            <h1>Stripe Checkout {getFinalPrice()}</h1>

            <h5>{showStripeButton()}</h5>
        </div>
    );
}

export default StripeCheckout;