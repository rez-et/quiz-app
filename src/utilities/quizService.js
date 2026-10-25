import questionsData from "../data/questions.json";

export function getQuestions() {
  return questionsData;
}

export function getQuizzes() {
  return {
    questions: questionsData,
    actual_answers: questionsData.map((q) => ({
      question_id: q.id,
      answer: q.correctAnswer,
    })),
  };
}

export function calculateScore(answersMap, questions = questionsData) {
  const total = questions.length;
  let correct = 0;

  questions.forEach((q) => {
    if (answersMap[q.id] === q.correctAnswer) {
      correct += 1;
    }
  });

  const incorrect = total - correct;
  const percentage = Math.round((correct / total) * 100);

  return {
    total,
    correct,
    incorrect,
    score: correct,
    percentage,
  };
}
