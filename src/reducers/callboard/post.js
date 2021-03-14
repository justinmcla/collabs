const postReducer = (state = { list: [], isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_POST_REQUEST":
      return { ...state, isLoading: true }
    case "POST_REQUEST_FAILURE":
      return { ...state, isLoading: false, errors: action.errors }
    case "CREATE_POST_SUCCESS":
      return { ...state, list: [...state.posts, action.post], isLoading: false }
    case "READ_POSTS_SUCCESS":
      return { ...state, list: action.posts, isLoading: false }
    case "UPDATE_POST_SUCCESS":
      return { ...state, list: action.posts, isLoading: false }
    case "DELETE_POST_SUCCESS":
      const posts = state.posts.filter(post => post.id !== action.id)
      return { ...state, list: posts, isLoading: false }
    default:
      return state
  }
}

export default postReducer