const postSearchReducer = (state = { posts: [], isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_POST_SEARCH_REQUEST":
      return { isLoading: true, ...state }
    case "POST_SEARCH_REQUEST_FAILURE":
      return { isLoading: false, errors: action.errors, ...state }
    case "READ_POST_SEARCH_SUCCESS":
      return { posts: action.posts, isLoading: false, ...state }
    default:
      return state
  }
}

export default postSearchReducer