/* =====================================================
   QUIZ KIMIA JS
   - Bank soal 15 soal asli (Mol massa×5, Mol volume×5, Molaritas×5)
   - Acak 5 soal per sesi
   - Timer 2 menit per soal
   - Mode review
   - Hasil dengan skor clickable dropdown
===================================================== */

/* =====================================================
   BANK SOAL (15 soal asli — Mol × 10, Molaritas × 5)
===================================================== */
const soalBank = [

  /* ===== MOL — MASSA ↔ MOL (Soal 1–5) ===== */
  {
    pertanyaan: "Berapa mol dari 18 gram air (H₂O)? (Ar H=1, O=16)",
    opsi: {
      A: "0,5 mol",
      B: "1 mol",
      C: "2 mol",
      D: "3 mol"
    },
    jawaban: "B",
    topik: "Mol",
    penjelasan: `Diketahui:\n• massa = 18 g\n• Mr H₂O = (2×1) + 16 = 18 g/mol\n\nDitanya: n = ?\n\nPembahasan:\nn = m / Mr\nn = 18 / 18\nn = 1 mol`
  },
  {
    pertanyaan: "Berapa massa dari 2 mol CO₂? (Ar C=12, O=16)",
    opsi: {
      A: "44 g",
      B: "66 g",
      C: "88 g",
      D: "100 g"
    },
    jawaban: "C",
    topik: "Mol",
    penjelasan: `Diketahui:\n• n = 2 mol\n• Mr CO₂ = 12 + (2×16) = 44 g/mol\n\nDitanya: m = ?\n\nPembahasan:\nm = n × Mr\nm = 2 × 44\nm = 88 g`
  },
  {
    pertanyaan: "Berapa mol dari 32 gram O₂? (Ar O=16)",
    opsi: {
      A: "0,5 mol",
      B: "1 mol",
      C: "2 mol",
      D: "4 mol"
    },
    jawaban: "B",
    topik: "Mol",
    penjelasan: `Diketahui:\n• m = 32 g\n• Mr O₂ = 2×16 = 32 g/mol\n\nDitanya: n = ?\n\nPembahasan:\nn = m / Mr\nn = 32 / 32\nn = 1 mol`
  },
  {
    pertanyaan: "Berapa massa dari 0,5 mol NaCl? (Ar Na=23, Cl=35,5)",
    opsi: {
      A: "29,25 g",
      B: "30 g",
      C: "58,5 g",
      D: "60 g"
    },
    jawaban: "A",
    topik: "Mol",
    penjelasan: `Diketahui:\n• n = 0,5 mol\n• Mr NaCl = 23 + 35,5 = 58,5 g/mol\n\nDitanya: m = ?\n\nPembahasan:\nm = n × Mr\nm = 0,5 × 58,5\nm = 29,25 g`
  },
  {
    pertanyaan: "Berapa mol dari 11 gram CO₂? (Mr CO₂ = 44 g/mol)",
    opsi: {
      A: "0,25 mol",
      B: "0,5 mol",
      C: "1 mol",
      D: "2 mol"
    },
    jawaban: "A",
    topik: "Mol",
    penjelasan: `Diketahui:\n• m = 11 g\n• Mr CO₂ = 44 g/mol\n\nDitanya: n = ?\n\nPembahasan:\nn = m / Mr\nn = 11 / 44\nn = 0,25 mol`
  },

  /* ===== MOL — VOLUME GAS STP (Soal 6–10) ===== */
  {
    pertanyaan: "Berapa volume 2 mol gas pada STP? (Volume molar STP = 22,4 L/mol)",
    opsi: {
      A: "22,4 L",
      B: "44,8 L",
      C: "11,2 L",
      D: "5,6 L"
    },
    jawaban: "B",
    topik: "Mol",
    penjelasan: `Diketahui:\n• n = 2 mol\n• 1 mol gas = 22,4 L (STP)\n\nDitanya: V = ?\n\nPembahasan:\nV = n × 22,4\nV = 2 × 22,4\nV = 44,8 L`
  },
  {
    pertanyaan: "Berapa mol gas jika volumenya 11,2 L pada STP?",
    opsi: {
      A: "0,25 mol",
      B: "0,5 mol",
      C: "1 mol",
      D: "2 mol"
    },
    jawaban: "B",
    topik: "Mol",
    penjelasan: `Diketahui:\n• V = 11,2 L\n\nDitanya: n = ?\n\nPembahasan:\nn = V / 22,4\nn = 11,2 / 22,4\nn = 0,5 mol`
  },
  {
    pertanyaan: "Volume gas 67,2 L pada STP. Berapa molnya?",
    opsi: {
      A: "1 mol",
      B: "2 mol",
      C: "3 mol",
      D: "4 mol"
    },
    jawaban: "C",
    topik: "Mol",
    penjelasan: `Diketahui:\n• V = 67,2 L\n\nDitanya: n = ?\n\nPembahasan:\nn = V / 22,4\nn = 67,2 / 22,4\nn = 3 mol`
  },
  {
    pertanyaan: "Berapa volume 0,25 mol gas pada STP?",
    opsi: {
      A: "2,8 L",
      B: "5,6 L",
      C: "11,2 L",
      D: "22,4 L"
    },
    jawaban: "B",
    topik: "Mol",
    penjelasan: `Diketahui:\n• n = 0,25 mol\n\nDitanya: V = ?\n\nPembahasan:\nV = n × 22,4\nV = 0,25 × 22,4\nV = 5,6 L`
  },
  {
    pertanyaan: "Jika volume gas 44,8 L pada STP, berapa molnya?",
    opsi: {
      A: "1 mol",
      B: "2 mol",
      C: "3 mol",
      D: "4 mol"
    },
    jawaban: "B",
    topik: "Mol",
    penjelasan: `Diketahui:\n• V = 44,8 L\n\nDitanya: n = ?\n\nPembahasan:\nn = V / 22,4\nn = 44,8 / 22,4\nn = 2 mol`
  },

  /* ===== MOLARITAS (Soal 11–15) ===== */
  {
    pertanyaan: "Larutan memiliki molaritas 2 M dengan volume 1 L. Berapa mol zat terlarut?",
    opsi: {
      A: "0,5 mol",
      B: "1 mol",
      C: "2 mol",
      D: "3 mol"
    },
    jawaban: "C",
    topik: "Stoikiometri",
    penjelasan: `Diketahui:\n• M = 2 M\n• V = 1 L\n\nDitanya: n = ?\n\nPembahasan:\nn = M × V\nn = 2 × 1\nn = 2 mol`
  },
  {
    pertanyaan: "Larutan 0,5 M sebanyak 2 L mengandung berapa mol zat?",
    opsi: {
      A: "0,5 mol",
      B: "1 mol",
      C: "2 mol",
      D: "4 mol"
    },
    jawaban: "B",
    topik: "Stoikiometri",
    penjelasan: `Diketahui:\n• M = 0,5 M\n• V = 2 L\n\nDitanya: n = ?\n\nPembahasan:\nn = M × V\nn = 0,5 × 2\nn = 1 mol`
  },
  {
    pertanyaan: "Jika terdapat 3 mol zat dalam 1,5 L larutan, berapa molaritasnya?",
    opsi: {
      A: "1 M",
      B: "2 M",
      C: "3 M",
      D: "4 M"
    },
    jawaban: "B",
    topik: "Stoikiometri",
    penjelasan: `Diketahui:\n• n = 3 mol\n• V = 1,5 L\n\nDitanya: M = ?\n\nPembahasan:\nM = n / V\nM = 3 / 1,5\nM = 2 M`
  },
  {
    pertanyaan: "Larutan memiliki 4 mol zat dalam 2 L. Berapa molaritasnya?",
    opsi: {
      A: "1 M",
      B: "2 M",
      C: "3 M",
      D: "4 M"
    },
    jawaban: "B",
    topik: "Stoikiometri",
    penjelasan: `Diketahui:\n• n = 4 mol\n• V = 2 L\n\nDitanya: M = ?\n\nPembahasan:\nM = n / V\nM = 4 / 2\nM = 2 M`
  },
  {
    pertanyaan: "Berapa volume larutan 1 M yang mengandung 2 mol zat?",
    opsi: {
      A: "1 L",
      B: "2 L",
      C: "3 L",
      D: "4 L"
    },
    jawaban: "B",
    topik: "Stoikiometri",
    penjelasan: `Diketahui:\n• M = 1 M\n• n = 2 mol\n\nDitanya: V = ?\n\nPembahasan:\nV = n / M\nV = 2 / 1\nV = 2 L`
  },
];

const SOAL_PER_SESI = 5;
const SKOR_PER_BENAR = 20;
const TIMER_DETIK = 120;

/* LOBBY */
const startBtn = document.getElementById("startBtn");
if (startBtn) {
  startBtn.addEventListener("click", () => {
    const shuffled = [...soalBank].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, SOAL_PER_SESI);
    localStorage.setItem("quizData", JSON.stringify(selected));
    localStorage.setItem("currentIndex", "0");
    localStorage.setItem("score", "0");
    localStorage.setItem("userAnswers", JSON.stringify([]));
    localStorage.removeItem("reviewMode");
    window.location.href = "soal.html";
  });
}

/* SOAL */
document.addEventListener("DOMContentLoaded", () => {
  const pertanyaanEl = document.getElementById("pertanyaan");
  if (!pertanyaanEl) return;

  const opsiEl = document.getElementById("opsi");
  const nextBtn = document.getElementById("nextBtn");
  const backBtn = document.getElementById("backBtn");
  const penjelasanBox = document.getElementById("penjelasanBox");
  const indikatorEl = document.getElementById("indikator");
  const progressBar = document.getElementById("progressBar");
  const timerEl = document.getElementById("timerEl");
  const topikBadge = document.getElementById("topikBadge");

  const quizData = JSON.parse(localStorage.getItem("quizData"));
  let index = parseInt(localStorage.getItem("currentIndex"));
  const reviewMode = localStorage.getItem("reviewMode") === "true";
  const total = quizData.length;
  const soal = quizData[index];

  if (indikatorEl) indikatorEl.textContent = `${index + 1} / ${total}`;
  if (progressBar) progressBar.style.width = `${((index + 1) / total) * 100}%`;
  if (topikBadge && soal.topik) topikBadge.textContent = soal.topik;

  pertanyaanEl.textContent = soal.pertanyaan;
  opsiEl.innerHTML = "";

  for (let key in soal.opsi) {
    const label = document.createElement("label");
    label.className = "opsi-label";
    label.innerHTML = `
    <input type="radio" name="jawaban" value="${key}">
    <span class="opsi-key">${key}</span>
    <span class="opsi-text">${soal.opsi[key]}</span>
    `;
    opsiEl.appendChild(label);
  }

  opsiEl.addEventListener("click", (e) => {
    const label = e.target.closest(".opsi-label");
    if (!label) return;
    document.querySelectorAll(".opsi-label").forEach(l => l.classList.remove("selected"));
    label.classList.add("selected");
    const radio = label.querySelector("input");
    if (radio) radio.checked = true;
  });

  let timerInterval = null;
  let sisaWaktu = TIMER_DETIK;

  if (!reviewMode && timerEl) {
    timerInterval = setInterval(() => {
      sisaWaktu--;
      const menit = Math.floor(sisaWaktu / 60).toString().padStart(2, "0");
      const detik = (sisaWaktu % 60).toString().padStart(2, "0");
      timerEl.textContent = `${menit}:${detik}`;

      /* Warna merah saat < 30 detik */
      if (sisaWaktu <= 30) timerEl.classList.add("timer-warning");
      else timerEl.classList.remove("timer-warning");

      /* Waktu habis → otomatis submit kosong */
      if (sisaWaktu <= 0) {
        clearInterval(timerInterval);
        submitJawaban(null); // null = tidak menjawab
      }
    },
      1000);
  }

  if (reviewMode) {
    const userAnswers = JSON.parse(localStorage.getItem("userAnswers")) || [];
    const user = userAnswers[index] ?? "—";
    const benar = soal.jawaban;
    const isBenar = user === benar;

    document.querySelectorAll(".opsi-label").forEach(lbl => {
      const val = lbl.querySelector("input").value;
      lbl.querySelector("input").disabled = true;
      if (val === benar) lbl.classList.add("opsi-benar");
      if (val === user && !isBenar) lbl.classList.add("opsi-salah");
    });
    }
    /* Penjelasan */
    if (penjelasanBox) {
      penjelasanBox.style.display = "block";
      penjelasanBox.innerHTML = `
        <div class="penjelasan-header ${isBenar ? 'benar' : 'salah'}">
          ${isBenar ? "✅ Jawaban Benar!" : "❌ Jawaban Salah"}
        </div>
        <div class="penjelasan-row">
          <span>Jawaban kamu:</span>
          <strong class="${isBenar ? 'txt-benar' : 'txt-salah'}">${user}</strong>
        </div>
        <div class="penjelasan-row">
          <span>Jawaban benar:</span>
          <strong class="txt-benar">${benar}</strong>
        </div>
        <pre class="penjelasan-text">${soal.penjelasan}</pre>
      `;
    }

    /* Sembunyikan timer di review */
    if (timerEl) timerEl.style.display = "none";
  }

  /* ================================
     SUBMIT JAWABAN
  ================================ */
  function submitJawaban(jawaban) {
    clearInterval(timerInterval);

    let score       = parseInt(localStorage.getItem("score"))  || 0;
    let userAnswers = JSON.parse(localStorage.getItem("userAnswers")) || [];

    userAnswers.push(jawaban);
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));

    if (jawaban === soal.jawaban) score += SKOR_PER_BENAR;
    localStorage.setItem("score", score);

    const nextIndex = index + 1;
    if (nextIndex < total) {
      localStorage.setItem("currentIndex", nextIndex);
      location.reload();
    } else {
      localStorage.setItem("finalScore", score);
      window.location.href = "hasil.html";
    }
  }

  /* ================================
     TOMBOL NEXT
  ================================ */
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {

      /* Review mode: navigasi maju */
      if (reviewMode) {
        const nextIndex = index + 1;
        if (nextIndex < total) {
          localStorage.setItem("currentIndex", nextIndex);
          location.reload();
        } else {
          localStorage.removeItem("reviewMode");
          window.location.href = "hasil.html";
        }
        return;
      }

      /* Normal mode */
      const selected = document.querySelector('input[name="jawaban"]:checked');
      if (!selected) {
        /* Shake animasi hint */
        opsiEl.classList.add("shake");
        setTimeout(() => opsiEl.classList.remove("shake"), 500);
        return;
      }

      submitJawaban(selected.value);
    });
  }

  /* ================================
     TOMBOL BACK (review only)
  ================================ */
  if (backBtn && reviewMode) {
    backBtn.addEventListener("click", () => {
      if (index > 0) {
        localStorage.setItem("currentIndex", index - 1);
        location.reload();
      }
    });
  }

});

/* =====================================================
   HALAMAN: HASIL (hasil.html)
===================================================== */
document.addEventListener("DOMContentLoaded", () => {

  const scoreEl = document.getElementById("scoreNumber");
  if (!scoreEl) return;

  const score     = parseInt(localStorage.getItem("finalScore")) || 0;
  const total     = SOAL_PER_SESI;
  const benar     = score / SKOR_PER_BENAR;
  const pct       = Math.round((benar / total) * 100);

  /* Tampilkan angka skor dengan animasi count-up */
  scoreEl.textContent = "0";
  let current = 0;
  const step  = Math.ceil(score / 40);
  const countUp = setInterval(() => {
    current = Math.min(current + step, score);
    scoreEl.textContent = current;
    if (current >= score) clearInterval(countUp);
  }, 30);

  /* Label performa */
  const performaEl = document.getElementById("performa");
  if (performaEl) {
    if (pct === 100)     performaEl.textContent = "🏆 Sempurna!";
    else if (pct >= 80)  performaEl.textContent = "🌟 Luar Biasa!";
    else if (pct >= 60)  performaEl.textContent = "👍 Cukup Baik";
    else if (pct >= 40)  performaEl.textContent = "📚 Perlu Belajar Lagi";
    else                 performaEl.textContent = "💪 Jangan Menyerah!";
  }

  /* Detail benar/salah */
  const detailEl = document.getElementById("detailSkor");
  if (detailEl) {
    detailEl.textContent = `${benar} benar dari ${total} soal`;
  }

  /* Toggle dropdown skor */
  const scoreCard  = document.getElementById("scoreCard");
  const reviewPanel = document.getElementById("reviewPanel");

  if (scoreCard && reviewPanel) {
    scoreCard.addEventListener("click", () => {
      reviewPanel.classList.toggle("open");
      scoreCard.classList.toggle("active");
    });
  }
});

/* =====================================================
   REVIEW & RESET (dipanggil dari tombol hasil.html)
===================================================== */
function reviewQuiz() {
  localStorage.setItem("reviewMode",    "true");
  localStorage.setItem("currentIndex",  "0");
  window.location.href = "soal.html";
}

function resetQuiz() {
  ["quizData","currentIndex","score","userAnswers","finalScore","reviewMode"]
    .forEach(k => localStorage.removeItem(k));
  window.location.href = "../main_page_quiz.html";
}
