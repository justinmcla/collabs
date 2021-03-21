import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProtectedRoute from './auth/ProtectedRoute'
import Splash from './containers/Splash'
import Home from './containers/Home'
import Collabs from './containers/collab/Collabs'
import Callboard from './containers/callboard/Callboard'
import PublicProfileSettings from './containers/profile/PublicProfileSettings'
import CollabSearch from './containers/collab/CollabSearch'
import CollabRequests from './containers/collab/CollabRequests'
import CollabProfile from './containers/profile/CollabProfile'
import Profile from './containers/profile/Profile'

const isProfilePath = window.location.pathname !== "/"

const App = () => (
  <Router>
    <div className="App">
      <Route exact path="/" component={ Splash } />
      <div className="flex flex-row flex-nowrap h-screen">
        { isProfilePath ? <Navbar /> : null }
        <ProtectedRoute exact path="/home" component={ Home } />
        <ProtectedRoute exact path="/profile" component={ Profile } />
        <ProtectedRoute path="/profile/:slug" component={ CollabProfile } />
        <ProtectedRoute exact path="/collabs" component={ Collabs } />
        <ProtectedRoute exact path="/collabs/search" component={ CollabSearch } />
        <ProtectedRoute exact path="/collabs/requests" component={ CollabRequests } />
        <ProtectedRoute exact path="/callboard" component={ Callboard } />
        <ProtectedRoute exact path="/settings" component={ PublicProfileSettings } />
      </div>
    </div>
  </Router>
)

export default App;
