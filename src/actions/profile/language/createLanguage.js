const createLanguage = (language, accessToken) => {
  return async dispatch => {
    dispatch({
      type: "CREATE_LANGUAGE_REQUEST"
    })
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          language: language
        })
      })
      dispatch({
        type: "CREATE_LANGUAGE_SUCCESS",
        language: response.json().language
      })
    } catch (errors) {
      dispatch({
        type: "CREATE_LANGUAGE_SUCCESS",
        errors: errors
      })
    }
  }
}

export default createLanguage