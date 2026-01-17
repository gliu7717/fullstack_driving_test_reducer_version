const AnswerFeedback = ({ options, correctAnswer, userAnswer }) => {
  return (
    <div>
      {options.map((option, index) => {
        // Determine if the current option is the one the user selected.
        const isUserAnswer = userAnswer === index;
        // Determine if the current option is the correct answer.
        const isCorrectAnswer = correctAnswer === index;
        // Determine if the current option is the user's answer and it's incorrect.
        const isWrongAnswer = isUserAnswer && !isCorrectAnswer;

        return (
          <div
            key={index}
            // Apply inline styles to the option div
            // based on its correctness and user selection.
            style={{
              // Set background color based on whether it's the correct answer, a wrong user answer, or neither.
              backgroundColor: isCorrectAnswer
                ? "#d4edda" // Light green for correct answer
                : isWrongAnswer
                ? "#f8d7da" // Light red for wrong user answer
                : "transparent", // Transparent for other options
              // Set text color for wrong user answers.
              color: isWrongAnswer ? "#721c24" : "inherit",
              // Add padding around the option text.
              padding: "0.5rem 1rem",
              // Apply border-radius for rounded corners.
              borderRadius: "8px",
              // Add margin to the bottom of each option.
              marginBottom: "0.5rem",
              // Apply a border to highlight the user's selected answer.
              border: isUserAnswer ? "1px solid #007bff" : "1px solid #ccc",
              // Preserve whitespace and line breaks within the option text.
              whiteSpace: "pre-wrap",
            }}
          >
            {option}
            {/* Display a checkmark if it's the correct answer. */}
            {isCorrectAnswer ? "✓" : ""}{" "}
            {/* Display an 'X' if it's a wrong user answer. */}
            {isWrongAnswer ? "✗" : ""}
          </div>
        );
      })}
    </div>
  );
};

export default AnswerFeedback;
