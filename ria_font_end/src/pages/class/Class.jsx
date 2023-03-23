import React from "react";
import { Component } from "react";
import Notes from "./notes";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';



class Class extends Component {

	state = {
		class: [
			"RIA",
			"DevOp",
			"Math",
		]
	}
	showClass = (class_name) => {

		return (
			<div className="class_view_body_content">
				<div className="head_cv">
					{class_name}
				</div>
				<div className="buttn_cv">
					<Link to="/class/notes" state={{ class_name: class_name }} className="rn" class_name={"xnskxn"}>Regarder les notes</Link>
					<Link to="/class/devoirs" state={{ class_name: class_name }} className="rtp">Regarder les TP</Link>
				</div>

			</div>
		);
	}

	render() {
		return (
			<React.Fragment>
				<div className="class_view_head">
					<i className='bx bx-folder'></i>
					<h1>Mes Classes</h1>
				</div>
				<div className="class_view_body">
					<div className="class_view_body_head">
						<h3>Classe</h3>
						<h3 className="actions">Actions</h3>
					</div>
					{this.state.class.map((c, index) => this.showClass(c, index))}
				</div>
				<div className="class_view_body_footer" >
					<p>&copy; 2023 DOUMBOUYA</p>
				</div>
			</React.Fragment>

		);
	}


}



export default Class;