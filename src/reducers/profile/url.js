const urlReducer = (state = { path: '', isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_URL_REQUEST":
      return { ...state, isLoading: true }
    case "URL_REQUEST_FAILURE":
      return { ...state, isLoading: false, errors: action.errors }
    case "READ_PROFILE_SUCCESS":
      return { ...state, path: action.profile.url, isLoading: false }
    case "READ_URL_SUCCESS":
      return { ...state, path: action.url, isLoading: false }
    case "UPDATE_URL_SUCCESS":
      return { ...state, path: action.url, isLoading: false }
    default:
      return state
  }
}

export default urlReducer