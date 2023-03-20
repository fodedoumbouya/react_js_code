import React from "react";
import { Component } from "react";

class Class extends Component {

	render() {
		const title = this.props.title;
		return (
			<React.StrictMode>
				<h2>{title}</h2>
			</React.StrictMode>
		);
	}
}

export default Class;