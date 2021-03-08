const requestHistoryReducer = (state = { collabRequests: [], isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_REQUEST_HISTORY_REQUEST":
      return { isLoading: true, ...state }
    case "REQUEST_HISTORY_REQUEST_FAILURE":
      return { isLoading: false, errors: action.errors, ...state }
    case "CREATE_REQUEST_HISTORY_SUCCESS":
      return { collabRequests: [...state.collabRequests, action.post], isLoading: false, ...state }
    case "READ_REQUEST_HISTORY_SUCCESS":
      return { collabRequests: action.collabRequests, isLoading: false, ...state }
    case "UPDATE_REQUEST_HISTORY_SUCCESS":
      return { collabRequests: action.collabRequests, isLoading: false, ...state }
    case "DELETE_REQUEST_HISTORY_SUCCESS":
      const collabRequests = state.collabRequests.filter(post => post.id !== action.id)
      return { collabRequests: collabRequests, isLoading: false, ...state }
    default:
      return state
  }
}

export default requestHistoryReducer