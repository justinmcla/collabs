const userPortfolioReducer = (state = { userPortfolios: {}, isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_USER_PORTFOLIO_REQUEST":
      return { isLoading: true, ...state }
    case "USER_PORTFOLIO_REQUEST_FAILURE":
      return { isLoading: false, errors: action.errors, ...state }
    case "CREATE_USER_PORTFOLIO_SUCCESS":
      return { userPortfolios: [...state.userPortfolios, action.portfolio], isLoading: false, ...state }
    case "READ_USER_PORTFOLIO_SUCCESS":
      return { userPortfolios: action.userPortfolios, isLoading: false, ...state }
    case "UPDATE_USER_PORTFOLIO_SUCCESS":
      return { userPortfolios: action.userPortfolios, isLoading: false, ...state }
    case "DELETE_USER_PORTFOLIO_SUCCESS":
      const userPortfolios = state.userPortfolios.filter(portfolio => portfolio.id !== action.id)
      return { userPortfolios: userPortfolios, isLoading: false, ...state }
    default:
      return state
  }
}

export default userPortfolioReducer