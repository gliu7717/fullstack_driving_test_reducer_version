import { useReducer } from "react";
import questions from "./data/questions";
import { quizReducer } from "./state/quizReducer";
import "./App.css";
import TempComonent from "./components/tempComponent";
import QuestionView from "./components/QuestionView";
import ProgressBar from "./components/ProgressBar";
import AppBanner from "./components/AppBanner";
import ResultView from "./components/ResultView";

// The initial state of the quiz when the app starts
const initialState = {
  // Start at the first question (index 0)
  currentQuestion: 0,
  // Create an array with one null value per question
  // to hold the user's answers
  //[null, null, ..., null]
  answers: Array(questions.length).fill(null),
  // Track whether the user has submitted the quiz
  submitted: false,
  // Total time allowed for the quiz in seconds (57 minutes)
  timeLeft: 57 * 60,
};

const App = () => {
  const [state, dispatch] = useReducer(
    (state, action) => quizReducer(state, action, questions.length),
    initialState
  );
  // Get the current question object based on index
  const q = questions[state.currentQuestion];

  // Handle user selecting an answer
  const handleAnswer = (index) => {
    // Dispatch an ANSWER action with selected index
    dispatch({ type: "ANSWER", payload: index });
  };

  // Create the question view while quiz is ongoing
  const question_view = (
    <QuestionView
      q={q}
      currentQuestion={state.currentQuestion}
      totalQuestions={questions.length}
      selectedAnswer={state.answers[state.currentQuestion]}
      timeLeft={state.timeLeft}
      onAnswer={handleAnswer}
      dispatch={dispatch}
    />
  );

  // Calculate the total score by comparing user answers to correct answers
  const score = state.answers.reduce((acc, answer, idx) => {
    return answer === questions[idx].correctAnswer ? acc + 1 : acc;
  }, 0);

  // Create the result view when the quiz is done
  const result_view = (
    <ResultView score={score} questions={questions} answers={state.answers} />
  );

  return (
    <div className='app-container'>
      {/* Progress bar at the top */}
      <ProgressBar current={state.currentQuestion} total={questions.length} />
      {/* App info banner */}
      <AppBanner />

      <TempComonent state={state} dispatch={dispatch} />
      {/* Main content switches based on submission */}
      <div className='quiz-content'>
        {state.submitted ? result_view : question_view}
      </div>
    </div>
  );
};

export default App;
