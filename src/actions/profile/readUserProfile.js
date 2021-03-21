const readUser = accessToken => {
  return async dispatch => {
    dispatch({ type: "NEW_PROFILE_REQUEST" })
    try {
      const endpoint = window.localStorage.getItem('endpoint')
      const response = await fetch(`${process.env.REACT_APP_BASE_API}/users/${endpoint}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      const json = await response.json()
      dispatch({ type: "READ_PROFILE_SUCCESS", payload: json.data })
    } catch (errors) {
      dispatch({ type: "PROFILE_REQUEST_FAILURE", errors: errors })
    }
  }
}

export default readUser