const nameReducer = (state = { name: '', isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_NAME_REQUEST":
      return { ...state, isLoading: true }
    case "NAME_REQUEST_FAILURE":
      return { ...state, isLoading: false, errors: action.errors }
    case "READ_NAME_SUCCESS":
      return { ...state, name: action.name, isLoading: false }
    case "UPDATE_NAME_SUCCESS":
      return { ...state, name: action.name, isLoading: false }
    default:
      return state
  }
}

export default nameReducer