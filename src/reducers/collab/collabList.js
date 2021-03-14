const collabListReducer = (state = { list: [], isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_COLLAB_LIST_REQUEST":
      return { ...state, isLoading: true }
    case "COLLAB_LIST_REQUEST_FAILURE":
      return { ...state, isLoading: false, errors: action.errors }
    case "READ_COLLAB_LIST_SUCCESS":
      return { ...state, list: action.collabs, isLoading: false }
    case "DELETE_COLLAB_LIST_SUCCESS":
      const collabs = state.collabs.filter(collab => collab.id !== action.id)
      return { ...state, list: collabs, isLoading: false }
    default:
      return state
  }
}

export default collabListReducer