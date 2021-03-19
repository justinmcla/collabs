import { combineReducers } from 'redux'
import collabListReducer from './collab/collabList'
import collabRequestReducer from './collab/collabRequest'
import viewReducer from './collab/collabView'
import searchReducer from './collab/collabSearch'

const collabReducer = combineReducers({
  collabList: collabListReducer,
  collabRequest: collabRequestReducer,
  view: viewReducer,
  search: searchReducer
})

export default collabReducer