import React from 'react'
import "./CreateAccount.css"
import { Link } from 'react-router-dom'

const CreateAccount = () => {
  return (
    <div className="root">
       <div className="navbar">
        <h1 className="text">Sign Up</h1>
        <form className="flex">
            <input type="text" placeholder="Username"/>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Password"/>
            <button className="sign-up">SIGN UP</button>
        <button className="google">CONTINUE WITH GOOGLE</button>
        </form>
       <div className="para">
        <p>Have an account?</p> 
        <Link to="/signin"> <p className="signupLink">Sign In</p> </Link> 
       </div>
     </div>
    </div>  
    
  )
}

export default CreateAccount