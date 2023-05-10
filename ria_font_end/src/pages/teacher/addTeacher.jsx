import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'


function AddTeacher() {
	const [nom, setNom] = useState('');
	const [prenom, setPrenom] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [tel, setTel] = useState('');
	const [volume_horaire, setVolume_horaire] = useState('');


	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!nom || !prenom || !email || !password || !tel || !volume_horaire) {
			alert('Veuillez remplir tous les champs');
			return;
		}
		const courseData = {
			nom: nom,
			prenom: prenom,
			email: email,
			password: password,
			tel: tel,
			role: 'enseignant',
			volume_horaire: volume_horaire,
		};
		console.log(courseData); // or send this data to a server or another component
		insert(courseData)
	}
	async function insert(evenData) {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(evenData)
		};
		const response = await fetch('/enseignant', requestOptions);
		const data = await response.json();

		alert(data.message)
		if (data.code == 200) {
			setEmail('');
			setPassword('');
			setPrenom('');
			setTel('');
			setVolume_horaire('');
			setNom('');
			window.location.reload(false);
		}
	}
	function handleClick() {
		navigate('/teachers');
	}

	return (
		<Container className="mt-5">
			<button
				className="btn btn-primary"
				onClick={() => handleClick()}>
				retour
			</button>
			<Row className="justify-content-center">
				<Col md={6}>
					<h1 className="text-center mb-5">Ajouter un Prof</h1>
					<Form onSubmit={handleSubmit}>

						<Form.Group controlId="formNom">
							<Form.Label>Nom</Form.Label>
							<Form.Control type="text" placeholder="Enter le nom " onChange={(e) => setNom(e.target.value)} />
						</Form.Group>
						<Form.Group controlId="formPrenom">
							<Form.Label>Prenom</Form.Label>
							<Form.Control type="text" placeholder="Enter le prenom" onChange={(e) => setPrenom(e.target.value)} />
						</Form.Group>
						<Form.Group controlId="formEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control type="text" placeholder="Enter l'Email" onChange={(e) => setEmail(e.target.value)} />
						</Form.Group>

						<Form.Group controlId="formPassword">
							<Form.Label>Mot de passe</Form.Label>
							<Form.Control type="password" placeholder="Enter le mot de passe" onChange={(e) => setPassword(e.target.value)} />
						</Form.Group>
						<Form.Group controlId="formNumber">
							<Form.Label>Numero</Form.Label>
							<Form.Control type="number" placeholder="Enter le numero de telephone" onChange={(e) => setTel(e.target.value)} />
						</Form.Group>
						<Form.Group controlId="formVolumeHoraire">
							<Form.Label>Volume Horaire</Form.Label>
							<Form.Control type="number" placeholder="Enter le volume horaire" onChange={(e) => setVolume_horaire(e.target.value)} />
						</Form.Group>
						<Button variant="primary" type="submit" className="mt-3">
							Submit
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default AddTeacher;
