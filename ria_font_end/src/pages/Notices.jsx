import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function NoticeForm() {
	const [title, setTitle] = useState('');
	const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

	const handleSubmit = (e) => {
		e.preventDefault();
		const rawContentState = convertToRaw(editorState.getCurrentContent());
		const markup = JSON.stringify(rawContentState);
		const noticeData = {
			title: title,
			content: markup,
		};
		console.log(noticeData); // or send this data to a server or another component
	};

	return (
		<Container>
			<Row className="justify-content-md-center">
				<Col md="auto">
					<h1>Create a Notice</h1>
				</Col>
			</Row>
			<Row className="justify-content-md-center">
				<Col md={8}>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="formNoticeTitle">
							<Form.Label>Title</Form.Label>
							<Form.Control type="text" placeholder="Enter notice title" value={title} onChange={(e) => setTitle(e.target.value)} />
						</Form.Group>

						<Form.Group controlId="formNoticeContent">
							<Form.Label>Content</Form.Label>
							<div style={{ backgroundColor: 'white', }}>
								<Editor editorState={editorState} onEditorStateChange={setEditorState} />
							</div>
						</Form.Group>

						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default NoticeForm;
