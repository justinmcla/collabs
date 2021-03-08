import { combineReducers } from 'redux'
import collabListReducer from './collab/collabList.js'
import collabRequestReducer from './collab/collabRequest.js'
import requestHistoryReducer from './collab/requestHistory.js'
import viewReducer from './collab/collabView.js'
import searchReducer from './collab/collabSearch.js'

const collabReducer = combineReducers({
  collabList: collabListReducer,
  collabRequest: collabRequestReducer,
  requestHistory: requestHistoryReducer,
  view: viewReducer,
  search: searchReducer
})

export default collabReducer