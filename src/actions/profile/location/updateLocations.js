const updateLocation = (location, accessToken) => {
  return async dispatch => {
    dispatch({
      type: "NEW_LOCATION_REQUEST"
    })
    try {
      await fetch("http://localhost:3000/api/v1/user", {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          location: location
        })
      })
      dispatch({
        type: "UPDATE_LOCATION_SUCCESS",
        location: location
      })
    } catch (errors) {
      dispatch({
        type: "UPDATE_LOCATION_FAILURE",
        errors: errors
      })
    }
  }
}

export default updateLocation