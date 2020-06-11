import React from 'react'
import ReactDOM from 'react-dom'
import './styles/css/style.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './pages/Landing'

const App = () => {
  return (
    <div id='wrapper'>
      <Route exact path='/' component={Landing} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
