export function quizReducer(state, action) {
  switch (action.type) {
    case "ANSWER": {
      const newAnswers = [...state.answers];
      newAnswers[state.currentQuestion] = action.payload;
      return { ...state, answers: newAnswers };
    }
    default:
      return state;
  }
}
