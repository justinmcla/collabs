const readName = (accessToken) => {
  return async dispatch => {
    dispatch({ type: "NEW_NAME_REQUEST" });
    const endpoint = window.localStorage.getItem('endpoint')
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_API}/profiles/${endpoint}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      const json = await response.json()
      dispatch({ type: "READ_NAME_SUCCESS", name: json.data.attributes.name })
    } catch (errors) {
      dispatch({
        type: "NAME_REQUEST_FAILURE",
        errors: errors
      })
    }
  }
}

export default readName