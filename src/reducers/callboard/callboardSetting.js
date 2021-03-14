const callboardSettingReducer = (state = { options: {}, isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_CALLBOARD_SETTING_REQUEST":
      return { ...state, isLoading: true }
    case "CALLBOARD_SETTING_REQUEST_FAILURE":
      return { ...state, isLoading: false, errors: action.errors }
    case "READ_CALLBOARD_SETTING_SUCCESS":
      return { ...state, options: action.options, isLoading: false }
    case "UPDATE_CALLBOARD_SETTING_SUCCESS":
      return { ...state, options: action.options, isLoading: false }
    default:
      return state
  }
}

export default callboardSettingReducer