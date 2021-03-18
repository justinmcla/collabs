const readImage = accessToken => {
  return async dispatch => {
    dispatch({
      type: "NEW_IMAGE_REQUEST"
    })
    try {
      const response = await fetch("", {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      const json = await response.json()
      dispatch({
        type: "READ_IMAGE_SUCCESS",
        image: json.image
      })
    } catch (errors) {
      dispatch({
        type: "IMAGE_REQUEST_FAILURE",
        errors: errors
      })
    }
  }
}

export default readImage