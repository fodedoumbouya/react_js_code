import React, { useState } from 'react';
// import ConfirmDialogue from "../components/dialog/ConfirmDialogue"
import { useNavigate } from 'react-router-dom'


function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();


	function handleClick() {
		navigate('/signup');
	}

	function handleToHome() {
		window.location.href = "/";
	}

	async function onSubmit(e) {
		e.preventDefault();
		if (!email || !password) {
			// If any field is null, display an error message
			alert("Please fill in all fields");
			return;
		}
		const loginData = {
			email: email,
			password: password,
		}
		console.log(loginData);
		loginRequest(loginData)
	}
	async function loginRequest(registerData) {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(registerData)
		};
		const response = await fetch('/login', requestOptions);
		const data = await response.json();
		console.log(data.data);
		if (data.code == 200 && data.data[0].email == registerData.email) {
			alert("Sucess")
			console.log(data);
			localStorage.setItem("user", JSON.stringify(data.data[0]));
			handleToHome();
		} else {
			// Incorrect email or password in french language
			alert("Email ou mot de passe incorrect");

		}
	}

	return (
		<main className="login_bg">
			<div className="login-form">
				<form onSubmit={onSubmit} method="post">
					<h1>Login</h1>
					<div className="content">
						<div className="input-field">
							<input type="email" placeholder="Email" autoComplete="nope" name="email" value={email} onChange={e => setEmail(e.target.value)} />
						</div>
						<div className="input-field">
							<input type="password" placeholder="Password" autoComplete="new-password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
						</div>
						<a href="#" className="link">Forgot Your Password?</a>
					</div>
					{/* <ConfirmDialogue ref="confirmDialogue"></ConfirmDialogue> */}
					<div className="action">
						<button onClick={handleClick}>Sign Up</button>
						<button onClick={onSubmit}>Log In</button>
					</div>
				</form>
			</div>
		</main>
	);
}

export default Login;
