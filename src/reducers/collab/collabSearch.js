const collabSearchReducer = (state = { results: [], isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_COLLAB_SEARCH_REQUEST":
      return { ...state, isLoading: true }
    case "COLLAB_SEARCH_REQUEST_FAILURE":
      return { ...state, isLoading: false, errors: action.errors }
    case "READ_COLLAB_SEARCH_SUCCESS":
      return { ...state, results: action.collabs, isLoading: false }
    default:
      return state
  }
}

export default collabSearchReducer