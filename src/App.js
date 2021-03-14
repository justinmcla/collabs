import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProtectedRoute from './auth/ProtectedRoute'
import Splash from './containers/Splash'
import Home from './containers/Home'
import Collabs from './containers/Collabs'
import Portfolios from './containers/Portfolios'
import Callboard from './containers/Callboard'
import Settings from './containers/Settings'

const isProfilePath = window.location.pathname !== "/"

const App = () => (
  <Router>
    <div className="App h-full">
      <Route exact path="/" component={ Splash } />
      <div className="flex flex-row flex-nowrap">
        { isProfilePath ? <Navbar /> : null }
        <ProtectedRoute exact path="/home" component={ Home } />
        <ProtectedRoute exact path="/collabs" component={ Collabs } />
        <ProtectedRoute exact path="/portfolios" component={ Portfolios } />
        <ProtectedRoute exact path="/callboard" component={ Callboard } />
        <ProtectedRoute exact path="/settings" component={ Settings } />
      </div>
    </div>
  </Router>
)

export default App;
