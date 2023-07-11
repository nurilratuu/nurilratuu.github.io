import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import EU from './views/eu'
import SmartWarehouse from './views/smart-warehouse'
import Conversa from './views/conversa'
import Salyns from './views/salyns'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={EU} exact path="/eu" />
        <Route component={SmartWarehouse} exact path="/smart-warehouse" />
        <Route component={Conversa} exact path="/conversa" />
        <Route component={Salyns} exact path="/salyns" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
