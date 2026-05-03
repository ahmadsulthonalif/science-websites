/* =====================================================
   CALCULATOR FISIKA JS
   - Navigasi landing → section → kembali
   - GLB  : cari s / v / t
   - GLBB : 3 persamaan, tiap persamaan cari variabel
   - Gaya : cari F / m / a
===================================================== */

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

    resetCalc("glb");
    resetCalc("glbb");
    resetCalc("gaya");
}

function resetCalc(topik) {
    const rumusEl = document.getElementById("rumus_" + topik);
    const inputEl = document.getElementById("input_"  + topik);

    if (rumusEl) rumusEl.textContent = topik === "glbb" ? "Pilih persamaan dulu" : "Pilih variabel";
    if (inputEl) inputEl.innerHTML   = "";

    document.getElementById("hasil_" + topik)?.classList.remove("show");
    document.getElementById("error_" + topik)?.classList.remove("show");
    document.querySelectorAll(`[id^="btn-${topik}"]`).forEach(b => b.classList.remove("active-var"));

    if (topik === "glbb") {
        document.querySelectorAll(".glbb-eq-btn").forEach(b => b.classList.remove("active-eq"));
        const pilihEl = document.getElementById("rumus-pilih-glbb");
        if (pilihEl) pilihEl.innerHTML = "";
        glbbEq   = 0;
        modeGLBB = "";
    }
}

function resetHasil(topik) {
    document.getElementById("hasil_" + topik)?.classList.remove("show");
    document.getElementById("error_" + topik)?.classList.remove("show");
}


/* =====================================================
   HELPER — BUAT INPUT & AMBIL NILAI
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

    if (isNaN(nilai) || !isFinite(nilai)) {
        if (errorEl) {
            errorEl.textContent = "⚠ Hasil tidak valid, periksa kembali input.";
            errorEl.classList.add("show");
        }
        hasilEl?.classList.remove("show");
        return;
    }

    const rounded = Math.round(nilai * 10000) / 10000;
    if (nilaiEl)  nilaiEl.textContent  = rounded;
    if (satuanEl) satuanEl.textContent = satuan;
    hasilEl?.classList.add("show");
}

function tampilError(topik) {
    const errorEl = document.getElementById("error_" + topik);
    if (errorEl) {
        errorEl.textContent = "⚠ Isi semua input terlebih dahulu.";
        errorEl.classList.add("show");
    }
    document.getElementById("hasil_" + topik)?.classList.remove("show");
}

function setAktifBtn(id) {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.parentElement?.querySelectorAll("button")
        .forEach(b => b.classList.remove("active-var"));
    btn.classList.add("active-var");
}


/* =====================================================
   GLB — s = v × t
===================================================== */
let modeGLB = "";

function setGLB(mode) {
    modeGLB = mode;
    setAktifBtn("btn-glb-" + mode);
    resetHasil("glb");

    const rumusMap  = { s: "s = v × t", v: "v = s / t", t: "t = s / v" };
    document.getElementById("rumus_glb").textContent = rumusMap[mode];

    const inputsMap = {
        s: [{ id:"v_glb", label:"Kecepatan v (m/s)",   placeholder:"Masukkan v" },
            { id:"t_glb", label:"Waktu t (s)",          placeholder:"Masukkan t" }],
        v: [{ id:"s_glb", label:"Jarak s (m)",          placeholder:"Masukkan s" },
            { id:"t_glb", label:"Waktu t (s)",          placeholder:"Masukkan t" }],
        t: [{ id:"s_glb", label:"Jarak s (m)",          placeholder:"Masukkan s" },
            { id:"v_glb", label:"Kecepatan v (m/s)",   placeholder:"Masukkan v" }]
    };
    buatInput("input_glb", inputsMap[mode]);
}

function hitungGLB() {
    if (!modeGLB) { tampilError("glb"); return; }
    if (modeGLB === "s") {
        const v = ambilNilai("v_glb"), t = ambilNilai("t_glb");
        if (v===null||t===null) { tampilError("glb"); return; }
        tampilHasil("glb", v * t, "meter (m)");
    }
    if (modeGLB === "v") {
        const s = ambilNilai("s_glb"), t = ambilNilai("t_glb");
        if (s===null||t===null) { tampilError("glb"); return; }
        tampilHasil("glb", s / t, "m/s");
    }
    if (modeGLB === "t") {
        const s = ambilNilai("s_glb"), v = ambilNilai("v_glb");
        if (s===null||v===null) { tampilError("glb"); return; }
        tampilHasil("glb", s / v, "detik (s)");
    }
}


/* =====================================================
   GLBB — 3 persamaan kinematik
===================================================== */
let glbbEq   = 0;
let modeGLBB = "";

function setGLBBEq(eq) {
    glbbEq   = eq;
    modeGLBB = "";
    resetHasil("glbb");

    document.querySelectorAll(".glbb-eq-btn").forEach(b => b.classList.remove("active-eq"));
    document.getElementById("eq" + eq + "-btn")?.classList.add("active-eq");

    document.getElementById("rumus_glbb").textContent = "Pilih variabel yang dicari";
    document.getElementById("input_glbb").innerHTML   = "";

    const pilihEl = document.getElementById("rumus-pilih-glbb");
    if (!pilihEl) return;

    const varMap = {
        1: [["vt","Cari vₜ"],  ["v0","Cari v₀"],  ["a1","Cari a"],  ["t1","Cari t"]],
        2: [["s2","Cari s"],   ["v02","Cari v₀"], ["a2","Cari a"],  ["t2","Cari t"]],
        3: [["vt3","Cari vₜ"],["v03","Cari v₀"], ["a3","Cari a"],  ["s3","Cari s"]]
    };

    pilihEl.innerHTML = varMap[eq].map(([id, label]) =>
        `<button id="glbb-btn-${id}" class="glbb-var-btn" onclick="setGLBBVar('${id}')">${label}</button>`
    ).join("");
}

function setGLBBVar(varId) {
    modeGLBB = varId;
    resetHasil("glbb");

    document.querySelectorAll(".glbb-var-btn").forEach(b => b.classList.remove("active-var"));
    document.getElementById("glbb-btn-" + varId)?.classList.add("active-var");

    /* ========= PERSAMAAN 1: vₜ = v₀ + at ========= */
    if (glbbEq === 1) {
        const rumusMap = {
            vt: "vₜ = v₀ + a × t",
            v0: "v₀ = vₜ − a × t",
            a1: "a = (vₜ − v₀) / t",
            t1: "t = (vₜ − v₀) / a"
        };
        const inputsMap = {
            vt: [{ id:"v0_1", label:"v₀ (m/s)",   placeholder:"Kecepatan awal" },
                 { id:"a_1",  label:"a (m/s²)",    placeholder:"Percepatan" },
                 { id:"t_1",  label:"t (s)",        placeholder:"Waktu" }],
            v0: [{ id:"vt_1", label:"vₜ (m/s)",   placeholder:"Kecepatan akhir" },
                 { id:"a_1",  label:"a (m/s²)",    placeholder:"Percepatan" },
                 { id:"t_1",  label:"t (s)",        placeholder:"Waktu" }],
            a1: [{ id:"vt_1", label:"vₜ (m/s)",   placeholder:"Kecepatan akhir" },
                 { id:"v0_1", label:"v₀ (m/s)",   placeholder:"Kecepatan awal" },
                 { id:"t_1",  label:"t (s)",        placeholder:"Waktu" }],
            t1: [{ id:"vt_1", label:"vₜ (m/s)",   placeholder:"Kecepatan akhir" },
                 { id:"v0_1", label:"v₀ (m/s)",   placeholder:"Kecepatan awal" },
                 { id:"a_1",  label:"a (m/s²)",    placeholder:"Percepatan" }]
        };
        document.getElementById("rumus_glbb").textContent = rumusMap[varId] || "";
        buatInput("input_glbb", inputsMap[varId] || []);
    }

    /* ========= PERSAMAAN 2: s = v₀t + ½at² ========= */
    if (glbbEq === 2) {
        const rumusMap = {
            s2:  "s = v₀ × t + ½ × a × t²",
            v02: "v₀ = (s − ½at²) / t",
            a2:  "a = 2(s − v₀t) / t²",
            t2:  "½at² + v₀t − s = 0 (kuadrat)"
        };
        const inputsMap = {
            s2:  [{ id:"v0_2", label:"v₀ (m/s)", placeholder:"Kecepatan awal" },
                  { id:"a_2",  label:"a (m/s²)",  placeholder:"Percepatan" },
                  { id:"t_2",  label:"t (s)",      placeholder:"Waktu" }],
            v02: [{ id:"s_2",  label:"s (m)",     placeholder:"Jarak" },
                  { id:"a_2",  label:"a (m/s²)",  placeholder:"Percepatan" },
                  { id:"t_2",  label:"t (s)",      placeholder:"Waktu" }],
            a2:  [{ id:"s_2",  label:"s (m)",     placeholder:"Jarak" },
                  { id:"v0_2", label:"v₀ (m/s)", placeholder:"Kecepatan awal" },
                  { id:"t_2",  label:"t (s)",      placeholder:"Waktu" }],
            t2:  [{ id:"s_2",  label:"s (m)",     placeholder:"Jarak" },
                  { id:"v0_2", label:"v₀ (m/s)", placeholder:"Kecepatan awal" },
                  { id:"a_2",  label:"a (m/s²)",  placeholder:"Percepatan" }]
        };
        document.getElementById("rumus_glbb").textContent = rumusMap[varId] || "";
        buatInput("input_glbb", inputsMap[varId] || []);
    }

    /* ========= PERSAMAAN 3: vₜ² = v₀² + 2as ========= */
    if (glbbEq === 3) {
        const rumusMap = {
            vt3: "vₜ = √(v₀² + 2 × a × s)",
            v03: "v₀ = √(vₜ² − 2 × a × s)",
            a3:  "a = (vₜ² − v₀²) / (2s)",
            s3:  "s = (vₜ² − v₀²) / (2a)"
        };
        const inputsMap = {
            vt3: [{ id:"v0_3", label:"v₀ (m/s)", placeholder:"Kecepatan awal" },
                  { id:"a_3",  label:"a (m/s²)",  placeholder:"Percepatan" },
                  { id:"s_3",  label:"s (m)",      placeholder:"Jarak" }],
            v03: [{ id:"vt_3", label:"vₜ (m/s)", placeholder:"Kecepatan akhir" },
                  { id:"a_3",  label:"a (m/s²)",  placeholder:"Percepatan" },
                  { id:"s_3",  label:"s (m)",      placeholder:"Jarak" }],
            a3:  [{ id:"vt_3", label:"vₜ (m/s)", placeholder:"Kecepatan akhir" },
                  { id:"v0_3", label:"v₀ (m/s)", placeholder:"Kecepatan awal" },
                  { id:"s_3",  label:"s (m)",      placeholder:"Jarak" }],
            s3:  [{ id:"vt_3", label:"vₜ (m/s)", placeholder:"Kecepatan akhir" },
                  { id:"v0_3", label:"v₀ (m/s)", placeholder:"Kecepatan awal" },
                  { id:"a_3",  label:"a (m/s²)",  placeholder:"Percepatan" }]
        };
        document.getElementById("rumus_glbb").textContent = rumusMap[varId] || "";
        buatInput("input_glbb", inputsMap[varId] || []);
    }
}

function hitungGLBB() {
    if (!glbbEq || !modeGLBB) { tampilError("glbb"); return; }

    if (glbbEq === 1) {
        if (modeGLBB === "vt") {
            const v0=ambilNilai("v0_1"),a=ambilNilai("a_1"),t=ambilNilai("t_1");
            if (v0===null||a===null||t===null){tampilError("glbb");return;}
            tampilHasil("glbb", v0+a*t, "m/s");
        }
        else if (modeGLBB === "v0") {
            const vt=ambilNilai("vt_1"),a=ambilNilai("a_1"),t=ambilNilai("t_1");
            if (vt===null||a===null||t===null){tampilError("glbb");return;}
            tampilHasil("glbb", vt-a*t, "m/s");
        }
        else if (modeGLBB === "a1") {
            const vt=ambilNilai("vt_1"),v0=ambilNilai("v0_1"),t=ambilNilai("t_1");
            if (vt===null||v0===null||t===null){tampilError("glbb");return;}
            tampilHasil("glbb", (vt-v0)/t, "m/s²");
        }
        else if (modeGLBB === "t1") {
            const vt=ambilNilai("vt_1"),v0=ambilNilai("v0_1"),a=ambilNilai("a_1");
            if (vt===null||v0===null||a===null){tampilError("glbb");return;}
            tampilHasil("glbb", (vt-v0)/a, "detik (s)");
        }
    }

    else if (glbbEq === 2) {
        if (modeGLBB === "s2") {
            const v0=ambilNilai("v0_2"),a=ambilNilai("a_2"),t=ambilNilai("t_2");
            if (v0===null||a===null||t===null){tampilError("glbb");return;}
            tampilHasil("glbb", v0*t+0.5*a*t*t, "meter (m)");
        }
        else if (modeGLBB === "v02") {
            const s=ambilNilai("s_2"),a=ambilNilai("a_2"),t=ambilNilai("t_2");
            if (s===null||a===null||t===null){tampilError("glbb");return;}
            tampilHasil("glbb", (s-0.5*a*t*t)/t, "m/s");
        }
        else if (modeGLBB === "a2") {
            const s=ambilNilai("s_2"),v0=ambilNilai("v0_2"),t=ambilNilai("t_2");
            if (s===null||v0===null||t===null){tampilError("glbb");return;}
            tampilHasil("glbb", 2*(s-v0*t)/(t*t), "m/s²");
        }
        else if (modeGLBB === "t2") {
            /* ½at² + v₀t − s = 0 → rumus kuadrat */
            const s=ambilNilai("s_2"),v0=ambilNilai("v0_2"),a=ambilNilai("a_2");
            if (s===null||v0===null||a===null){tampilError("glbb");return;}
            const A=0.5*a, B=v0, C=-s;
            const D=B*B-4*A*C;
            if (D<0){tampilHasil("glbb",NaN,"");return;}
            const t1=(-B+Math.sqrt(D))/(2*A);
            const t2=(-B-Math.sqrt(D))/(2*A);
            tampilHasil("glbb", t1>=0?t1:t2, "detik (s)");
        }
    }

    else if (glbbEq === 3) {
        if (modeGLBB === "vt3") {
            const v0=ambilNilai("v0_3"),a=ambilNilai("a_3"),s=ambilNilai("s_3");
            if (v0===null||a===null||s===null){tampilError("glbb");return;}
            tampilHasil("glbb", Math.sqrt(v0*v0+2*a*s), "m/s");
        }
        else if (modeGLBB === "v03") {
            const vt=ambilNilai("vt_3"),a=ambilNilai("a_3"),s=ambilNilai("s_3");
            if (vt===null||a===null||s===null){tampilError("glbb");return;}
            tampilHasil("glbb", Math.sqrt(vt*vt-2*a*s), "m/s");
        }
        else if (modeGLBB === "a3") {
            const vt=ambilNilai("vt_3"),v0=ambilNilai("v0_3"),s=ambilNilai("s_3");
            if (vt===null||v0===null||s===null){tampilError("glbb");return;}
            tampilHasil("glbb", (vt*vt-v0*v0)/(2*s), "m/s²");
        }
        else if (modeGLBB === "s3") {
            const vt=ambilNilai("vt_3"),v0=ambilNilai("v0_3"),a=ambilNilai("a_3");
            if (vt===null||v0===null||a===null){tampilError("glbb");return;}
            tampilHasil("glbb", (vt*vt-v0*v0)/(2*a), "meter (m)");
        }
    }
}


/* =====================================================
   GAYA — F = m × a
===================================================== */
let modeGaya = "";

function setGaya(mode) {
    modeGaya = mode;
    setAktifBtn("btn-gaya-" + mode);
    resetHasil("gaya");

    const rumusMap = { f:"F = m × a", m:"m = F / a", a:"a = F / m" };
    document.getElementById("rumus_gaya").textContent = rumusMap[mode];

    const inputsMap = {
        f: [{ id:"m_gaya", label:"Massa m (kg)",       placeholder:"Masukkan m" },
            { id:"a_gaya", label:"Percepatan a (m/s²)", placeholder:"Masukkan a" }],
        m: [{ id:"f_gaya", label:"Gaya F (N)",          placeholder:"Masukkan F" },
            { id:"a_gaya", label:"Percepatan a (m/s²)", placeholder:"Masukkan a" }],
        a: [{ id:"f_gaya", label:"Gaya F (N)",          placeholder:"Masukkan F" },
            { id:"m_gaya", label:"Massa m (kg)",        placeholder:"Masukkan m" }]
    };
    buatInput("input_gaya", inputsMap[mode]);
}

function hitungGaya() {
    if (!modeGaya) { tampilError("gaya"); return; }
    if (modeGaya === "f") {
        const m=ambilNilai("m_gaya"),a=ambilNilai("a_gaya");
        if (m===null||a===null){tampilError("gaya");return;}
        tampilHasil("gaya", m*a, "Newton (N)");
    }
    if (modeGaya === "m") {
        const f=ambilNilai("f_gaya"),a=ambilNilai("a_gaya");
        if (f===null||a===null){tampilError("gaya");return;}
        tampilHasil("gaya", f/a, "kilogram (kg)");
    }
    if (modeGaya === "a") {
        const f=ambilNilai("f_gaya"),m=ambilNilai("m_gaya");
        if (f===null||m===null){tampilError("gaya");return;}
        tampilHasil("gaya", f/m, "m/s²");
    }
}
