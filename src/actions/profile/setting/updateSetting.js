const updateSetting = (setting, accessToken) => {
  return async dispatch => {
    dispatch({
      type: "NEW_SETTING_REQUEST"
    })
    try {
      await fetch("http://localhost:3000/api/v1/user", {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          setting: setting
        })
      })
      dispatch({
        type: "UPDATE_SETTING_SUCCESS",
        setting: setting
      })
    } catch (errors) {
      dispatch({
        type: "UPDATE_SETTING_FAILURE",
        errors: errors
      })
    }
  }
}

export default updateSetting