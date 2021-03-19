const queryCollabs = (accessToken, query = 'all') => {
  return async dispatch => {
    dispatch({ type: "NEW_COLLAB_QUERY_REQUEST" })
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_API}/users?query=${query}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      const json = await response.json()
      if (json.status === 200) {
        dispatch({ type: "COLLAB_QUERY_REQUEST_SUCCESS", collabs: json.data })
      } else {
        throw new Error('Unable to fetch collabs')
      }
    } catch (errors) {
      dispatch({ type: "COLLAB_QUERY_REQUEST_FAILURE", errors: errors })
    }
  }
}

export default queryCollabs