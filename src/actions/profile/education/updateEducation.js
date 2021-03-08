const updateEducation = (education, accessToken) => {
  return async dispatch => {
    dispatch({
      type: "NEW_EDUCATION_REQUEST"
    })
    try {
      await fetch("http://localhost:3000/api/v1/user", {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          education: education
        })
      })
      dispatch({
        type: "UPDATE_EDUCATION_SUCCESS",
        education: education
      })
    } catch (errors) {
      dispatch({
        type: "EDUCATION_REQUEST_FAILURE",
        errors: errors
      })
    }
  }
}

export default updateEducation