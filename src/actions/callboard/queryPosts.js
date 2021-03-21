const queryPosts = (accessToken, query = 'all') => {
  return async dispatch => {
    dispatch({ type: "NEW_POST_SEARCH_REQUEST" })
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_API}/posts?query=${query}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      const json = await response.json()
      if (json.status === 200) {
        dispatch({ type: "READ_POST_SEARCH_SUCCESS", posts: json.data })
      } else {
        throw new Error('Unable to fetch posts')
      }
    } catch (errors) {
      dispatch({ type: "POST_SEARCH_REQUEST_FAILURE", errors: errors })
    }
  }
}

export default queryPosts