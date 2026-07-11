// ================================
// CUANKU POS - TAMBAH PRODUK
// ================================

// Preview Foto
const fotoInput = document.getElementById("foto");
const preview = document.getElementById("preview");

let fotoProduk = "aset/no-image.png";

fotoInput.addEventListener("change", function () {

    const file = this.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(e){

            preview.src = e.target.result;

            fotoProduk = e.target.result;

        }

        reader.readAsDataURL(file);

    }

});

// ================================
// Simpan Produk
// ================================

function simpanProduk(){

    const nama = document.getElementById("nama").value.trim();
    const harga = document.getElementById("harga").value;
    const stok = document.getElementById("stok").value;
    const kategori = document.getElementById("kategori").value;

    if(nama=="" || harga=="" || stok==""){

        alert("Lengkapi semua data terlebih dahulu!");

        return;

    }

    let products = JSON.parse(localStorage.getItem("products")) || [];

    const produkBaru = {

        id: Date.now(),

        nama: nama,

        harga: Number(harga),

        stok: Number(stok),

        kategori: kategori,

        foto: fotoProduk

    };

    products.push(produkBaru);

    localStorage.setItem("products", JSON.stringify(products));

    alert("✅ Produk berhasil ditambahkan!");

    window.location.href="produk.html";

}