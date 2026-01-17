import QuestionHeader from "./QuestionHeader";
import QuestionText from "./QuestionText";

import { Card } from "./ui/Card";

const QuestionView = ({
  q,
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  onAnswer,
  timeLeft,
  dispatch,
}) => {
  return (
    <Card>
      <QuestionHeader
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
        timeLeft={timeLeft}
      />
      <div style={{ display: "flex", gap: "1rem", flexDirection: "row" }}>
        <div style={{ flex: 1 }}>
          <QuestionText text={q.question} as='p' />
        </div>
      </div>
    </Card>
  );
};

export default QuestionView;
