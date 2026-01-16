import { useReducer } from "react";
import questions from "./data/questions";
import { quizReducer } from "./state/quizReducer";
import "./App.css";

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

  return (
    <div className='app-container'>
      <h2>Driving Test App</h2>
      <p>
        <strong>Current Question Index:</strong>
        {state.currentQuestion}
      </p>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => console.log(state)}>Log State</button>
        <button onClick={() => console.log(state.answers)}>Log Answer</button>
      </div>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <button onClick={() => dispatch({ type: "ANSWER", payload: 0 })}>
          ANSWER 0
        </button>
        <button onClick={() => dispatch({ type: "ANSWER", payload: 1 })}>
          ANSWER 1
        </button>
        <button onClick={() => dispatch({ type: "ANSWER", payload: 2 })}>
          ANSWER 2
        </button>
        <button onClick={() => dispatch({ type: "ANSWER", payload: 3 })}>
          ANSWER 3
        </button>
        <button onClick={() => dispatch({ type: "NEXT" })}>NEXT</button>
        <button onClick={() => dispatch({ type: "PREV" })}>PREV</button>
        <button onClick={() => dispatch({ type: "SUBMIT" })}>SUBMIT</button>
        <button onClick={() => dispatch({ type: "TICK" })}>TICK</button>
      </div>
    </div>
  );
};

export default App;
