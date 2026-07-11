// ======================================
// CUANKU POS - KERANJANG
// ======================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function rupiah(nominal){
    return "Rp " + nominal.toLocaleString("id-ID");
}

// ======================
// Tampilkan Keranjang
// ======================

function tampilKeranjang(){

    const cartList = document.getElementById("cartList");

    cartList.innerHTML = "";

    let subtotal = 0;

    if(cart.length == 0){

        cartList.innerHTML = `
        <div class="empty-cart">
            <h2>🛒</h2>
            <h3>Keranjang Masih Kosong</h3>
            <p>Silakan tambahkan produk dari halaman Kasir.</p>
        </div>
        `;

        document.getElementById("subtotal").innerHTML = "Rp 0";
        document.getElementById("tax").innerHTML = "Rp 0";
        document.getElementById("total").innerHTML = "Rp 0";

        return;
    }

    cart.forEach((item,index)=>{

        subtotal += item.harga * item.qty;

        cartList.innerHTML += `

        <div class="cart-item">

            <img src="${item.foto}" alt="${item.nama}">

            <div class="cart-info">

                <h3>${item.nama}</h3>

                <p>${rupiah(item.harga)}</p>

                <div class="qty-box">

                    <button onclick="kurang(${index})">-</button>

                    <span>${item.qty}</span>

                    <button onclick="tambah(${index})">+</button>

                </div>

            </div>

            <button class="delete-btn"
            onclick="hapus(${index})">

            🗑 Hapus

            </button>

        </div>

        `;

    });

    let pajak = Math.round(subtotal * 0.11);

    let total = subtotal + pajak;

    document.getElementById("subtotal").innerHTML = rupiah(subtotal);

    document.getElementById("tax").innerHTML = rupiah(pajak);

    document.getElementById("total").innerHTML = rupiah(total);

}

tampilKeranjang();


// ======================
// Tambah Jumlah
// ======================

function tambah(index){

    cart[index].qty++;

    simpan();

}

// ======================
// Kurangi Jumlah
// ======================

function kurang(index){

    if(cart[index].qty > 1){

        cart[index].qty--;

    }else{

        cart.splice(index,1);

    }

    simpan();

}

// ======================
// Hapus Produk
// ======================

function hapus(index){

    if(confirm("Hapus produk ini?")){

        cart.splice(index,1);

        simpan();

    }

}

// ======================
// Simpan Perubahan
// ======================

function simpan(){

    localStorage.setItem("cart", JSON.stringify(cart));

    tampilKeranjang();

}