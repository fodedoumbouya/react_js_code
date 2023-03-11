import React from "react"
import ReactDOM from "react-don"


/// Add element to our 'root' div in React
function MainApp() {
	return <h1>This is from the MainApp</h1>
}

const nav = (
	<nav>
		<h1>Website</h1>
		<ul>
			<li>10</li>
			<li>20</li>
			<li>30</li>
			<li>About</li>
			<li>Contact</li>
		</ul>
	</nav>
)


// JSX 
ReactDOM.render(nav, document.getElementById("root"))



// Creating a element and insert into 'root' div  In js

// const h1 = document.createElement("h1")
// h1.textContent = "this is the h1 create text in JS"
// h1.className = "header"

// document.getElementById("root").append(h1)
