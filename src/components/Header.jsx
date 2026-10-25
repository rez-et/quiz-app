import QuizHeader from "./QuizHeader.jsx";

export function Header({ title = "Frontend Quiz" }) {
  return <QuizHeader title={title} showExit={false} />;
}

export default Header;
