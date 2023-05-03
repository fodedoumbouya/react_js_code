import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'



function SignUp() {
	const [nom, setNom] = useState("");
	const [prenom, setPrenom] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();


	function handleClick() {
		navigate('/login');
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
					<h1>Register</h1>
					<div className="content">
						<div className="input-field">
							<input type="text" placeholder="Nom" autoComplete="nope" name="nom" value={nom} onChange={e => setNom(e.target.value)} />
						</div>
						<div className="input-field">
							<input type="text" placeholder="Prenom" autoComplete="nope" name="prenom" value={prenom} onChange={e => setPrenom(e.target.value)} />
						</div>
						<div className="input-field">
							<input type="email" placeholder="Email" autoComplete="nope" name="email" value={email} onChange={e => setEmail(e.target.value)} />
						</div>
						<div className="input-field">
							<input type="password" placeholder="Password" autoComplete="new-password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
						</div>
					</div>
					<div className="action">
						<button onClick={onSubmit}>Register</button>
					</div>
					<div className="act">
						<button onClick={handleClick}>Login</button>
					</div>
				</form>
			</div>
		</main>

	);
}

export default SignUp;
