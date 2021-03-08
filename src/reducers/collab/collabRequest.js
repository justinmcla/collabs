const collabRequestReducer = (state = { collabRequests: [], isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_COLLAB_REQUEST_REQUEST":
      return { isLoading: true, ...state }
    case "COLLAB_REQUEST_REQUEST_FAILURE":
      return { isLoading: false, errors: action.errors, ...state }
    case "CREATE_COLLAB_REQUEST_SUCCESS":
      return { collabRequests: [...state.collabRequests, action.collabRequest], isLoading: false, ...state }
    case "READ_COLLAB_REQUEST_SUCCESS":
      return { collabRequests: action.collabRequests, isLoading: false, ...state }
    case "UPDATE_COLLAB_REQUEST_SUCCESS":
      return { collabRequests: action.collabRequests, isLoading: false, ...state }
    case "DELETE_COLLAB_REQUEST_SUCCESS":
      const collabRequests = state.collabRequests.filter(collabRequest => collabRequest.id !== action.id)
      return { collabRequests: collabRequests, isLoading: false, ...state }
    default:
      return state
  }
}

export default collabRequestReducer