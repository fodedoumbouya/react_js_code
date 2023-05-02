import React from "react";

import { useLocation, useNavigate } from 'react-router-dom';



function Devoirs() {
	const location = useLocation()
	const { class_name } = location.state
	const navigate = useNavigate();


	function handleClick(path) {
		navigate(path, { state: location.state });
	}

	return (
		<div className="class_devoirs_view">
			<button
				className="btn btn-primary me-5"
				onClick={() => handleClick('/class')}
			>
				retour
			</button>
			<button
				className="btn btn-primary "
				onClick={() => handleClick('/class/devoirs/add')}
			>
				Add
			</button>
			<div className="head_nv">
				<h3>Lesson: </h3>
				<h4>{class_name}</h4>
			</div>
			<h1>Devoirs</h1>

			<div className="class_notes_view_body">
				<div className="class_view_body_head">
					<h3>Classe</h3>
					<h3 className="actions">Type de devoirs</h3>
				</div>
			</div>

		</div>
	)
}

export default Devoirs;