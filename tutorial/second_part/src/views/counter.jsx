import React from "react";
import { Component } from "react";


class Counter extends Component {
	// state = {
	// 	count: this.props.counter.value
	// }



	render() {
		// console.log('props', this.props)
		const { onDelete, onIncrement, counter, children } = this.props;

		return (
			<React.StrictMode>
				{children}
				<span>
					{counter.value}
				</span>
				<button onClick={() => onIncrement(counter)}>
					Increment
				</button>
				<button onClick={() => onDelete(this.props.counter.index)}>
					Delete
				</button>
			</React.StrictMode>
		)
	}
}

export default Counter