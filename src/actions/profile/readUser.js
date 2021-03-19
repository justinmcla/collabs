const readUser = accessToken => {
  return async dispatch => {
    dispatch({ type: "NEW_USER_REQUEST" })
    try {
      const endpoint = window.localStorage.getItem('endpoint')
      const response = await fetch(`${process.env.REACT_APP_BASE_API}/users/${endpoint}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      const json = await response.json()
      dispatch({ type: "READ_USER_SUCCESS", profile: json })
    } catch (errors) {
      dispatch({ type: "READ_USER_FAILURE", errors: errors })
    }
  }
}

export default readUser