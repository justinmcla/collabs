const locationReducer = (state = { locations: [], isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_LOCATION_REQUEST":
      return { isLoading: true, ...state }
    case "LOCATION_REQUEST_FAILURE":
      return { isLoading: false, errors: action.errors, ...state }
    case "CREATE_LOCATION_SUCCESS":
      return { locations: [...state.locations, action.location], isLoading: false, ...state }
    case "READ_LOCATIONS_SUCCESS":
      return { locations: action.locations, isLoading: false, ...state }
    case "UPDATE_LOCATIONS_SUCCESS":
      return { locations: action.locations, isLoading: false, ...state }
    case "DELETE_LOCATION_SUCCESS":
      const locations = state.locations.filter(location => location.id !== action.id)
      return { locations: locations, isLoading: false, ...state }
    default:
      return state
  }
}

export default locationReducer