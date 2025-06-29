# Manual Book Alat Berat - PWA

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/Erphan12/manualbook-alat-berat)

Aplikasi Progressive Web App (PWA) untuk manual book digital alat berat. Aplikasi ini menyediakan panduan visual berupa gambar dan video untuk berbagai jenis alat berat konstruksi.

## 🚜 Alat Berat yang Tersedia

### 1. **Dozer**
Traktor bertenaga dengan blade logam besar untuk mendorong material seperti tanah, pasir, dan bebatuan.
- **Komponen**: Blade, Engine, Track System, Cabin Operator, dll.
- **Video Tutorial**: Pengoperasian dasar dan inspeksi harian

### 2. **Ekskavator** 
Alat berat serbaguna dengan boom, stick, dan bucket untuk menggali dan memuat material.
- **Komponen**: General Components, Dalam Kabin, Lampu Panel, Undercarriage
- **Video Tutorial**: Pengoperasian boom dan teknik swing

### 3. **Grader**
Motor grader dengan blade panjang untuk meratakan permukaan dalam proses grading.
- **Komponen**: Blade, Cabin, Front/Rear Wheel, Ripper, dll.
- **Video Tutorial**: Menyesuaikan blade

### 4. **Kompaktor**
Mesin pemadat untuk memadatkan tanah, kerikil, atau aspal.
- **Komponen**: Vibratory Drum, Hydraulic System, Power System, dll.
- **Video Tutorial**: Teknik pemadatan

### 5. **Truk (Dump Truck)**
Kendaraan pengangkut material dengan bak hidrolik untuk dumping.
- **Komponen**: Body, Engine, Cabin, Hydraulic Dump, dll.
- **Video Tutorial**: Cara melakukan dumping

## ✨ Fitur Utama

- 📱 **Progressive Web App (PWA)** - Dapat diinstall sebagai aplikasi mobile
- 🔄 **Mode Offline** - Akses konten tanpa koneksi internet
- 🖼️ **Galeri Gambar** - Tampilan detail komponen alat berat
- 🎥 **Video Tutorial** - Panduan pengoperasian dan maintenance
- 📋 **Navigasi Sidebar** - Akses mudah ke berbagai kategori alat
- 🔍 **Modal View** - Tampilan gambar dalam ukuran penuh
- 📱 **Responsive Design** - Optimal di desktop dan mobile

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur aplikasi
- **CSS3** - Styling dan responsive design
- **JavaScript (ES6+)** - Logika aplikasi dan interaktivitas
- **Service Worker** - Caching untuk mode offline
- **Web App Manifest** - Konfigurasi PWA

## 🚀 Instalasi dan Penggunaan

### Menjalankan Lokal
1. Clone repository:
   ```bash
   git clone https://github.com/Erphan12/manualbook-pwa.git
   ```
2. Masuk ke direktori project:
   ```bash
   cd manualbook-pwa
   ```
3. Buka `index.html` di browser modern

### Install sebagai PWA
1. Buka aplikasi di browser (Chrome/Edge/Firefox)
2. Klik ikon "Install" atau "Add to Home Screen"
3. Aplikasi akan tersedia sebagai aplikasi standalone

## 📁 Struktur Project

```
manualbook-pwa/
├── index.html              # Halaman utama
├── app.js                  # Logika aplikasi utama
├── style.css               # Stylesheet
├── manifest.json           # Web App Manifest
├── service-worker.js       # Service Worker untuk PWA
├── Data/
│   ├── imageData.js        # Data gambar komponen alat berat
│   └── videoData.js        # Data video tutorial
├── images/                 # Folder gambar komponen
├── videos/                 # Folder video (tidak di-track git)
└── .gitignore             # Mengabaikan folder videos
```

## 🎯 Cara Menambah Konten

### Menambah Gambar Baru
1. Tambahkan file gambar ke folder `images/[kategori]/`
2. Update data di `Data/imageData.js`
3. Tambahkan deskripsi komponen

### Menambah Video Tutorial
1. Tambahkan file video ke folder `videos/[kategori]/`
2. Update data di `Data/videoData.js`
3. Tambahkan deskripsi video

## 🌐 Deployment

Aplikasi ini dapat di-deploy otomatis ke:
- **Vercel** - Push ke GitHub akan trigger auto-deploy
- **Netlify** - Drag & drop atau GitHub integration
- **GitHub Pages** - Hosting statis gratis

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan:
1. Fork repository ini
2. Buat branch fitur baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 Lisensi

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Developer

**Erphan12**
- GitHub: [@Erphan12](https://github.com/Erphan12)
- Project Link: [https://github.com/Erphan12/manualbook-pwa](https://github.com/Erphan12/manualbook-pwa)

---

⭐ **Jika project ini membantu, berikan star di GitHub!**