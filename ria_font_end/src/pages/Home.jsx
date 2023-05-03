import React, { useState } from 'react';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import fakeEvents from "../utils/fakeEvents";
import moment from 'moment'

function Home() {
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
					events={fakeEvents}
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
					{items.map((item, index) => (
						<Accordion key={index} defaultActiveKey={0}>
							<Accordion.Item eventKey={index}>
								<Accordion.Header>Accordion Item #{index}</Accordion.Header>
								<Accordion.Body>
									{item.content}
								</Accordion.Body>
							</Accordion.Item>

						</Accordion>

					))}
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