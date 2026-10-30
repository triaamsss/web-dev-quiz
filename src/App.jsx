import { useReducer } from "react";
import quiz from "./data/questions.json";
import { quizReducer, initialState } from "./quizReducer.js";
import StartScreen from "./components/StartScreen.jsx";
import QuestionCard from "./components/QuestionCard.jsx";
import ResultScreen from "./components/ResultScreen.jsx";

export default function App() {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <main className="app">
      {state.status === "start" && (
        <StartScreen quiz={quiz} onStart={() => dispatch({ type: "START" })} />
      )}

      {state.status === "playing" && (
        <QuestionCard
          // key memastikan timer ter reset di setiap soal baru
          key={state.index}
          question={quiz.questions[state.index]}
          number={state.index + 1}
          total={quiz.questions.length}
          score={state.score}
          selected={state.selected}
          timeLimit={quiz.timePerQuestion}
          onAnswer={(choice) => dispatch({ type: "ANSWER", choice })}
          onTimeout={() => dispatch({ type: "TIMEOUT" })}
          onNext={() => dispatch({ type: "NEXT" })}
        />
      )}

      {state.status === "finished" && (
        <ResultScreen
          quiz={quiz}
          score={state.score}
          results={state.results}
          onRestart={() => dispatch({ type: "RESTART" })}
        />
      )}
    </main>
  );
}
