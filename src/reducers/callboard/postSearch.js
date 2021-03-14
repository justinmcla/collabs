const postSearchReducer = (state = { results: [], isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_POST_SEARCH_REQUEST":
      return { ...state, isLoading: true }
    case "POST_SEARCH_REQUEST_FAILURE":
      return { ...state, isLoading: false, errors: action.errors }
    case "READ_POST_SEARCH_SUCCESS":
      return { ...state, results: action.posts, isLoading: false }
    default:
      return state
  }
}

export default postSearchReducer