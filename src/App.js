import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProtectedRoute from './auth/ProtectedRoute'
import Splash from './containers/Splash'
import Home from './containers/Home'

const App = () => (
  <Router>
    <div className="App">
      <Route exact path="/" component={Splash} />
      <ProtectedRoute exact path="/home" component={Home} />
    </div>
  </Router>
)

export default App;
