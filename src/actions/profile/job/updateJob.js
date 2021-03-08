const updateJob = (job, accessToken) => {
  return async dispatch => {
    dispatch({
      type: "NEW_JOB_REQUEST"
    })
    try {
      await fetch("http://localhost:3000/api/v1/user", {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          job: job
        })
      })
      dispatch({
        type: "UPDATE_JOB_SUCCESS",
        job: job
      })
    } catch (errors) {
      dispatch({
        type: "UPDATE_JOB_FAILURE",
        errors: errors
      })
    }
  }
}

export default updateJob