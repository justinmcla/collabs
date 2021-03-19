const jobReducer = (state = { title: '', isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_JOB_REQUEST":
      return {...state, isLoading: true }
    case "JOB_REQUEST_FAILURE":
      return {...state, isLoading: false, errors: action.errors }
    case "READ_USER_SUCCESS":
      return { ...state, title: action.profile.profession, isLoading: false }
    case "READ_JOB_SUCCESS":
      return {...state, title: action.job, isLoading: false }
    case "UPDATE_JOB_SUCCESS":
      return {...state, title: action.job, isLoading: false }
    default:
      return state
  }
}

export default jobReducer