// BANK SOAL
const soalBank = [
  {
    pertanyaan: "Suatu zat memiliki massa 12 gram. Jika massa molarnya 4 g/mol, berapa jumlah mol zat tersebut?",
    opsi: {
      A: "1 mol",
      B: "2 mol",
      C: "3 mol",
      D: "4 mol"
    },
    jawaban: "C",
    penjelasan: `
Diketahui:
1. Massa (m) = 12 g
2. Mr = 4 g/mol

Ditanya: 
Mol

Gunakan rumus dasar mol = massa / Mr.

Penyelesaian:
n = m / Mr
n = 12 / 4
n = 3 mol
`
  },

  {
    pertanyaan: "Diketahui 0,5 mol gas berada pada kondisi STP. Berapa volumenya?",
    opsi: {
      A: "11,2 L",
      B: "22,4 L",
      C: "33,6 L",
      D: "5,6 L"
    },
    jawaban: "A",
    penjelasan: `
Diketahui:
1. n = 0,5 mol
2. Kondisi STP

Ditanya:
Volume (V)

Volume molar gas di STP = 22,4 L/mol.

Penyelesaian:
V = n × 22,4
V = 0,5 × 22,4
V = 11,2 L
`
  },

  {
    pertanyaan: "Gas nitrogen memiliki volume 44,8 L pada STP. Berapa jumlah mol gas tersebut?",
    opsi: {
      A: "1 mol",
      B: "1,5 mol",
      C: "2 mol",
      D: "0,5 mol"
    },
    jawaban: "C",
    penjelasan: `
Diketahui:
1. Volume = 44,8 L
2. Kondisi STP

Ditanya: 
Mol (n)

1 mol gas pada STP = 22,4 L.

Penyelesaian:
n = V / 22,4
n = 44,8 / 22,4
n = 2 mol
`
  },

  {
    pertanyaan: "Berapa massa 0,25 mol zat dengan Mr = 56 g/mol?",
    opsi: {
      A: "7 g",
      B: "14 g",
      C: "21 g",
      D: "28 g"
    },
    jawaban: "B",
    penjelasan: `
Diketahui:
1. n = 0,25 mol
2. Mr = 56 g/mol
  
Ditanya:
Massa (m)
  
Gunakan rumus massa = mol × Mr.
  
Penyelesaian:
m = n × Mr
m = 0,25 × 56
m = 14 g
`
  },

  {
    pertanyaan: "Gas tertentu memiliki volume 22,4 L pada STP. Jika massa molarnya 32 g/mol, berapa massanya?",
    opsi: {
      A: "16 g",
      B: "32 g",
      C: "64 g",
      D: "8 g"
    },
    jawaban: "B",
    penjelasan: `
Diketahui:
1. Volume = 22,4 L → jumlah mol = 1 mol
2. Mr = 32 g/mol

Ditanya:
Massa (m)

22,4 L gas di STP = 1 mol.

Penyelesaian:
m = n × Mr
m = 1 × 32
m = 32 g
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