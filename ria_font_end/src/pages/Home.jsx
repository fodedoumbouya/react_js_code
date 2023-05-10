import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import fakeEvents from "../utils/fakeEvents";
import moment from 'moment'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw } from 'draft-js';

function Home() {
	const [listEven, setlistEven] = useState([]);
	const [listNotice, setlistNotice] = useState([]);



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

		async function fetchNews() {
			const response = await fetch('/notice');
			const data = await response.json();
			console.log(data);
			setlistNotice(data.data);
		}


		fetchFiliere();
		fetchNews();

	}, []);

	const [items, setItems] = useState([
		{
			title: 'Title 1',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad \nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\naliquip ex ea commodo consequat. Duis aute irure dolor in\nreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\npariatur. Excepteur sint occaecat cupidatat non proident, sunt in\nculpa qui officia deserunt mollit anim id est laborum. ',
		},
		{
			title: 'Title 2',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad \nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\naliquip ex ea commodo consequat. Duis aute irure dolor in\nreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\npariatur. Excepteur sint occaecat cupidatat non proident, sunt in\nculpa qui officia deserunt mollit anim id est laborum. ',

		},
		{
			title: 'Title 3',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad \nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\naliquip ex ea commodo consequat. Duis aute irure dolor in\nreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\npariatur. Excepteur sint occaecat cupidatat non proident, sunt in\nculpa qui officia deserunt mollit anim id est laborum. ',

		}, {
			title: 'Title 4',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad \nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\naliquip ex ea commodo consequat. Duis aute irure dolor in\nreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\npariatur. Excepteur sint occaecat cupidatat non proident, sunt in\nculpa qui officia deserunt mollit anim id est laborum. ',

		}, {
			title: 'Title 5',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad \nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\naliquip ex ea commodo consequat. Duis aute irure dolor in\nreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\npariatur. Excepteur sint occaecat cupidatat non proident, sunt in\nculpa qui officia deserunt mollit anim id est laborum. ',

		}, {
			title: 'Title 6',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad \nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\naliquip ex ea commodo consequat. Duis aute irure dolor in\nreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\npariatur. Excepteur sint occaecat cupidatat non proident, sunt in\nculpa qui officia deserunt mollit anim id est laborum. ',

		}, {
			title: 'Title 7',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad \nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\naliquip ex ea commodo consequat. Duis aute irure dolor in\nreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\npariatur. Excepteur sint occaecat cupidatat non proident, sunt in\nculpa qui officia deserunt mollit anim id est laborum. ',

		}, {
			title: 'Title 8',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad \nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\naliquip ex ea commodo consequat. Duis aute irure dolor in\nreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\npariatur. Excepteur sint occaecat cupidatat non proident, sunt in\nculpa qui officia deserunt mollit anim id est laborum. ',

		}, {
			title: 'Title 9',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad \nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\naliquip ex ea commodo consequat. Duis aute irure dolor in\nreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\npariatur. Excepteur sint occaecat cupidatat non proident, sunt in\nculpa qui officia deserunt mollit anim id est laborum. ',

		}, {
			title: 'Title 10',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad \nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\naliquip ex ea commodo consequat. Duis aute irure dolor in\nreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\npariatur. Excepteur sint occaecat cupidatat non proident, sunt in\nculpa qui officia deserunt mollit anim id est laborum. ',

		}, {
			title: 'Title 11',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad \nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\naliquip ex ea commodo consequat. Duis aute irure dolor in\nreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\npariatur. Excepteur sint occaecat cupidatat non proident, sunt in\nculpa qui officia deserunt mollit anim id est laborum. ',

		}, {
			title: 'Title 12',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad \nminim veniam, quis nostrud exercitation ullamco laboris nisi ut\naliquip ex ea commodo consequat. Duis aute irure dolor in\nreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\npariatur. Excepteur sint occaecat cupidatat non proident, sunt in\nculpa qui officia deserunt mollit anim id est laborum. ',

		},
	]);


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
					events={listEven} //fakeEvents
					defaultValue={'fr'}
					showAllEvents={false}
					startAccessor="start"
					endAccessor="end"
				/>
			</div>

			{/* <div className="new_div mt-4"> */}
			<div className="new_div mt-4" style={{ height: '70ch', overflow: 'auto' }}>
				<h1 className='mb-4'>News</h1>
				<Accordion>
					{listNotice.map((item, index) => {
						const parsedContent = JSON.parse(item.content);
						const contentState = convertFromRaw(parsedContent);
						console.log(contentState);
						const editorState = EditorState.createWithContent(contentState);
						console.log(editorState);
						const parsedContent1 = JSON.parse(item.content);

						// Extract the text content from the blocks array
						const textContent = parsedContent1.blocks.map(block => block.text).join('\n');
						console.log(textContent);
						return (

							<Accordion key={index} defaultActiveKey={0}>
								<Accordion.Item eventKey={index}>
									<Accordion.Header>{item.title}</Accordion.Header>
									<Accordion.Body>
										{textContent}
										{/* <Editor
											editorState={editorState}
											// onEditorStateChange={setEditorState}
											readOnly={true}
										/> */}
									</Accordion.Body>
								</Accordion.Item>

							</Accordion>

						)
					})}
				</Accordion>

			</div>

		</React.Fragment>
	);
}

export default Home;


	// 	<Card.Header>
						// 		<Accordion.Toggle as={Button} variant="link" eventKey={index}>
						// 			<FaChevronDown /> {`Published at ${index}`}
						// 		</Accordion.Toggle>
						// 	</Card.Header>
						// 	<Accordion.Collapse eventKey={index}>
						// 		<Card.Body>
						// 			<h4>{item.title}</h4>
						// 			<p>{item.content}</p>
						// 		</Card.Body>
						// 	</Accordion.Collapse>





// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Collapse from 'react-bootstrap/Collapse';

// function Example() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <Button
//         onClick={() => setOpen(!open)}
//         aria-controls="example-collapse-text"
//         aria-expanded={open}
//       >
//         click
//       </Button>
//       <div style={{ minHeight: '150px' }}>
//         <Collapse in={open} dimension="width">
//           <div id="example-collapse-text">
//             <Card body style={{ width: '400px' }}>
//               Anim pariatur cliche reprehenderit, enim eiusmod high life
//               accusamus terry richardson ad squid. Nihil anim keffiyeh
//               helvetica, craft beer labore wes anderson cred nesciunt sapiente
//               ea proident.
//             </Card>
//           </div>
//         </Collapse>
//       </div>
//     </>
//   );
// }

// render(<Example />);