import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => (
  <Router>
    <div className="App">
      <Route exact path="/" render={() => <Splash />} />
      <Route exact path="/home" render={() => <Home />} />
    </div>
  </Router>
)

export default App;
