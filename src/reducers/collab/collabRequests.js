const collabRequestsReducer = (state = { list: [], isLoading: false, errors: [] }, action) => {
  let collabRequests = []
  switch(action.type) {
    case "NEW_COLLAB_REQUEST_REQUEST":
      return { ...state, isLoading: true }
    case "COLLAB_REQUEST_REQUEST_FAILURE":
      return { ...state, isLoading: false, errors: action.errors }
    case "CREATE_COLLAB_REQUEST_SUCCESS":
      return { ...state, list: [...state.list, action.collabRequest], isLoading: false }
    case "READ_COLLAB_REQUEST_SUCCESS":
      return { ...state, list: action.collabRequests, isLoading: false }
    case "UPDATE_COLLAB_REQUEST_SUCCESS":
      collabRequests = state.list.filter(collabRequest => collabRequest.id !== action.collabRequest.id)
      return { ...state, list: collabRequests, isLoading: false }
    case "DELETE_COLLAB_REQUEST_SUCCESS":
      collabRequests = state.list.filter(collabRequest => collabRequest.id !== action.id)
      return { ...state, list: collabRequests, isLoading: false }
    default:
      return state
  }
}

export default collabRequestsReducer