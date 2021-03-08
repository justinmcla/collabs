const readSocialLinks = accessToken => {
  return async dispatch => {
    dispatch({
      type: "NEW_SOCIAL_LINK_REQUEST"
    })
    try {
      const response = await fetch("", {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      dispatch({
        type: "READ_SOCIAL_LINKS_SUCCESS",
        socialLinks: response.json().socialLinks
      })
    } catch (errors) {
      dispatch({
        type: "READ_SOCIAL_LINKS_FAILURE",
        errors: errors
      })
    }
  }
}

export default readSocialLinks