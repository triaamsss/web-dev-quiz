## Web Dev Quiz

A browser-based multiple-choice quiz built with React and Vite. Users answer a series of questions an get instant feedback on whether each answer is right or wrong.

Project page : https://roadmap.sh/projects/quiz-app

Live demo : https://web-dev-quiz-psi.vercel.app/

## Features

- Start screen with quiz details and a "start" button
- Questions displayed as cards, with the answer as buttons
- Corect answers turn green, wrong answers turn red, and the correct answer is always highlighted
- Score increases by 1 for every correct answer
- 60-second timer question: if time runs out, the question is skipped and the score decrases by 1
- Results screen shpwing the final score and a breakdown of all answer
- Restart button to retake the quiz

## Tech Stack

- React 18
- Vite
- State management with 'UseReducer'
- Quizz data in JSON format

## Folder Structure

```
src/
    data/questions.json     # quiz questions and settings
    components/
        StartScreen.jsx     # start screen
        QuestionCard.jsx    # question card + timer
        ResultScreen.jsx    # results screen
    quizReducer.js          # Quiz state logic
    App.jsx                 # decides which screen to show
    main.jsx                # entry point
    styles.css              # styling
```

## Adding Questions

Edit `src/data/questions.json`. Each question uses this format:

```json
{
  "id": 9,
  "question": "Question text?",
  "options": ["A", "B", "C", "D"],
  "answer": 1
}
```

'answer' is the index of the correct option, starting from 0.
