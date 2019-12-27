import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from 'src/Route'
import './app.scss'

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app-root'))
