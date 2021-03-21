const updateProfile = (accessToken, data) => {
  return async dispatch => {
    dispatch({ type: "NEW_PROFILE_REQUEST" })
    try {
      const endpoint = window.localStorage.getItem('endpoint')
      const response = await fetch(`${process.env.REACT_APP_BASE_API}/profiles/${endpoint}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, body: JSON.stringify({ profile: data })
      })
      const json = await response.json()
      if (json.status === 200) {
        dispatch({ type: "UPDATE_PROFILE_SUCCESS", profile: json.data })
      } else {
        throw new Error(json.errors)
      }
    } catch (errors) {
      dispatch({ type: "PROFILE_REQUEST_FAILURE", errors: errors })
    }
  }
}

export default updateProfile