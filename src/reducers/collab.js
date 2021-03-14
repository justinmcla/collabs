import { combineReducers } from 'redux'
import collabListReducer from './collab/collabList'
import collabRequestReducer from './collab/collabRequest'
import requestHistoryReducer from './collab/requestHistory'
import viewReducer from './collab/collabView'
import searchReducer from './collab/collabSearch'

const collabReducer = combineReducers({
  collabList: collabListReducer,
  collabRequest: collabRequestReducer,
  requestHistory: requestHistoryReducer,
  view: viewReducer,
  search: searchReducer
})

export default collabReducer