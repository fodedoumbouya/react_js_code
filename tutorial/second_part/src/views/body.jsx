import React, { Component } from "react";

class MyBody extends Component {
	render() {
		return (
			<React.Fragment>
				{/* <img src={logo} className="App-logo" alt="logo" width="20%" /> */}
				<h1>
					Fun Facts about React
				</h1>
				<ul>
					<li>
						Was first released in 2013
					</li>
					<li>
						Was originally created by Jordan Walke
					</li>
					<li>
						Has well over 100k stars on GIthub
					</li>
				</ul>
			</React.Fragment>
		)
	}
}

export default MyBody