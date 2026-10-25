import "./AnswerOption.css";

export default function AnswerOption({
  option,
  letter,
  isSelected,
  onSelect,
  name = "quiz-answer",
}) {
  return (
    <label
      className={`answer-option ${isSelected ? "selected" : ""}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(option);
        }
      }}
    >
      <input
        type="radio"
        name={name}
        className="answer-radio-input"
        checked={isSelected}
        onChange={() => onSelect(option)}
        value={option}
      />
      <span className="option-letter">{letter}</span>
      <span className="option-text">{option}</span>
      <span className="selection-indicator" aria-hidden="true">
        <span className="indicator-dot" />
      </span>
    </label>
  );
}
