import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function Class(propos) {
	const [listClass, setlistlistClass] = useState([]);
	const { id_utilisateur, role } = propos.user;
	const navigate = useNavigate();



	useEffect(() => {
		async function fetchsetlistlistClass() {
			const response = await fetch(`/cours?id=${id_utilisateur}`);
			const data = await response.json();
			setlistlistClass(data.data);
			console.log(data.data);
		}
		fetchsetlistlistClass();


	}, []);

	const showClass = (item) => {
		return (
			<div className="class_view_body_content">
				<div className="head_cv">
					{item.libelle_ue}
				</div>
				<div className="buttn_cv">
					<Link to="/class/notes" state={{ list: item, class_name: item.libelle_ue }} className="rn">
						Regarder les notes
					</Link>
					{/* <Link to="/class/devoirs" state={{ list: item, class_name: item.libelle_ue }} className="rtp">
						Regarder les TP
					</Link> */}
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
			{role == 'admin' ?
				<Button variant="primary" type="submit" onClick={() => handleClick()}>
					Add
				</Button> : <h6></h6>
			}

			<div className="class_view_body">
				<div className="class_view_body_head">
					<h3>Classe</h3>
					<h3 className="actions">Actions</h3>
				</div>
				{listClass.map((item, index) => showClass(item))}
			</div>


		</React.Fragment>
	);
}

export default Class;
