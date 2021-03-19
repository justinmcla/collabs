const locationReducer = (state = { address: {}, isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_LOCATION_REQUEST":
      return { ...state, isLoading: true }
    case "LOCATION_REQUEST_FAILURE":
      return { ...state, isLoading: false, errors: action.errors }
    case "READ_USER_SUCCESS":
      return { ...state, address: action.profile.location, isLoading: false }
    case "READ_LOCATION_SUCCESS":
      return { ...state, address: action.location, isLoading: false }
    case "UPDATE_LOCATIONS_SUCCESS":
      return { ...state, address: action.location, isLoading: false }
    default:
      return state
  }
}

export default locationReducer