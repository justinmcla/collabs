const educationReducer = (state = { list: [], isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_EDUCATION_REQUEST":
      return { ...state, isLoading: true }
    case "EDUCATION_REQUEST_FAILURE":
      return { ...state, isLoading: false, errors: action.errors }
    case "CREATE_EDUCATION_SUCCESS":
      return { ...state, list: [...state.educations, action.education], isLoading: false }
    case "READ_EDUCATIONS_SUCCESS":
      return { ...state, list: action.educations, isLoading: false }
    case "UPDATE_EDUCATION_SUCCESS":
      return { ...state, list: action.educations, isLoading: false }
    case "DELETE_EDUCATION_SUCCESS":
      const educations = state.educations.filter(education => education.id !== action.id)
      return { ...state, list: educations, isLoading: false }
    default:
      return state
  }
}

export default educationReducer