import "./App.css";
import { Route, Routes, Navigate } from "react-router";

import Splash from "../pages/Splash.jsx";
import Quiz from "../pages/Quiz.jsx";
import Result from "../pages/Result.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/quizzes" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
      <Route path="/results" element={<Result />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
