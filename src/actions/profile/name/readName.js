const readName = accessToken => {
  return async dispatch => {
    dispatch({
      type: "NEW_NAME_REQUEST"
    })
    try {
      const response = await fetch("", {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      dispatch({
        type: "READ_NAME_SUCCESS",
        name: response.json().name
      })
    } catch (errors) {
      dispatch({
        type: "READ_NAME_FAILURE",
        errors: errors
      })
    }
  }
}

export default readName