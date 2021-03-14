const requestHistoryReducer = (state = { list: [], isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_REQUEST_HISTORY_REQUEST":
      return { ...state, isLoading: true }
    case "REQUEST_HISTORY_REQUEST_FAILURE":
      return { ...state, isLoading: false, errors: action.errors }
    case "CREATE_REQUEST_HISTORY_SUCCESS":
      return { ...state, list: [...state.collabRequests, action.post], isLoading: false }
    case "READ_REQUEST_HISTORY_SUCCESS":
      return { ...state, list: action.collabRequests, isLoading: false }
    case "UPDATE_REQUEST_HISTORY_SUCCESS":
      return { ...state, list: action.collabRequests, isLoading: false }
    case "DELETE_REQUEST_HISTORY_SUCCESS":
      const collabRequests = state.collabRequests.filter(post => post.id !== action.id)
      return { ...state, list: collabRequests, isLoading: false }
    default:
      return state
  }
}

export default requestHistoryReducer