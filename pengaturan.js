// ==============================
// CUANKU POS - PENGATURAN
// ==============================

// Muat data saat halaman dibuka
window.onload = function(){

    document.getElementById("namaToko").value =
    localStorage.getItem("namaToko") || "";

    document.getElementById("alamat").value =
    localStorage.getItem("alamat") || "";

    document.getElementById("telepon").value =
    localStorage.getItem("telepon") || "";

    const tema = localStorage.getItem("tema");

    if(tema=="dark"){

        document.body.classList.add("dark");

    }

}

// ==============================
// Simpan Informasi Toko
// ==============================

function simpanToko(){

    localStorage.setItem(
        "namaToko",
        document.getElementById("namaToko").value
    );

    localStorage.setItem(
        "alamat",
        document.getElementById("alamat").value
    );

    localStorage.setItem(
        "telepon",
        document.getElementById("telepon").value
    );

    alert("✅ Informasi toko berhasil disimpan.");

}

// ==============================
// Ganti Tema
// ==============================

function gantiTema(mode){

    if(mode=="dark"){

        document.body.classList.add("dark");

        localStorage.setItem("tema","dark");

    }else{

        document.body.classList.remove("dark");

        localStorage.setItem("tema","orange");

    }

}

// ==============================
// Backup Data
// ==============================

function backupData(){

    const data = {

        products: JSON.parse(localStorage.getItem("products")) || [],

        transactions: JSON.parse(localStorage.getItem("transactions")) || [],

        namaToko: localStorage.getItem("namaToko"),

        alamat: localStorage.getItem("alamat"),

        telepon: localStorage.getItem("telepon")

    };

    const blob = new Blob(
        [JSON.stringify(data,null,2)],
        {type:"application/json"}
    );

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "Backup-CuanKuPOS.json";

    link.click();

}

// ==============================
// Reset Data
// ==============================

function resetData(){

    const yakin = confirm(
        "Semua data akan dihapus. Lanjutkan?"
    );

    if(!yakin) return;

    localStorage.clear();

    alert("✅ Semua data berhasil dihapus.");

    location.reload();

}