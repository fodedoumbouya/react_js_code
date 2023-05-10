import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'


function AddEven() {
	const [eventType, setEventType] = useState('');
	const [filiere, setFiliere] = useState('');
	const [nomCours, setNomCours] = useState('');
	const [start, setStart] = useState(new Date());
	const [end, setEnd] = useState(new Date());
	const [listFiliere, setlistFiliere] = useState([]);
	const [listCours, setlistCours] = useState([]);
	const navigate = useNavigate();




	async function fetchCalendar(id) {
		const response = await fetch(`/calendar?id=${id}`);
		const data = await response.json();
		setlistCours(data.data);
	}


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
		if (!eventType || !filiere || !nomCours || !start || !end) {
			// If any field is null, display an error message
			alert("Please fill in all fields");
			return;
		}
		const eventData = {
			type_cours: eventType,
			id_filiere: filiere,
			id_cours: nomCours,
			date_debut: start.toISOString(),
			date_fin: end.toISOString(),
		};
		insertEDT(eventData);

		console.log(eventData); // or send this data to a server or another component
	}
	async function insertEDT(eventData) {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(eventData)
		};
		const response = await fetch('/calendar', requestOptions);
		const data = await response.json();
		console.log(data);

		alert(data.message)
		if (data.code == 200) {
			handleClick()
		}
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
				<Form.Group controlId="formEventType">
					<Form.Label>Nom de la filière</Form.Label>
					<Form.Control as="select" onChange={(e) => {
						setFiliere(e.target.value);
						if (e.target.value) {
							console.log(e.target.value);
							fetchCalendar(e.target.value);
						}
					}}>
						<option value="">Selectionner  la filière</option>
						{listFiliere.map((item, index) => {
							return <option key={index} value={item.id_filiere} >{item.nom_filiere}</option>
						})}
					</Form.Control>
				</Form.Group>
				{!filiere ? <h4></h4> : <Form.Group controlId="formNomCours">
					<Form.Label>Nom du cours</Form.Label>
					<Form.Control as="select" onChange={(e) => setNomCours(e.target.value)}>
						<option value="">Selectionner  le cours </option>
						{listCours.map((item, index) => {
							return <option key={index} value={item.id_cours} >{item.libelle_ue}</option>
						})}
					</Form.Control>
				</Form.Group>
				}

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
