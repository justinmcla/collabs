const searchCollabs = accessToken => {
  return async dispatch => {
    dispatch({
      type: "NEW_COLLAB_SEARCH_REQUEST"
    })
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_API}/collaborations`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      const data = await response.json()
      dispatch({
        type: "READ_COLLAB_SEARCH_SUCCESS",
        collabs: data
      })
    } catch (errors) {
      dispatch({
        type: "COLLAB_SEARCH_REQUEST_FAILURE",
        errors: errors
      })
    }
  }
}

export default searchCollabs