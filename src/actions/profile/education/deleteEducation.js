const deleteEducation = accessToken => {
  return async dispatch => {
    dispatch({
      type: "NEW_EDUCATION_REQUEST"
    })
    try {
      const response = await fetch("", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      dispatch({
        type: "DELETE_EDUCATION_SUCCESS",
        id: response.json().id
      })
    } catch (errors) {
      dispatch({
        type: "EDUCATION_REQUEST_FAILURE",
        errors: errors
      })
    }
  }
}

export default deleteEducation