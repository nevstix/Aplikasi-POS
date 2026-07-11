// =========================
// Dashboard CuanKu POS
// =========================

// Ambil data produk
let products = JSON.parse(localStorage.getItem("products")) || [];

// Ambil jumlah transaksi
let transaksi = Number(localStorage.getItem("trx")) || 0;

// Ambil total pendapatan
let pendapatan = Number(localStorage.getItem("income")) || 0;

// Format Rupiah
function rupiah(nominal){
    return "Rp " + nominal.toLocaleString("id-ID");
}

// Tampilkan Dashboard
function loadDashboard(){

    document.getElementById("produk").innerHTML = products.length;

    document.getElementById("transaksi").innerHTML = transaksi;

    document.getElementById("pendapatan").innerHTML = rupiah(pendapatan);

}

loadDashboard();


// =========================
// Animasi Card
// =========================

const cards = document.querySelectorAll(".menu-card");

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        card.style.transform="scale(.95)";

        setTimeout(()=>{

            card.style.transform="scale(1)";

        },150);

    });

});


// =========================
// Navigasi
// =========================

function bukaKasir(){

    location.href="kasir.html";

}

function bukaProduk(){

    location.href="produk.html";

}

function bukaLaporan(){

    location.href="laporan.html";

}

function bukaPengaturan(){

    alert("Menu Pengaturan masih dalam pengembangan.");

}


// =========================
// Salam berdasarkan waktu
// =========================

const jam = new Date().getHours();

let salam = "";

if(jam < 11){

    salam = "Selamat Pagi ☀️";

}else if(jam < 15){

    salam = "Selamat Siang 🌤";

}else if(jam < 18){

    salam = "Selamat Sore 🌅";

}else{

    salam = "Selamat Malam 🌙";

}

console.log(salam);