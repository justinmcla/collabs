const collabViewReducer = (state = { collab: {}, isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_COLLAB_VIEW_REQUEST":
      return { isLoading: true, ...state }
    case "COLLAB_VIEW_REQUEST_FAILURE":
      return { isLoading: false, errors: action.errors, ...state }
    case "READ_COLLAB_VIEW_SUCCESS":
      return { collab: action.collab, isLoading: false, ...state }
    default:
      return state
  }
}

export default collabViewReducer