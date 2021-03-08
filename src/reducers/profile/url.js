const urlReducer = (state = { url: '', isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_URL_REQUEST":
      return { isLoading: true, ...state }
    case "URL_REQUEST_FAILURE":
      return { isLoading: false, errors: action.errors, ...state }
    case "READ_URL_SUCCESS":
      return { url: action.url, isLoading: false, ...state }
    case "UPDATE_URL_SUCCESS":
      return { url: action.url, isLoading: false, ...state }
    default:
      return state
  }
}

export default urlReducer