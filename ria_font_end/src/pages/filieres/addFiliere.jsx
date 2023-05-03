import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'


function AddFiliere() {
	const [nomFiliere, setNomFiliere] = useState('');
	const [description, setDescription] = useState('');
	const [niveau, setNiveau] = useState('');
	const [nbAnnee, setNbAnnee] = useState('');
	const [responsable, setResponsable] = useState('');

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const courseData = {
			nom_filiere: nomFiliere,
			description: description,
			niveau: niveau,
			nbAnnee: nbAnnee,
			responsable: responsable,
		};
		console.log(courseData); // or send this data to a server or another component
	}
	function handleClick() {
		navigate('/filieres');
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
					<h1 className="text-center mb-5">Ajouter une nouvelle Filiere</h1>
					<Form onSubmit={handleSubmit}>

						<Form.Group controlId="formNomCours">
							<Form.Label>Nom du Filiere</Form.Label>
							<Form.Control type="text" placeholder="Enter nom de la filiere" onChange={(e) => setNomFiliere(e.target.value)} />
						</Form.Group>
						<Form.Group controlId="formFiliere">
							<Form.Label>Filière</Form.Label>
							<Form.Control as="select" onChange={(e) => setNiveau(e.target.value)}>
								<option value="">Selecter le niveau</option>
								<option value="D">Doctorat</option>
								<option value="M">Master</option>
								<option value="B">Bachelor</option>

							</Form.Control>
						</Form.Group>
						<Form.Group controlId="formGrade">
							<Form.Label>Nombre d'annee</Form.Label>
							<Form.Control type="number" placeholder="Entrer le nombre d'annee " onChange={(e) => setNbAnnee(e.target.value)} />
						</Form.Group>

						<Form.Group controlId="formResponsable">
							<Form.Label>Filière</Form.Label>
							<Form.Control as="select" onChange={(e) => setResponsable(e.target.value)}>
								<option value="">Selecter le responsable</option>
								<option value="Teacher 1">Teacher 1</option>
								<option value="Teacher 2">Teacher 2</option>
								<option value="Teacher 3">Teacher 3</option>

							</Form.Control>
						</Form.Group>

						<Form.Group controlId="formDescription">
							<Form.Label>Description</Form.Label>
							<Form.Control as="textarea" rows={3} placeholder="Entrer la  description" onChange={(e) => setDescription(e.target.value)} />
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

export default AddFiliere;
