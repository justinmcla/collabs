const createPost = (accessToken, data) => {
  return async dispatch => {
    dispatch({ type: "NEW_POST_REQUEST" })
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_API}/posts`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, body: JSON.stringify({ post: data })
      })
      const json = await response.json()
      if (json.status === 200) {
        dispatch({ type: "CREATE_POST_SUCCESS", post: json.data })
      } else {
        throw new Error(json.errors)
      }
    } catch (errors) {
      dispatch({ type: "POST_REQUEST_FAILURE", errors: errors })
    }
  }
}

export default createPost