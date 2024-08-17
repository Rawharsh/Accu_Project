import React from 'react';
import './CreateAccount.css';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const clientId = '427114991398-t3fjvng591tif39rapolck0tn157d97r.apps.googleusercontent.com'; // Consider using environment variables for sensitive data

const CreateAccount = () => {
	const navigate = useNavigate();
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
					<h1 className="text">Sign Up</h1>
					<form className="flex">
						<input type="text" placeholder="Username" />
						<input type="text" placeholder="Email" />
						<input type="password" placeholder="Password" />
						<button type="submit" className="sign-up">SIGN UP</button>
					</form>
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
					<div className="para">
						<p>Have an account?</p>
						<Link to="/signin"><p className="signupLink">Sign In</p></Link>
					</div>
				</div>
			</div>
		</GoogleOAuthProvider>
	);
}

export default CreateAccount;