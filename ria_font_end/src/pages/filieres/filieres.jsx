import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function Filieres(propos) {
	const [listFiliere, setlistFiliere] = useState([]);
	const { role } = propos.user;


	const navigate = useNavigate();

	useEffect(() => {
		async function fetchFiliere() {
			const response = await fetch('/filieres');
			const data = await response.json();
			setlistFiliere(data.data);
		}


		fetchFiliere();

	}, []);

	const showClass = (item, index) => {
		return (
			<div className="filieres_view_body_content">
				<div className="head_cv">
					{item.nom_filiere}
				</div>
				{/* <div className="buttn_cv_p">
					<Button className="" key={index} variant="primary red" type="submit" onClick={() => deleteFiliere()}>
						Delete
					</Button>
				</div> */}
			</div>
		);
	};
	function deleteFiliere() {

	}
	function handleClick() {
		navigate('/filieres/add');
	}

	return (
		<React.Fragment>
			<div className="class_view_head">
				<i className='bx bxs-blanket'></i>

				<h1>Mes Filieres</h1>
			</div>
			{role == 'admin' ?
				<Button variant="primary" type="submit" onClick={() => handleClick()}>
					Add
				</Button> : <h6></h6>
			}
			<div className="filieres_view_body">
				<div className="filieres_view_body_head">
					<h3>Filieres</h3>
					{/* <h3 className="actions">Actions</h3> */}
				</div>
				{listFiliere.map((item, index) => showClass(item, index))}
			</div>


		</React.Fragment>
	);
}

export default Filieres;
