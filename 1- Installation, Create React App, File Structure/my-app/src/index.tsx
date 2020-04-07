import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/**
 * Index.html was our "core" file for our old projects... right? Now index.html still is very critical to react projects!
 * But this file is what wires together the "basic" index.html file together with your react application.
 * 
 * Look below specifically at the document.getElementByID('root') command. This is exactly what ties in react with the rest
 * of the projectwork. This can be thought of as the "Connector" between what you already know with index.html, selecting elements 
 * through the DOM and the rest. And this connects it to that "basic div" in index.html!
 */

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
