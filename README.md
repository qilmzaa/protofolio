# SoFarPixel — Landing Page Jasa Desain Web

Landing page statis untuk tugas mata pelajaran **Pemrograman Web**.
Dibuat dengan **React 18 via CDN + htm** — **tanpa npm, tanpa Vite, tanpa build tool**.
Cukup buka `index.html` di browser, website langsung berjalan.

## File

| File       | Isi                                                        |
| ---------- | ---------------------------------------------------------- |
| `index.html` | Struktur halaman, meta tag, CDN React + htm              |
| `style.css`  | CSS murni (CSS variables, mobile-first, mode gelap/terang) |
| `script.js`  | Semua komponen React + data produk + konfigurasi WhatsApp  |
| `README.md`  | Dokumen ini                                                |

## Bagian yang Perlu Diubah Siswa

Semua ada di **bagian atas `script.js`**:

```js
const CONFIG = {
  waNumber: "62XXXXXXXXXX", // 1. GANTI dengan nomor WhatsApp asli
  brandName: "SoFarPixel", // 2. GANTI nama brand jika perlu

  defaultMessage: "Halo SoFarPixel! ...", // 3. GANTI pesan default
};
```

- **Nomor WhatsApp**: format internasional tanpa `+`, spasi, atau `-`.
  Contoh: `6281234567890`.
- **Data layanan & harga**: edit array `LAYANAN` di `script.js`.
- **Testimoni & FAQ**: edit array `TESTIMONI` dan `FAQS` di `script.js`.
- **Warna**: edit variabel CSS di bagian atas `style.css`.

## Menjalankan Lokal

Buka `index.html` langsung di browser (double-click), atau jalankan lewat
server lokal (XAMPP: taruh folder di `htdocs`, akses `http://localhost/protofolio/`).

## Deploy ke GitHub Pages

1. Buat repository baru di GitHub, misal `random-photo`.
2. Upload semua file (`index.html`, `style.css`, `script.js`, `README.md`)
   ke **root** repository, lalu commit ke branch `main`.
3. Buka **Settings → Pages**.
4. Pada **Source** pilih **Deploy from a branch**.
5. Pilih branch **main** dan folder **/ (root)**, klik **Save**.
6. Tunggu 1–2 menit, lalu akses:
   `https://username.github.io/random-photo/`

> Semua path di `index.html` sudah relatif (`style.css`, `script.js`),
> jadi tidak perlu konfigurasi tambahan.

## Ganti Nomor WhatsApp

Ubah `waNumber` di bagian atas `script.js`. Tombol WhatsApp (floating,
tombol pesan per layanan, dan form kontak) otomatis memakai nomor tersebut
melalui helper `openWhatsApp()` yang membentuk link `https://wa.me/{nomor}?text={pesan}`.
# protofolio
