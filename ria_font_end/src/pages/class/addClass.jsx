import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'


function AddClass() {
	const [filiere, setFiliere] = useState('');
	const [nomCours, setNomCours] = useState('');
	const [description, setDescription] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const courseData = {
			id_filiere: filiere,
			nom_du_cours: nomCours,
			description,
		};
		console.log(courseData); // or send this data to a server or another component
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
						<Form.Group controlId="formFiliere">
							<Form.Label>Filière</Form.Label>
							<Form.Control as="select" onChange={(e) => setFiliere(e.target.value)}>
								<option value="">Select filière</option>
								<option value="master">Master</option>
								<option value="bachelor">Bachelor</option>
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
