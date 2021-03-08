const deleteLocation = (location, accessToken) => {
  return async dispatch => {
    dispatch({
      type: "NEW_LOCATION_REQUEST"
    })
    try {
      const response = await fetch("http://localhost:3000/api/v1/user", {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          location: location
        })
      })
      dispatch({
        type: "DELETE_LOCATION_SUCCESS",
        id: response.json().id
      })
    } catch (errors) {
      dispatch({
        type: "DELETE_LOCATION_FAILURE",
        errors: errors
      })
    }
  }
}

export default deleteLocation