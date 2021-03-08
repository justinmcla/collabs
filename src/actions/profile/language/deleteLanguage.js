const deleteLanguage = (language, accessToken) => {
  return async dispatch => {
    dispatch({
      type: "CREATE_LANGUAGE_REQUEST"
    })
    try {
      const response = await fetch("", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          language: language
        })
      })
      dispatch({
        type: "DELETE_LANGUAGE_SUCCESS",
        id: response.json().id
      })
    } catch (errors) {
      dispatch({
        type: "DELETE_LANGUAGE_FAILURE",
        errors: errors
      })
    }
  }
}

export default deleteLanguage