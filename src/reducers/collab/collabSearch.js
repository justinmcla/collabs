const collabSearchReducer = (state = { collabs: [], isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_COLLAB_SEARCH_REQUEST":
      return { isLoading: true, ...state }
    case "COLLAB_SEARCH_REQUEST_FAILURE":
      return { isLoading: false, errors: action.errors, ...state }
    case "READ_COLLAB_SEARCH_SUCCESS":
      return { collabs: action.collabs, isLoading: false, ...state }
    default:
      return state
  }
}

export default collabSearchReducer