const readLocations = accessToken => {
  return async dispatch => {
    dispatch({
      type: "NEW_LOCATIONS_REQUEST"
    })
    try {
      const response = await fetch("", {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      dispatch({
        type: "READ_LOCATIONS_SUCCESS",
        locations: response.json().locations
      })
    } catch (errors) {
      dispatch({
        type: "READ_LOCATIONS_FAILURE",
        errors: errors
      })
    }
  }
}

export default readLocations