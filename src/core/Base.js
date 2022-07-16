import React from "react";
import Menu from "./Menu";

const base = (
    {
        tittle = "My Tittle",
        description = "my Description",
        className = " text-white p-4",
        children = ""
    }

) => {

    return (
  
        <div>
                  <Menu/>
            <div className="container-fluid ">
                <div className="jumbotron  text-white text-center p-3">

                    <h1 className="diaplay-4">
                        {tittle}
                    </h1>
                    <p className="lead">{description}</p>

                </div>

                <div className={className}>
                    {children}
                </div>
            </div>
            <footer className="footer  mt-auto py-3">
                <div className="container-fluid bg-success text-white text-center  py-3">
                    <h3>If you got any question fell free to reach out</h3>
                    <button className="btn btn-warning btn-lg">Contact Us</button>
                </div>
                <div className="container text-center">
                    <span className="text-white ">
                        An Amazing <span className="text-white">MERN </span>Bootcamp
                    </span>
                </div>

            </footer>

        </div>
    )

}



export default base;