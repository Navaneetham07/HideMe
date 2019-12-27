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