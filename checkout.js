// ===============================
// CUANKU POS - CHECKOUT
// ===============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const checkoutList = document.getElementById("checkoutList");
const subtotalEl = document.getElementById("subtotal");
const taxEl = document.getElementById("tax");
const totalEl = document.getElementById("total");
const paymentInput = document.getElementById("payment");
const changeEl = document.getElementById("change");

let subtotal = 0;
let pajak = 0;
let total = 0;

// Format Rupiah
function rupiah(angka){
    return "Rp " + angka.toLocaleString("id-ID");
}

// ===============================
// Tampilkan Produk
// ===============================

function tampilkanCheckout(){

    checkoutList.innerHTML = "";

    subtotal = 0;

    if(cart.length == 0){

        checkoutList.innerHTML = `
        <p>Keranjang masih kosong.</p>
        `;

        return;

    }

    cart.forEach(item=>{

        subtotal += item.harga * item.qty;

        checkoutList.innerHTML += `

        <div class="checkout-item">

            <img src="${item.foto}" alt="${item.nama}">

            <div class="checkout-info">

                <h4>${item.nama}</h4>

                <p>${rupiah(item.harga)}</p>

                <small>Jumlah : ${item.qty}</small>

            </div>

        </div>

        `;

    });

    pajak = Math.round(subtotal * 0.11);

    total = subtotal + pajak;

    subtotalEl.innerHTML = rupiah(subtotal);
    taxEl.innerHTML = rupiah(pajak);
    totalEl.innerHTML = rupiah(total);

}

tampilkanCheckout();


// ===============================
// Hitung Kembalian
// ===============================

paymentInput.addEventListener("input",function(){

    let bayar = Number(this.value);

    if(bayar >= total){

        changeEl.innerHTML = rupiah(bayar-total);

    }else{

        changeEl.innerHTML = "Rp 0";

    }

});


// ===============================
// Bayar
// ===============================

function bayar(){

    let bayar = Number(paymentInput.value);

    if(cart.length==0){

        alert("Keranjang kosong!");

        return;

    }

    if(bayar < total){

        alert("Uang pelanggan kurang!");

        return;

    }

    let transaksi = JSON.parse(localStorage.getItem("transactions")) || [];

    transaksi.push({

        invoice:"INV"+Date.now(),

        tanggal:new Date().toLocaleString("id-ID"),

        pelanggan:document.getElementById("customerName").value || "-",

        metode:document.getElementById("paymentMethod").value,

        jumlah:cart.length,

        total:total

    });

    localStorage.setItem("transactions",JSON.stringify(transaksi));

    localStorage.removeItem("cart");

    window.location.href="success.html";

}