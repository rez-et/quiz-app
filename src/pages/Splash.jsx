import { useNavigate } from "react-router";
import "./Splash.css";

export default function Splash() {
  const navigate = useNavigate();

  return (
    <div className="splash-container">
      <div className="splash-card">

        <div className="splash-title-group">
          <p className="splash-subtitle">Welcome to the</p>
          <h1 className="splash-title">Quiz App!</h1>
        </div>

        <button
          type="button"
          className="btn-start-quiz"
          onClick={() => navigate("/quiz")}
        >
          <span>Start Quiz</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
