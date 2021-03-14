const portfolioViewReducer = (state = { portfolio: {}, isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_PORTFOLIO_VIEW_REQUEST":
      return { ...state, isLoading: true }
    case "PORTFOLIO_VIEW_REQUEST_FAILURE":
      return { ...state, isLoading: false, errors: action.errors }
    case "READ_PORTFOLIO_VIEW_SUCCESS":
      return { ...state, portfolio: action.portfolio, isLoading: false }
    default:
      return state
  }
}

export default portfolioViewReducer