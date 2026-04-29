let mode1 = "";

/* ======================
   SET MODE 1
====================== */
function set1(mode) {
    mode1 = mode;

    const rumus = document.getElementById("rumus_1");
    const input = document.getElementById("input_1");

    if (mode === "m_1") {
        rumus.innerText = "m = n × Mr";
        input.innerHTML = `
            <input type="number" id="n_1" placeholder="n">
            <input type="number" id="mr_1" placeholder="mr">
        `;
    }

    if (mode === "n_1") {
        rumus.innerText = "n = m / Mr";
        input.innerHTML = `
            <input type="number" id="m_1" placeholder="m">
            <input type="number" id="mr_1" placeholder="mr">
        `;
    }

    if (mode === "mr_1") {
        rumus.innerText = "Mr = m / n";
        input.innerHTML = `
            <input type="number" id="m_1" placeholder="m">
            <input type="number" id="n_1" placeholder="n">
        `;
    }
}

/* ======================
   HITUNG 1
====================== */
function hitung1() {
    let hasil = 0;

    if (mode1 === "m_1") {
        const n = parseFloat(document.getElementById("n_1").value);
        const mr = parseFloat(document.getElementById("mr_1").value);
        hasil = n * mr;
        document.getElementById("hasil_1").innerText = "M = " + hasil + " mol/L";
    }

    if (mode1 === "n_1") {
        const m = parseFloat(document.getElementById("m_1").value);
        const mr = parseFloat(document.getElementById("mr_1").value);
        hasil = m / mr;
        document.getElementById("hasil_1").innerText = "n = " + hasil + "";
    }

    if (mode1 === "mr_1") {
        const m = parseFloat(document.getElementById("m_1").value);
        const n = parseFloat(document.getElementById("n_1").value);
        hasil = m / n;
        document.getElementById("hasil_1").innerText = "mr = " + hasil + "";
    }
}


let mode2 = "";
const stp = 22.4;

/* ======================
   SET MODE 2
====================== */
function set2(mode) {
    mode2 = mode;

    const rumus = document.getElementById("rumus_2");
    const input = document.getElementById("input_2");

    if (mode === "v_2") {
        rumus.innerText = "V = n x 22.4";
        input.innerHTML = `
            <input type="number" id="n_2" placeholder="n">
        `;
    }

    if (mode === "n_2") {
        rumus.innerText = "n = V / 22.4";
        input.innerHTML = `
            <input type="number" id="v_2" placeholder="V">
        `;
    }

}

/* ======================
   HITUNG 2
====================== */
function hitung2() {
    let hasil = 0;

    if (mode2 === "v_2") {
        const n = parseFloat(document.getElementById("n_2").value);
        hasil = n * stp;
        document.getElementById("hasil_2").innerText = "V = " + hasil + "";
    }

    if (mode2 === "n_2") {
        const v = parseFloat(document.getElementById("v_2").value);
        hasil = v / stp;
        document.getElementById("hasil_2").innerText = "n = " + hasil + "";
    }
}



let mode3 = "";

/* ======================
   SET MODE 3
====================== */
function set3(mode) {
    mode3 = mode;

    const rumus = document.getElementById("rumus_3");
    const input = document.getElementById("input_3");

    if (mode === "m_3") {
        rumus.innerText = "M = n / V";
        input.innerHTML = `
            <input type="number" id="n_3" placeholder="n">
            <input type="number" id="v_3" placeholder="V">
        `;
    }

    if (mode === "n_3") {
        rumus.innerText = "n = M x V";
        input.innerHTML = `
            <input type="number" id="m_3" placeholder="M">
            <input type="number" id="v_3" placeholder="V">
        `;
    }

    if (mode === "v_3") {
        rumus.innerText = "V = n / M";
        input.innerHTML = `
            <input type="number" id="n_3" placeholder="n">
            <input type="number" id="m_3" placeholder="M">
        `;
    }
}

/* ======================
   HITUNG 3
====================== */
function hitung3() {
    let hasil = 0;

    if (mode3 === "m_3") {
        const n = parseFloat(document.getElementById("n_3").value);
        const v = parseFloat(document.getElementById("v_3").value);
        hasil = n / v;
        document.getElementById("hasil_3").innerText = "M = " + hasil + "";
    }

    if (mode3 === "n_3") {
        const m = parseFloat(document.getElementById("m_3").value);
        const v = parseFloat(document.getElementById("v_3").value);
        hasil = m * v;
        document.getElementById("hasil_3").innerText = "n = " + hasil + "";
    }

    if (mode3 === "v_3") {
        const n = parseFloat(document.getElementById("n_3").value);
        const m = parseFloat(document.getElementById("m_3").value);
        hasil = n / m;
        document.getElementById("hasil_3").innerText = "v = " + hasil + "";
    }
}