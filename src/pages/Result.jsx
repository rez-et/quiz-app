import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router";
import QuizHeader from "../components/QuizHeader.jsx";
import ResultCard from "../components/ResultCard.jsx";
import "./Result.css";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const resultData = useMemo(() => {
    if (location.state && typeof location.state.score === "number") {
      return location.state;
    }

    try {
      const stored = sessionStorage.getItem("quiz_latest_result");
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error("Could not read stored results:", e);
    }

    return null;
  }, [location.state]);

  const handleRetake = () => {
    try {
      sessionStorage.removeItem("quiz_latest_result");
    } catch (e) {
      console.error("Failed to clear sessionStorage:", e);
    }
    navigate("/quiz");
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="result-page-container">
      <QuizHeader title="Frontend Quiz" showExit={false} />

      <div className="result-content">
        {resultData ? (
          <ResultCard
            score={resultData.score}
            totalQuestions={resultData.total}
            correctAnswers={resultData.correct}
            incorrectAnswers={resultData.incorrect}
            percentage={resultData.percentage}
            onRetake={handleRetake}
            onHome={handleHome}
          />
        ) : (
          <div className="no-result-card">
            <h2>No Quiz Results Found</h2>
            <p>You haven't completed a quiz yet. Start now to test your skills!</p>
            <button
              type="button"
              className="btn-start-now"
              onClick={() => navigate("/quiz")}
            >
              Start Quiz Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
