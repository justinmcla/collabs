const updateName = (name, accessToken) => {
  return async dispatch => {
    dispatch({
      type: "NEW_NAME_REQUEST"
    })
    try {
      const endpoint = window.localStorage.getItem('endpoint')
      fetch(`${process.env.REACT_APP_BASE_API}/users/${endpoint}`, {
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