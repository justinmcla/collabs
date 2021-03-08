const readSetting = accessToken => {
  return async dispatch => {
    dispatch({
      type: "NEW_SETTING_REQUEST"
    })
    try {
      const response = await fetch("", {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      dispatch({
        type: "READ_SETTING_SUCCESS",
        setting: response.json().setting
      })
    } catch (errors) {
      dispatch({
        type: "READ_SETTING_FAILURE",
        errors: errors
      })
    }
  }
}

export default readSetting