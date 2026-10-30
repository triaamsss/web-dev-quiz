export default function ResultScreen({ quiz, score, results, onRestart }) {
  const total = quiz.questions.length;
  const correctCount = results.filter((r) => r.correct).length;
  const timeoutCount = results.filter((r) => r.timedOut).length;

  return (
    <section className="card">
      <h1>Kuis Selesai</h1>
      <p className="final-score">
        {score} <span className="muted">/ {total}</span>
      </p>
      <p className="muted center">
        {correctCount} benar · {total - correctCount - timeoutCount} salah ·{" "}
        {timeoutCount} waktu habis
      </p>

      <ol className="results">
        {quiz.questions.map((q, i) => {
          const r = results[i];
          const status = r.timedOut ? "timeout" : r.correct ? "ok" : "bad";
          return (
            <li key={q.id} className={`result ${status}`}>
              <p className="result-q">
                {i + 1}. {q.question}
              </p>
              <p>
                Jawabanmu:{" "}
                <strong>
                  {r.timedOut ? "Tidak dijawab (−1)" : q.options[r.selected]}
                </strong>
              </p>
              {!r.correct && (
                <p>
                  Jawaban benar: <strong>{q.options[q.answer]}</strong>
                </p>
              )}
            </li>
          );
        })}
      </ol>

      <button className="btn primary" onClick={onRestart}>
        Ulangi Kuis
      </button>
    </section>
  );
}
