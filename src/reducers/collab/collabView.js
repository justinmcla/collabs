const collabViewReducer = (state = { profile: {}, isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_READ_COLLAB_REQUEST":
      return { ...state, isLoading: true }
    case "READ_COLLAB_REQUEST_FAILURE":
      return { ...state, isLoading: false, errors: action.errors }
    case "READ_COLLAB_SUCCESS":
      return { ...state, profile: action.payload, isLoading: false }
    case "CLEAR_COLLAB":
      return { ...state, profile: {}, isLoading: false }
    default:
      return state
  }
}

export default collabViewReducer