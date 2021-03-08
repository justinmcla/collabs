import { combineReducers } from 'redux'
import profileReducer from './profile.js'
import collabReducer from './collab.js'
import callboardReducer from './callboard.js'
import portfolioReducer from './portfolio.js'

const rootReducer = combineReducers({
  profile: profileReducer,
  collab: collabReducer,
  callboard: callboardReducer,
  portfolio: portfolioReducer
})

export default rootReducer;