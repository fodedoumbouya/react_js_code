import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'


function AddEven() {
	const [eventType, setEventType] = useState('');
	const [filiere, setFiliere] = useState('');
	const [nomCours, setNomCours] = useState('');
	const [title, setTitle] = useState('');
	const [start, setStart] = useState(new Date());
	const [end, setEnd] = useState(new Date());
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const eventData = {
			type_cours: eventType,
			nom_filiere: filiere,
			nom_du_cours: nomCours,
			title,
			start,
			end
		};
		console.log(eventData); // or send this data to a server or another component
	}

	function handleClick() {
		navigate('/calendar');
	}



	return (

		<React.Fragment>
			<button
				className="btn btn-primary"
				onClick={() => handleClick()}>
				retour
			</button>

			<Form onSubmit={handleSubmit} className='addEvenForm'>
				<Form.Group controlId="formEventType">
					<Form.Label>Type of course</Form.Label>
					<Form.Control as="select" onChange={(e) => setEventType(e.target.value)}>
						<option value="">Select type</option>
						<option value="cours">Cours</option>
						<option value="tp">TP</option>
						<option value="td">TD</option>
					</Form.Control>
				</Form.Group>

				<Form.Group controlId="formFiliere">
					<Form.Label>Nom de la filière</Form.Label>
					<Form.Control type="text" placeholder="Enter nom de la filière" onChange={(e) => setFiliere(e.target.value)} />
				</Form.Group>

				<Form.Group controlId="formNomCours">
					<Form.Label>Nom du cours</Form.Label>
					<Form.Control type="text" placeholder="Enter nom du cours" onChange={(e) => setNomCours(e.target.value)} />
				</Form.Group>

				<Form.Group controlId="formTitle">
					<Form.Label>Title</Form.Label>
					<Form.Control type="text" placeholder="Enter title" onChange={(e) => setTitle(e.target.value)} />
				</Form.Group>

				<Form.Group controlId="formStart">
					<Form.Label>Start time</Form.Label>
					<Form.Control type="datetime-local" onChange={(e) => setStart(new Date(e.target.value))} />
				</Form.Group>

				<Form.Group controlId="formEnd">
					<Form.Label>End time</Form.Label>
					<Form.Control type="datetime-local" onChange={(e) => setEnd(new Date(e.target.value))} />
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form></React.Fragment>
	);
}

export default AddEven;
