import { combineReducers } from 'redux'
import nameReducer from './profile/name.js'
import imageReducer from './profile/image.js'
import urlReducer from './profile/url.js'
import locationReducer from './profile/location.js'
import jobReducer from './profile/job.js'
import educationReducer from './profile/education.js'
import socialLinkReducer from './profile/socialLink.js'
import languageReducer from './profile/language.js'
import settingReducer from './profile/setting.js'

const profileReducer = combineReducers({
  name: nameReducer,
  image: imageReducer,
  url: urlReducer,
  location: locationReducer,
  job: jobReducer,
  education: educationReducer,
  socialLink: socialLinkReducer,
  language: languageReducer,
  setting: settingReducer
})

export default profileReducer