const createEducation = accessToken => {
  return async dispatch => {
    dispatch({
      type: "NEW_EDUCATION_REQUEST"
    })
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      dispatch({
        type: "CREATE_EDUCATION_SUCCESS",
        education: response.json().education
      })
    } catch (errors) {
      dispatch({
        type: "EDUCATION_REQUEST_FAILURE",
        errors: errors
      })
    }
  }
}

export default createEducation