const collabViewReducer = (state = { collab: {}, isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_COLLAB_VIEW_REQUEST":
      return { ...state, isLoading: true }
    case "COLLAB_VIEW_REQUEST_FAILURE":
      return { ...state, isLoading: false, errors: action.errors }
    case "READ_COLLAB_VIEW_SUCCESS":
      return { ...state, collab: action.collab, isLoading: false }
    case "CLEAR_COLLAB_VIEW":
      return { ...state, collab: {}, isLoading: false }
    default:
      return state
  }
}

export default collabViewReducer