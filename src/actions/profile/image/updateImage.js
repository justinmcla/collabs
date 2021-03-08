const updateImage = (image, accessToken) => {
  return async dispatch => {
    dispatch({
      type: "NEW_IMAGE_REQUEST"
    })
    try {
      await fetch("http://localhost:3000/api/v1/user", {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          image: image
        })
      })
      dispatch({
        type: "UPDATE_IMAGE_SUCCESS",
        image: image
      })
    } catch (errors) {
      dispatch({
        type: "IMAGE_REQUEST_FAILURE",
        errors: errors
      })
    }
  }
}

export default updateImage