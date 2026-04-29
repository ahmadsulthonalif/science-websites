// BANK SOAL
const soalBank = [
  {
    pertanyaan: "Sebuah motor bergerak dengan kelajuan 20 m/s selama 15 detik. Berapa jarak yang ditempuh?",
    opsi: {
      A: "200",
      B: "250",
      C: "300",
      D: "400"
    },
    jawaban: "C",
    penjelasan: `
Diketahui:
1. Kelajuan (v) = 20 m/s
2. Waktu (t)  = 15 s

Ditanya:
jarak (s) 

Penyelesaian:
S = v × t
S = 20 m/s × 15 s
S = 300 meter
`
  },

  {
    pertanyaan: "Mobil melaju dengan kecepatan 72 km/jam. Berapa jarak yang ditempuh dalam 25 detik?",
    opsi: {
      A: "350",
      B: "500",
      C: "700",
      D: "1800"
    },
    jawaban: "B",
    penjelasan: `
Diketahui: 
1. Kecepatan(v) = 72 km/   jam
2. Waktu (t) = 25 detik

Ditanya:
Jarak (s) 
[hati-hati karena satuan kecepatan masih dalam km/jam sedangkan dibutuhkan m/s]

Penyelesaian: 
Maka v nya:
72 km/jam = 20 m/s
S = v × t
S = 20 m/s × 25 s
S = 500 meter
`
  },

  {
    pertanyaan: "Sebuah benda mula-mula diam lalu dipercepat 4 m/s² selama 5 detik. Berapa kecepatan akhirnya?",
    opsi: {
      A: "15",
      B: "20",
      C: "25",
      D: "30"
    },
    jawaban: "B",
    penjelasan: `
Benda mula-mula diam maka kecepatan awal : 0 (Vo = 0) 
Diketahui:
1. Kecepatan awal (Vo) = 0 m/s
2. Waktu (t) = 5 detik
3. Percepatan (a) = 4 m/s²

Ditanya:
Kecepatan akhir (Vt) 

Penyelesaian:
Vt = Vo + a × t
Vt = 0 + 4 × 5
Vt = 0 + 20
Vt = 20 m/s
`
  },

  {
    pertanyaan: "Benda diam dipercepat 3 m/s² selama 6 detik. Berapa jarak yang ditempuh?",
    opsi: {
      A: "18",
      B: "32",
      C: "45",
      D: "54"
    },
    jawaban: "D",
    penjelasan: `
Benda diam maka kecepatan awal : 0 (Vo=0) 
Diketahui: 
1. Kecepatan awal (Vo) = 0 m/s
2. Waktu (t) = 6 detik
3. Percepatan (a) = 3 m/s²

Ditanya:
Jarak (s) 

penyelesaian:
S = Vo × t + 1/2 a × t²
S = 0 × 6 + 1/2 × 3 × 6²
S = 0 + 54
S = 54 m/s
`
  },

  {
    pertanyaan: "Mobil bergerak dengan kecepatan awal 20 m/s dan mengalami perlambatan 4 m/s² hingga berhenti. Berapa jarak pengeremannya?",
    opsi: {
      A: "50",
      B: "60",
      C: "75",
      D: "100"
    },
    jawaban: "A",
    penjelasan: `
Diketahui:
bahwa mobil bergerak dan mengalami perlambatan, maka operasi nya yaitu menggunakan minus (-)
Mobil diperlambat hingga berhenti. Maka, kecepatan akhirnya adalah 0 (Vt= 0)

ditanya:
jarak / s?

penyelesaian:
Vt² = Vo² - 2a × S
0² = 20² - 2 × (4) × S
0 = 400 - 8S
8S = 400
S = 50
`
  },
];

const scorePlus = 20;

// ======================
// START QUIZ
// ======================
const startBtn = document.getElementById("startBtn");

if (startBtn) {
  startBtn.addEventListener("click", () => {
    const shuffled = [...soalBank].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);

    localStorage.setItem("quizData", JSON.stringify(selected));
    localStorage.setItem("currentIndex", 0);
    localStorage.setItem("score", 0);
    localStorage.setItem("userAnswers", JSON.stringify([]));
    localStorage.removeItem("reviewMode");

    window.location.href = "soal.html";
  });
}

// ======================
// LOAD SOAL / REVIEW
// ======================
document.addEventListener("DOMContentLoaded", () => {

  const pertanyaanEl = document.getElementById("pertanyaan");
  const opsiEl = document.getElementById("opsi");
  const nextBtn = document.getElementById("nextBtn");
  const backBtn = document.getElementById("backBtn");
  const penjelasanBox = document.getElementById("penjelasanBox");

  if (!pertanyaanEl) return;

  let quizData = JSON.parse(localStorage.getItem("quizData"));
  let index = parseInt(localStorage.getItem("currentIndex"));
  const reviewMode = localStorage.getItem("reviewMode") === "true";

  const currentSoal = quizData[index];

  // tampil soal
  pertanyaanEl.textContent = currentSoal.pertanyaan;
  opsiEl.innerHTML = "";

  for (let key in currentSoal.opsi) {
    opsiEl.innerHTML += `
      <label>
        <input type="radio" name="jawaban" value="${key}">
        ${key}. ${currentSoal.opsi[key]}
      </label><br>
    `;
  }
  
  // ======================
  // MODE REVIEW
  // ======================
  if (reviewMode) {
    const userAnswers = JSON.parse(localStorage.getItem("userAnswers"));
    const user = userAnswers[index];
    const benar = currentSoal.jawaban;

    let status = user === benar ? "✅ Benar" : "❌ Salah";

    penjelasanBox.style.display = "block";
    penjelasanBox.innerHTML = `
      <p>Jawaban kamu: ${user}</p>
      <p>Jawaban benar: ${benar}</p>
      <p>${status}</p>
      <pre>${currentSoal.penjelasan}</pre>
    `;
  }

  // ======================
  // NEXT BUTTON
  // ======================
  nextBtn.addEventListener("click", () => {

    if (reviewMode) {
      index++;

      if (index < quizData.length) {
        localStorage.setItem("currentIndex", index);
        location.reload();
      } else {
        localStorage.removeItem("reviewMode");
        window.location.href = "hasil.html";
      }
      return;
    }

    // MODE NORMAL
    const selected = document.querySelector('input[name="jawaban"]:checked');

    if (!selected) {
      alert("Pilih jawaban dulu.");
      return;
    }

    let score = parseInt(localStorage.getItem("score"));
    let userAnswers = JSON.parse(localStorage.getItem("userAnswers"));

    userAnswers.push(selected.value);
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));

    if (selected.value === currentSoal.jawaban) {
      score += 20;
    }

    localStorage.setItem("score", score);

    index++;

    if (index < quizData.length) {
      localStorage.setItem("currentIndex", index);
      location.reload();
    } else {
      localStorage.setItem("finalScore", score);
      window.location.href = "hasil.html";
    }
  });

  // ======================
  // BACK BUTTON (REVIEW ONLY)
  // ======================
  if (backBtn && reviewMode) {
    backBtn.addEventListener("click", () => {
      index--;

      if (index >= 0) {
        localStorage.setItem("currentIndex", index);
        location.reload();
      }
    });
  }

});

// ======================
// HASIL
// ======================
function loadHasil() {
  const scoreEl = document.getElementById("score");
  if (!scoreEl) return;

  let score = localStorage.getItem("finalScore");
  scoreEl.textContent = "Skor kamu: " + score;
}

document.addEventListener("DOMContentLoaded", loadHasil);

// ======================
// REVIEW MODE
// ======================
function reviewQuiz() {
  localStorage.setItem("reviewMode", "true");
  localStorage.setItem("currentIndex", 0);
  window.location.href = "soal.html";
}

// ======================
// RESET
// ======================
function resetQuiz() {
  ["quizData", "currentIndex", "score", "userAnswers", "finalScore", "reviewMode"]
    .forEach(key => localStorage.removeItem(key));

  window.location.href = "../main_page_quiz.html";
}