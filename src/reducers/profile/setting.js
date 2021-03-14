const settingReducer = (state = { options: {}, isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_SETTING_REQUEST":
      return { ...state, isLoading: true }
    case "SETTING_REQUEST_FAILURE":
      return { ...state, isLoading: false, errors: action.errors }
    case "READ_SETTING_SUCCESS":
      return { ...state, options: action.setting, isLoading: false }
    case "UPDATE_SETTING_SUCCESS":
      return { ...state, options: action.setting, isLoading: false }
    default:
      return state
  }
}

export default settingReducer