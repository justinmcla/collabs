import { combineReducers } from 'redux'
import collabListReducer from './collab/collabList'
import collabRequestsReducer from './collab/collabRequests'
import viewReducer from './collab/collabView'
import searchReducer from './collab/collabSearch'

const collabReducer = combineReducers({
  collabList: collabListReducer,
  collabRequest: collabRequestsReducer,
  view: viewReducer,
  search: searchReducer
})

export default collabReducer