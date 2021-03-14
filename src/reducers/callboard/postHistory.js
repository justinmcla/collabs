const postHistoryReducer = (state = { list: [], isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_POST_HISTORY_REQUEST":
      return { ...state, isLoading: true }
    case "POST_HISTORY_REQUEST_FAILURE":
      return { ...state, isLoading: false, errors: action.errors }
    case "CREATE_POST_HISTORY_SUCCESS":
      return { ...state, list: [...state.posts, action.post], isLoading: false }
    case "READ_POSTS_HISTORY_SUCCESS":
      return { ...state, list: action.posts, isLoading: false }
    case "UPDATE_POST_HISTORY_SUCCESS":
      return { ...state, list: action.posts, isLoading: false }
    case "DELETE_POST_HISTORY_SUCCESS":
      const posts = state.posts.filter(post => post.id !== action.id)
      return { ...state, list: posts, isLoading: false }
    default:
      return state
  }
}

export default postHistoryReducer