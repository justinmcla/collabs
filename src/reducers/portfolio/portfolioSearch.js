const portfolioSearchReducer = (state = { portfolios: [], isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_PORTFOLIO_SEARCH_REQUEST":
      return { isLoading: true, ...state }
    case "PORTFOLIO_SEARCH_REQUEST_FAILURE":
      return { isLoading: false, errors: action.errors, ...state }
    case "READ_PORTFOLIO_SEARCH_SUCCESS":
      return { portfolios: action.portfolios, isLoading: false, ...state }
    default:
      return state
  }
}

export default portfolioSearchReducer