export default function StartScreen({ quiz, onStart }) {
  return (
    <section className="card">
      <h1>{quiz.title}</h1>
      <p className="muted">{quiz.description}</p>
      <ul className="info">
        <li>
          <strong>{quiz.questions.length}</strong> pertanyaan
        </li>
        <li>
          <strong>{quiz.timePerQuestion} detik</strong> per pertanyaan
        </li>
        <li>
          Benar <strong>+1</strong>, waktu habis <strong>−1</strong>
        </li>
      </ul>
      <button className="btn primary" onClick={onStart}>
        Mulai Kuis
      </button>
    </section>
  );
}
