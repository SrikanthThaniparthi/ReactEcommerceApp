import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "../admin/helper/CartHelper";
import ImageHelper from "./helper/ImageHelper";


const Card = ({
    product, addtoCart = true,
    removeCart = false

}) => {
    console.log("Products", product);

    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(product.count)


    const addToCart = () => {
        addItemToCart(product, () => setRedirect(true));
    }

    const getRedirect = (redirect) => {

        if (redirect) {
            return <Redirect to="/cart" />
        }
    }



    const removeItems = () => {
        removeItemFromCart(product._id);
        window.location.reload()
    }



    const showAddtoCart = addtoCart => {
        return (
            addtoCart && (
                <button
                    onClick={addToCart}
                    className="btn btn-block btn-outline-success mt-2 mb-2"
                >
                    Add to Cart
                </button>
            )
        )
    }

    const showRemoveFromCart = (removeCart) => {
        return (

            removeCart && <button
                onClick={removeItems}
                className="btn btn-block btn-outline-danger mt-2 mb-2"
            >
                Remove from cart
            </button>
        )
    }


    return (
        <div className="card text-white bg-dark border border-info ">
            <div className="card-header lead text-center">{product.name}</div>
            <div className="card-body">
                <div className="rounded border border-success p-2">
                    {getRedirect(redirect)}
                    <ImageHelper product={product} />
                </div>
                <p className="lead bg-success font-weight-normal text-wrap">
                    {product.description}
                </p>
                <p className="btn btn-success rounded  btn-sm px-4">$ {product.price}</p>
                <div className="row">
                    <div className="col-12">
                        {showAddtoCart(addtoCart)}
                    </div>
                    <div className="col-12">
                        {showRemoveFromCart(removeCart = true)}
                    </div>
                </div>
            </div>
        </div>




    );
};





export default Card;