const updateUrl = (url, accessToken) => {
  return async dispatch => {
    dispatch({
      type: "UPDATE_URL_REQUEST"
    })
    try {
      await fetch("http://localhost:3000/api/v1/user", {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          url: url
        })
      })
      dispatch({
        type: "UPDATE_URL_SUCCESS",
        url: url
      })
    } catch (errors) {
      dispatch({
        type: "UPDATE_URL_FAILURE",
        errors: errors
      })
    }
  }
}

export default updateUrl