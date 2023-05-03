import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function Teachers() {
	const classData = [
		"Jack",
		"Martin",
		"Joe",
	];
	const navigate = useNavigate();

	const showClass = (className, index) => {
		return (
			<div className="filieres_view_body_content">
				<div className="head_cv">
					{className}
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
		navigate('/teachers/add');
	}

	return (
		<React.Fragment>
			<div className="class_view_head">
				<i className='bx bx-male-female'></i>

				<h1>Les professeurs</h1>
			</div>
			<Button variant="primary" type="submit" onClick={() => handleClick()}>
				Add
			</Button>

			<div className="filieres_view_body">
				<div className="filieres_view_body_head">
					<h3>Professeurs</h3>
					{/* <h3 className="actions">Actions</h3> */}
				</div>
				{classData.map((c, index) => showClass(c, index))}
			</div>


		</React.Fragment>
	);
}

export default Teachers;
