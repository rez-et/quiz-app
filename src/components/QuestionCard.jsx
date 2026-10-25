import AnswerOption from "./AnswerOption.jsx";
import "./QuestionCard.css";

const LETTERS = ["A", "B", "C", "D"];

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  onNext,
  isLast,
  validationError,
}) {
  if (!question) return null;

  return (
    <div className="question-card">
      <div className="question-card-header">
        <span className="question-badge">
          Question {questionNumber} of {totalQuestions}
        </span>
      </div>

      <h2 className="question-title">{question.question}</h2>

      <div className="options-container" role="radiogroup" aria-label="Question choices">
        {question.options.map((option, index) => (
          <AnswerOption
            key={index}
            letter={LETTERS[index] || String.fromCharCode(65 + index)}
            option={option}
            isSelected={selectedAnswer === option}
            onSelect={onSelectAnswer}
            name={`question-${question.id}`}
          />
        ))}
      </div>

      {validationError && (
        <div className="validation-error" role="alert">
          <span className="error-icon" aria-hidden="true">⚠️</span>
          <span>{validationError}</span>
        </div>
      )}

      <div className="question-card-footer">
        <button
          type="button"
          className="btn-next"
          onClick={onNext}
        >
          {isLast ? "Submit Quiz" : "Next Question →"}
        </button>
      </div>
    </div>
  );
}
