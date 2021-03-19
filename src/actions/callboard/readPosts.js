const readPosts = accessToken => {
  return async dispatch => {
    dispatch({ type: "NEW_POST_REQUEST" })
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_API}/posts`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      const json = await response.json()
      if (json.status === 200) {
        dispatch({ type: "READ_POSTS_SUCCESS", posts: json.data })
      } else {
        throw new Error('Unable to fetch posts')
      }
    } catch (errors) {
      dispatch({ type: "POST_REQUEST_FAILURE", errors: errors })
    }
  }
}

export default readPosts