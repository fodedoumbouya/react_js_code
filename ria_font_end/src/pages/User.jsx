

import React, { Component } from "react";

class User extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nom: props.user.nom,
			prenom: props.user.prenom,
			editing: false,
		};
	}

	handleNomChange = (event) => {
		this.setState({ nom: event.target.value });
	};

	handlePrenomChange = (event) => {
		this.setState({ prenom: event.target.value });
	};

	handleEditClick = () => {
		this.props.changeData(this.state.nom, this.state.prenom);
		this.setState((prevState) => ({ editing: !prevState.editing }));
	};

	render() {
		const { role, email, id_utilisateur, tel } = this.props.user;
		const { nom, prenom, editing } = this.state;
		// const { changeData } = this.props;


		return (
			<React.Fragment>
				<div className="class_view_head">
					<i className="bx bx-user"></i>
					<h1>{role}</h1>
				</div>
				<div className="profile_holder">
					<img src="https://picsum.photos/200/300" alt="" />
					<h4>#ID: {id_utilisateur}</h4>
					{editing ? (
						<input
							type="text"
							value={nom}
							onChange={this.handleNomChange}
							className="form-control"
						/>
					) : (
						<h4>Nom: {nom}</h4>
					)}
					{editing ? (
						<input
							type="text"
							value={prenom}
							onChange={this.handlePrenomChange}
							className="form-control"
						/>
					) : (
						<h4>Prenom: {prenom}</h4>
					)}
					<h4>Email: {email}</h4>
					<h4>Phone: {tel}</h4>

					<div>
						<button
							className={`btn ${editing ? "btn-success" : "btn-primary"}`}
							onClick={this.handleEditClick}
						>
							{editing ? "Save" : "Edit"}
						</button>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default User;
