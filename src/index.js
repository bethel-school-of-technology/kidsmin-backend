import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const mysql = require('mysql'); 

var connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root',
  password: 'admin12345',
  database: 'ProjectApp'
}); 

connection.connect(function(err){
  if(err) {
    console.log(err); 
  } else 
  console.log ("We are connected to our database"); 
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
