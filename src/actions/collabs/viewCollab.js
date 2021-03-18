const viewCollab = (accessToken) => {
  return async dispatch => {
    dispatch({
      type: "NEW_COLLAB_VIEW_REQUEST"
    })
    try {
      const endpoint = window.location.pathname.replace(/\/profile\//, '')
      const response = await fetch(`${process.env.REACT_APP_BASE_API}/profiles/search/${endpoint}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      const data = await response.json()
      dispatch({
        type: "READ_COLLAB_VIEW_SUCCESS",
        collab: data
      })
    } catch (errors) {
      dispatch({
        type: "COLLAB_VIEW_REQUEST_FAILURE",
        errors: errors
      })
    }
  }
}

export default viewCollab