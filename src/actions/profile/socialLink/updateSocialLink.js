const updateSocialLink = (socialLink, accessToken) => {
  return async dispatch => {
    dispatch({
      type: "NEW_SOCIAL_LINK_REQUEST"
    })
    try {
      await fetch("http://localhost:3000/api/v1/user", {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          socialLink: socialLink
        })
      })
      dispatch({
        type: "UPDATE_SOCIAL_LINK_SUCCESS",
        socialLink: socialLink
      })
    } catch (errors) {
      dispatch({
        type: "UPDATE_SOCIAL_LINK_FAILURE",
        errors: errors
      })
    }
  }
}

export default updateSocialLink