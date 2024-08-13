import React from "react"
import "./LogIn.css"
import { Link } from "react-router-dom"

const LogIn  = ()=>{
    return (
        <div className="root">
        <div className="navbar">
            <h1 className="text">Sign In</h1>
            <form className="flex">
             
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
            <button className="sign-in">SIGN IN</button>
            <button className="google">CONTINUE WITH GOOGLE</button>
        </form>
        <div className="para">
            <p>Don't have an account?</p> 
         <Link to="/signup"> <p className="signupLink">Sign Up</p> </Link> 
        </div>
        </div>
    </div>
    )
}

export default LogIn