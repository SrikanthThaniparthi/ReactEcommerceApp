import React from "react";
import Base from "../core/Base"
import { isAuthenicated } from "../auth/helper";
import { Link } from "react-router-dom";


const AdminDashboard = () => {

    const { user: { name, email } } = isAuthenicated()



    const adminLeftSide = () => {
        return (

            <div className="card">
                <h4 className="card-header bg-dark text-white">Admin Navigation  </h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/admin/create/category" className="nav-link text-success" >Create Categories</Link>
                    </li>

                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/admin/categoryies" className="nav-link text-success" >Manage Categories</Link>
                    </li>

                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/admin/createproduct" className="nav-link text-success" >Create products</Link>
                    </li>

                </ul>

                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/admin/manageProcuts" className="nav-link text-success" >Manage products</Link>
                    </li>

                </ul>

                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/admin/manageorders" className="nav-link text-success" >Manage Orders</Link>
                    </li>

                </ul>
            </div>

        )
    }

    const adminRightSide = () => {
        return (
            <div className="card mb-4">
                <h4 className="card-header bg-dark text-white">Admin Information  </h4>

                <ul className="list-group">
                    <li className="list-group-item">
                     <p>
                     <span className="badge badge-success mr-2 text-black">Name : {name}</span>
                        </p>   
                    </li>

                    <li className="list-group-item">
                     <p>
                     <span className="badge badge-success mr-2 text-black">Email : {email}</span>
                        </p>   
                    </li>
                    <li className="list-group-item">
                     <p>
                     <span className="badge badge-danger text-danger">Admin :</span>
                        </p>   
                    </li>


                </ul>
            </div>
        )
    }


    return (
        <div>
            <Base tittle="Welcome to Admin Area" description="Manage All your orders here" className="container bg-success p-4">
                <div className="row">
                    <div className="col-3">
                        {adminLeftSide()}
                    </div>
                    <div className="col-9">
                        {adminRightSide()}
                    </div>

                </div>
            </Base>
        </div>
    )
}



export default AdminDashboard;