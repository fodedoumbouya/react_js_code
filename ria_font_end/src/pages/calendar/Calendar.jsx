import React from "react";
import { Component } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import fakeEvents from "../../utils/fakeEvents";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'



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
function CalendarView() {
	const navigate = useNavigate();
	function handleClick() {
		navigate('/calendar/add');
	}

	const localizer = momentLocalizer(moment);
	// const { navigate } = this.props;
	// const title = this.props.title;
	// console.log(title)
	return (
		<React.Fragment>
			<Button variant="primary" type="submit" onClick={() => handleClick()}>
				Add
			</Button>
			<div className="height600">
				<Calendar
					localizer={localizer}
					events={fakeEvents}
					messages={lang}
					defaultValue={'fr'}
					startAccessor="start"
					endAccessor="end" />
			</div></React.Fragment>
	);
}

export default CalendarView;



// // Wrap and export
// export default function (props) {
// 	// const navigation = useNavigation();
// 	const navigate = useNavigate();

// 	return <CalendarView {...props} navigate={navigate} />;
// }