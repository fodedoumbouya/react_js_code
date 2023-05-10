import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from 'react-router-dom'

import { Button } from "bootstrap";

function Notes() {
	const location = useLocation()
	const [listClass, setlistlistClass] = useState([]);

	const { class_name, list } = location.state;

	const navigate = useNavigate();

	useEffect(() => {
		// setlistlistClass([location.state.list])
		// console.log([location.state.list]);
		// console.log(listClass);
		async function fetchsetlistlistClass() {
			const response = await fetch(`/notes?id=${list.id_cours}`);
			const data = await response.json();
			setlistlistClass(data.data);
			console.log(data.data);
		}
		fetchsetlistlistClass();


	}, []);



	function handleClick(path) {
		navigate(path, { state: location.state });
	}

	const showClass = (item) => {
		return (
			<div className="class_view_body_content">
				<div className="head_cv">
					{item.prenom} {item.nom}
				</div>
				<div className="buttn_cv">
					<div className="head_cv">
						{item.note}
					</div>
				</div>
			</div>

		);
	};

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
				{listClass.map((item, index) => showClass(item)
				)}

			</div>

			{/* 
			<div className="class_notes_view_footer">
				<div className="head_footer_nv">
					<h3>Classe</h3>
					<h3 className="actions">Notes</h3>
					<h3 className="actions">Grade</h3>
				</div>
			</div> */}

		</div>
	)
}


export default Notes;