// Tambahkan array javascript berbentuk di bawah ini
let buku = [
    { "nama": "sherlock", "jumlah": 2 },
    { "nama": "lupin", "jumlah": 2 },
    { "nama": "aladin", "jumlah": 2 },
]

// Buatlah fungsi dengan javascript untuk mengambil jumlah dan select option yang dipilih
function ambilBuku() {
    let jumlahInput = document.getElementById("jumlah").value;
    let pilihanBuku = document.getElementById("pilihan").value;

    // Ketika tekan tombol, cek apakah textfield kosong atau tidak. 
    // Jika kosong, tampilkan alert().
    if (jumlahInput === "") {
        alert("Masukkan jumlah buku terlebih dahulu!");
        return;
    }

    // Jika jumlah tidak kosong, lakukan pencarian array di atas. 
    // Jika pilihan buku tidak ditemukan, tampilkan alert bahwa buku tidak ditemukan
    let bukuDitemukan = false;
    for (let i = 0; i < buku.length; i++) {
        if (buku[i].nama === pilihanBuku) {
            bukuDitemukan = true;

            // Jika buku yang dipilih ditemukan dalam array, 
            // cek apakah jumlah yang diinputkan lebih banyak dari jumlah buku dalam array. 
            // Jika jumlah dari textfield lebih banyak dari array, tampilkan alert bahwa jumlah buku tidak tersedia.
            if (parseInt(jumlahInput) > buku[i].jumlah) {
                alert("Jumlah buku tidak tersedia.");
            } else {
                alert("Silahkan ambil buku Anda.");
            }
            break;
        }
    }
    // Jika Jumlah yang diinputkan sama atau kurang dari stock jumlah yang ada di array, 
    // tampilkan “silahkan ambil buku anda”
    if (!bukuDitemukan) {
        alert("Buku tidak ditemukan.");
    }
}

