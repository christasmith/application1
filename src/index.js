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

Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
});

if (Notification.permission === "granted") {
    displayNotification()
    /* the user has previously denied push. Can't reprompt. */
} else if (Notification.permission === "blocked") {
    /* the user has previously denied push. Can't reprompt. */
} else {
    /* show a prompt to the user */
}

function displayNotification() {
        if (Notification.permission === 'granted') {
            navigator.serviceWorker.getRegistration().then(function(reg) {
                var options = {
                    body: 'Here is a notification body!',
                    icon: 'images/example.png',
                    vibrate: [100, 50, 100],
                    data: {
                        dateOfArrival: Date.now(),
                        primaryKey: 1
                    },
                    actions: [
                        {action: 'explore', title: 'Explore this new world',
                            icon: 'images/checkmark.png'},
                        {action: 'close', title: 'Close notification',
                            icon: 'images/xmark.png'},
                    ]
                };
                reg.showNotification('Hello world!', options);
            });
    }
}

