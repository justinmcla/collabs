const settingReducer = (state = { setting: {}, isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_SETTING_REQUEST":
      return { isLoading: true, ...state }
    case "SETTING_REQUEST_FAILURE":
      return { isLoading: false, errors: action.errors, ...state }
    case "READ_SETTING_SUCCESS":
      return { setting: action.setting, isLoading: false, ...state }
    case "UPDATE_SETTING_SUCCESS":
      return { setting: action.setting, isLoading: false, ...state }
    default:
      return state
  }
}

export default settingReducer