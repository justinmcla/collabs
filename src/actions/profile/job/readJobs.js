const readJobs = accessToken => {
  return async dispatch => {
    dispatch({
      type: "NEW_JOB_REQUEST"
    })
    try {
      const response = await fetch("", {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      dispatch({
        type: "READ_JOBS_SUCCESS",
        jobs: response.json().jobs
      })
    } catch (errors) {
      dispatch({
        type: "READ_JOBS_FAILURE",
        errors: errors
      })
    }
  }
}

export default readJobs