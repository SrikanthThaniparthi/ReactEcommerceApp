import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom"
import { Signout, isAuthenicated } from "../auth/helper";

const currenTab = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#3DBE29" }
    }
    else {
        return { color: "#FFFFFF" }
    }
}

const Menu = (history) => {
    return (
        <div>
            <ul className="nav nav-tabs bg-dark">
                <li className="nav-item">
                    <Link style={currenTab(history, "/")} className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link style={currenTab(history, "/cart")} className="nav-link" to="/cart">Cart</Link>
                </li>

                {isAuthenicated() && isAuthenicated().user.role === 0 && (
                    <li className="nav-item">
                        <Link style={currenTab(history, "/user/dashboard")} className="nav-link" to="/user/dashboard">Dashboard</Link>
                    </li>
                )}
                {isAuthenicated() && isAuthenicated().user.role === 1 && (
                    <li className="nav-item">
                        <Link style={currenTab(history, "/Admin/dashboard")} className="nav-link" to="/admin/dashboard">A.Dashboard</Link>
                    </li>
                )}
                {!isAuthenicated() && (
                    <Fragment>
                        <li className="nav-item">
                            <Link style={currenTab(history, "/Signup")} className="nav-link" to="/Signup">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={currenTab(history, "/Signin")} className="nav-link" to="/Signin">Sign In</Link>
                        </li>

                    </Fragment>
                )}


                {isAuthenicated() && (

                    <li className="nav-item" >
                        <span className="nav-link text-warning" onClick={() => {
                            Signout(() => {

                            })
                        }} to="/">Signout</span>
                        {/* <Link style={currenTab(history, "/SignOut")} className="nav-link" to="/SignOut" >Sign Out</Link>  */}
                    </li>
                )
                }

            </ul>
        </div >
    )
}


export default withRouter(Menu);