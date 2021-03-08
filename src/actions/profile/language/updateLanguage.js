const updateLanguage = (language, accessToken) => {
  return async dispatch => {
    dispatch({
      type: "NEW_LANGUAGE_REQUEST"
    })
    try {
      await fetch("http://localhost:3000/api/v1/user", {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          language: language
        })
      })
      dispatch({
        type: "UPDATE_LANGUAGE_SUCCESS",
        language: language
      })
    } catch (errors) {
      dispatch({
        type: "UPDATE_LANGUAGE_FAILURE",
        errors: errors
      })
    }
  }
}

export default updateLanguage