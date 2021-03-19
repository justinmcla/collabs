const readRequests = accessToken => {
  return async dispatch => {
    dispatch({ type: "NEW_COLLAB_REQUEST_REQUEST"})
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_API}/collaboration_requests`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      const json = await response.json()
      if (json.status === 200) {
        dispatch({ type: "READ_COLLAB_REQUEST_SUCCESS", collabRequests: json.data })
      } else {
        throw new Error('Unable to fetch collaboration requests')
      }
    } catch (errors) {
        dispatch({ type: "COLLAB_REQUEST_REQUEST_FAILURE", errors: errors })
    }
  }
}

export default readRequests