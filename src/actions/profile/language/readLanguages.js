const readLanguages = accessToken => {
  return async dispatch => {
    dispatch({
      type: "NEW_LANGUAGE_REQUEST"
    })
    try {
      const response = await fetch("", {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      dispatch({
        type: "READ_LANGUAGES_SUCCESS",
        languages: response.json().languages
      })
    } catch (errors) {
      dispatch({
        type: "READ_LANGUAGES_FAILURE",
        errors: errors
      })
    }
  }
}

export default readLanguages