import { combineReducers } from 'redux'
import profileReducer from './profile.js'
import collabReducer from './collab.js'
import callboardReducer from './callboard.js'

const rootReducer = combineReducers({
  profile: profileReducer,
  collab: collabReducer,
  callboard: callboardReducer
})

export default rootReducer;