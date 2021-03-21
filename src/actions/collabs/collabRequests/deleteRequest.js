const deleteRequest = (accessToken, collaborationId) => {
  return async dispatch => {
    dispatch({ type: "NEW_COLLAB_REQUEST_REQUEST" })
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_API}/collaborations/${collaborationId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
      if (json.status === 200) {
        dispatch({ type: "DELETE_COLLAB_REQUEST_SUCCESS", id: parseInt(json.data) })
      } else {
        throw new Error(json.errors)
      }
    } catch (errors) {
      dispatch({ "type": "COLLAB_REQUEST_REQUEST_FAILURE", errors: errors })
    }
  }
}

export default deleteRequest