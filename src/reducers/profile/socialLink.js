const socialLinkReducer = (state = { socialLinks: [], isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_SOCIAL_LINK_REQUEST":
      return { isLoading: true, ...state }
    case "SOCIAL_LINK_REQUEST_FAILURE":
      return { isLoading: false, errors: action.errors, ...state }
    case "CREATE_SOCIAL_LINK_SUCCESS":
      return { socialLinks: [...state.socialLinks, action.socialLink], isLoading: false, ...state }
    case "READ_SOCIAL_LINKS_SUCCESS":
      return { socialLinks: action.socialLinks, isLoading: false, ...state }
    case "UPDATE_SOCIAL_LINKS_SUCCESS":
      return { socialLinks: action.socialLinks, isLoading: false, ...state }
    case "DELETE_SOCIAL_LINK_SUCCESS":
      const socialLinks = state.socialLinks.filter(socialLink => socialLink.id !== action.id)
      return { socialLinks: socialLinks, isLoading: false, ...state }
    default:
      return state
  }
}

export default socialLinkReducer