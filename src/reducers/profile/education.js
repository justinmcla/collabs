const educationReducer = (state = { educations: [], isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_EDUCATION_REQUEST":
      return { isLoading: true, ...state }
    case "EDUCATION_REQUEST_FAILURE":
      return { isLoading: false, errors: action.errors, ...state }
    case "CREATE_EDUCATION_SUCCESS":
      return { educations: [...state.educations, action.education], isLoading: false, ...state }
    case "READ_EDUCATIONS_SUCCESS":
      return { educations: action.educations, isLoading: false, ...state }
    case "UPDATE_EDUCATION_SUCCESS":
      return { educations: action.educations, isLoading: false, ...state }
    case "DELETE_EDUCATION_SUCCESS":
      const educations = state.educations.filter(education => education.id !== action.id)
      return { educations: educations, isLoading: false, ...state }
    default:
      return state
  }
}

export default educationReducer