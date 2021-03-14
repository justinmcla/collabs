const userPortfolioReducer = (state = { list: {}, isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_USER_PORTFOLIO_REQUEST":
      return { ...state, isLoading: true }
    case "USER_PORTFOLIO_REQUEST_FAILURE":
      return { ...state, isLoading: false, errors: action.errors }
    case "CREATE_USER_PORTFOLIO_SUCCESS":
      return { ...state, userPortfolios: [...state.userPortfolios, action.portfolio], isLoading: false }
    case "READ_USER_PORTFOLIO_SUCCESS":
      return { ...state, userPortfolios: action.userPortfolios, isLoading: false }
    case "UPDATE_USER_PORTFOLIO_SUCCESS":
      return { ...state, userPortfolios: action.userPortfolios, isLoading: false }
    case "DELETE_USER_PORTFOLIO_SUCCESS":
      const userPortfolios = state.userPortfolios.filter(portfolio => portfolio.id !== action.id)
      return { ...state, userPortfolios: userPortfolios, isLoading: false }
    default:
      return state
  }
}

export default userPortfolioReducer