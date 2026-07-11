// ===============================
// CUANKU POS - KASIR
// ===============================

// Ambil data produk
let products = JSON.parse(localStorage.getItem("products")) || [];

// Ambil data keranjang
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Jika produk kosong, buat contoh produk
if(products.length === 0){

products = [

{
id:1,
nama:"Indomie Goreng",
harga:3500,
kategori:"Makanan",
foto:"aset/indomie.jpg"
},

{
id:2,
nama:"Good Day Cappuccino",
harga:7000,
kategori:"Minuman",
foto:"aset/goodday.jpg"
},

{
id:3,
nama:"Teh Botol",
harga:5000,
kategori:"Minuman",
foto:"aset/tehbotol.jpg"
},

{
id:4,
nama:"Ultra Milk",
harga:8000,
kategori:"Minuman",
foto:"aset/ultramilk.jpg"
}

];

localStorage.setItem("products",JSON.stringify(products));

}

// ===============================
// FORMAT RUPIAH
// ===============================

function rupiah(angka){

return "Rp " + angka.toLocaleString("id-ID");

}

// ===============================
// TAMPILKAN PRODUK
// ===============================

function tampilProduk(data = products){

const list = document.getElementById("productList");

list.innerHTML="";

data.forEach(item=>{

list.innerHTML += `

<div class="produk">

<img src="${item.foto}">

<h3>${item.nama}</h3>

<p>${rupiah(item.harga)}</p>

<button onclick="tambahKeranjang(${item.id})">

+ Tambah

</button>

</div>

`;

});

}

tampilProduk();

// ===============================
// TAMBAH KE KERANJANG
// ===============================

function tambahKeranjang(id){

const produk = products.find(p=>p.id===id);

const cek = cart.find(p=>p.id===id);

if(cek){

cek.qty++;

}else{

cart.push({

...produk,

qty:1

});

}

localStorage.setItem("cart",JSON.stringify(cart));

updateKeranjang();

alert(produk.nama + " ditambahkan");

}

// ===============================
// UPDATE BADGE
// ===============================

function updateKeranjang(){

let jumlah = 0;

let total = 0;

cart.forEach(item=>{

jumlah += item.qty;

total += item.qty * item.harga;

});

document.getElementById("cartCount").innerHTML = jumlah;

document.getElementById("totalHarga").innerHTML = rupiah(total);

}

updateKeranjang();

// ===============================
// CARI PRODUK
// ===============================

document.getElementById("search").addEventListener("keyup",function(){

let keyword = this.value.toLowerCase();

let hasil = products.filter(item=>{

return item.nama.toLowerCase().includes(keyword);

});

tampilProduk(hasil);

});

// ===============================
// BUKA KERANJANG
// ===============================

function bukaKeranjang(){

window.location.href="checkout.html";

}