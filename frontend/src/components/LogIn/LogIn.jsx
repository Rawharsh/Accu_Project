import React from "react"
import "./LogIn.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
const clientId = '427114991398-t3fjvng591tif39rapolck0tn157d97r.apps.googleusercontent.com'; // Consider using environment variables for sensitive data


const LogIn = () => {
    const navigate = useNavigate();
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
            if (response.ok) {
                console.log(result.token);
                localStorage.setItem('token', result.token);
                localStorage.setItem('user_id', result.user_id);
                localStorage.setItem('full_name',result.name);


                navigate('/');
            }
            else {
                console.log(result.error);

            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const handleGoogleSuccess = async (response) => {
		const token = response.credential;

		// Send the token to your Django backend
		const res = await fetch('http://localhost:8000/api/google-login/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ token }),
		});

		if (res.ok) {
			const data = await res.json();
			console.log('Login successful:', data.token);
			// Handle successful login (e.g., store the token, redirect user)
			localStorage.setItem('token', data.token);
			localStorage.setItem('user_id', data.user_id);
			localStorage.setItem('full_name',data.name);
			navigate('/');
		} else {
			console.error('Login failed');
		}
	};

	const handleGoogleFailure = (error) => {
		console.error('Google login failed:', error);
	};



    return (
        <GoogleOAuthProvider clientId={clientId}>
        <div className="root">
            <div className="navbar">
                <h1 className="text">Sign In</h1>
                {/* <form className="flex" onSubmit={handleSubmit}> */}
                    <form className="flex" onSubmit={handleSubmit}>

                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                        <button className="sign-in" onClick={() => { }}>SIGN IN</button>
                        <GoogleLogin
						onSuccess={handleGoogleSuccess}
						onError={handleGoogleFailure}
						render={(renderProps) => (
							<button
								className="google"
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}
							>
								CONTINUE WITH GOOGLE
							</button>
						)}
					/>
                    </form>
                    <div className="para">
                        <p>Don't have an account?</p>
                        <Link to="/signup"> <p className="signupLink">Sign Up</p> </Link>
                    </div>
                {/* </form> */}
            </div>
        </div>
        </GoogleOAuthProvider>
    )
}

export default LogIn