import React from "react";
import { Component } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import fakeEvents from "../utils/fakeEvents";

const lang = {
	week: 'La semaine',
	work_week: 'Semaine de travail',
	day: 'Jour',
	month: 'Mois',
	previous: 'Antérieur',
	next: 'Prochain',
	today: `Aujourd'hui`,
	agenda: 'Ordre du jour',

	showMore: (total) => `+${total} plus`,
}
class CalendarView extends Component {

	render() {
		const localizer = momentLocalizer(moment);
		const title = this.props.title;
		console.log(title)
		return (
			<div className="height600">
				<Calendar
					localizer={localizer}
					events={fakeEvents}
					messages={lang}
					defaultValue={'fr'}
					startAccessor="start"
					endAccessor="end"
				/>
			</div>
		);
	}
}

export default CalendarView;



