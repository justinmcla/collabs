import { combineReducers } from 'redux'
import userReducer from './portfolio/userPortfolio.js'
import viewReducer from './portfolio/portfolioView.js'
import searchReducer from './portfolio/portfolioSearch.js'

const portfolioReducer = combineReducers({
  user: userReducer,
  view: viewReducer,
  search: searchReducer
})

export default portfolioReducer