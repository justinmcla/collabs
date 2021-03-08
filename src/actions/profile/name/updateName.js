const updateName = (name, accessToken) => {
  return async dispatch => {
    dispatch({
      type: "NEW_NAME_REQUEST"
    })
    try {
      await fetch("http://localhost:3000/api/v1/user", {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          name: name
        })
      })
      dispatch({
        type: "UPDATE_NAME_SUCCESS",
        name: name
      })
    } catch (errors) {
      dispatch({
        type: "UPDATE_NAME_FAILURE",
        errors: errors
      })
    }
  }
}

export default updateName