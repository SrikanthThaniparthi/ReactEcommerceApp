import React, { useState } from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base"
import { signup } from "../auth/helper/index"

const Signup = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: false,
        success: false
    })

    const { name, email, password, error, success } = values;

    const handleChange = name => event => {
        setValues({
            ...values, error: false,
            [name]: event.target.value
        });
    }



    const onsubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        
        signup({ name, email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })
                }
                else {
                    setValues({
                        ...values, name: "", email: "", password: "", error: "", success: "true"
                    })
                }

            })
            .catch()
    }





    const signupFrom = () => {

        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left p-3">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input type="text" className="form-control" placeholder="Name" onChange={handleChange("name")} value={name} />
                        </div><br />
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input type="text" className="form-control" placeholder="Name" onChange={handleChange("email")} value={email} />
                        </div><br />
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input type="password" className="form-control" placeholder="Password" onChange={handleChange("password")} value={password} />
                        </div><br />
                        <button onClick={onsubmit} className="btn btn-success btn-block form-control">Submit</button>
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
                        New Account Created Successfully.Please Login Here <Link to="signin">Login Here</Link>
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
              {error}
            </div>
            </div>
            </div>
        )

    }

    return (

        <Base tittle="Sign Up Page" description="Page for user to Sign UP!">
            {successMessage()}
            {errorMessage()}
            {signupFrom()}

            <label className="text-white text-center">{JSON.stringify(values)}</label>
        </Base>
    )
}


export default Signup