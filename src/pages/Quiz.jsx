import { useState } from "react";
import { useNavigate } from "react-router";
import { getQuestions, calculateScore } from "../utilities/quizService.js";
import QuizHeader from "../components/QuizHeader.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import QuestionCard from "../components/QuestionCard.jsx";
import "./Quiz.css";

export default function Quiz() {
  const navigate = useNavigate();
  const questions = getQuestions();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [validationError, setValidationError] = useState("");

  const currentQuestion = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const currentSelected = answers[currentQuestion?.id] || "";

  const handleSelectAnswer = (selectedOption) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: selectedOption,
    }));
    if (validationError) {
      setValidationError("");
    }
  };

  const handleNext = () => {
    if (!currentSelected) {
      setValidationError("Please select an answer before proceeding!");
      return;
    }

    setValidationError("");

    if (isLast) {
      const finalAnswers = {
        ...answers,
        [currentQuestion.id]: currentSelected,
      };
      const resultData = calculateScore(finalAnswers, questions);

      try {
        sessionStorage.setItem("quiz_latest_result", JSON.stringify(resultData));
      } catch (err) {
        console.error("Failed to save to sessionStorage:", err);
      }

      navigate("/result", { state: resultData });
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  if (!questions || questions.length === 0) {
    return (
      <div className="quiz-page-container">
        <p className="quiz-empty-message">No questions available.</p>
      </div>
    );
  }

  return (
    <div className="quiz-page-container">
      <QuizHeader
        title="Frontend Quiz"
        currentQuestion={currentIndex + 1}
        totalQuestions={questions.length}
        showExit={true}
      />

      <div className="quiz-content">
        <ProgressBar current={currentIndex + 1} total={questions.length} />

        <QuestionCard
          question={currentQuestion}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
          selectedAnswer={currentSelected}
          onSelectAnswer={handleSelectAnswer}
          onNext={handleNext}
          isLast={isLast}
          validationError={validationError}
        />
      </div>
    </div>
  );
}
