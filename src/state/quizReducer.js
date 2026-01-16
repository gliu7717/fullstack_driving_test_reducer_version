export function quizReducer(state, action, questionsLength) {
  switch (action.type) {
    case "ANSWER": {
      const newAnswers = [...state.answers];
      newAnswers[state.currentQuestion] = action.payload;
      return { ...state, answers: newAnswers };
    }
    case "NEXT":
      return {
        ...state,
        currentQuestion: Math.min(
          state.currentQuestion + 1,
          questionsLength - 1
        ),
      };
    case "PREV":
      return {
        ...state,
        currentQuestion: Math.max(state.currentQuestion - 1, 0),
      };

    default:
      return state;
  }
}
