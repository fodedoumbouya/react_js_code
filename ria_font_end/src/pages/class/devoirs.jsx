import React from "react";

import { useLocation } from 'react-router-dom'

function Devoirs() {
	const location = useLocation()
	const { class_name } = location.state

	return (
		<div className="class_devoirs_view">
			<div className="head_dv">
				<h3>Lesson: </h3>
				<h4>{class_name}</h4>
			</div>

		</div>
	)
}

export default Devoirs;