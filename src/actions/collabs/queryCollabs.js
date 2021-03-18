const queryCollabs = (accessToken, query) => {
  return async dispatch => {
    dispatch({ type: "NEW_COLLAB_QUERY_REQUEST" })
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_API}/profiles/query/${query}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      const collabs = await response.json()
      dispatch({ type: "COLLAB_QUERY_REQUEST_SUCCESS", collabs: collabs })
    } catch (errors) {
      dispatch({ type: "COLLAB_QUERY_REQUEST_FAILURE", errors: errors })
    }
  }
}

export default queryCollabs