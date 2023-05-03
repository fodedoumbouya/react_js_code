import React from "react";
import { Component } from "react";

class User extends Component {

	state = {
		student: [
			{
				"Prenom": "fode",

			},
			{
				"Nom": "Doumbouya",
			},
			{
				"Email": "jsxjsa@yahoo.com",

			},
			{
				"Prenom": "fode",

			},
			{
				"Nom": "Doumbouya",
			},
			{
				"Email": "jsxjsa@yahoo.com",

			}, {
				"Prenom": "fode",

			},
			{
				"Nom": "Doumbouya",
			},
			{
				"Email": "jsxjsa@yahoo.com",

			}, {
				"Prenom": "fode",

			},
			{
				"Nom": "Doumbouya",
			},
			{
				"Email": "jsxjsa@yahoo.com",

			}, {
				"Prenom": "fode",

			},
			{
				"Nom": "Doumbouya",
			},
			{
				"Email": "jsxjsa@yahoo.com",

			},
		]
	}



	showInfo = (title, content) => {
		console.log(title);
		return (
			<div className="showInfo">
				<h5>{title}:</h5>
				<p>{content}</p>
			</div>
		);
	}
	render() {
		const student = this.state.student;
		const studentJSX = student.map((item) => {
			const key = Object.keys(item)[0];
			const value = Object.values(item)[0];
			return this.showInfo(key, value);
		});
		return (
			<React.Fragment>
				<div className="class_view_head">
					<i className='bx bx-user'></i>
					<h1>Etudiant</h1>
				</div>
				<div className="profile_holder">
					<img src="https://picsum.photos/200/300" alt="" />
					<h4>#ID: 3238ue938</h4>
					<h4>Nom: Fode</h4>
					<h4>Prenom: FFF</h4>
					<h4>Email: FFF@gamil.com</h4>
					<h4>Phone:778847886</h4>

					<div>
						<button
							className="btn btn-primary"
							onClick={() => handleClick()}>
							Edit
						</button>

					</div>
				</div>



			</React.Fragment>
		);
	}
}

export default User;