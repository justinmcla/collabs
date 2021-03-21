const updateImage = (image, accessToken) => {
  return async dispatch => {
    dispatch({
      type: "NEW_PROFILE_REQUEST"
    })
    try {
      const endpoint = window.localStorage.getItem('endpoint')
      const response = await fetch(`${process.env.REACT_APP_BASE_API}/profiles/${endpoint}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: image
      })
      const json = await response.json()
      if (json.status === 200) {
        dispatch({ type: "UPDATE_IMAGE_SUCCESS", payload: json.data.image_url })
      } else {
        throw new Error('Unable to update image')
      }
    } catch (errors) {
      dispatch({
        type: "PROFILE_REQUEST_FAILURE",
        errors: errors
      })
    }
  }
}

export default updateImage