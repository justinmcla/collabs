import { combineReducers } from 'redux'
import nameReducer from './profile/name'
import imageReducer from './profile/image'
import urlReducer from './profile/url'
import locationReducer from './profile/location'
import jobReducer from './profile/job'
import socialLinkReducer from './profile/socialLink'
import settingReducer from './profile/setting'

const profileReducer = combineReducers({
  name: nameReducer,
  image: imageReducer,
  url: urlReducer,
  location: locationReducer,
  job: jobReducer,
  socialLink: socialLinkReducer,
  setting: settingReducer,
})

export default profileReducer