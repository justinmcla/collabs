const portfolioSearchReducer = (state = { results: [], isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_PORTFOLIO_SEARCH_REQUEST":
      return { ...state, isLoading: true }
    case "PORTFOLIO_SEARCH_REQUEST_FAILURE":
      return { ...state, isLoading: false, errors: action.errors }
    case "READ_PORTFOLIO_SEARCH_SUCCESS":
      return { ...state, results: action.portfolios, isLoading: false }
    default:
      return state
  }
}

export default portfolioSearchReducer