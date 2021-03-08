const deleteSocialLink = (socialLink, accessToken) => {
  return async dispatch => {
    dispatch({
      type: "NEW_SOCIAL_LINK_REQUEST"
    })
    try {
      const response = await fetch("", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          socialLink: socialLink
        })
      })
      dispatch({
        type: "DELETE_SOCIAL_LINK_SUCCESS",
        id: response.json().id
      })
    } catch (errors) {
      dispatch({
        type: "DELETE_SOCIAL_LINK_FAILURE",
        errors: errors
      })
    }
  }
}

export default deleteSocialLink