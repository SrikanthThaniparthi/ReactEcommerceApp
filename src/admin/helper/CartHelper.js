import { API } from "../../backend";


export const addItemToCart = (item, next) => {

    let cart = [];
    debugger
    if (typeof window != undefined) {
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"))
        }
        cart.push({ ...item, count: 1 });
        debugger
        localStorage.setItem("cart", JSON.stringify(cart));
        next()
    }
    debugger
}


export const loadCart = () => {
    let cart = [];
    if (typeof window != undefined) {
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"))
        }
        return cart;
    }
}



export const removeItemFromCart = (productId) => {
    let cart = []

    if (typeof window != undefined) {
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"))
        }
        cart.map((product, index) => {
            if (product._id == productId) {
                cart.splice(index, 1);
            }
        })
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    return cart;
}



export const emptyCart = next => {

    if (typeof window != undefined) {
        localStorage.removeItem('cart');
        next();
    }


}