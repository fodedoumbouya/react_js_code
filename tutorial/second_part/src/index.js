import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import MyBody from './views/body';
import Header from './views/Header';


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
    <><Header /><MyBody /></>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<ReturnPage />)