<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
=======
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './Router'



function Main()
{
  return(
    <Router>
    <Routes />
  </Router>
  )
}


  ReactDOM.render(
    <Main />,
    document.getElementById('root')
  );
>>>>>>> 6bd8690eb03e2ef3670340fb375b6a98382795dd
