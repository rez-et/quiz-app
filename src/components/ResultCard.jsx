import "./ResultCard.css";

export default function ResultCard({
  score = 0,
  totalQuestions = 10,
  correctAnswers = 0,
  incorrectAnswers = 0,
  percentage = 0,
  onRetake,
  onHome,
}) {
  const getFeedback = (pct) => {
    if (pct >= 90) {
      return {
        color: "#10b981",
      };
    }
    if (pct >= 70) {
      return {
        color: "#6366f1",
      };
    }
    if (pct >= 50) {
      return {
        color: "#f59e0b",
      };
    }
    return {
      color: "#ef4444",
    };
  };

  const feedback = getFeedback(percentage);

  return (
    <div className="result-card">
      <div className="result-header">
        <span className="result-subtitle">Quiz Completed</span>
        <h2 className="result-title">Your Score:</h2>
      </div>

      <div className="score-display-box">
        <div className="score-main">
          <span className="score-number">{score}</span>
          <span className="score-divider">/</span>
          <span className="score-total">{totalQuestions}</span>
        </div>
        <div className="percentage-badge" style={{ borderColor: feedback.color }}>
          {percentage}%
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Total Questions</span>
          <span className="stat-value">{totalQuestions}</span>
        </div>
        <div className="stat-card stat-correct">
          <span className="stat-label">Correct Answers</span>
          <span className="stat-value text-correct">{correctAnswers}</span>
        </div>
        <div className="stat-card stat-incorrect">
          <span className="stat-label">Incorrect Answers</span>
          <span className="stat-value text-incorrect">{incorrectAnswers}</span>
        </div>
      </div>

      <div className="result-actions">
        <button
          type="button"
          className="btn-retake"
          onClick={onRetake}
        >
          Retake Quiz
        </button>
        <button
          type="button"
          className="btn-home"
          onClick={onHome}
        >
          Return Home
        </button>
      </div>
    </div>
  );
}
