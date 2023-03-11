import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// const page = (

// )
// console.log(page)


function ReturnPage() {
  return (
    <><Header /><Body /></>
  )
}

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} className="App-logo" alt="logo" width="20%" />
      </nav>
    </header>
  )
}

function Body() {
  return (
    <div>
      {/* <img src={logo} className="App-logo" alt="logo" width="20%" /> */}
      <h1>
        Fun Facts about React
      </h1>
      <ul>
        <li>
          Was first released in 2013
        </li>
        <li>
          Was originally created by Jordan Walke
        </li>
        <li>
          Has well over 100k stars on GIthub
        </li>
      </ul>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<ReturnPage />)