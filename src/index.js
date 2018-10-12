import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import catData from './catData.json';
import dogData from './dogData.json';
import Dashboard from './Dashboard';
import * as serviceWorker from './serviceWorker';

console.log(catData);

ReactDOM.render(<Dashboard catToAdopt={catData}  dogToAdopt={dogData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
