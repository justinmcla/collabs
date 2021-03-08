const postHistoryReducer = (state = { posts: [], isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_POST_HISTORY_REQUEST":
      return { isLoading: true, ...state }
    case "POST_HISTORY_REQUEST_FAILURE":
      return { isLoading: false, errors: action.errors, ...state }
    case "CREATE_POST_HISTORY_SUCCESS":
      return { posts: [...state.posts, action.post], isLoading: false, ...state }
    case "READ_POSTS_HISTORY_SUCCESS":
      return { posts: action.posts, isLoading: false, ...state }
    case "UPDATE_POST_HISTORY_SUCCESS":
      return { posts: action.posts, isLoading: false, ...state }
    case "DELETE_POST_HISTORY_SUCCESS":
      const posts = state.posts.filter(post => post.id !== action.id)
      return { posts: posts, isLoading: false, ...state }
    default:
      return state
  }
}

export default postHistoryReducer