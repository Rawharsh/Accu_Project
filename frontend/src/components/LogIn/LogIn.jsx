import React from "react"
import "./LogIn.css"
import { Link } from "react-router-dom"

const LogIn  = ()=>{

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