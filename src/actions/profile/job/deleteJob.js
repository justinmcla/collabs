const deleteJob = (job, accessToken) => {
  return async dispatch => {
    dispatch({
      type: "NEW_JOB_REQUEST"
    })
    try {
      const response = await fetch("", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          job: job
        })
      })
      dispatch({
        type: "DELETE_JOB_SUCCESS",
        id: response.json().id
      })
    } catch (errors) {
      dispatch({
        type: "DELETE_JOB_FAILURE",
        errors: errors
      })
    }
  }
}

export default deleteJob