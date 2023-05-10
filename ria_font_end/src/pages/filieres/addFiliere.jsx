import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'


function AddFiliere() {
	const [nomFiliere, setNomFiliere] = useState('');
	const [description, setDescription] = useState('');
	const [niveau, setNiveau] = useState('');
	const [nbAnnee, setNbAnnee] = useState('');
	const [responsable, setResponsable] = useState('');
	const [listTeacher, setlistTeacher] = useState([]);


	const navigate = useNavigate();


	useEffect(() => {
		async function fetchTeacher() {
			const response = await fetch('/enseignant');
			const data = await response.json();
			setlistTeacher(data.data);
			console.log(listTeacher);
		}


		fetchTeacher();

	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!nomFiliere || !description || !niveau || !nbAnnee || !responsable) {
			// If any field is null, display an error message
			alert("Please fill in all fields");
			return;
		}
		const courseData = {
			nom_filiere: nomFiliere,
			description: description,
			niveau: niveau,
			nombre_annee: nbAnnee,
			id_responsable: responsable,
		};
		console.log(courseData); // or send this data to a server or another component
		insert(courseData)
	}

	async function insert(eventData) {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(eventData)
		};
		const response = await fetch('/filieres', requestOptions);
		const data = await response.json();
		console.log(data);

		alert(data.message)
		if (data.code == 200) {
			setNomFiliere("");
			setDescription("");
			setNbAnnee("");
			setNiveau("");
			setResponsable("");
			setlistTeacher([]);
			window.location.reload(false);

		}
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
							<Form.Label>Niveau</Form.Label>
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
							<Form.Label>Responsable</Form.Label>
							<Form.Control as="select" onChange={(e) => setResponsable(e.target.value)}>
								<option value="">Selecter le responsable</option>
								{listTeacher.map((item, index) => {
									return <option value={item.id_utilisateur} >{item.responsabilite_ens}</option>
								})}

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
