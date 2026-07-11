// =====================================
// CUANKU POS - LAPORAN
// =====================================

// Ambil data transaksi
let transaksi = JSON.parse(localStorage.getItem("transactions")) || [];

// Format Rupiah
function rupiah(nominal){
    return "Rp " + nominal.toLocaleString("id-ID");
}

// Tampilkan Laporan
function tampilLaporan(){

    let totalPendapatan = 0;
    let totalProduk = 0;

    const history = document.getElementById("historyList");

    history.innerHTML = "";

    if(transaksi.length === 0){

        history.innerHTML = `
        <p class="empty">
            Belum ada transaksi
        </p>
        `;

    }else{

        transaksi.reverse().forEach(item=>{

            totalPendapatan += item.total;
            totalProduk += item.jumlah;

            history.innerHTML += `

            <div class="history-item">

                <div class="history-left">

                    <h4>${item.invoice}</h4>

                    <p>${item.tanggal}</p>

                </div>

                <div class="history-right">

                    <h3>${rupiah(item.total)}</h3>

                    <small>${item.jumlah} Produk</small>

                </div>

            </div>

            `;

        });

    }

    document.getElementById("income").innerHTML =
    rupiah(totalPendapatan);

    document.getElementById("trx").innerHTML =
    transaksi.length;

    document.getElementById("sold").innerHTML =
    totalProduk;

}

tampilLaporan();


// =====================================
// Hapus Semua Riwayat
// =====================================

function resetLaporan(){

    if(confirm("Hapus seluruh riwayat transaksi?")){

        localStorage.removeItem("transactions");

        location.reload();

    }

}