import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
//
// Notification.requestPermission(function(status) {
//     console.log('Notification permission status:', status);
// });
