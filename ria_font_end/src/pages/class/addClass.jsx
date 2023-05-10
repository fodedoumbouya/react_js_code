import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'


function AddClass(propos) {
	const [filiere, setFiliere] = useState('');
	const [nomCours, setNomCours] = useState('');
	const [description, setDescription] = useState('');
	const [listFiliere, setlistFiliere] = useState([]);

	const navigate = useNavigate();



	useEffect(() => {
		async function fetchFiliere() {
			const response = await fetch('/filieres');
			const data = await response.json();
			setlistFiliere(data.data);
		}
		fetchFiliere();

	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!filiere || !nomCours || !description) {
			// If any field is null, display an error message
			alert("Please fill in all fields");
			return;
		}

		const { id_utilisateur } = propos.user;

		const courseData = {
			id_filiere: filiere,
			nom_du_cours: nomCours,
			description: description,
			id_utilisateur: `${id_utilisateur}`,
		};
		console.log(courseData); // or send this data to a server or another component
		insertClass(courseData);

	}
	async function insertClass(courseData) {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(courseData)
		};
		const response = await fetch('/cours', requestOptions);
		const data = await response.json();
		console.log(data);

		alert(data.message)
		if (data.code == 200) {
			setFiliere("");
			setNomCours("");
			setDescription("");
			window.location.reload(false);
		}
	}

	function handleClick() {
		navigate('/class');
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
					<h1 className="text-center mb-5">Add a new course</h1>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="formEventType">
							<Form.Label>Nom de la filière</Form.Label>
							<Form.Control as="select" onChange={(e) => {
								setFiliere(e.target.value);
								if (e.target.value) {
									console.log(e.target.value);
									fetchCours(e.target.value);
								}
							}}>
								<option value="">Selectionner  la filière</option>
								{listFiliere.map((item, index) => {
									return <option key={index} value={item.id_filiere} >{item.nom_filiere}</option>
								})}
							</Form.Control>
						</Form.Group>
						<Form.Group controlId="formNomCours">
							<Form.Label>Nom du cours</Form.Label>
							<Form.Control type="text" placeholder="Enter nom du cours" onChange={(e) => setNomCours(e.target.value)} />
						</Form.Group>

						<Form.Group controlId="formDescription">
							<Form.Label>Description</Form.Label>
							<Form.Control as="textarea" rows={3} placeholder="Enter description" onChange={(e) => setDescription(e.target.value)} />
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

export default AddClass;
