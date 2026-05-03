/* =====================================================
   DASHBOARD.JS
   - Profile dropdown
   - Username display
   - Tentang & Logout
   - Smooth scroll
   - Scroll reveal sections
   - Navbar active link
   - Navbar scrolled state (transparent → solid)
   - Hamburger menu mobile
   - Subjects toggle (click → show 2 cards)
===================================================== */


/* =====================================================
   USERNAME DISPLAY
===================================================== */
const username = localStorage.getItem("username");

/* Inisial di avatar */
const profileInitial = document.getElementById("profileInitial");
if (profileInitial && username) {
    profileInitial.textContent = username.charAt(0).toUpperCase();
}

/* Nama di dropdown */
const usernameDisplay = document.getElementById("usernameDisplay");
if (usernameDisplay && username) {
    usernameDisplay.textContent = "Halo, " + username;
}

/* Nama di section home */
const homeUsername = document.getElementById("homeUsername");
if (homeUsername && username) {
    homeUsername.textContent = username;
}


/* =====================================================
   PROFILE DROPDOWN
===================================================== */
const profileBtn      = document.getElementById("profileBtn");
const profileDropdown = document.getElementById("profileDropdown");

if (profileBtn && profileDropdown) {
    profileBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        profileDropdown.classList.toggle("show");
    });

    window.addEventListener("click", (e) => {
        if (!e.target.closest("#profileBtn")) {
            profileDropdown.classList.remove("show");
        }
    });
}


/* =====================================================
   TENTANG
===================================================== */
const tentangKamiBtn = document.getElementById("tentangKamiBtn");
if (tentangKamiBtn) {
    tentangKamiBtn.addEventListener("click", () => {
        alert("Website ini dibuat untuk membantu siswa memahami konsep fisika dan kimia dengan cara yang menyenangkan dan interaktif.\n\n© 2026 Alp & Aldi EduLearn");
    });
}


/* =====================================================
   SMOOTH SCROLL (anchor #)
===================================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});


/* =====================================================
   SCROLL REVEAL (sections)
===================================================== */
const sections = document.querySelectorAll(".section");

if (sections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("show");
        });
    }, { threshold: 0.15 });

    sections.forEach(section => observer.observe(section));
}


/* =====================================================
   NAVBAR: transparent → scrolled
===================================================== */
const navbar = document.getElementById("navbar");

/* Tinggi section home ≈ 100vh */
window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight * 0.6) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


/* =====================================================
   NAVBAR ACTIVE LINK saat scroll
===================================================== */
const navLinks    = document.querySelectorAll(".nav-center a");
const allSections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";

    allSections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
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


/* =====================================================
   HAMBURGER MENU (mobile)
===================================================== */
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navCenter    = document.getElementById("navCenter");

if (hamburgerBtn && navCenter) {
    hamburgerBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        hamburgerBtn.classList.toggle("open");
        navCenter.classList.toggle("mobile-open");
    });

    /* Tutup saat klik di luar */
    window.addEventListener("click", (e) => {
        if (!e.target.closest(".nav-left")) {
            hamburgerBtn.classList.remove("open");
            navCenter.classList.remove("mobile-open");
        }
    });

    /* Tutup setelah klik link di drawer */
    navCenter.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            hamburgerBtn.classList.remove("open");
            navCenter.classList.remove("mobile-open");
        });
    });
}


/* =====================================================
   SUBJECTS TOGGLE
   Klik judul → 2 card muncul/sembunyi
===================================================== */
const subjectsTrigger = document.getElementById("subjectsTrigger");
const subjectsCards   = document.getElementById("subjectsCards");
const subjectsArrow   = document.getElementById("subjectsArrow");

if (subjectsTrigger && subjectsCards) {
    subjectsTrigger.addEventListener("click", () => {
        subjectsCards.classList.toggle("open");
        subjectsArrow.classList.toggle("open");
    });
}
