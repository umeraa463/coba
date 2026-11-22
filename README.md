# Panduan Website Mobile - Lavitra Seserahan & Mahar

Selamat datang di proyek website mobile **Lavitra Seserahan & Mahar**. Kode ini dirancang khusus mengikuti desain presisi yang Anda berikan dengan estetika mewah (*luxury wedding aesthetic*), proporsional di semua perangkat, dan dilengkapi sistem slot gambar sehingga Anda dapat menaruh foto-foto karya Anda sendiri dengan mudah dan rapi tanpa takut gambar menjadi gepeng atau pecah.

---

## 📁 Struktur File & Folder

```
lavitra-seserahan/
├── index.html           # Halaman Beranda (Home)
├── detail-produk.html   # Halaman Detail Produk (Hidden Box)
├── css/
│   └── style.css        # Desain CSS lengkap (warna, tipografi, proporsi layar HP)
├── js/
│   └── main.js          # Skrip interaksi (Accordion FAQ, Menu, & Klik untuk Pasang Foto)
├── images/              # Folder untuk menyimpan file foto Anda
└── README.md            # Panduan lengkap penggunaan
```

---

## 📸 Cara Menaruh Foto Anda Sendiri

Sesuai permintaan Anda, kode ini **tidak diisi gambar sembarangan**, melainkan sudah disiapkan wadah/slot gambar yang proporsional (*aspect ratio locked*).

Ada **2 cara mudah** untuk menaruh foto Anda:

### Cara 1: Uji Coba Langsung di Browser (Sangat Praktis & Instan)
1. Buka file `index.html` atau `detail-produk.html` di browser Anda (Google Chrome, Microsoft Edge, Safari, dll).
2. **Klik langsung pada kotak abu-abu placeholder mana pun.**
3. Pilih foto dari komputer/laptop atau galeri HP Anda.
4. Foto akan langsung tampil di dalam kotak tersebut secara otomatis, rapi, dan proporsional!

---

### Cara 2: Memasang Foto Permanen di Kode HTML
1. Masukkan file-file foto Anda ke dalam folder `images/` (misalnya: `hero.jpg`, `caturatra.jpg`, `hidden-box.jpg`).
2. Buka `index.html` atau `detail-produk.html` menggunakan editor teks (VS Code, Notepad, dll).
3. Cari tag `img-placeholder-wrapper`, lalu ubah atribut `src=""` pada tag `<img>` di dalamnya dan tambahkan class `loaded`.

**Contoh Sebelum:**
```html
<div class="img-placeholder-wrapper aspect-product">
  <div class="placeholder-content">...</div>
  <img src="" alt="Hidden Box" class="user-image">
</div>
```

**Contoh Sesudah Dipasang Gambar Anda:**
```html
<div class="img-placeholder-wrapper aspect-product">
  <img src="images/hidden-box.jpg" alt="Hidden Box" class="user-image loaded">
</div>
```

---

## 📐 Rekomendasi Ukuran Foto Agar Proporsional

Agar tampilan tidak pecah dan proporsional sempurna:
| Halaman | Bagian / Slot Foto | Rasio Aspek | Rekomendasi Ukuran (Pixel) |
|---|---|---|---|
| **Beranda** | Foto Banner Hero Atas | 4 : 4.8 (Tinggi) | 800 x 960 px |
| **Beranda** | Cerita Kami (Kotak Maroon) | 4 : 4.5 | 600 x 680 px |
| **Beranda** | 4 Kotak Koleksi Signature | 4 : 3 (Standar) | 600 x 450 px |
| **Beranda** | Galeri Karya Carousel | 1 : 1 (Persegi) | 500 x 500 px |
| **Beranda** | Foto Studio / Denah | 4 : 3 | 600 x 450 px |
| **Detail Produk** | Foto Hero Atas (Hidden Box)| 4 : 4.4 | 800 x 880 px |
| **Detail Produk** | 3 Foto Eksklusivitas Lavitra| 4 : 3 | 600 x 450 px |

---

## 🚀 Fitur Unggulan Website

1. **Proporsi Layar Mobile-First**:
   - Jika dibuka di HP: Tampil 100% *full-bleed* seperti aplikasi native mobile.
   - Jika dibuka di laptop/desktop: Otomatis tampil di tengah dalam bingkai smartphone elegan sehingga tata letak tidak melar/rusak. Terdapat tombol toggle `📱 Mode Layar HP` di kanan atas untuk mencoba mode tampilan.
2. **Koleksi & Navigasi Terhubung**:
   - Menekan tombol **"LIHAT DETAIL PRODUK"** pada produk *Hidden Box* di Beranda akan langsung membuka `detail-produk.html`.
   - Tombol panah kembali (`←`) di halaman detail akan langsung mengarahkan kembali ke `index.html`.
3. **Accordion FAQ Interaktif**:
   - Pertanyaan di bagian *Pertanyaan Umum* dapat diklik untuk membuka jawaban secara halus (*smooth transition*).
4. **Navigasi Drawer Hamburger**:
   - Tombol kotak cokelat khas di sudut kanan atas membuka menu samping (*off-canvas drawer*) lengkap dengan tautan ke seluruh bagian halaman.
5. **Sticky Bottom Order Bar**:
   - Bar bawah di halaman detail menampilkan harga **Rp 250.000** dan tombol **ORDER** yang langsung terhubung ke WhatsApp resmi dengan pesan otomatis.

---

## 💡 Kustomisasi Nomor WhatsApp & Kontak
- Untuk mengubah nomor WhatsApp tujuan pemesanan, cari teks `wa.me/6285796426922` pada file `detail-produk.html` lalu ganti dengan nomor WhatsApp aktif Anda.
