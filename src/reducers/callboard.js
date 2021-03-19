import { combineReducers } from 'redux'
import postReducer from './callboard/post'
import searchReducer from './callboard/postSearch'
import settingReducer from './callboard/callboardSetting'

const callboardReducer = combineReducers({
  post: postReducer,
  search: searchReducer,
  setting: settingReducer
})

export default callboardReducer