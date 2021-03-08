import { combineReducers } from 'redux'
import postReducer from './callboard/post.js'
import postHistoryReducer from './callboard/postHistory.js'
import searchReducer from './callboard/postSearch.js'
import settingReducer from './callboard/callboardSetting.js'

const callboardReducer = combineReducers({
  post: postReducer,
  postHistory: postHistoryReducer,
  search: searchReducer,
  setting: settingReducer
})

export default callboardReducer