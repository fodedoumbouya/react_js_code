import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom'



function AddNotes() {
	const location = useLocation()

	const [studentName, setStudentName] = useState('');
	const [grade, setGrade] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const gradeData = {
			"nom_etudiant": studentName,
			note: grade,
		};
		console.log(gradeData); // or send this data to a server or another component
	};

	function handleClick() {
		navigate('/class/notes', { state: location.state });
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
					<h1 className="text-center mb-5">Entrer la note de l'etudiant</h1>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="formStudentName">
							<Form.Label>Student Name</Form.Label>
							<Form.Control type="text" placeholder="Enter student name" onChange={(e) => setStudentName(e.target.value)} />
						</Form.Group>

						<Form.Group controlId="formGrade">
							<Form.Label>Grade</Form.Label>
							<Form.Control type="number" placeholder="Enter grade" onChange={(e) => setGrade(e.target.value)} />
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

export default AddNotes;
