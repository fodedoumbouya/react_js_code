import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function Class() {
	const classData = [
		"RIA",
		"DevOp",
		"Math",
	];
	const navigate = useNavigate();

	const showClass = (className) => {
		return (
			<div className="class_view_body_content">
				<div className="head_cv">
					{className}
				</div>
				<div className="buttn_cv">
					<Link to="/class/notes" state={{ class_name: className }} className="rn">
						Regarder les notes
					</Link>
					<Link to="/class/devoirs" state={{ class_name: className }} className="rtp">
						Regarder les TP
					</Link>
				</div>
			</div>
		);
	};
	function handleClick() {
		navigate('/class/add');
	}

	return (
		<React.Fragment>
			<div className="class_view_head">
				<i className='bx bx-folder'></i>
				<h1>Mes Classes</h1>
			</div>
			<Button variant="primary" type="submit" onClick={() => handleClick()}>
				Add
			</Button>

			<div className="class_view_body">
				<div className="class_view_body_head">
					<h3>Classe</h3>
					<h3 className="actions">Actions</h3>
				</div>
				{classData.map((c, index) => showClass(c, index))}
			</div>


		</React.Fragment>
	);
}

export default Class;
