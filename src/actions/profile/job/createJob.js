const createJob = (job, accessToken) => {
  return async dispatch => {
    dispatch({
      type: "NEW_JOB_REQUEST"
    })
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          job: job
        })
      })
      dispatch({
        type: "CREATE_JOB_SUCCESS",
        job: response.json().job
      })
    } catch (errors) {
      dispatch({
        type: "JOB_REQUEST_FAILURE",
        errors: errors
      })
    }
  }
}

export default createJob