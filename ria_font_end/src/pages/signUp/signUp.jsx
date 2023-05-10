import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap';




function SignUp() {
	const [nom, setNom] = useState("");
	const [prenom, setPrenom] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [tel, setTel] = useState("");
	const [diplome, setDiplome] = useState("");
	const [filiere, setFiliere] = useState("");
	const [listFiliere, setlistFiliere] = useState([]);
	const [listDiplome, setlistDiplome] = useState([]);



	const navigate = useNavigate();

	async function fetchDiplome(id) {
		const response = await fetch(`/diplomes?id=${id}`);
		const data = await response.json();
		setlistDiplome(data.data);
	}

	useEffect(() => {
		async function fetchFiliere() {
			const response = await fetch('/filieres');
			const data = await response.json();
			setlistFiliere(data.data);
		}


		fetchFiliere();

	}, []);

	function handleClick() {
		navigate('/login');
	}

	async function onSubmit(e) {
		e.preventDefault();
		if (!nom || !prenom || !email || !password || !tel || !diplome || !filiere) {
			// If any field is null, display an error message
			alert("Please fill in all fields");
			return;
		}
		const registerData = {
			nom: nom,
			prenom: prenom,
			email: email,
			password: password,
			tel: tel,
			diplome_etudiant: diplome,
			id_filiere: filiere,
			role: "etudiant",
		};
		// Submit the form data
		fetchEtudiant(registerData)

	}
	async function fetchEtudiant(registerData) {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(registerData)
		};
		const response = await fetch('/etudiant', requestOptions);
		const data = await response.json();
		alert(data.message)
		if (data.code == 200) {
			handleClick()
		}
	}
	// console.log(listFiliere);
	// console.log(listDiplome);

	return (
		// <main className="login_bg">
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
					<div className="input-field">
						<input type="text" placeholder="tel" autoComplete="nope" name="tel" value={tel} onChange={e => setTel(e.target.value)} />
					</div>

					<Form.Group controlId="formFiliere">
						<Form.Label>Filière</Form.Label>
						<Form.Control as="select" onChange={(e) => {
							setFiliere(e.target.value);

							if (e.target.value) {
								console.log(e.target.value);
								fetchDiplome(e.target.value);
							}

						}}>
							<option value="">Select filière</option>
							{listFiliere.map((item, index) => {

								return <option key={index} value={item.id_filiere} >{item.nom_filiere}</option>
							})}
						</Form.Control>
					</Form.Group>
					{
						!filiere ? <h4></h4> : <Form.Group controlId="formDiplome">
							<Form.Label>Diplome</Form.Label>
							<Form.Control as="select" onChange={(e) => setDiplome(e.target.value)}>
								<option value="">Select le diplome</option>
								{listDiplome.map((item, index) => {
									return <option key={index} value={item.diplome_etudiant} >{item.diplome_etudiant}</option>
								})}
								{/* <option value="master Diplome">Master Diplome</option>
						<option value="bachelor Diplome">Bachelor Diplome</option> */}
							</Form.Control>
						</Form.Group>
					}




				</div>
				<div className="action">
					<button onClick={onSubmit}>Register</button>
				</div>
				<div className="act">
					<button onClick={handleClick}>Login</button>
				</div>
			</form>
		</div>
		// </main>

	);
}

export default SignUp;
