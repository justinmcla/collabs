const jobReducer = (state = { list: [], isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_JOB_REQUEST":
      return {...state, isLoading: true }
    case "JOB_REQUEST_FAILURE":
      return {...state, isLoading: false, errors: action.errors }
    case "CREATE_JOB_SUCCESS":
      return {...state, list: [...state.jobs, action.job], isLoading: false }
    case "READ_JOBS_SUCCESS":
      return {...state, list: action.jobs, isLoading: false }
    case "UPDATE_JOB_SUCCESS":
      return {...state, list: action.jobs, isLoading: false }
    case "DELETE_JOB_SUCCESS":
      const jobs = state.jobs.filter(job => job.id !== action.id)
      return {...state, list: jobs, isLoading: false }
    default:
      return state
  }
}

export default jobReducer