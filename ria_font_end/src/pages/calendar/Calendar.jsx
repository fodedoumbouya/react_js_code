import React, { useState, useEffect } from "react";
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
function CalendarView(propos) {
	const navigate = useNavigate();
	const { role } = propos.user;
	const [listEven, setlistEven] = useState([]);


	useEffect(() => {
		async function fetchFiliere() {
			const response = await fetch('/edt');
			const data = await response.json();
			// setlistFiliere(data.data);
			let list = []
			for (let index = 0; index < data.data.length; index++) {
				const element = data.data[index];
				// console.log(element);
				const date_d = new Date(element.date_debut);
				const date_debut = date_d.toISOString();
				const date_fi = new Date(element.date_fin);
				const date_fin = date_fi.toISOString();
				// console.log(date_debut);
				// console.log(date_fi);
				list.push({
					id: element.id_edt,
					title: `${element.type_cours} ${element.libelle_ue} de ${element.responsabilite_ens}`,
					allDay: false,
					start: date_debut,
					end: date_fin,
				});
			}
			setlistEven(list)
		}


		fetchFiliere();

	}, []);



	function handleClick() {
		navigate('/calendar/add');
	}
	const localizer = momentLocalizer(moment);
	// const { navigate } = this.props;
	// const title = this.props.title;
	// console.log(title)
	return (
		<React.Fragment>
			{role != 'etudiant' ?
				<Button variant="primary" type="submit" onClick={() => handleClick()}>
					Add
				</Button> : <h6></h6>
			}
			<div className="height600">
				<Calendar
					localizer={localizer}
					events={listEven} // fakeEvents
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