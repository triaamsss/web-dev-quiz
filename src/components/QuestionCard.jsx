import { useEffect, useState } from "react";

export default function QuestionCard({
  question,
  number,
  total,
  score,
  selected,
  timeLimit,
  onAnswer,
  onTimeout,
  onNext,
}) {
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const answered = selected !== null;

  // Hitung mundur; berhenti saat soal sudah dijawab.
  useEffect(() => {
    if (answered) return;
    const id = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [answered]);

  // Waktu habis -> lewati soal dan kurangi skor.
  useEffect(() => {
    if (!answered && timeLeft <= 0) onTimeout();
  }, [timeLeft, answered, onTimeout]);

  function optionClass(i) {
    if (!answered) return "option";
    if (i === question.answer) return "option correct";
    if (i === selected) return "option wrong";
    return "option dim";
  }

  const isCorrect = answered && selected === question.answer;
  const urgent = timeLeft <= 10;

  return (
    <section className="card">
      <header className="bar">
        <span>
          Soal {number} / {total}
        </span>
        <span>Skor: {score}</span>
        <span className={urgent ? "timer urgent" : "timer"}>⏱ {timeLeft}s</span>
      </header>

      <div className="progress">
        <div
          className="progress-fill"
          style={{ width: `${((number - 1) / total) * 100}%` }}
        />
      </div>

      <h2>{question.question}</h2>

      <div className="options">
        {question.options.map((opt, i) => (
          <button
            key={i}
            className={optionClass(i)}
            disabled={answered}
            onClick={() => onAnswer(i)}
          >
            <span className="letter">{String.fromCharCode(65 + i)}</span>
            {opt}
          </button>
        ))}
      </div>

      {answered && (
        <div className="feedback" role="status">
          <p className={isCorrect ? "ok" : "bad"}>
            {isCorrect
              ? "Benar! +1 poin"
              : `Salah. Jawaban yang benar: ${question.options[question.answer]}`}
          </p>
          <button className="btn primary" onClick={onNext}>
            {number === total ? "Lihat Hasil" : "Soal Berikutnya"}
          </button>
        </div>
      )}
    </section>
  );
}
