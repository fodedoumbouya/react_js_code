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

	async function onSubmit(e) {
		e.preventDefault();
		// const ok = await this.$refs.confirmDialogue.show({
		// 	title: 'Error  Login',
		// 	message: "Votre Email n'est pas correcte",
		// 	// cancelButton: 'Re-Essayer',
		// })
		// // If you throw an error, the method will terminate here unless you surround it wil try/catch
		// if (ok) {
		//     alert('You have successfully delete this page.')
		// } else {
		//     alert('You chose not to delete this page. Doing nothing now.')
		// }
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
