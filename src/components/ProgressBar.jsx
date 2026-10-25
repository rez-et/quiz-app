import "./ProgressBar.css";

export default function ProgressBar({ current = 0, total = 10 }) {
  const percentage = total > 0 ? Math.min(100, Math.max(0, Math.round((current / total) * 100))) : 0;

  return (
    <div className="progress-bar-wrapper" role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">
      <div className="progress-bar-info">
        <span className="progress-bar-label">Quiz Progress</span>
        <span className="progress-bar-percentage">{percentage}%</span>
      </div>
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
