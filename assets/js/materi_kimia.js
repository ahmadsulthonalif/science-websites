/* =====================================================
   MATERI KIMIA JS
   - Switch slide (Mol / Stoikiometri) via navbar tab
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

    /* Guard */
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

        parentSlide.querySelectorAll(".subtab")
            .forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        parentSlide.querySelectorAll(".subcontent")
            .forEach(sc => sc.classList.remove("active"));

        const targetEl = document.getElementById(targetId);
        if (targetEl) targetEl.classList.add("active");
    }

    /* =====================================================
       SWITCH SLIDE UTAMA
    ===================================================== */
    function showSlide(target) {
        materiSlides.forEach(s => s.classList.remove("active"));
        materiTabs.forEach(b => b.classList.remove("active"));

        const targetSlide = document.getElementById("slide-" + target);
        if (targetSlide) {
            targetSlide.classList.add("active");
            const firstSubtab = targetSlide.querySelector(".subtab");
            triggerSubtab(firstSubtab);
        }

        materiTabs.forEach(b => {
            if (b.dataset.slide === target) b.classList.add("active");
        });

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
       EVENT: KLIK SUBTAB
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

        document.addEventListener("click", e => {
            if (!e.target.closest(".nav-left")) closeMobileDrawer();
        });
    }

    /* =====================================================
       INIT: Pastikan slide & subtab pertama aktif
    ===================================================== */
    const activeSlide = document.querySelector(".materi-slide.active");
    if (activeSlide) {
        const alreadyActive = activeSlide.querySelector(".subtab.active");
        const firstSubtab   = activeSlide.querySelector(".subtab");
        if (!alreadyActive && firstSubtab) triggerSubtab(firstSubtab);
    }

});
