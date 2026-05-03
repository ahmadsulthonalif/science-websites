/* =====================================================
   CALCULATOR KIMIA JS
   - Mol – Massa    : n = m / Mr
   - Mol – Volume   : V = n × 22,4
   - Mol – Partikel : N = n × Nₐ
   - Molaritas      : M = n / V
   - Stoikiometri   : perbandingan koefisien reaksi
===================================================== */

const NA  = 6.02e23;   // Bilangan Avogadro
const VM  = 22.4;      // Volume molar STP (L/mol)


/* =====================================================
   NAVIGASI: LANDING ↔ SECTION
===================================================== */
function showCalc(topik) {
    const landing = document.getElementById("calcLanding");
    if (landing) {
        landing.classList.add("hidden");
        setTimeout(() => { landing.style.display = "none"; }, 420);
    }

    document.querySelectorAll(".calc-section-wrapper").forEach(s => {
        s.classList.remove("visible");
        s.style.display = "none";
    });

    const target = document.getElementById("section-" + topik);
    if (target) {
        target.style.display = "flex";
        requestAnimationFrame(() => requestAnimationFrame(() => {
            target.classList.add("visible");
        }));
    }
}

function backToLanding() {
    document.querySelectorAll(".calc-section-wrapper").forEach(s => {
        s.classList.remove("visible");
        setTimeout(() => { s.style.display = "none"; }, 420);
    });

    const landing = document.getElementById("calcLanding");
    if (landing) {
        landing.style.display = "flex";
        requestAnimationFrame(() => requestAnimationFrame(() => {
            landing.classList.remove("hidden");
        }));
    }

    /* Reset semua section */
    ["mol-massa","mol-volume","mol-partikel","molaritas","stoikiometri"]
        .forEach(t => resetCalc(t));
}

function resetCalc(topik) {
    const rumusEl = document.getElementById("rumus_" + topik);
    const inputEl = document.getElementById("input_"  + topik);
    if (rumusEl && topik !== "stoikiometri") rumusEl.textContent = "Pilih variabel";
    if (inputEl) inputEl.innerHTML = "";
    document.getElementById("hasil_" + topik)?.classList.remove("show");
    document.getElementById("error_" + topik)?.classList.remove("show");
    document.querySelectorAll(`[id^="btn-${topik}"]`).forEach(b => b.classList.remove("active-var"));
}

function resetHasil(topik) {
    document.getElementById("hasil_" + topik)?.classList.remove("show");
    document.getElementById("error_" + topik)?.classList.remove("show");
}


/* =====================================================
   HELPER — INPUT & OUTPUT
===================================================== */
function buatInput(containerId, fields) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = fields.map(f => `
        <div class="calc-input-wrap">
            <label class="calc-input-label">${f.label}</label>
            <input class="calc-input" type="number" id="${f.id}" placeholder="${f.placeholder}" step="any">
        </div>
    `).join("");
}

function ambilNilai(id) {
    const el = document.getElementById(id);
    if (!el || el.value.trim() === "") return null;
    return parseFloat(el.value);
}

function tampilHasil(topik, nilai, satuan) {
    const hasilEl  = document.getElementById("hasil_"  + topik);
    const nilaiEl  = document.getElementById("nilai_"  + topik);
    const satuanEl = document.getElementById("satuan_" + topik);
    const errorEl  = document.getElementById("error_"  + topik);

    errorEl?.classList.remove("show");

    if (isNaN(nilai) || !isFinite(nilai) || nilai < 0) {
        if (errorEl) {
            errorEl.textContent = "⚠ Hasil tidak valid, periksa kembali input.";
            errorEl.classList.add("show");
        }
        hasilEl?.classList.remove("show");
        return;
    }

    /* Format angka — jika sangat besar/kecil pakai notasi ilmiah */
    let display;
    if (Math.abs(nilai) >= 1e15 || (Math.abs(nilai) < 0.0001 && nilai !== 0)) {
        display = nilai.toExponential(3);
    } else {
        display = Math.round(nilai * 10000) / 10000;
    }

    if (nilaiEl)  nilaiEl.textContent  = display;
    if (satuanEl) satuanEl.textContent = satuan;
    hasilEl?.classList.add("show");
}

function tampilError(topik, pesan) {
    const errorEl = document.getElementById("error_" + topik);
    if (errorEl) {
        errorEl.textContent = pesan || "⚠ Isi semua input terlebih dahulu.";
        errorEl.classList.add("show");
    }
    document.getElementById("hasil_" + topik)?.classList.remove("show");
}

function setAktifVar(groupPrefix, id) {
    document.querySelectorAll(`[id^="btn-${groupPrefix}"]`)
        .forEach(b => b.classList.remove("active-var"));
    document.getElementById(id)?.classList.add("active-var");
}


/* =====================================================
   MOL – MASSA
   n = m / Mr
===================================================== */
let modeMolMassa = "";

function setMolMassa(mode) {
    modeMolMassa = mode;
    setAktifVar("mol-massa", "btn-mol-massa-" + mode);
    resetHasil("mol-massa");

    const rumusMap = {
        n:  "n = m / Mr",
        m:  "m = n × Mr",
        mr: "Mr = m / n"
    };
    document.getElementById("rumus_mol-massa").textContent = rumusMap[mode];

    const inputsMap = {
        n:  [{ id:"m_mm",  label:"Massa m (gram)",          placeholder:"Masukkan massa" },
             { id:"mr_mm", label:"Massa Molar Mr (g/mol)",  placeholder:"Masukkan Mr" }],
        m:  [{ id:"n_mm",  label:"Jumlah Mol n (mol)",      placeholder:"Masukkan n" },
             { id:"mr_mm", label:"Massa Molar Mr (g/mol)",  placeholder:"Masukkan Mr" }],
        mr: [{ id:"m_mm",  label:"Massa m (gram)",          placeholder:"Masukkan massa" },
             { id:"n_mm",  label:"Jumlah Mol n (mol)",      placeholder:"Masukkan n" }]
    };
    buatInput("input_mol-massa", inputsMap[mode]);
}

function hitungMolMassa() {
    if (!modeMolMassa) { tampilError("mol-massa"); return; }

    if (modeMolMassa === "n") {
        const m = ambilNilai("m_mm"), mr = ambilNilai("mr_mm");
        if (m===null||mr===null) { tampilError("mol-massa"); return; }
        tampilHasil("mol-massa", m / mr, "mol");
    }
    else if (modeMolMassa === "m") {
        const n = ambilNilai("n_mm"), mr = ambilNilai("mr_mm");
        if (n===null||mr===null) { tampilError("mol-massa"); return; }
        tampilHasil("mol-massa", n * mr, "gram (g)");
    }
    else if (modeMolMassa === "mr") {
        const m = ambilNilai("m_mm"), n = ambilNilai("n_mm");
        if (m===null||n===null) { tampilError("mol-massa"); return; }
        tampilHasil("mol-massa", m / n, "g/mol");
    }
}


/* =====================================================
   MOL – VOLUME GAS STP
   V = n × 22,4
===================================================== */
let modeMolVolume = "";

function setMolVolume(mode) {
    modeMolVolume = mode;
    setAktifVar("mol-volume", "btn-mol-volume-" + mode);
    resetHasil("mol-volume");

    const rumusMap = {
        v: "V = n × 22,4 L/mol",
        n: "n = V / 22,4"
    };
    document.getElementById("rumus_mol-volume").textContent = rumusMap[mode];

    const inputsMap = {
        v: [{ id:"n_mv", label:"Jumlah Mol n (mol)", placeholder:"Masukkan n" }],
        n: [{ id:"v_mv", label:"Volume V (liter)",    placeholder:"Masukkan V" }]
    };
    buatInput("input_mol-volume", inputsMap[mode]);
}

function hitungMolVolume() {
    if (!modeMolVolume) { tampilError("mol-volume"); return; }

    if (modeMolVolume === "v") {
        const n = ambilNilai("n_mv");
        if (n===null) { tampilError("mol-volume"); return; }
        tampilHasil("mol-volume", n * VM, "liter (L)");
    }
    else if (modeMolVolume === "n") {
        const v = ambilNilai("v_mv");
        if (v===null) { tampilError("mol-volume"); return; }
        tampilHasil("mol-volume", v / VM, "mol");
    }
}


/* =====================================================
   MOL – PARTIKEL
   N = n × Nₐ
===================================================== */
let modeMolPartikel = "";

function setMolPartikel(mode) {
    modeMolPartikel = mode;
    setAktifVar("mol-partikel", "btn-mol-partikel-" + (mode === "n" ? "n2" : "mol"));
    resetHasil("mol-partikel");

    const rumusMap = {
        n:   "N = n × 6,02 × 10²³",
        mol: "n = N / 6,02 × 10²³"
    };
    document.getElementById("rumus_mol-partikel").textContent = rumusMap[mode];

    const inputsMap = {
        n:   [{ id:"mol_mp", label:"Jumlah Mol n (mol)",     placeholder:"Masukkan n" }],
        mol: [{ id:"n_mp",   label:"Jumlah Partikel N",      placeholder:"mis: 1.204e24" }]
    };
    buatInput("input_mol-partikel", inputsMap[mode]);
}

function hitungMolPartikel() {
    if (!modeMolPartikel) { tampilError("mol-partikel"); return; }

    if (modeMolPartikel === "n") {
        const mol = ambilNilai("mol_mp");
        if (mol===null) { tampilError("mol-partikel"); return; }
        tampilHasil("mol-partikel", mol * NA, "partikel");
    }
    else if (modeMolPartikel === "mol") {
        const n = ambilNilai("n_mp");
        if (n===null) { tampilError("mol-partikel"); return; }
        tampilHasil("mol-partikel", n / NA, "mol");
    }
}


/* =====================================================
   MOLARITAS
   M = n / V
===================================================== */
let modeMolaritas = "";

function setMolaritas(mode) {
    modeMolaritas = mode;
    setAktifVar("molaritas", "btn-molaritas-" + mode);
    resetHasil("molaritas");

    const rumusMap = {
        m: "M = n / V",
        n: "n = M × V",
        v: "V = n / M"
    };
    document.getElementById("rumus_molaritas").textContent = rumusMap[mode];

    const inputsMap = {
        m: [{ id:"n_mol",  label:"Jumlah Mol n (mol)", placeholder:"Masukkan n" },
            { id:"v_mol",  label:"Volume V (liter)",    placeholder:"Masukkan V" }],
        n: [{ id:"m_mol",  label:"Molaritas M (mol/L)", placeholder:"Masukkan M" },
            { id:"v_mol",  label:"Volume V (liter)",    placeholder:"Masukkan V" }],
        v: [{ id:"n_mol",  label:"Jumlah Mol n (mol)", placeholder:"Masukkan n" },
            { id:"m_mol",  label:"Molaritas M (mol/L)", placeholder:"Masukkan M" }]
    };
    buatInput("input_molaritas", inputsMap[mode]);
}

function hitungMolaritas() {
    if (!modeMolaritas) { tampilError("molaritas"); return; }

    if (modeMolaritas === "m") {
        const n = ambilNilai("n_mol"), v = ambilNilai("v_mol");
        if (n===null||v===null) { tampilError("molaritas"); return; }
        tampilHasil("molaritas", n / v, "mol/L (M)");
    }
    else if (modeMolaritas === "n") {
        const m = ambilNilai("m_mol"), v = ambilNilai("v_mol");
        if (m===null||v===null) { tampilError("molaritas"); return; }
        tampilHasil("molaritas", m * v, "mol");
    }
    else if (modeMolaritas === "v") {
        const n = ambilNilai("n_mol"), m = ambilNilai("m_mol");
        if (n===null||m===null) { tampilError("molaritas"); return; }
        tampilHasil("molaritas", n / m, "liter (L)");
    }
}


/* =====================================================
   STOIKIOMETRI REAKSI
   mol A / mol B = kA / kB
   → mol B = (kB / kA) × mol A
===================================================== */
function hitungStoikiometri() {
    const kA   = ambilNilai("stoi_kA");
    const molA = ambilNilai("stoi_molA");
    const kB   = ambilNilai("stoi_kB");

    if (kA===null||molA===null||kB===null) {
        tampilError("stoikiometri"); return;
    }
    if (kA <= 0 || kB <= 0) {
        tampilError("stoikiometri", "⚠ Koefisien harus lebih dari 0.");
        return;
    }

    const molB = (kB / kA) * molA;
    tampilHasil("stoikiometri", molB, "mol");
}
