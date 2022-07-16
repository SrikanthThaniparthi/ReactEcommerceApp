import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenicated } from "../auth/helper";
import Base from "../core/Base"
import { getaProdct, getAllProducts, deleteProduct } from "./helper/adminapicall";





const ManageProducts = () => {

    const [products, setProducts] = useState([]);

    const { user, token } = isAuthenicated()


    function deleteMyProduct(productId)
    {
        
        deleteProduct(productId, user._id, token).then(data => {
            debugger
            if (data.error) {

            }
            else {
                preload();
                alert("Deleted Successfully")
            }
        })
    }

    useEffect(() => {
        preload();
    }, [])


 


  
    const preload = () => {
        debugger
        getAllProducts().then(data => {
            debugger
            console.log("adf", data)
            if (data.error) {
                return 0;
            }
            else {
                setProducts(data);
            }
        })

    }

    return (

        <Base tittle="Welcome admin" description="Manage products here">
            <h2 className="mb-4">All products:</h2>
            <Link className="btn btn-info" to={`/admin/dashboard`}>
                <span className="">Admin Home</span>
            </Link>
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center text-white my-3">Total 3 products</h2>

                    {products && products.map((product, index) => {

                        return (

                            <div key={index} className="row text-center mb-2 ">
                                <div className="col-4">
                                    <h3 className="text-white text-left">{product.name}</h3>
                                </div>
                                <div className="col-4">
                                    <Link
                                        className="btn btn-success"
                                        to={`/admin/product/update/${product._id}`}
                                    >
                                        <span className="">Update</span>
                                    </Link>
                                </div>
                                <div className="col-4">
                                    <button onClick={() => {
                                        deleteMyProduct(product._id)
                                    }} className="btn btn-danger">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )

                    })}
                </div>
            </div>
        </Base>



    )
}



export default ManageProducts;