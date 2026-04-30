/* =====================================================
   FADE IN + LOAD USER DATA
===================================================== */
window.addEventListener("DOMContentLoaded", () => {

    /* Tambahkan efek fade-in */
    document.body.classList.add("fade-in");

    /* =========================================
       AMBIL USERNAME DARI LOCAL STORAGE
    ========================================= */
    const username = localStorage.getItem("username");

    if (username) {

        /* Ambil huruf pertama (uppercase) */
        const initial = username.charAt(0).toUpperCase();

        /* Tampilkan ke elemen profile (jika ada) */
        const profileInitial = document.getElementById("profileInitial");

        if (profileInitial) {
            profileInitial.textContent = initial;
        }
    }
});


/* =====================================================
   FADE OUT (INTERCEPT LINK NAVIGATION)
===================================================== */

/* Ambil semua link */
const links = document.querySelectorAll("a");

/* Pastikan ada link */
if (links.length > 0) {

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const target = this.getAttribute("href");

            /* Abaikan:
               - anchor (#)
               - link kosong
            */
            if (!target || target.startsWith("#")) return;

            e.preventDefault();

            /* Jalankan animasi fade-out */
            document.body.classList.remove("fade-in");
            document.body.classList.add("fade-out");

            /* Redirect setelah animasi selesai */
            setTimeout(() => {
                window.location.href = target;
            }, 500); // HARUS sinkron dengan CSS
        });

    });
}


/* =====================================================
   RANDOM FORMULA SMOOTH TRANSITION
===================================================== */

const formulas = [
    "E = mc²",
    "F = ma",
    "PV = nRT",
    "a² + b² = c²",
    "V = IR",
    "Q = mcΔT",
    "pH = -log[H⁺]",
    "λ = v/f",
    "NaCl",
    "H₂SO₄"
];

function generateFormulas(container) {
    for (let i = 0; i < formulas.length ; i++) {
        const span = document.createElement("span");

        span.textContent =
            formulas[Math.floor(Math.random() * formulas.length)];

        span.style.top = Math.random() * 100 + "%";
        span.style.left = Math.random() * 100 + "%";

        span.classList.add("formula-in");

        container.appendChild(span);
    }
}

function updateFormulas() {
    const containers = document.querySelectorAll(".formula-random");

    containers.forEach(container => {
        const oldFormulas = container.querySelectorAll("span");

        /* kasih animasi keluar */
        oldFormulas.forEach(el => {
            el.classList.remove("formula-in");
            el.classList.add("formula-out");
        });

        /* tunggu animasi selesai baru hapus + generate baru */
        setTimeout(() => {
            container.innerHTML = "";
            generateFormulas(container);
        }, 800); // harus sedikit < durasi animasi
    });
}

/* pertama kali */
document.querySelectorAll(".formula-random").forEach(container => {
    generateFormulas(container);
});

/* update tiap 10 detik */
setInterval(updateFormulas, 10000);
