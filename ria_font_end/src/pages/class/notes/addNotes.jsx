import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom'



function AddNotes() {
	const location = useLocation()

	const [studentid, setStudentID] = useState('');
	const [grade, setGrade] = useState('');
	const [listStudent, setlistlistStudent] = useState([]);
	const { list } = location.state;
	console.log(list);

	const navigate = useNavigate();


	useEffect(() => {
		async function fetchsetlistlist() {
			const response = await fetch("/students"); //${list.id_cours}
			const data = await response.json();
			setlistlistStudent(data.data);
			console.log(data);
		}
		fetchsetlistlist();


	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!studentid || !grade) {
			// If any field is null, display an error message
			alert("Please fill in all fields");
			return;
		}
		const gradeData = {
			"id_utilisateur": studentid,
			note: grade,
			"id_cours": list.id_cours,
		};
		console.log(gradeData); // or send this data to a server or another component
		insertNote(gradeData)
	};

	async function insertNote(eventData) {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(eventData)
		};
		const response = await fetch('/notes', requestOptions);
		const data = await response.json();
		console.log(data);

		alert(data.message)
		if (data.code == 200) {
			setStudentID("");
			setGrade("");
			window.location.reload(false);
		}
	}

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
						{/* <Form.Group controlId="formStudentName">
							<Form.Label>Student Name</Form.Label>
							<Form.Control type="text" placeholder="Enter student name" onChange={(e) => setStudentName(e.target.value)} />
						</Form.Group> */}
						<Form.Group controlId="formStudentName">
							<Form.Label>Nom de l'etudiant</Form.Label>
							<Form.Control as="select" onChange={(e) => setStudentID(e.target.value)}>
								<option value="">Selectionner</option>
								{listStudent.map((item, index) => {
									return <option key={index} value={item.id_utilisateur} >{item.prenom} {item.nom}</option>
								})}
							</Form.Control>
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
