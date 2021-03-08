const collabListReducer = (state = { collabs: [], isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_COLLAB_LIST_REQUEST":
      return { isLoading: true, ...state }
    case "COLLAB_LIST_REQUEST_FAILURE":
      return { isLoading: false, errors: action.errors, ...state }
    case "READ_COLLAB_LIST_SUCCESS":
      return { collabs: action.collabs, isLoading: false, ...state }
    case "DELETE_COLLAB_LIST_SUCCESS":
      const collabs = state.collabs.filter(collab => collab.id !== action.id)
      return { collabs: collabs, isLoading: false, ...state }
    default:
      return state
  }
}

export default collabListReducer