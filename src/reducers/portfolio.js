import { combineReducers } from 'redux'
import userReducer from './portfolio/userPortfolio'
import viewReducer from './portfolio/portfolioView'
import searchReducer from './portfolio/portfolioSearch'

const portfolioReducer = combineReducers({
  user: userReducer,
  view: viewReducer,
  search: searchReducer
})

export default portfolioReducer