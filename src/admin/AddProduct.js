import React, { useEffect, useState } from "react";
import Base from "./../core/Base"
import { Link } from "react-router-dom";
import { getAllCategories, createProduct } from "./helper/adminapicall";

import { isAuthenicated } from "../auth/helper";
import { Redirect } from "react-router-dom";



const AddProdcut = () => {



    const { user, token } = isAuthenicated();

    // useEffect(() => {
    //     debugger

    //     getAllCategories()
    //         .then(data => {
    //             if (data.error) {
    //                 debugger
    //             }
    //             else {
    //                 setValues({ categories: data })
    //                 debugger
    //                 // setValues[{ categories: data }]
    //             }
    //         })

    // },)


    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        categories: [],
        category: "",
        loading: false,
        error: false,
        success: true,
        createdProduct: "",
        getRedirect: false,
        formData: ""
    })




    const { name, description, price, stock, categories, category, loading, error, createdProduct, getRedirect, formData } = values;


    useEffect(() => {
        preload()
    }, [])

    const preload = () => {

        getAllCategories()
            .then(data => {
                if (data.error) {
                    debugger
                    setValues({ ...values, error: true })
                }
                else {
                    setValues({ ...values, categories: data, formData: new FormData() })
                    console.log(data)
                    debugger
                    // setValues[{ categories: data }]
                }
            })

    }


    const onSubmit = (event) => {

        event.preventDefault();
        setValues({ ...values, error: false, loading: false });

        createProduct(user._id, token, formData).then(
            data => {
                if (data.error) {
                    setValues({ ...values, error: data.error });
                }
                else {
                   
                    setValues({
                        ...values,
                        name: "",
                        description: "",
                        price: "",
                        photo: "",
                        stock: "",
                        loading: false,
                        createdProduct: data.name

                    })
                   
                }
            }
        )

    }

    const handleChange = name => event => {
        const value = name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
    }


    const successMessage = () => {
        return(
            <div className="alert alert-success mt-3" style={{ display: createdProduct ? "" : "none" }}>
            <h4>{createdProduct} created Successfully</h4>
        </div>
        )
       
    }


    const errorMessage = () => {
        return(
            <div className="alert alert-success mt-3" style={{ display: !createdProduct ? "" : "none" }}>
            <h4>{createdProduct} Error for creating product</h4>
        </div>
        )
    
    }
    const createProductForm = () => (
        <form>
            <span>Post photo</span>
            <div className="form-group ">
                <label className="btn btn-block btn-success">
                    <input
                        onChange={handleChange("photo")}
                        type="file"
                        name="photo"
                        accept="image"
                        placeholder="choose a file"
                    />
                </label>
            </div><br />
            <div className="form-group">
                <input
                    onChange={handleChange("name")}
                    name="photo"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                />
            </div>
            <div className="form-group">
                <textarea
                    onChange={handleChange("description")}
                    name="photo"
                    className="form-control"
                    placeholder="Description"
                    value={description}
                />
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange("price")}
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    value={price}
                />
            </div>
            <div className="form-group">
                <select
                    onChange={handleChange("category")}
                    className="form-control"
                    placeholder="Category">
                    <option>Select</option>
                    {categories &&
                        categories.map((cate, index) => (
                            <option key={index} value={cate._id}>{cate.name}</option>
                        ))}
                </select>
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange("stock")}
                    type="number"
                    className="form-control"
                    placeholder="stock"
                    value={stock}
                />
            </div>

            <button
                type="submit"
                onClick={onSubmit}
                className="btn btn-outline-success mb-3"
            >
                Create Product
            </button>
        </form>
    );


    return (
        <Base tittle="Add Product Here!" description="Welcome to Create Product Create Section" className="container bg-info">
            <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">Admin </Link>
            <div className="row bg-dark text-white rounded">
                <div className="col-md-8 offset-md-2" >
                    {createProductForm()}
                    {errorMessage()}
                    {successMessage()}
                </div>
            </div>
        </Base>
    )

}


export default AddProdcut;