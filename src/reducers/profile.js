const profileReducer = (state = { data: {}, isLoading: false, errors: {} }, action) => {
  switch(action.type) {
    case "NEW_PROFILE_REQUEST":
      return { ...state, isLoading: true }
    case "READ_PROFILE_SUCCESS":
      return { ...state, data: action.payload, isLoading: false }
    case "UPDATE_PROFILE_SUCCESS":
      return { ...state, data: action.payload, isLoading: false }
    case "UPDATE_IMAGE_SUCCESS":
      return { ...state, data: { ...state.data, image_url: action.payload }, isLoading: false }
    case "PROFILE_REQUEST_FAILURE":
      return { ...state, errors: action.errors, isLoading: false }
    default:
      return state
  }
}

export default profileReducer