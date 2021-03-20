const imageReducer = (state = { url: '/default_profile_photo.png', isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_IMAGE_REQUEST":
      return { ...state, isLoading: true }
    case "IMAGE_REQUEST_FAILURE":
      return { ...state, isLoading: false, errors: action.errors }
    case "READ_IMAGE_SUCCESS":
      return { ...state, url: action.image, isLoading: false }
    case "READ_USER_SUCCESS":
      return { ...state, url: action.profile.image_url, isLoading: false }
    case "UPDATE_IMAGE_SUCCESS":
      return { ...state, url: action.image, isLoading: false }
    default:
      return state
  }
}

export default imageReducer