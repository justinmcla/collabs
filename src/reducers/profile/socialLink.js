const socialLinkReducer = (state = { list: [], isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_SOCIAL_LINK_REQUEST":
      return { ...state, isLoading: true }
    case "SOCIAL_LINK_REQUEST_FAILURE":
      return { ...state, isLoading: false, errors: action.errors }
    case "CREATE_SOCIAL_LINK_SUCCESS":
      return { ...state, list: [...state.socialLinks, action.socialLink], isLoading: false }
    case "READ_SOCIAL_LINKS_SUCCESS":
      return { ...state, list: action.socialLinks, isLoading: false }
    case "UPDATE_SOCIAL_LINKS_SUCCESS":
      return { ...state, list: action.socialLinks, isLoading: false }
    case "DELETE_SOCIAL_LINK_SUCCESS":
      const socialLinks = state.socialLinks.filter(socialLink => socialLink.id !== action.id)
      return { ...state, list: socialLinks, isLoading: false }
    default:
      return state
  }
}

export default socialLinkReducer