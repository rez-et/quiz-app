import "./MainLayout.css";
import QuizHeader from "../components/QuizHeader.jsx";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="main-layout">
      <QuizHeader title="Frontend Quiz" />
      <main className="main-layout-content">
        <Outlet />
      </main>
    </div>
  );
}
