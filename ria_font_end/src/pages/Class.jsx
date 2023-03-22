import React from "react";
import { Component } from "react";

class Class extends Component {

	render() {
		return (
			<React.Fragment>
				<div className="class_view_head">
					<i className='bx bx-folder'></i>
					<h1>Mes Classes</h1>
				</div>
				<div className="class_view_body">
					<div className="class_view_body_head">
						<h3>Classe</h3>
						<h3 className="actions">Actions</h3>
					</div>
					<div className="class_view_body_content">
						<p>
							RIA
						</p>
						<div className="class_view_body_content_buttn">
							<p>Regarder les notes</p>
							<p>Regarder les TP</p>
						</div>


					</div>
				</div>
				<div className="class_view_body_footer" >
					<p>&copy; 2023 DOUMBOUYA</p>
				</div>
			</React.Fragment>

		);
	}
}

export default Class;