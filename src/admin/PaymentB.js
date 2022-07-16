import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenicated } from "../auth/helper";
import { createOrder } from "../core/helper/OrderHelper";
import { getToken, processPayment } from "../core/helper/PaymentBhelpr";
import { emptyCart, loadCart } from "./helper/CartHelper";
import DropIn from "braintree-web-drop-in-react";








const PaymentB = ({ products }) => {
    debugger
    console.log(products)

    const [info, setInfo] = useState({
        loading: false,
        success: false,
        clientToken: null,
        error: "",
        instance: {}
    })

    const userId = isAuthenicated() && isAuthenicated().user._id
    const token = isAuthenicated() && isAuthenicated().token

    useEffect(() => {
        getmyToken(userId, token);
        getAmount()
    }, [])


    const onPurchase = () => {
        setInfo({ loading: true })

        let nonce;
        debugger
        const getNonce = info.instance.requestPaymentMethod().then(data => {
                // nonce = data.nonce;
                console.log("nonse",data);
                const paymentData = {
                    paymentMethodNonce: data.nonce,
                    amount:getAmount()
                }
                console.log("payment",paymentData)
                processPayment(userId,token,paymentData).then(data=>{
  

                    console.log("response",data);
                    setInfo({...info,success:data.success})
                })
                .catch(err=>{
                    setInfo({...info,error:true,success:false,loading:false})
                })
            })
    }



    const getAmount = () => {
        let amount = 0
        products.map(product => {
            amount = amount + product.price
        })
        return amount;
    }

    const showDropInUi = () => {
        return (
            <div>

                {info.clientToken != null && products.length != 0 ?

                    (
                        <div>
                            <DropIn
                                options={{ authorization: info.clientToken }}
                                onInstance={(instance) => (info.instance = instance)}
                            />
                            <button className="btn btn-lg btn-outline-success " onClick={onPurchase}>Buy</button>
                        </div>
                    )
                    :
                    (
                        <div>
                            <h1>Add Something to Your Cart</h1>
                        </div>
                    )




                }
            </div>
        )
    }


    const getmyToken = (userId, token) => {
        getToken(userId, token).then(response => {

            console.log("info", response)
            if (response.error) {
                setInfo({ ...info, error: response.error })
            }
            else {
                const clientToken = response.clientToken;
                setInfo({ clientToken })
                console.log(info);
            }

        })
    }


    return (
        <div>
            <h3> You Bill Amount {getAmount()}$</h3>
            {showDropInUi()}
        </div>

    )
}


export default PaymentB;