const readEducations = accessToken => {
  return async dispatch => {
    dispatch({
      type: "NEW_EDUCATION_REQUEST"
    })
    try {
      const response = await fetch("", {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      dispatch({
        type: "READ_EDUCATIONS_SUCCESS",
        educations: response.json().educations
      })
    } catch (errors) {
      dispatch({
        type: "EDUCATION_REQUEST_FAILURE",
        errors: errors
      })
    }
  }
}

export default readEducations