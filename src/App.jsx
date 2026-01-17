import { useReducer } from "react";
import questions from "./data/questions";
import { quizReducer } from "./state/quizReducer";
import "./App.css";
import TempComonent from "./components/tempComponent";
import QuestionView from "./components/QuestionView";

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
  // Create the question view while quiz is ongoing
  const question_view = (
    <QuestionView
      q={q}
      currentQuestion={state.currentQuestion}
      totalQuestions={questions.length}
      selectedAnswer={state.answers[state.currentQuestion]}
      timeLeft={state.timeLeft}
      onAnswer={() => {}}
      dispatch={dispatch}
    />
  );

  // Create the result view when the quiz is done
  const result_view = <></>;

  return (
    <div className='app-container'>
      <TempComonent state={state} dispatch={dispatch} />
      {/* Main content switches based on submission */}
      <div className='quiz-content'>
        {state.submitted ? result_view : question_view}
      </div>
    </div>
  );
};

export default App;
