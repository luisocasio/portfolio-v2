import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './pages/Landing'

const App = () => {
  return (
    <div className='App'>
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
