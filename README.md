# Blockchain Explorer & DApp

## Ikhtisar

Aplikasi ini adalah aplikasi berbasis React yang terhubung dengan jaringan blockchain Ethereum menggunakan Web3.js. Aplikasi ini menyediakan berbagai fungsionalitas seperti melihat data blockchain, mengirim Ether, dan menambang blok baru. Fitur-fitur utama aplikasi ini adalah:

- **Lihat Akun**: Daftar dan pilih akun Ethereum.
- **Periksa Saldo Akun**: Tampilkan saldo dari akun yang dipilih.
- **Lihat Informasi Blok Terbaru**: Tampilkan detail dari blok terbaru, termasuk transaksi di dalamnya.
- **Kirim Ether**: Transfer Ether dari akun yang dipilih ke penerima yang ditentukan.
- **Tambang Blok**: Simulasikan penambangan blok baru di jaringan Ethereum lokal (misalnya, Ganache).

## Fitur

1. **Manajemen Akun**
   - **Pilih Akun**: Pilih akun Ethereum dari daftar akun yang tersedia.
   - **Saldo**: Lihat saldo dari akun yang dipilih dalam satuan Ether.

2. **Data Blockchain**
   - **Informasi Blok Terbaru**: Tampilkan nomor blok terbaru dan jumlah transaksi.
   - **Transaksi di Blok Terbaru**: Daftar transaksi dari blok yang baru ditambang, termasuk pengirim, penerima, nilai, gas, dan hash transaksi.

3. **Transfer Ether**
   - **Kirim Ether**: Masukkan alamat penerima dan jumlah yang akan dikirim, kemudian klik "Kirim Ether" untuk mentransfer Ether.

4. **Penambangan Blok**
   - **Tambang Blok**: Klik "Tambang Blok" untuk mensimulasikan penambangan blok baru di jaringan pengujian.

## Instalasi

1. **Kloning Repository**
   ```bash
   git clone https://github.com/your-repo/blockchain-explorer-dapp.git
   cd blockchain-explorer-dapp
   ```

2. **Instal Dependensi**
   ```bash
   npm install
   ```

3. **Jalankan Aplikasi**
   ```bash
   npm start
   ```

4. **Akses Aplikasi**
   - Buka browser dan akses ke `http://localhost:3000`.

## Konfigurasi

Pastikan Anda memiliki MetaMask atau ekstensi dompet Ethereum lainnya yang terinstal di browser Anda. Hubungkan ke jaringan Ethereum lokal seperti Ganache untuk tujuan pengujian.

### Contoh Konfigurasi untuk Ganache

- **URL Ganache**: `http://localhost:7545`
- **ID Jaringan**: Sesuaikan dengan ID jaringan yang digunakan di aplikasi.

## Penggunaan

1. **Pilih Akun**: Pilih akun Ethereum dari menu dropdown.
2. **Periksa Saldo**: Lihat saldo dari akun yang dipilih.
3. **Periksa Blok Terbaru**: Tampilkan detail blok terbaru dan transaksi di dalamnya.
4. **Kirim Ether**: Masukkan alamat penerima dan jumlah, lalu klik "Kirim Ether" untuk mentransfer Ether.
5. **Tambang Blok**: Klik "Tambang Blok" untuk mensimulasikan penambangan blok baru di jaringan pengujian.

## Pemecahan Masalah

- **Akun Tidak Tampil**: Pastikan MetaMask terinstal dan terhubung ke jaringan yang benar.
- **Transaksi Tidak Muncul**: Verifikasi jaringan berfungsi dengan baik dan coba tambang blok baru.
- **Masalah Penambangan**: Pastikan Anda menggunakan jaringan pengujian lokal seperti Ganache yang mendukung penambangan blok.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT - lihat file [LICENSE](LICENSE) untuk detailnya.

## Penghargaan

- [Web3.js](https://github.com/ethereum/web3.js) - API JavaScript untuk Ethereum.
- [MetaMask](https://metamask.io) - Dompet Ethereum dan ekstensi browser.
- [Ganache](https://www.trufflesuite.com/ganache) - Blockchain pribadi untuk pengembangan Ethereum.

Silakan kontribusi pada proyek ini dengan mengajukan masalah atau permintaan tarik. Untuk pertanyaan atau dukungan, harap buka masalah di repositori.

```

### Penjelasan:
- **Ikhtisar**: Menjelaskan aplikasi dan fitur-fitur utamanya.
- **Fitur**: Rincian fitur-fitur yang ada dalam aplikasi.
- **Instalasi**: Langkah-langkah untuk menginstal dan menjalankan aplikasi.
- **Konfigurasi**: Konfigurasi yang diperlukan untuk menghubungkan aplikasi dengan jaringan Ethereum lokal.
- **Penggunaan**: Cara menggunakan fitur-fitur aplikasi.
- **Pemecahan Masalah**: Cara mengatasi masalah umum yang mungkin terjadi.
- **Lisensi**: Lisensi yang digunakan.
- **Penghargaan**: Mengakui alat dan layanan yang digunakan dalam proyek.

```