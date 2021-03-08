const languageReducer = (state = { languages: [], isLoading: false, errors: [] }, action) => {
  switch(action.type) {
    case "NEW_LANGUAGE_REQUEST":
      return { isLoading: true, ...state }
    case "LANGUAGE_REQUEST_FAILURE":
      return { isLoading: false, errors: action.errors, ...state }
    case "CREATE_LANGUAGE_SUCCESS":
      return { languages: [...state.languages, action.language], isLoading: false, ...state }
    case "READ_LANGUAGES_SUCCESS":
      return { languages: action.languages, isLoading: false, ...state }
    case "UPDATE_LANGUAGE_SUCCESS":
      return { languages: action.languages, isLoading: false, ...state }
    case "DELETE_LANGUAGE_SUCCESS":
      const languages = state.languages.filter(language => language.id !== action.id)
      return { languages: languages, isLoading: false, ...state }
    default:
      return state
  }
}

export default languageReducer