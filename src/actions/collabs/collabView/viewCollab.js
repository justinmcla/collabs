const viewCollab = (accessToken) => {
  return async dispatch => {
    dispatch({ type: "NEW_READ_COLLAB_REQUEST" })
    try {
      const endpoint = window.location.pathname.replace(/\/profile\//, '')
      const response = await fetch(`${process.env.REACT_APP_BASE_API}/profiles/search/${endpoint}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      const json = await response.json()
      if (json.status === 200) {
        dispatch({ type: "READ_COLLAB_SUCCESS", payload: json.data })
      } else {
        throw new Error(json.errors)
      }
    } catch (errors) {
      dispatch({ type: "READ_COLLAB_REQUEST_FAILURE", errors: errors })
    }
  }
}

export default viewCollab