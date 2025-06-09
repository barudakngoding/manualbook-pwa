# 📱 Manualbook PWA - Alat Berat

Progressive Web App (PWA) untuk manual book alat berat yang dapat diinstall dan digunakan offline.

![PWA Badge](https://img.shields.io/badge/PWA-Ready-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Status](https://img.shields.io/badge/Status-Production-success)

## 🚀 Demo Live

- **Website:** [https://manualbook-pwa.vercel.app](https://manualbook-pwa.vercel.app)
- **GitHub:** [https://github.com/USERNAME/manualbook-pwa](https://github.com/USERNAME/manualbook-pwa)

## 📋 Deskripsi

Manualbook PWA adalah aplikasi web progresif yang menyediakan manual book lengkap untuk berbagai jenis alat berat. Aplikasi ini dapat diinstall di perangkat mobile dan desktop, serta dapat berfungsi offline.

### 🏗️ Alat Berat yang Tersedia:
- **✅ Ekskavator** (KOMATSU 210) - Lengkap dengan gambar dan penjelasan
- **🚧 Bulldozer** - Coming Soon
- **🚧 Grader** - Coming Soon  
- **🚧 Crane** - Coming Soon

## ✨ Fitur Utama

### 📱 PWA Features
- **Install ke Home Screen** - Bisa diinstall seperti aplikasi native
- **Offline Support** - Bekerja tanpa koneksi internet
- **Responsive Design** - Optimal di mobile, tablet, dan desktop
- **Fast Loading** - Cache untuk performa optimal
- **Push Notifications Ready** - Siap untuk notifikasi

### 🔧 Konten Ekskavator KOMATSU 210
- **General Komponen** (6 komponen)
  - Baterai atau Aki
  - Engine (Mesin)
  - Komponen Luar
  - Pump (Pompa)
  - Radiator
  - Swing Motor

- **Lampu Panel** (15 indikator)
  - AC (Air Conditioner)
  - Alarm Buzzer
  - Auto Decelator
  - Mode Kerja
  - Switch Wiper
  - Temperatur Engine
  - Dan lainnya...

- **Undercarriage** (2 komponen)
  - Komponen Undercarriage
  - Undercarriage System

## 🛠️ Teknologi

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **PWA:** Web App Manifest, Service Worker
- **Styling:** CSS Grid, Flexbox, CSS Variables
- **Icons:** Custom SVG/PNG icons
- **Hosting:** Vercel (Static hosting)

## 📦 Instalasi & Development

### Prerequisites
- Web browser modern (Chrome, Firefox, Safari, Edge)
- Git (untuk development)

### Clone Repository
```bash
git clone https://github.com/USERNAME/manualbook-pwa.git
cd manualbook-pwa
```

### Local Development
```bash
# Buka dengan live server atau langsung buka index.html
# Untuk testing PWA, gunakan localhost atau HTTPS
python -m http.server 8000
# atau
npx serve .
```

### Deploy ke Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📁 Struktur Proyek

```
manualbook-pwa/
├── index.html              # Halaman utama
├── style.css               # Styling utama
├── script.js               # JavaScript utama
├── data_ekskavator.js      # Data konten ekskavator
├── manifest.json           # PWA manifest
├── sw.js                   # Service Worker
├── icon.png                # Icon aplikasi
├── vercel.json             # Konfigurasi Vercel
├── .gitignore              # Git ignore rules
├── README.md               # Dokumentasi
└── images/                 # Folder gambar
    └── KOMATSU 210/
        ├── general komponen/
        ├── lampu panel/
        └── Undercarriage/
```

## 🎨 Screenshots

### Desktop View
![Desktop Screenshot](https://via.placeholder.com/800x400/667eea/ffffff?text=Desktop+View)

### Mobile View
![Mobile Screenshot](https://via.placeholder.com/400x800/764ba2/ffffff?text=Mobile+View)

### PWA Install
![PWA Install](https://via.placeholder.com/600x300/667eea/ffffff?text=PWA+Install)

## 🚀 Cara Install PWA

### Di Android:
1. Buka website di Chrome
2. Tap menu (3 titik)
3. Pilih "Add to Home screen"
4. Tap "Add"

### Di iOS:
1. Buka website di Safari
2. Tap tombol Share
3. Pilih "Add to Home Screen"
4. Tap "Add"

### Di Desktop:
1. Buka website di Chrome
2. Klik icon install di address bar
3. Klik "Install"

## 🔄 Development Timeline

### ✅ Tahap 1: Rancangan Dasar
- [x] Struktur HTML dasar
- [x] 4 pilihan alat berat
- [x] Layout responsive
- [x] JavaScript navigation

### ✅ Tahap 2: Konten Ekskavator
- [x] Import semua gambar KOMATSU 210
- [x] Struktur data komponen
- [x] 3 kategori: General, Panel, Undercarriage

### ✅ Tahap 3: Perbaikan Tampilan
- [x] Grid layout untuk gambar
- [x] Card design untuk setiap gambar
- [x] Nama label di atas gambar
- [x] Hover effects dan animasi

### ✅ Tahap 4: PWA Implementation
- [x] Web App Manifest
- [x] Service Worker
- [x] Offline support
- [x] Install prompt
- [x] Custom icons

### 🚧 Tahap 5: Konten Tambahan (Future)
- [ ] Bulldozer manual
- [ ] Grader manual
- [ ] Crane manual
- [ ] Search functionality
- [ ] Bookmark favorites

## 🤝 Contributing

Kontribusi sangat diterima! Silakan:

1. Fork repository
2. Buat branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Author

**[Your Name]**
- GitHub: [@Erphan12](https://github.com/Erphan)
- Email: muh.irfan161102@gmail.com

## 🙏 Acknowledgments

- KOMATSU untuk referensi gambar ekskavator
- Vercel untuk hosting gratis
- PWA community untuk best practices

---

⭐ **Jika proyek ini membantu, berikan star di GitHub!**