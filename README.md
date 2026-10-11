# MTgenX — MikroTik Generator External

**MTgenX** (MikroTik Generator External) adalah aplikasi web utilitas yang memungkinkan Anda memasukkan data (seperti Telegram Bot Token, Chat ID, dan parameter lainnya) ke dalam form, lalu secara otomatis menyuntikkannya ke dalam template script MikroTik. Hasilnya bisa langsung disalin dengan satu klik.

## Fitur Utama

- **100% Client-Side** — Tidak ada data (token/ID) yang dikirim ke server. Semua proses berjalan di browser.
- **Glassmorphism UI** — Desain bernuansa biru indigo dengan efek frosted glass ala Apple.
- **Live Preview** — Script di panel output berubah secara real-time saat Anda mengetik di form.
- **localStorage** — Bot Token & Chat ID otomatis tersimpan di browser, tidak perlu ketik ulang.
- **Script MikroTik lengkap** — Enam template siap diisi untuk hotspot, PPP, monitoring, billing, dan log.
- **Copy to Clipboard** — Satu klik untuk menyalin script, lengkap dengan notifikasi toast.
- **Fully Responsive** — Tombol dan layout fleksibel di Desktop, Tablet, dan Mobile.
- **Vanilla HTML/CSS/JS** — Tidak butuh npm, build, atau framework. Buka `index.html` langsung di browser.

## Halaman & Fitur

| Halaman             | Route                        | Deskripsi                                                |
| ------------------- | ---------------------------- | -------------------------------------------------------- |
| Beranda             | `#/`                         | Halaman utama dengan pilihan kategori script             |
| User Login/Logout   | `#/feature/userlog`          | Notifikasi Telegram saat user hotspot login/logout       |
| PPP Login/Logout    | `#/feature/ppplog`           | Notifikasi Telegram untuk event PPP login/logout         |
| Admin/Owner Usage   | `#/feature/staffusage`       | Pantau pemakaian bandwidth admin/owner                   |
| Tagihan PPP         | `#/feature/pppbills`         | Pengingat tagihan PPP via Telegram                       |
| Daily Usage         | `#/feature/dailyusage`       | Laporan pemakaian harian interface ke Telegram           |
| Mikrotik Logs       | `#/feature/mklogs`           | Ambil log MikroTik dan kirim ringkasan ke Telegram       |

## Struktur Proyek

```
.
├── index.html          # Entry point HTML (buka file ini di browser)
├── style.css           # Custom CSS (glassmorphism, theme, animations)
├── app.js              # Seluruh logika aplikasi + template script MikroTik
├── github-mark.svg     # Favicon
├── .nojekyll           # Untuk GitHub Pages support
└── README.md           # Dokumentasi proyek (file ini)
```

## Cara Menambahkan / Mengganti Script MikroTik

Semua template script MikroTik lengkap disimpan di **`app.js`** dalam array `SCRIPT_TEMPLATES`. Untuk menambahkan atau mengganti script:

1. Buka `app.js`.
2. Cari object dengan `slug` yang sesuai (misal: `userlog`, `ppplog`, dll).
3. Ganti nilai properti `template` dengan script MikroTik mentah Anda. Teks `{{BOT_TOKEN}}`, `{{CHAT_ID}}`, dan placeholder lain akan diisi otomatis dari form.
4. Tandai bagian yang ingin diisi user dengan `{{NAMA_VARIABEL}}` (contoh: `{{BOT_TOKEN}}`).
5. Tambahkan entry yang sesuai di array `inputs` agar form menampilkan field untuk variabel tersebut.

## Menjalankan

Cukup buka file `index.html` di browser. Tidak perlu `npm install`, `npm run dev`, atau `npm run build`.

Untuk deploy ke GitHub Pages, upload semua file ke repository Anda dan aktifkan GitHub Pages di Settings > Pages.

## Tech Stack

| Komponen         | Teknologi                  |
| ---------------- | -------------------------- |
| HTML             | Vanilla HTML5              |
| CSS              | Tailwind CSS (CDN) + Custom CSS |
| JavaScript       | Vanilla JS (ES6)           |
| Icons            | Inline SVG                 |
| Routing          | Hash-based (custom)        |
| Backend/Database | Tidak ada (100% client-side) |

## Keamanan

- Semua data (Bot Token, Chat ID, dll) hanya tersimpan di `localStorage` browser Anda.
- Tidak ada request yang dikirim ke server manapun selain ke API Telegram (yang ada di dalam script MikroTik, bukan dari web app ini).
- Field Bot Token menggunakan tipe `password` agar tidak terlihat saat diketik.

---

&copy; 2026 — Made with Love by [Kapten Nemo](https://8xploit.github.io/cv)
