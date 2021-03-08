const createSocialLink = (socialLink, accessToken) => {
  return async dispatch => {
    dispatch({
      type: "NEW_SOCIAL_LINK_REQUEST"
    })
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          socialLink: socialLink
        })
      })
      dispatch({
        type: "CREATE_SOCIAL_LINK_SUCCESS",
        socialLink: response.json().socialLink
      })
    } catch (errors) {
      dispatch({
        type: "CREATE_SOCIAL_LINK_FAILURE",
        errors: errors
      })
    }
  }
}

export default createSocialLink