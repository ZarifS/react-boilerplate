/* 
    All of the scripts in the app are written in jsx. They are put into bundle.min.js using webpack.
    To add a new script file, you must add it to the entry line in the webpack.config.js file.
*/
import React from 'react';
import ReactDOM from 'react-dom';
require ('../sass/main.scss');

ReactDOM.render(
    <h1>Hello!</h1>,
    document.getElementById('header')
); 