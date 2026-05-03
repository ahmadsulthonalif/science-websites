/* =====================================================
   QUIZ FISIKA JS
   - Bank soal 15 soal asli (GLB × 5, GLBB × 5, Gaya × 5)
   - Acak 5 soal per sesi
   - Timer 2 menit per soal
   - Mode review (lihat penjelasan)
   - Hasil dengan skor clickable dropdown
===================================================== */

/* =====================================================
   BANK SOAL (15 soal — semua dari file soal asli)
===================================================== */
const soalBank = [

  /* ===== GLB (Soal 1–5) ===== */
  {
    pertanyaan: "Sebuah mobil bergerak dengan kecepatan tetap 20 m/s selama 10 detik. Berapa jarak yang ditempuh?",
    opsi: { A: "100 m", B: "150 m", C: "200 m", D: "250 m" },
    jawaban: "C",
    topik: "GLB",
    penjelasan: `Diketahui:\n• v = 20 m/s\n• t = 10 s\n\nDitanya: s = ?\n\nPembahasan:\ns = v × t\ns = 20 × 10\ns = 200 m`
  },
  {
    pertanyaan: "Sebuah sepeda menempuh jarak 300 m dalam 60 detik. Tentukan kecepatannya!",
    opsi: { A: "2 m/s", B: "5 m/s", C: "6 m/s", D: "10 m/s" },
    jawaban: "B",
    topik: "GLB",
    penjelasan: `Diketahui:\n• s = 300 m\n• t = 60 s\n\nDitanya: v = ?\n\nPembahasan:\nv = s / t\nv = 300 / 60\nv = 5 m/s`
  },
  {
    pertanyaan: "Sebuah benda bergerak dengan kecepatan 15 m/s dan menempuh jarak 450 m. Berapa waktu yang diperlukan?",
    opsi: { A: "10 s", B: "20 s", C: "30 s", D: "40 s" },
    jawaban: "C",
    topik: "GLB",
    penjelasan: `Diketahui:\n• v = 15 m/s\n• s = 450 m\n\nDitanya: t = ?\n\nPembahasan:\nt = s / v\nt = 450 / 15\nt = 30 s`
  },
  {
    pertanyaan: "Kereta bergerak dengan kecepatan 25 m/s selama 2 menit. Berapa jaraknya?",
    opsi: { A: "2000 m", B: "2500 m", C: "3000 m", D: "3500 m" },
    jawaban: "C",
    topik: "GLB",
    penjelasan: `Diketahui:\n• v = 25 m/s\n• t = 2 menit = 120 s\n\nDitanya: s = ?\n\nPembahasan:\ns = v × t\ns = 25 × 120\ns = 3000 m`
  },
  {
    pertanyaan: "Sebuah benda bergerak sejauh 600 m dengan kecepatan 30 m/s. Berapa waktu yang dibutuhkan?",
    opsi: { A: "10 s", B: "15 s", C: "20 s", D: "25 s" },
    jawaban: "C",
    topik: "GLB",
    penjelasan: `Diketahui:\n• s = 600 m\n• v = 30 m/s\n\nDitanya: t = ?\n\nPembahasan:\nt = s / v\nt = 600 / 30\nt = 20 s`
  },

  /* ===== GLBB (Soal 6–10) ===== */
  {
    pertanyaan: "Sebuah benda dipercepat dari keadaan diam hingga 20 m/s dalam 4 detik. Berapa percepatannya?",
    opsi: { A: "2 m/s²", B: "4 m/s²", C: "5 m/s²", D: "10 m/s²" },
    jawaban: "C",
    topik: "GLBB",
    penjelasan: `Diketahui:\n• v₀ = 0 m/s\n• vₜ = 20 m/s\n• t = 4 s\n\nDitanya: a = ?\n\nPembahasan:\na = (vₜ - v₀) / t\na = (20 - 0) / 4\na = 5 m/s²`
  },
  {
    pertanyaan: "Kecepatan awal 10 m/s, percepatan 2 m/s² selama 5 detik. Berapa kecepatan akhirnya?",
    opsi: { A: "15 m/s", B: "20 m/s", C: "25 m/s", D: "30 m/s" },
    jawaban: "B",
    topik: "GLBB",
    penjelasan: `Diketahui:\n• v₀ = 10 m/s\n• a = 2 m/s²\n• t = 5 s\n\nDitanya: vₜ = ?\n\nPembahasan:\nvₜ = v₀ + a × t\nvₜ = 10 + (2 × 5)\nvₜ = 20 m/s`
  },
  {
    pertanyaan: "Benda bergerak dari keadaan diam dengan percepatan 3 m/s² selama 4 detik. Berapa jaraknya?",
    opsi: { A: "12 m", B: "16 m", C: "24 m", D: "48 m" },
    jawaban: "C",
    topik: "GLBB",
    penjelasan: `Diketahui:\n• v₀ = 0 m/s\n• a = 3 m/s²\n• t = 4 s\n\nDitanya: s = ?\n\nPembahasan:\ns = ½ × a × t²\ns = ½ × 3 × 16\ns = 24 m`
  },
  {
    pertanyaan: "Kecepatan awal 5 m/s, percepatan 2 m/s² selama 3 detik. Berapa jaraknya?",
    opsi: { A: "24 m", B: "25 m", C: "30 m", D: "35 m" },
    jawaban: "A",
    topik: "GLBB",
    penjelasan: `Diketahui:\n• v₀ = 5 m/s\n• a = 2 m/s²\n• t = 3 s\n\nDitanya: s = ?\n\nPembahasan:\ns = v₀t + ½at²\ns = (5 × 3) + ½ × 2 × 9\ns = 15 + 9\ns = 24 m`
  },
  {
    pertanyaan: "Sebuah benda memiliki kecepatan awal 20 m/s dan mengalami perlambatan 4 m/s² selama 5 detik. Berapa kecepatan akhirnya?",
    opsi: { A: "0 m/s", B: "5 m/s", C: "10 m/s", D: "15 m/s" },
    jawaban: "A",
    topik: "GLBB",
    penjelasan: `Diketahui:\n• v₀ = 20 m/s\n• a = -4 m/s²\n• t = 5 s\n\nDitanya: vₜ = ?\n\nPembahasan:\nvₜ = v₀ + a × t\nvₜ = 20 + (-4 × 5)\nvₜ = 0 m/s`
  },

  /* ===== Gaya (Soal 11–15) ===== */
  {
    pertanyaan: "Sebuah benda bermassa 2 kg mengalami percepatan 3 m/s². Berapa gaya yang bekerja?",
    opsi: { A: "3 N", B: "5 N", C: "6 N", D: "9 N" },
    jawaban: "C",
    topik: "Gaya",
    penjelasan: `Diketahui:\n• m = 2 kg\n• a = 3 m/s²\n\nDitanya: F = ?\n\nPembahasan:\nF = m × a\nF = 2 × 3\nF = 6 N`
  },
  {
    pertanyaan: "Gaya 20 N bekerja pada benda bermassa 4 kg. Berapa percepatannya?",
    opsi: { A: "2 m/s²", B: "4 m/s²", C: "5 m/s²", D: "10 m/s²" },
    jawaban: "C",
    topik: "Gaya",
    penjelasan: `Diketahui:\n• F = 20 N\n• m = 4 kg\n\nDitanya: a = ?\n\nPembahasan:\na = F / m\na = 20 / 4\na = 5 m/s²`
  },
  {
    pertanyaan: "Sebuah benda mengalami percepatan 2 m/s² karena gaya 10 N. Berapa massanya?",
    opsi: { A: "2 kg", B: "4 kg", C: "5 kg", D: "8 kg" },
    jawaban: "C",
    topik: "Gaya",
    penjelasan: `Diketahui:\n• F = 10 N\n• a = 2 m/s²\n\nDitanya: m = ?\n\nPembahasan:\nm = F / a\nm = 10 / 2\nm = 5 kg`
  },
  {
    pertanyaan: "Jika massa benda diperbesar sedangkan gaya tetap, maka percepatan akan...?",
    opsi: { A: "Tetap", B: "Bertambah", C: "Berkurang", D: "Nol" },
    jawaban: "C",
    topik: "Gaya",
    penjelasan: `Diketahui:\n• F = tetap\n• m bertambah\n\nDitanya: Hubungan m dan a?\n\nPembahasan:\nDari rumus a = F / m\nJika m naik (F tetap), maka a turun\nPercepatan BERKURANG`
  },
  {
    pertanyaan: "Sebuah gaya 50 N bekerja pada benda sehingga percepatannya 5 m/s². Berapa massanya?",
    opsi: { A: "5 kg", B: "10 kg", C: "15 kg", D: "20 kg" },
    jawaban: "B",
    topik: "Gaya",
    penjelasan: `Diketahui:\n• F = 50 N\n• a = 5 m/s²\n\nDitanya: m = ?\n\nPembahasan:\nm = F / a\nm = 50 / 5\nm = 10 kg`
  },
];

/* =====================================================
   KONSTANTA
===================================================== */
const SOAL_PER_SESI  = 5;
const SKOR_PER_BENAR = 20;
const TIMER_DETIK    = 120; // 2 menit per soal

/* =====================================================
   HALAMAN: LOBBY (quiz_fisika.html)
   — tombol start
===================================================== */
const startBtn = document.getElementById("startBtn");

if (startBtn) {
  startBtn.addEventListener("click", () => {
    const shuffled = [...soalBank].sort(() => 0.5 - Math.random());
    const selected  = shuffled.slice(0, SOAL_PER_SESI);

    localStorage.setItem("quizData",     JSON.stringify(selected));
    localStorage.setItem("currentIndex", "0");
    localStorage.setItem("score",        "0");
    localStorage.setItem("userAnswers",  JSON.stringify([]));
    localStorage.removeItem("reviewMode");

    window.location.href = "soal.html";
  });
}

/* =====================================================
   HALAMAN: SOAL (soal.html)
===================================================== */
document.addEventListener("DOMContentLoaded", () => {

  const pertanyaanEl  = document.getElementById("pertanyaan");
  if (!pertanyaanEl) return; // bukan halaman soal

  /* Elemen DOM */
  const opsiEl        = document.getElementById("opsi");
  const nextBtn       = document.getElementById("nextBtn");
  const backBtn       = document.getElementById("backBtn");
  const penjelasanBox = document.getElementById("penjelasanBox");
  const indikatorEl   = document.getElementById("indikator");
  const progressBar   = document.getElementById("progressBar");
  const timerEl       = document.getElementById("timerEl");
  const topikBadge    = document.getElementById("topikBadge");

  /* Data */
  const quizData   = JSON.parse(localStorage.getItem("quizData"));
  let   index      = parseInt(localStorage.getItem("currentIndex"));
  const reviewMode = localStorage.getItem("reviewMode") === "true";
  const total      = quizData.length;
  const soal       = quizData[index];

  /* ================================
     TAMPILKAN SOAL
  ================================ */
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

  /* Highlight opsi yang dipilih */
  opsiEl.addEventListener("click", (e) => {
    const label = e.target.closest(".opsi-label");
    if (!label) return;
    document.querySelectorAll(".opsi-label").forEach(l => l.classList.remove("selected"));
    label.classList.add("selected");
    const radio = label.querySelector("input");
    if (radio) radio.checked = true;
  });

  /* ================================
     TIMER (hanya mode normal)
  ================================ */
  let timerInterval = null;
  let sisaWaktu     = TIMER_DETIK;

  if (!reviewMode && timerEl) {
    timerInterval = setInterval(() => {
      sisaWaktu--;

      const menit  = Math.floor(sisaWaktu / 60).toString().padStart(2, "0");
      const detik  = (sisaWaktu % 60).toString().padStart(2, "0");
      timerEl.textContent = `${menit}:${detik}`;

      /* Warna merah saat < 30 detik */
      if (sisaWaktu <= 30) timerEl.classList.add("timer-warning");
      else                  timerEl.classList.remove("timer-warning");

      /* Waktu habis → otomatis submit kosong */
      if (sisaWaktu <= 0) {
        clearInterval(timerInterval);
        submitJawaban(null); // null = tidak menjawab
      }
    }, 1000);
  }

  /* ================================
     MODE REVIEW
  ================================ */
  if (reviewMode) {
    const userAnswers = JSON.parse(localStorage.getItem("userAnswers")) || [];
    const user  = userAnswers[index] ?? "—";
    const benar = soal.jawaban;
    const isBenar = user === benar;

    /* Tandai opsi */
    document.querySelectorAll(".opsi-label").forEach(lbl => {
      const val = lbl.querySelector("input").value;
      lbl.querySelector("input").disabled = true;
      if (val === benar) lbl.classList.add("opsi-benar");
      if (val === user && !isBenar) lbl.classList.add("opsi-salah");
    });

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
