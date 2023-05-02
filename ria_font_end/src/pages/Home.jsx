import React from "react";
import { Component } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import fakeEvents from "../utils/fakeEvents";
import moment from 'moment'


class Home extends Component {
	state = {
		count: 0
	}

	render() {
		const localizer = momentLocalizer(moment);
		return (
			<React.Fragment className="home">
				<div className="head_Info">
					<p>Total Student</p>
					<p>Total Teacher</p>
					<p>Total class</p>
				</div>

				<div className="row align-items-md-stretch mt-4">
					<div className="col">
						<div className="welcome">
							<h3>Welcome to RIA School!</h3>
							<p><i className="bi bi-emoji-heart-eyes"></i> Thanks for your love and support.</p>
						</div>
					</div>
				</div>

				<div className="calendar_view">
					<Calendar
						localizer={localizer}
						events={fakeEvents}
						defaultValue={'fr'}
						showAllEvents={false}
						startAccessor="start"
						endAccessor="end"

					/>
				</div>

				<div className="new_div"></div>

			</React.Fragment >
		);

	}

}

export default Home; 