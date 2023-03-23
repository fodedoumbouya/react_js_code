import React from "react";
import { useLocation } from 'react-router-dom'

function Notes() {
	const location = useLocation()
	const { class_name } = location.state

	return (
		<div className="class_notes_view">
			<div className="head_nv">
				<h3>Lesson: </h3>
				<h4>{class_name}</h4>
			</div>

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