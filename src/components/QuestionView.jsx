import QuestionHeader from "./QuestionHeader";
import QuestionText from "./QuestionText";
import AnswerOptions from "./AnswerOptions";
import MediaDisplay from "./MediaDisplay";

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
          <AnswerOptions
            options={q.options}
            selectedIndex={selectedAnswer}
            onSelect={onAnswer}
          />
        </div>
        {(q.type === "image" || q.type === "video") && (
          <MediaDisplay
            key={q.id}
            type={q.type}
            image={q.image}
            video={q.video}
          />
        )}
      </div>
    </Card>
  );
};

export default QuestionView;
