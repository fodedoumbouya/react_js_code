import React from "react";
import { Component } from "react";
import Counter from "./counter";


class Counters extends Component {
	render() {
		const { handleReset, counters, onDelete, onIncrement } = this.props;

		return (
			<div className="counterView">
				<button onClick={handleReset}>
					Reset
				</button>
				{
					counters.map(coun => <Counter key={coun.index} counter={coun} onDelete={onDelete} onIncrement={onIncrement}>
						<h4>Text from parent {coun.index}</h4>
					</Counter>)
				}



			</div>
		)
	}
}

export default Counters