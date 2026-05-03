/* =====================================================
   MATERI FISIKA JS
   - Switch slide (GLB / GLBB / Gaya) via navbar tab
   - Switch sub-konten (Pengertian / Ciri / Latihan / Penerapan)
   - Mobile hamburger drawer
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       REFERENSI ELEMEN
    ===================================================== */
    const materiTabs   = document.querySelectorAll(".materi-tab");
    const materiSlides = document.querySelectorAll(".materi-slide");
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const navCenter    = document.getElementById("navCenter");

    /* Guard — kalau tidak ada tab berarti bukan halaman materi */
    if (!materiTabs.length) return;

    /* =====================================================
       HELPER: TUTUP MOBILE DRAWER
    ===================================================== */
    function closeMobileDrawer() {
        if (hamburgerBtn) hamburgerBtn.classList.remove("open");
        if (navCenter)    navCenter.classList.remove("mobile-open");
    }

    /* =====================================================
       HELPER: AKTIFKAN SUBTAB + SUBCONTENT
    ===================================================== */
    function triggerSubtab(btn) {
        if (!btn) return;
        const targetId    = btn.dataset.sub;
        const parentSlide = btn.closest(".materi-slide");
        if (!parentSlide || !targetId) return;

        /* Reset semua subtab di slide ini */
        parentSlide.querySelectorAll(".subtab")
            .forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        /* Reset semua subcontent di slide ini */
        parentSlide.querySelectorAll(".subcontent")
            .forEach(sc => sc.classList.remove("active"));

        /* Tampilkan target subcontent */
        const targetEl = document.getElementById(targetId);
        if (targetEl) targetEl.classList.add("active");
    }

    /* =====================================================
       SWITCH SLIDE UTAMA
    ===================================================== */
    function showSlide(target) {
        /* Sembunyikan semua slide */
        materiSlides.forEach(s => s.classList.remove("active"));

        /* Nonaktifkan semua tab navbar */
        materiTabs.forEach(b => b.classList.remove("active"));

        /* Tampilkan slide target */
        const targetSlide = document.getElementById("slide-" + target);
        if (targetSlide) {
            targetSlide.classList.add("active");

            /* Reset ke subtab pertama */
            const firstSubtab = targetSlide.querySelector(".subtab");
            triggerSubtab(firstSubtab);
        }

        /* Aktifkan tab yang sesuai */
        materiTabs.forEach(b => {
            if (b.dataset.slide === target) b.classList.add("active");
        });

        /* Tutup mobile drawer */
        closeMobileDrawer();
    }

    /* =====================================================
       EVENT: KLIK TAB NAVBAR
    ===================================================== */
    materiTabs.forEach(btn => {
        btn.addEventListener("click", () => {
            const target = btn.dataset.slide;
            if (target) showSlide(target);
        });
    });

    /* =====================================================
       EVENT: KLIK SUBTAB (delegation per wrapper)
    ===================================================== */
    document.querySelectorAll(".subtab-group").forEach(group => {
        group.addEventListener("click", e => {
            const btn = e.target.closest(".subtab");
            if (btn) triggerSubtab(btn);
        });
    });

    /* =====================================================
       EVENT: HAMBURGER MOBILE
    ===================================================== */
    if (hamburgerBtn && navCenter) {
        hamburgerBtn.addEventListener("click", e => {
            e.stopPropagation();
            hamburgerBtn.classList.toggle("open");
            navCenter.classList.toggle("mobile-open");
        });

        /* Klik di luar → tutup drawer */
        document.addEventListener("click", e => {
            if (!e.target.closest(".nav-left")) {
                closeMobileDrawer();
            }
        });
    }

    /* =====================================================
       INIT: Pastikan slide & subtab pertama aktif
    ===================================================== */
    const activeSlide = document.querySelector(".materi-slide.active");
    if (activeSlide) {
        const firstSubtab = activeSlide.querySelector(".subtab");
        /* Jangan trigger jika sudah ada .active di subtab */
        const alreadyActive = activeSlide.querySelector(".subtab.active");
        if (!alreadyActive && firstSubtab) {
            triggerSubtab(firstSubtab);
        }
    }

});
