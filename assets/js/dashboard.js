/* =====================================================
   PROFILE DROPDOWN
===================================================== */
const profileBtn = document.getElementById("profileBtn");
const profileDropdown = document.getElementById("profileDropdown");

if (profileBtn && profileDropdown) {
    // Toggle dropdown saat klik profile
    profileBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // biar tidak langsung ketutup
        profileDropdown.classList.toggle("show");
    });

    // Klik di luar → tutup dropdown
    window.addEventListener("click", (e) => {
        if (!e.target.closest("#profileBtn")) {
            profileDropdown.classList.remove("show");
        }
    });
}

/* =====================================================
   MUNCULKAN USERNAME DI DASHBOARD (AMBIL DARI localStorage)
===================================================== */
const username = localStorage.getItem("username");
const usernameElement = document.getElementById("username");

if (usernameElement && username) {
    usernameElement.textContent = "halo, " + username;
}


/* =====================================================
   TENTANG KAMI (INFO POPUP)
===================================================== */
const tentangKamiBtn = document.getElementById("tentangKamiBtn");

if (tentangKamiBtn) {
    tentangKamiBtn.addEventListener("click", () => {
        alert("Website ini dibuat untuk membantu siswa memahami konsep fisika dan kimia dengan cara yang menyenangkan dan interaktif. Kami menyediakan materi pembelajaran, latihan soal, dan quiz untuk membantu siswa belajar dengan lebih efektif. Terima kasih telah menggunakan website kami!");
    });
}


/* =====================================================
   LOGOUT
===================================================== */
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {

        // Hapus data user dari localStorage
        localStorage.removeItem("username");

        // Redirect ke halaman awal
        window.location.href = "../../../index.html";
    });
}


/* =====================================================
   SMOOTH SCROLL (ANCHOR LINK)
===================================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


/* =====================================================
   SCROLL ANIMATION (INTERSECTION OBSERVER)
===================================================== */
const sections = document.querySelectorAll(".section");

if (sections.length > 0) {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}


/* =====================================================
   NAVBAR ACTIVE LINK SAAT SCROLL
===================================================== */

const navLinks = document.querySelectorAll(".nav-center a");
const allSections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    allSections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});