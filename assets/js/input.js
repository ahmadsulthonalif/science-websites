/* =====================================================
   HANDLE INPUT USERNAME + FADE TRANSITION
===================================================== */

/* Ambil form */
const form = document.getElementById("usernameForm");

/* Pastikan form ada (biar tidak error di halaman lain) */
if (form) {

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        /* Ambil input username */
        const usernameInput = document.getElementById("username");
        const username = usernameInput.value;

        /* Validasi: tidak boleh kosong */
        if (username.trim() === "") {
            alert("Username tidak boleh kosong!");
            return;
        }

        /* Simpan ke localStorage */
        localStorage.setItem("username", username);

        /* =========================================
           FADE OUT SEBELUM PINDAH HALAMAN
        ========================================= */
        document.body.classList.remove("fade-in");
        document.body.classList.add("fade-out");

        /* Redirect setelah animasi selesai */
        setTimeout(() => {
            window.location.href = "../../pages/main/dashboard.html";
        }, 500); // HARUS sama dengan CSS
    });

}