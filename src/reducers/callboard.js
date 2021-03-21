import { combineReducers } from 'redux'
import postReducer from './callboard/post'
import searchReducer from './callboard/postSearch'

const callboardReducer = combineReducers({
  post: postReducer,
  search: searchReducer
})

export default callboardReducer