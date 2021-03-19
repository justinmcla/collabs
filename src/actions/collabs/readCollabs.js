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
      const json = await response.json()
      if (json.status === 200) {
        dispatch({ type: "READ_COLLAB_LIST_SUCCESS", collabs: json.data})
      } else {
        throw new Error('Unable to read collaborations')
      }
    } catch (errors) {
      dispatch({
        type: "COLLAB_LIST_REQUEST_FAILURE",
        errors: errors
      })
    }
  }
}

export default readCollabs