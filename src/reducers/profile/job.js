const jobReducer = (state = { jobs: [], isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_JOB_REQUEST":
      return { isLoading: true, ...state }
    case "JOB_REQUEST_FAILURE":
      return { isLoading: false, errors: action.errors, ...state }
    case "CREATE_JOB_SUCCESS":
      return { jobs: [...state.jobs, action.job], isLoading: false, ...state }
    case "READ_JOBS_SUCCESS":
      return { jobs: action.jobs, isLoading: false, ...state }
    case "UPDATE_JOB_SUCCESS":
      return { jobs: action.jobs, isLoading: false, ...state }
    case "DELETE_JOB_SUCCESS":
      const jobs = state.jobs.filter(job => job.id !== action.id)
      return { jobs: jobs, isLoading: false, ...state }
    default:
      return state
  }
}

export default jobReducer