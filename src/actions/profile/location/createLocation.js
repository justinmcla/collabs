const createLocation = (location, accessToken) => {
  return async dispatch => {
    dispatch({
      type: "NEW_LOCATION_REQUEST"
    })
    try {
      await fetch("http://localhost:3000/api/v1/user", {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          location: location
        })
      })
      dispatch({
        type: "CREATE_LOCATION_SUCCESS",
        location: location
      })
    } catch (errors) {
      dispatch({
        type: "CREATE_LOCATION_FAILURE",
        errors: errors
      })
    }
  }
}

export default createLocation