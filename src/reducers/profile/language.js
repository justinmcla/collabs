const languageReducer = (state = { list: [], isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_LANGUAGE_REQUEST":
      return { ...state, isLoading: true }
    case "LANGUAGE_REQUEST_FAILURE":
      return { ...state, isLoading: false, errors: action.errors }
    case "CREATE_LANGUAGE_SUCCESS":
      return { ...state, list: [...state.languages, action.language], isLoading: false }
    case "READ_LANGUAGES_SUCCESS":
      return { ...state, list: action.languages, isLoading: false }
    case "UPDATE_LANGUAGE_SUCCESS":
      return { ...state, list: action.languages, isLoading: false }
    case "DELETE_LANGUAGE_SUCCESS":
      const languages = state.languages.filter(language => language.id !== action.id)
      return { ...state, list: languages, isLoading: false }
    default:
      return state
  }
}

export default languageReducer