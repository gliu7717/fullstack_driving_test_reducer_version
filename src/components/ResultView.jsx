import ScoreSummary from "./ScoreSummary";
import { Card } from "./ui/Card";
import QuestionText from "./QuestionText";
import AnswerFeedback from "./AnswerFeedback";
import ExplanationText from "./ExplanationText";
import MediaDisplay from "./MediaDisplay";

const ResultView = ({ score, questions, answers }) => {
  return (
    <>
      {/* ScoreSummary component shows score out of the total questions. */}
      <ScoreSummary score={score} total={questions.length} />

      {/* Map through each question to display:
       QuestionText, AnswerFeedback, ExplanationText and MediaDisplay. */}
      {questions.map((q, index) => (
        // Card component wraps each question's result
        <Card key={q.id}>
          <div style={{ display: "flex", gap: "1rem", flexDirection: "row" }}>
            <div style={{ flex: 1 }}>
              {/* QuestionText component displays:
               - the current question. 
              */}
              <QuestionText text={q.question} as='h3' />

              {/* AnswerFeedback component shows: 
               - the options
               - correct answer
               - user's selected answer. 
              */}
              <AnswerFeedback
                options={q.options}
                correctAnswer={q.correctAnswer}
                userAnswer={answers[index]}
              />

              {/* ExplanationText component displays:
               - the explanation for the question's answer. 
              */}
              <ExplanationText text={q.explanation} />
            </div>
            {/* Conditionally render MediaDisplay if the question type is:
             'image' or 'video'. 
            */}
            {(q.type === "image" || q.type === "video") && (
              <MediaDisplay
                type={q.type}
                image={q.image}
                video={q.video}
                autoPlayVideo={false}
              />
            )}
          </div>
        </Card>
      ))}
    </>
  );
};

export default ResultView;
