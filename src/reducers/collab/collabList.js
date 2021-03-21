const collabListReducer = (state = { list: [], isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_COLLAB_LIST_REQUEST":
      return { ...state, isLoading: true }
    case "COLLAB_LIST_REQUEST_FAILURE":
      return { ...state, isLoading: false, errors: action.errors }
    case "READ_COLLAB_LIST_SUCCESS":
      return { ...state, list: action.collabs, isLoading: false }
    case "CREATE_COLLAB_REQUEST_SUCCESS":
    case "UPDATE_COLLAB_REQUEST_SUCCESS":
      return { ...state, list: [...state.list, action.collabRequest ], isLoading: false }
    case "DELETE_COLLAB_LIST_SUCCESS":
    case "DELETE_COLLAB_REQUEST_SUCCESS":
      const collabs = state.list.filter(collab => collab.id !== action.id)
      return { ...state, list: collabs, isLoading: false }
    default:
      return state
  }
}

export default collabListReducer