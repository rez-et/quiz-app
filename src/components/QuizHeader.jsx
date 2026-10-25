import { Link } from "react-router";
import "./QuizHeader.css";

export default function QuizHeader({
  title = "Frontend Quiz",
  currentQuestion,
  totalQuestions,
  showExit = true,
}) {
  return (
    <header className="quiz-header">
      <div className="quiz-header-brand">
        <span className="quiz-header-icon" aria-hidden="true">⚡</span>
        <h1 className="quiz-header-title">{title}</h1>
      </div>

      <div className="quiz-header-meta">
        {currentQuestion && totalQuestions && (
          <span className="quiz-header-counter">
            Question <strong>{currentQuestion}</strong> of {totalQuestions}
          </span>
        )}
        {showExit && (
          <Link to="/" className="quiz-header-exit-btn" title="Exit to Home">
            Exit
          </Link>
        )}
      </div>
    </header>
  );
}
