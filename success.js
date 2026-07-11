// ===============================
// CUANKU POS - SUCCESS
// ===============================

// Getar singkat (jika didukung HP)
if (navigator.vibrate) {
    navigator.vibrate([150, 80, 150]);
}

// Efek suara sukses (opsional)
const audio = new Audio("assets/success.mp3");

// Jika file suara tidak ada, tidak akan mengganggu aplikasi
audio.play().catch(() => {});

// Countdown
let detik = 5;

const tombol = document.querySelector(".btn");

const timer = setInterval(() => {

    detik--;

    if (detik > 0) {

        tombol.innerHTML = "🏠 Kembali ke Dashboard (" + detik + ")";

    } else {

        clearInterval(timer);

    }

}, 1000);

// Otomatis kembali ke Dashboard
setTimeout(() => {

    window.location.href = "dashboard.html";

}, 5000);