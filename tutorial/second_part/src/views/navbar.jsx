import React from "react";
// import { Component } from "react";

// Stateless Functional Component 

const NavBar = props => {
	const totalCounters = props.counters.length;
	return (
		<React.StrictMode>
			<nav className="navbar bg-body-tertiary">
				<div className="container-fluid">
					<span className="navbar-brand mb-0 h1">Navbar </span>
					<p>Nombre de b {totalCounters}</p>
				</div>
			</nav>

		</React.StrictMode>
	)
}

// class NavBar extends Component {

// 	render() {
// 		return (
// 			<React.StrictMode>
// 				<nav className="navbar bg-body-tertiary">
// 					<div className="container-fluid">
// 						<span className="navbar-brand mb-0 h1">Navbar </span>
// 						<p>Nombre de b {this.props.counters.length}</p>
// 					</div>
// 				</nav>

// 			</React.StrictMode>
// 		)
// 	}
// }

export default NavBar;