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
				<div className="profile_photo_place">
					<img src="https://picsum.photos/200/300" alt="" />
					<h3>Student 2</h3>
					<p>#ID 3238ue938</p>
					<div className="small_info">
						<p>Sex: Male</p>
						<p>Phone:778847886</p>
					</div>

				</div>
				<div className="student_view">
					<h6>Information de l'etudiant</h6>
					{studentJSX}
				</div>
			</React.Fragment>
		);
	}
}

export default User;