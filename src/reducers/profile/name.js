const nameReducer = (state = { name: '', isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_NAME_REQUEST":
      return { isLoading: true, ...state }
    case "NAME_REQUEST_FAILURE":
      return { isLoading: false, errors: action.errors, ...state }
    case "READ_NAME_SUCCESS":
      return { name: action.name, isLoading: false, ...state }
    case "UPDATE_NAME_SUCCESS":
      return { name: action.name, isLoading: false, ...state }
    default:
      return state
  }
}

export default nameReducer