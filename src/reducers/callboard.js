import { combineReducers } from 'redux'
import postReducer from './callboard/post'
import postHistoryReducer from './callboard/postHistory'
import searchReducer from './callboard/postSearch'
import settingReducer from './callboard/callboardSetting'

const callboardReducer = combineReducers({
  post: postReducer,
  postHistory: postHistoryReducer,
  search: searchReducer,
  setting: settingReducer
})

export default callboardReducer