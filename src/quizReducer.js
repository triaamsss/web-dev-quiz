import quiz from "./data/questions.json";

export const initialState = {
  status: "start", // "start" | "playing" | "finished"
  index: 0,
  score: 0,
  selected: null, // index jawaban yang dipilih pada soal saat ini
  results: [], // { questionId, selected, correct, timedOut }
};

export function quizReducer(state, action) {
  switch (action.type) {
    case "START":
      return { ...initialState, status: "playing" };

    case "ANSWER": {
      if (state.selected !== null) return state;
      const q = quiz.questions[state.index];
      const correct = action.choice === q.answer;
      return {
        ...state,
        selected: action.choice,
        score: correct ? state.score + 1 : state.score,
        results: [
          ...state.results,
          {
            questionId: q.id,
            selected: action.choice,
            correct,
            timedOut: false,
          },
        ],
      };
    }

    case "TIMEOUT": {
      if (state.selected !== null) return state;
      const q = quiz.questions[state.index];
      const results = [
        ...state.results,
        { questionId: q.id, selected: null, correct: false, timedOut: true },
      ];
      const isLast = state.index + 1 >= quiz.questions.length;
      return {
        ...state,
        score: state.score - 1,
        results,
        selected: null,
        index: isLast ? state.index : state.index + 1,
        status: isLast ? "finished" : "playing",
      };
    }

    case "NEXT": {
      const isLast = state.index + 1 >= quiz.questions.length;
      return isLast
        ? { ...state, status: "finished" }
        : { ...state, index: state.index + 1, selected: null };
    }

    case "RESTART":
      return initialState;

    default:
      return state;
  }
}
