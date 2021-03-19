const aboutReducer = (state = { text: '', isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_ABOUT_REQUEST":
      return { ...state, isLoading: true }
    case "ABOUT_REQUEST_FAILURE":
      return { ...state, isLoading: false, errors: action.errors }
    case "READ_ABOUT_SUCCESS":
      return { ...state, text: action.about, isLoading: false }
    case "READ_USER_SUCCESS":
      return { ...state, text: action.profile.about, isLoading: false }
    case "UPDATE_ABOUT_SUCCESS":
      return { ...state, text: action.about, isLoading: false }
    default:
      return state
  }
}

export default aboutReducer