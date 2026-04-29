function showMateri(id) {
    console.log("Klik:", id);

    const sections = document.querySelectorAll(".materi-full");
    const buttons = document.querySelectorAll(".materi-switch button");

    // reset semua
    sections.forEach(sec => sec.classList.remove("active"));
    buttons.forEach(btn => btn.classList.remove("active-btn"));

    // ambil target
    const targetSection = document.getElementById(id);
    const targetBtn = document.getElementById("btn-" + id);

    if (!targetSection || !targetBtn) {
        console.error("ID tidak ditemukan:", id);
        return;
    }

    // aktifkan
    targetSection.classList.add("active");
    targetBtn.classList.add("active-btn");
}