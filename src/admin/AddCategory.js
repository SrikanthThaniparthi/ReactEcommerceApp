import React, { useState } from "react";
import Base from "../core/Base";
import { isAuthenicated } from "../auth/helper";
import { Link } from "react-router-dom";
import { createCategory } from "../admin/helper/adminapicall"


const goBack = () => {
    return (
        <div className="mt-5">
            <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">Go Back</Link>
        </div>
    )
}





const MycategoryForm = () => {




    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const { user, token } = isAuthenicated();




    
const successMessage = () => {
    if (success) {
        return <h4 className="text-success">Category Created Successfully</h4>
    }
}


const warnMessage = () => {
    if (error) {
        return <h4 className="text-success">Failed To Create category</h4>
    }
}
    const handleChange = (event) => {
        setError("");

        setName(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setError("");
        setSuccess(false);

        createCategory(user._id, token, { name })
            .then(data => {
                if (data.error) {
                    debugger
                    setError(true)

                }
                else {
                    setError("")
                    setSuccess(true)
                    setName("");
                }
            })

    }

    return (
        <div>
            {successMessage()}
            {warnMessage()}
            <form>
                <div className="form-group p-3">
                    <p className="lead"><b>Enter the category</b></p>
                    <input type="text" className="form-control my-3" autoFocus required placeholder="for Ex. Summer" onChange={handleChange} value={name} />
                    <button className="btn btn-outline-info" onClick={onSubmit}>create category </button>
                </div>
            </form>
        </div>
    )
}


const AddCategory = () => {

    return (
        <Base tittle="create a category here" description="Add a new category for new t shirts" className="container bg-info p-4">

            <div className="row bg-white rounded">
                <div className="col-md-8 offset-md-2">
            
                    {MycategoryForm()}
                    {goBack()}
                </div>
            </div>
        </Base>
    )
}






export default AddCategory;