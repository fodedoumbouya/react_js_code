import React from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from "bootstrap";

function Notes() {
	const location = useLocation()
	const { class_name } = location.state
	const navigate = useNavigate();


	function handleClick(path) {
		navigate(path, { state: location.state });
	}

	return (
		<div className="class_notes_view">
			<button
				className="btn btn-primary me-5"
				onClick={() => handleClick('/class')}
			>
				retour
			</button>
			<button
				className="btn btn-primary "
				onClick={() => handleClick('/class/notes/add')}
			>
				Add
			</button>
			<div className="head_nv">
				<h3>Lesson: </h3>
				<h4>{class_name}</h4>
			</div>
			<h1>Notes</h1>



			<div className="class_notes_view_body">
				<div className="class_view_body_head">
					<h3>Classe</h3>
					<h3 className="actions">Notes</h3>
				</div>
			</div>

			<div className="class_notes_view_footer">
				<div className="head_footer_nv">
					<h3>Classe</h3>
					<h3 className="actions">Notes</h3>
					<h3 className="actions">Grade</h3>
				</div>
			</div>

		</div>
	)
}


export default Notes;