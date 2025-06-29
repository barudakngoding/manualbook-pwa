// Disarankan menaikkan versi cache setiap ada perubahan pada file JS/CSS/HTML
const CACHE_NAME = 'manualbook-cache-v3'; 
const toCache = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/manifest.json',
  '/Data/imageData.js',
  '/Data/videoData.js',
  // Icons
  '/images/icon-192x192.png',
  '/images/icon-512x512.png',
  // Dozer (images)
  '/images/dozer/blade.png',
  '/images/dozer/BRACE.jpg',
  '/images/dozer/CABIN OP.jpg',
  '/images/dozer/CUTTING EDGE.jpg',
  '/images/dozer/DALAM KABIN.png',
  '/images/dozer/Engine Cover.jpg',
  '/images/dozer/engine.png',
  '/images/dozer/EXHAUST PIPE.jpg',
  '/images/dozer/Final Drive.jpg',
  '/images/dozer/GAMBAR UTAMA.png',
  '/images/dozer/IDLER.jpg',
  '/images/dozer/LIFT CYLINDER.jpg',
  '/images/dozer/Lower Roller.jpg',
  '/images/dozer/OPERATOR SET.jpg',
  '/images/dozer/Sprocket.jpg',
  '/images/dozer/Straight Frame.jpg',
  '/images/dozer/Track Frame.png',
  '/images/dozer/Track Shoe Assy (Assembly).jpg',
  '/images/dozer/Upper Roller.jpg',
  '/images/dozer/WORK LAMP.jpg',
  // Dozer Videos
  '/videos/videoDozer/dozer_pengoperasian_dasar.mp4',
  '/videos/videoDozer/dozer_inspeksi_harian.mp4',
  // Ekskavator - General Komponen (images)
  '/images/ekskavator/general komponen/bateray atau aki.jpeg',
  '/images/ekskavator/general komponen/engine.jpeg',
  '/images/ekskavator/general komponen/komponen luar.jpeg',
  '/images/ekskavator/general komponen/pump.jpeg',
  '/images/ekskavator/general komponen/radiator.jpeg',
  '/images/ekskavator/general komponen/swing motor.jpeg',
  // Ekskavator - General Komponen - Dalam Kabin (images)
  '/images/ekskavator/general komponen/dalam kabin/bagian dalam kabin.jpeg',
  '/images/ekskavator/general komponen/dalam kabin/fcd.jpeg',
  '/images/ekskavator/general komponen/dalam kabin/jt kanan.jpeg',
  '/images/ekskavator/general komponen/dalam kabin/jt kiri.jpeg',
  '/images/ekskavator/general komponen/dalam kabin/monitor.jpeg',
  '/images/ekskavator/general komponen/dalam kabin/safety lock.jpeg',
  '/images/ekskavator/general komponen/dalam kabin/sl.jpeg',
  '/images/ekskavator/general komponen/dalam kabin/ssl.jpeg',
  '/images/ekskavator/general komponen/dalam kabin/starting swict.jpeg',
  '/images/ekskavator/general komponen/dalam kabin/travel lever.jpeg',
  '/images/ekskavator/general komponen/dalam kabin/travel pedal.jpeg',
  // Ekskavator - Lampu Panel (images)
  '/images/ekskavator/lampu panel/AC.jpeg',
  '/images/ekskavator/lampu panel/ALRM BUZZER.jpeg',
  '/images/ekskavator/lampu panel/AUTO DECELATOR.jpeg',
  '/images/ekskavator/lampu panel/AUTO.jpeg',
  '/images/ekskavator/lampu panel/BUKU PADUAN.jpeg',
  '/images/ekskavator/lampu panel/HM DAN JAM.jpeg',
  '/images/ekskavator/lampu panel/MODE KERJA.jpeg',
  '/images/ekskavator/lampu panel/OFF.jpeg',
  '/images/ekskavator/lampu panel/PENGATURAN.jpeg',
  '/images/ekskavator/lampu panel/SWICTH BLOWER.jpeg',
  '/images/ekskavator/lampu panel/SWITCH WIFER.jpeg',
  '/images/ekskavator/lampu panel/TEMPERATUR AC.jpeg',
  '/images/ekskavator/lampu panel/TEMPERATUR.jpeg',
  '/images/ekskavator/lampu panel/WATER WIFER.jpeg',
  // Ekskavator - Undercarriage (images)
  '/images/ekskavator/Undercarriage/komponen Undercarriage.jpeg',
  '/images/ekskavator/Undercarriage/Undercarriage.jpeg',
  // Ekskavator Videos
  '/videos/videoEkskavator/ekskavator_pengoperasian_boom.mp4',
  '/videos/videoEkskavator/ekskavator_cara_swing.mp4',
  // Grader (images)
  '/images/grader/Blade Lift Cylinder 1.jpg',
  '/images/grader/Blade Lift Cylinder.jpg',
  '/images/grader/Blade.png',
  '/images/grader/CABIN.png',
  '/images/grader/Drawbar Lift Cylinder.jpg',
  '/images/grader/Drawbar Lift GRADER.png',
  '/images/grader/Front Lamp.jpg',
  '/images/grader/Front Wheel.jpg',
  '/images/grader/GD825A_2_OG.jpg',
  '/images/grader/Rear Wheel.jpg',
  '/images/grader/Ripper.jpg',
  // Grader Videos
  '/videos/videoGrader/grader_menyesuaikan_blade.mp4',
  // Kompaktor (images)
  '/images/kompaktor/Air Condition (Sistem Pendingin Udara).png',
  '/images/kompaktor/Airway System (Sistem Udara).png',
  '/images/kompaktor/Articulate Frame (Rangka Artikulasi).png',
  '/images/kompaktor/ChatGPT Image Jun 19, 2025, 07_56_51 PM.png',
  '/images/kompaktor/COMPACTOR.png',
  '/images/kompaktor/Electrical System (Sistem Elektrikal).png',
  '/images/kompaktor/Hood (Penutup Mesin).png',
  '/images/kompaktor/Hydraulic System (Sistem Hidrolik).png',
  '/images/kompaktor/Mark (Penanda).png',
  '/images/kompaktor/Operation System (Sistem Operasi).jpg',
  '/images/kompaktor/Power System (Sistem Daya).png',
  '/images/kompaktor/Scraper (Pengikis).jpg',
  '/images/kompaktor/Transmission System (Sistem Transmisi) (2).png',
  '/images/kompaktor/Transmission System (Sistem Transmisi).png',
  '/images/kompaktor/Vibratory Drum (Drum Vibrasi).png',
  // Kompaktor Videos
  '/videos/videoKompaktor/kompaktor_teknik_pemadatan.mp4',
  // Truk (images)
  '/images/truk/Body.png',
  '/images/truk/Brake Air Tank.png',
  '/images/truk/CABIN HINO 500.jpg',
  '/images/truk/Cabin.png',
  '/images/truk/engine.jpg',
  '/images/truk/Front Tyre (Ban Depan).png',
  '/images/truk/Hidrolik Dump.png',
  '/images/truk/Radiator Guard (Pelindung Radiator).png',
  '/images/truk/Rear Tyre (Ban Belakang).png',
  '/images/truk/Spion.png',
  // Truk Videos
  '/videos/videoTruk/truk_cara_dumping.mp4'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(toCache);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') {
    return;
  }
  
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).then(fetchResponse => {
        return caches.open(CACHE_NAME).then(cache => {
          if (event.request.headers.has('range')) {
            return fetchResponse;
          }
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        });
      });
    })
  );
});