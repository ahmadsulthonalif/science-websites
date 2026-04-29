let modeGLB = "";

/* ======================
   SET MODE GLB
====================== */
function setGLB(mode) {
    modeGLB = mode;

    const rumus = document.getElementById("rumus_glb");
    const input = document.getElementById("input_glb");

    if (mode === "s") {
        rumus.innerText = "s = v × t";
        input.innerHTML = `
            <input type="number" id="v_glb" placeholder="Kecepatan (m/s)">
            <input type="number" id="t_glb" placeholder="Waktu (s)">
        `;
    }

    if (mode === "v") {
        rumus.innerText = "v = s / t";
        input.innerHTML = `
            <input type="number" id="s_glb" placeholder="Jarak (m)">
            <input type="number" id="t_glb" placeholder="Waktu (s)">
        `;
    }

    if (mode === "t") {
        rumus.innerText = "t = s / v";
        input.innerHTML = `
            <input type="number" id="s_glb" placeholder="Jarak (m)">
            <input type="number" id="v_glb" placeholder="Kecepatan (m/s)">
        `;
    }
}

/* ======================
   HITUNG GLB
====================== */
function hitungGLB() {
    let hasil = 0;

    if (modeGLB === "s") {
        const v = parseFloat(document.getElementById("v_glb").value);
        const t = parseFloat(document.getElementById("t_glb").value);
        hasil = v * t;
        document.getElementById("hasil_glb").innerText = "s = " + hasil + " m";
    }

    if (modeGLB === "v") {
        const s = parseFloat(document.getElementById("s_glb").value);
        const t = parseFloat(document.getElementById("t_glb").value);
        hasil = s / t;
        document.getElementById("hasil_glb").innerText = "v = " + hasil + " m/s";
    }

    if (modeGLB === "t") {
        const s = parseFloat(document.getElementById("s_glb").value);
        const v = parseFloat(document.getElementById("v_glb").value);
        hasil = s / v;
        document.getElementById("hasil_glb").innerText = "t = " + hasil + " s";
    }
}


let modeGaya = "";

/* ======================
   SET MODE GAYA
====================== */
function setGaya(mode) {
    modeGaya = mode;

    const rumus = document.getElementById("rumus_gaya");
    const input = document.getElementById("input_gaya");

    if (mode === "f") {
        rumus.innerText = "F = m x a";
        input.innerHTML = `
            <input type="number" id="m_gaya" placeholder="massa (kg)">
            <input type="number" id="a_gaya" placeholder= "percepatan (m/s²)">
        `;
    }

    if (mode === "m") {
        rumus.innerText = "m = F / a";
        input.innerHTML = `
            <input type="number" id="f_gaya" placeholder="gaya (N)">
            <input type="number" id="a_gaya" placeholder="percepatan (m/s²)">
        `;
    }

    if (mode === "a") {
        rumus.innerText = "a = F / m";
        input.innerHTML = `
            <input type="number" id="f_gaya" placeholder="gaya (N)">
            <input type="number" id="m_gaya" placeholder="massa (kg)">
        `;
    }
}

/* ======================
   HITUNG GAYA
====================== */
function hitungGaya() {
    let hasil = 0;

    if (modeGaya === "f") {
        const m = parseFloat(document.getElementById("m_gaya").value);
        const a = parseFloat(document.getElementById("a_gaya").value);
        hasil = m * a;
        document.getElementById("hasil_gaya").innerText = "F = " + hasil + " N";
    }

    if (modeGaya === "m") {
        const f = parseFloat(document.getElementById("f_gaya").value);
        const a = parseFloat(document.getElementById("a_gaya").value);
        hasil = f / a;
        document.getElementById("hasil_gaya").innerText = "m = " + hasil + " kg";
    }

    if (modeGaya === "a") {
        const f = parseFloat(document.getElementById("f_gaya").value);
        const m = parseFloat(document.getElementById("m_gaya").value);
        hasil = f / m;
        document.getElementById("hasil_gaya").innerText = "a = " + hasil + " m/s²";
    }
}