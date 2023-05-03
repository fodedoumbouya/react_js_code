import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function Filieres() {
	const classData = [
		"Master Développeur Full Stack",
		"Master Math",
		"Master Chemie",
	];
	const navigate = useNavigate();

	const showClass = (className, index) => {
		return (
			<div className="filieres_view_body_content">
				<div className="head_cv">
					{className}
				</div>
				<div className="buttn_cv_p">
					<Button className="" key={index} variant="primary red" type="submit" onClick={() => deleteFiliere()}>
						Delete
					</Button>
				</div>
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
			<Button variant="primary" type="submit" onClick={() => handleClick()}>
				Add
			</Button>

			<div className="filieres_view_body">
				<div className="filieres_view_body_head">
					<h3>Filieres</h3>
					<h3 className="actions">Actions</h3>
				</div>
				{classData.map((c, index) => showClass(c, index))}
			</div>


		</React.Fragment>
	);
}

export default Filieres;