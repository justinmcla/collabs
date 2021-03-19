const readCollabs = accessToken => {
  return async dispatch => {
    dispatch({
      type: "NEW_COLLAB_LIST_REQUEST"
    })
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_API}/collaborations`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      const data = await response.json()
      dispatch({
        type: "READ_COLLAB_LIST_SUCCESS",
        collabs: data
      })
    } catch (errors) {
      dispatch({
        type: "COLLAB_LIST_REQUEST_FAILURE",
        errors: errors
      })
    }
  }
}

export default readCollabs