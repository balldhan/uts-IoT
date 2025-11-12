/* ===================================
   IMPORT BAHAN-BAHAN
   =================================== */
const express = require('express');
const mysql = require('mysql2/promise');
// const path = require('path'); // Kadang perlu, tapi untuk ini nggak dulu

/* ===================================
   KONFIGURASI DASAR
   =================================== */
const app = express();
const port = 3000;

/* ===================================
   !!! INI TAMBAHANNYA !!!
   Middleware untuk menyajikan file statis (HTML, CSS, JS, Gambar)
   dari folder 'public'
   =================================== */
app.use(express.static('public')); // <--- TAMBAHKAN BARIS INI

/* ===================================
   KONFIGURASI DATABASE
   =================================== */
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'db_iot'
};

/* ===================================
   BUAT API ENDPOINT (TETAP SAMA)
   =================================== */
app.get('/data-terbaru', async (req, res) => {
    // ... (Kode API kamu di sini, nggak perlu diubah) ...
    // ... (try, catch, query database, res.json) ...
});

/* ===================================
   JALANKAN SERVER (TETAP SAMA)
   =================================== */
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
    console.log(`Frontend bisa diakses di http://localhost:${port}`);
});