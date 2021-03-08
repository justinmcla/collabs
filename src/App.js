import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProtectedRoute from './auth/ProtectedRoute'
import Splash from './containers/Splash'
import Home from './containers/Home'
import Collabs from './containers/Collabs'
import Portfolios from './containers/Portfolios'
import Callboard from './containers/Callboard'
import Settings from './containers/Settings'

const App = () => (
  <Router>
    <div className="App">
      <Route exact path="/" component={ Splash } />
      <ProtectedRoute exact path="/home" component={ Home } />
      <ProtectedRoute exact path="/collabs" component={ Collabs } />
      <ProtectedRoute exact path="/portfolios" component={ Portfolios } />
      <ProtectedRoute exact path="/callboard" component={ Callboard } />
      <ProtectedRoute exact path="/settings" component={ Settings } />
    </div>
  </Router>
)

export default App;
