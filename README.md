## Kuis Web Development

Aplikasi kuis pilihan ganda berbasis browser, dibuat dengan React dan Vite.
pengguna menjawab serangkaian soal dan langsung mendapat umpan balik benar atau salah.

Project page : https://roadmap.sh/projects/quiz-app

Live demo : https://web-dev-quiz-psi.vercel.app/

## Fitur

- Layar awal berisi informasi kuis dan tombol "Mulai"
- Soal ditampilkan sebagai kartu dengan jawaban berupa tombol
- Jawaban benar berwarna hijau, jawaban salah berwarna merah, dan jawaban benar selalu ditandai
- Skor bertambah 1 untuk setiap jawaban benar
- Timer 60 detik per soal: Jika waktu habis, soal dilewati dan skor berkurang 1
- Layar hasil berisi skor akhir dan rincian semua jawaban
- Tombol ulangi kuis

## Teknologi

- React 18
- Vite
- State management dengan 'UseReducer'
- Data soal dalam format JSON

## Struktur Folder

```
src/
    data/questions.json     # data soal dan pengaturan kuis
    components/
        StartScreen.jsx     # layar awal
        QuestionCard.jsx    # kartu soal + timer
        ResultScreen.jsx    # layar hasil
    quizReducer.js          # logika state kuis
    App.jsx                 # Menentukan layar yang tampil
    main.jsx                # entry point
    styles.css              # styling
```

## Menambah soal

Edit `src/data/questions.json`. Setiap soal berformat:

```json
{
  "id": 9,
  "question": "Teks pertanyaan?",
  "options": ["A", "B", "C", "D"],
  "answer": 1
}
```

'answer' adalah nomor urut jawaban yang benar, dimulai dari 0
