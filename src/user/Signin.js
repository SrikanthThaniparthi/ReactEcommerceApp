import React, { useState } from "react";
import Base from "../core/Base"
import { signin, isAuthenicated, authenticate } from "../auth/helper/index"
import { Redirect } from "react-router-dom";

const Signin = () => {

    const [values, setValues] = useState({
        email: "srikanth@amazeinc.in",
        password: "P@ssw0rd",
        error: false,
        success: false,
        loading: false,
        didRedirect: false
    })

    const { email, password, success, error, didRedirect, loading } = values;

    const { user } = isAuthenicated();


    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }



    onsubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true })

        signin({ email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: true, loading: false });
                }
                else {
                    authenticate(data, () => {
                        setValues({ ...values, email: "", password: "", success: true, didRedirect: true })
                    })

                }
            })
            .catch(console.log("sign in request failed"));


    }


    const performRedirect = () => {
        if (didRedirect) {
            if (user && user.role === 1) {
                return  <Redirect to="/admin/dashboard"/>
            }
            else {
                return  <Redirect to="/user/dashboard"/>
            }
        }
        // if (isAuthenicated()) {
        //     return  <Redirect to="/user/dashboard"/>
        // }
    }


    const signinForm = () => {

        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left p-3">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input type="text" className="form-control" placeholder="Email" onChange={handleChange("email")} value={email} />
                        </div><br />
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input type="password" className="form-control" placeholder="Password" onChange={handleChange("password")} value={password} />
                        </div><br />
                        <button className="btn btn-success btn-block form-control" onClick={onsubmit}>Submit</button>
                    </form>

                </div>

            </div>
        )
    }


    const successMessage = () => {
        return (

            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left" >
                    <div className="alert alert-success" style={{ display: success ? "" : "none" }}>
                        User credintails are valid
                    </div>
                </div>
            </div>

        )

    }

    const errorMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left" >
                    <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
                        user name and passwod is invalid {error}
                    </div>
                </div>
            </div>
        )

    }



    const loadingMessage = () => {
        return (
            loading && (
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
        )
    }

    return (
        <Base tittle="sign In Page" description="Page for user to Sign IN!">
            {loadingMessage()}
            {successMessage()}
            {errorMessage()}
            {signinForm()}
            {performRedirect()}

            <label>{JSON.stringify(values)}</label>
        </Base>

    )
}


export default Signin