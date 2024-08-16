import React from "react"
import "./LogIn.css"
import { Link } from "react-router-dom"
import { useState } from "react"
// import { getCsrfToken } from "../../utils/csrf_token"
import { useNavigate } from 'react-router-dom';
// import changeSignIn from "../Header/Header"

const LogIn  = ()=>{
<<<<<<< HEAD
        const navigate = useNavigate();
=======

>>>>>>> b99e75dd55f1e75471bde064dbbd21b7c136f1c3
        const [formData, setFormData] = useState({
           
            email: '',
            password: ''
        });
    
        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };



        const handleSubmit = async (e) => {
            e.preventDefault();
<<<<<<< HEAD
            const token = localStorage.getItem('token')
            
            try {                
                const response = await fetch('http://127.0.0.1:8000/api/signIn/', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });
                
    
                const result = await response.json();
                if(response.ok){
                    console.log(result.token);
                    localStorage.setItem('token',result.token);
                    localStorage.setItem('username',result.username);

                    
                    navigate('/',{ state: { username: result.username }});
                }
                else{
                    console.log(result.error);
                    
                }
=======
            try {
                const response = await fetch('/api/submit-form/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
    
                const result = await response.json();
                console.log(result.message);
>>>>>>> b99e75dd55f1e75471bde064dbbd21b7c136f1c3
            } catch (error) {
                console.error('Error:', error);
            }
        };
    
    
    return (
        <div className="root">
        <div className="navbar">
            <h1 className="text">Sign In</h1>
            <form className="flex" onSubmit={handleSubmit}>
             
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
<<<<<<< HEAD
            <button className="sign-in" onClick={()=>{} }>SIGN IN</button>
=======
            <button className="sign-in">SIGN IN</button>
>>>>>>> b99e75dd55f1e75471bde064dbbd21b7c136f1c3
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