import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Parse from 'parse'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

Parse.initialize("FC6cpsUs8zlFdwysXMgGbxopflQdO4g2KKlnAJNp", "5T4ZMeffojFJV49trkjxsJ64jpWlDNmLQQjTMPyo")
Parse.serverURL = "https://parseapi.back4app.com/";
