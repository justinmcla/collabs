const locationReducer = (state = { list: [], isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_LOCATION_REQUEST":
      return { ...state, isLoading: true }
    case "LOCATION_REQUEST_FAILURE":
      return { ...state, isLoading: false, errors: action.errors }
    case "CREATE_LOCATION_SUCCESS":
      return { ...state, list: [...state.locations, action.location], isLoading: false }
    case "READ_LOCATIONS_SUCCESS":
      return { ...state, list: action.locations, isLoading: false }
    case "UPDATE_LOCATIONS_SUCCESS":
      return { ...state, list: action.locations, isLoading: false }
    case "DELETE_LOCATION_SUCCESS":
      const locations = state.locations.filter(location => location.id !== action.id)
      return { ...state, list: locations, isLoading: false }
    default:
      return state
  }
}

export default locationReducer