import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom'


function AddDevois() {
	const [filiere, setFiliere] = useState('');
	const [nomDevoirs, setNomDevoirs] = useState('');
	const [description, setDescription] = useState('');
	const navigate = useNavigate();
	const location = useLocation()


	const handleSubmit = (e) => {
		e.preventDefault();
		const courseData = {
			// id_filiere: filiere,
			nom_du_cours: nomDevoirs,
			description,
		};
		console.log(courseData); // or send this data to a server or another component
	}
	function handleClick() {
		navigate('/class/devoirs', { state: location.state });
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
					<h1 className="text-center mb-5">Ajouter un nouveau devoirs</h1>
					<Form onSubmit={handleSubmit}>

						<Form.Group controlId="formNomDevoirs">
							<Form.Label>Nom du devoirs</Form.Label>
							<Form.Control type="text" placeholder="Enter nom du devoirs" onChange={(e) => setNomDevoirs(e.target.value)} />
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

export default AddDevois;
