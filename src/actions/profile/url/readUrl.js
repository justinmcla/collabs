const readUrl = accessToken => {
  return async dispatch => {
    dispatch({
      type: "READ_URL_REQUEST"
    })
    try {
      const response = await fetch("", {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      dispatch({
        type: "READ_URL_SUCCESS",
        url: response.json().url
      })
    } catch (errors) {
      dispatch({
        type: "READ_URL_FAILURE",
        errors: errors
      })
    }
  }
}

export default readUrl