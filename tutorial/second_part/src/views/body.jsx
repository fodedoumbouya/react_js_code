import React, { Component } from "react";

class MyBody extends Component {
	state = {
		count: 0,
		texts: [
			"Was first released in 2013",
			"Was originally created by Jordan Walke",
			"Has well over 100k stars on GIthub"
		],
	}
	testTextsNotEmpty() {
		if (this.state.texts.length === 0) return <p>The list is empty</p>
		return <ul>

			{this.state.texts.map(text => <li key={text}>{text}</li>)}
		</ul>
	}
	render() {
		return (
			<React.StrictMode>
				{/* <img src={logo} className="App-logo" alt="logo" width="20%" /> */}
				<h1>
					Fun Facts about React
				</h1>
				{this.testTextsNotEmpty()}
			</React.StrictMode>
		)
	}
}

export default MyBody