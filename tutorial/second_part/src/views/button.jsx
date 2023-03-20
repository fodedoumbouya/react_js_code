import React from "react";
import { Component } from "react";

class MyBottun extends Component {

	state = {
		count: 0
	}


	//---------------First way to do it 
	// constructor() {
	// 	// we need to call the 'Component' constructor inside of the contructor by call super
	// 	super()
	// 	// here we are binding the value state to our function or giving the class access to our function
	// 	this.tapTest = this.tapTest.bind(this)

	// }

	// tapTest() {
	// 	console.log("Tap here", this)
	// }

	//--------------Second way to do it 
	tapTest = () => {
		this.setState({ count: this.state.count + 1 })
		console.log("Tap here", this)
	}

	render() {
		return <React.Fragment>
			<p>{this.state.count}</p>
			<button onClick={this.tapTest}>Tap Me</button>

		</React.Fragment>
	}
}

export default MyBottun