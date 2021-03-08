const imageReducer = (state = { image: '', isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_IMAGE_REQUEST":
      return { isLoading: true, ...state }
    case "IMAGE_REQUEST_FAILURE":
      return { isLoading: false, errors: action.errors, ...state }
    case "READ_IMAGE_SUCCESS":
      return { image: action.image, isLoading: false, ...state }
    case "UPDATE_IMAGE_SUCCESS":
      return { image: action.image, isLoading: false, ...state }
    default:
      return state
  }
}

export default imageReducer