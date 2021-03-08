const portfolioViewReducer = (state = { portfolio: {}, isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_PORTFOLIO_VIEW_REQUEST":
      return { isLoading: true, ...state }
    case "PORTFOLIO_VIEW_REQUEST_FAILURE":
      return { isLoading: false, errors: action.errors, ...state }
    case "READ_PORTFOLIO_VIEW_SUCCESS":
      return { portfolio: action.portfolio, isLoading: false, ...state }
    default:
      return state
  }
}

export default portfolioViewReducer