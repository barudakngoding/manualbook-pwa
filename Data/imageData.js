// Data/imageData.js (Versi Baru dengan Deskripsi)
export const imageData = {
  dozer: {
    _label: 'Dozer',
    _description: 'Dozer adalah jenis traktor bertenaga yang dilengkapi dengan bilah logam besar (blade) di bagian depan. Alat ini sangat vital dalam pekerjaan konstruksi untuk mendorong material dalam jumlah besar seperti tanah, pasir, puing, dan bebatuan.',
    _images: [
      {file: 'blade.png', desc: 'Blade: Komponen utama untuk memotong dan mendorong material.'},
      {file: 'BRACE.jpg', desc: 'Brace: Bagian penguat struktur.'},
      {file: 'CABIN OP.jpg', desc: 'Cabin Operator: Ruang kendali operator.'},
      {file: 'CUTTING EDGE.jpg', desc: 'Cutting Edge: Bagian ujung blade untuk memotong permukaan.'},
      {file: 'DALAM KABIN.png', desc: 'Inside Cabin: Tampilan bagian dalam kabin.'},
      {file: 'Engine Cover.jpg', desc: 'Engine Cover: Penutup mesin.'},
      {file: 'engine.png', desc: 'Engine: Mesin utama dozer.'},
      {file: 'EXHAUST PIPE.jpg', desc: 'Exhaust Pipe: Pipa knalpot.'},
      {file: 'Final Drive.jpg', desc: 'Final Drive: Sistem penggerak akhir.'},
      {file: 'GAMBAR UTAMA.png', desc: 'Main Image: Tampilan keseluruhan dozer.'},
      {file: 'IDLER.jpg', desc: 'Idler: Roda pemandu rantai track.'},
      {file: 'LIFT CYLINDER.jpg', desc: 'Lift Cylinder: Silinder pengangkat blade.'},
      {file: 'Lower Roller.jpg', desc: 'Lower Roller: Roda penopang bagian bawah track.'},
      {file: 'OPERATOR SET.jpg', desc: 'Operator Set: Panel kontrol operator.'},
      {file: 'Sprocket.jpg', desc: 'Sprocket: Roda gigi penggerak track.'},
      {file: 'Straight Frame.jpg', desc: 'Straight Frame: Rangka lurus dozer.'},
      {file: 'Track Frame.png', desc: 'Track Frame: Rangka track.'},
      {file: 'Track Shoe Assy (Assembly).jpg', desc: 'Track Shoe Assy: Rakitan sepatu track.'},
      {file: 'Upper Roller.jpg', desc: 'Upper Roller: Roda penopang bagian atas track.'},
      {file: 'WORK LAMP.jpg', desc: 'Work Lamp: Lampu kerja dozer.'}
    ],
    _hasVideoFolder: true,
    _videoFolderName: 'videoDozer'
  },
  ekskavator: {
    _label: 'Ekskavator',
    _description: 'Ekskavator adalah alat berat serbaguna yang terdiri dari lengan (boom), tongkat (dipper atau stick), dan bucket. Alat ini digunakan untuk menggali, memuat material, menangani material, serta pekerjaan kehutanan dan konstruksi lainnya.',
    _hasSubfoldersOnly: true,
    'general komponen': {
      _label: 'General Komponen',
      _description: 'Komponen umum yang membentuk bagian-bagian vital dari sebuah Ekskavator, mulai dari mesin hingga sistem hidrolik.',
      _images: [
        {file: 'bateray atau aki.jpeg', desc: 'Battery or Accumulator: Baterai atau aki ekskavator.'},
        {file: 'engine.jpeg', desc: 'Engine: Mesin utama ekskavator.'},
        {file: 'komponen luar.jpeg', desc: 'External Components: Komponen-komponen bagian luar.'},
        {file: 'pump.jpeg', desc: 'Pump: Pompa hidrolik.'},
        {file: 'radiator.jpeg', desc: 'Radiator: Sistem pendingin mesin.'},
        {file: 'swing motor.jpeg', desc: 'Swing Motor: Motor penggerak putar.'}
      ],
      'dalam kabin': {
        _label: 'Dalam Kabin',
        _description: 'Tampilan dan fungsi dari berbagai tuas, pedal, dan monitor yang ada di dalam ruang kendali operator.',
        _images: [
          {file: 'bagian dalam kabin.jpeg', desc: 'Inside Cabin View: Tampilan bagian dalam kabin.'},
          {file: 'fcd.jpeg', desc: 'FCD: Fungsi kontrol display.'},
          {file: 'jt kanan.jpeg', desc: 'Right Joystick: Tuas kendali kanan.'},
          {file: 'jt kiri.jpeg', desc: 'Left Joystick: Tuas kendali kiri.'},
          {file: 'monitor.jpeg', desc: 'Monitor: Layar tampilan informasi.'},
          {file: 'safety lock.jpeg', desc: 'Safety Lock: Tuas pengaman.'},
          {file: 'sl.jpeg', desc: 'SL: Singkatan untuk Safety Lever.'},
          {file: 'ssl.jpeg', desc: 'SSL: Singkatan untuk Secondary Safety Lever.'},
          {file: 'starting swict.jpeg', desc: 'Starting Switch: Sakelar starter.'},
          {file: 'travel lever.jpeg', desc: 'Travel Lever: Tuas kendali pergerakan.'},
          {file: 'travel pedal.jpeg', desc: 'Travel Pedal: Pedal kendali pergerakan.'}
        ]
      }
    },
    'lampu panel': {
      _label: 'Lampu Panel',
      _description: 'Berbagai lampu indikator pada panel monitor yang memberikan informasi penting mengenai status dan kondisi alat berat.',
      _images: [
        {file: 'AC.jpeg', desc: 'AC: Lampu indikator pendingin udara.'},
        {file: 'ALRM BUZZER.jpeg', desc: 'Alarm Buzzer: Lampu indikator buzzer alarm.'},
        {file: 'AUTO DECELATOR.jpeg', desc: 'Auto Decelator: Lampu indikator deselerator otomatis.'},
        {file: 'AUTO.jpeg', desc: 'Auto: Lampu indikator mode otomatis.'},
        {file: 'BUKU PADUAN.jpeg', desc: 'Manual Book: Lampu indikator buku panduan.'},
        {file: 'HM DAN JAM.jpeg', desc: 'HM and Clock: Lampu indikator Hour Meter dan Jam.'},
        {file: 'MODE KERJA.jpeg', desc: 'Work Mode: Lampu indikator mode kerja.'},
        {file: 'OFF.jpeg', desc: 'OFF: Lampu indikator mati.'},
        {file: 'PENGATURAN.jpeg', desc: 'Settings: Lampu indikator pengaturan.'},
        {file: 'SWICTH BLOWER.jpeg', desc: 'Blower Switch: Lampu indikator sakelar blower.'},
        {file: 'SWITCH WIFER.jpeg', desc: 'Wiper Switch: Lampu indikator sakelar wiper.'},
        {file: 'TEMPERATUR AC.jpeg', desc: 'AC Temperature: Lampu indikator suhu AC.'},
        {file: 'TEMPERATUR.jpeg', desc: 'Temperature: Lampu indikator suhu umum.'},
        {file: 'TRAVEL SPEED.jpeg', desc: 'Travel Speed: Lampu indikator kecepatan perjalanan.'},
        {file: 'WATER WIFER.jpeg', desc: 'Wiper Water: Lampu indikator air wiper.'}
      ]
    },
    'Undercarriage': {
      _label: 'Undercarriage',
      _description: 'Sistem undercarriage atau roda rantai yang menjadi dasar pergerakan dan stabilitas ekskavator di berbagai medan.',
      _images: [
        {file: 'komponen Undercarriage.jpeg', desc: 'Undercarriage Components: Komponen-komponen undercarriage ekskavator.'},
        {file: 'Undercarriage.jpeg', desc: 'Undercarriage: Tampilan umum sistem undercarriage ekskavator.'}
      ]
    },
    _hasVideoFolder: true,
    _videoFolderName: 'videoEkskavator'
  },
  grader: {
    _label: 'Grader',
    _description: 'Motor Grader, atau biasa disebut grader, adalah alat berat dengan pisau panjang (blade) yang digunakan untuk meratakan permukaan dalam proses perataan tanah (grading). Alat ini penting untuk pembuatan dan pemeliharaan jalan.',
    _images: [
        {file: 'Blade Lift Cylinder 1.jpg', desc: 'Blade Lift Cylinder 1: Silinder pengangkat blade.'},
        {file: 'Blade Lift Cylinder.jpg', desc: 'Blade Lift Cylinder: Silinder pengangkat blade.'},
        {file: 'Blade.png', desc: 'Blade: Komponen utama untuk meratakan permukaan.'},
        {file: 'CABIN.png', desc: 'Cabin: Tempat operator mengendalikan grader.'},
        {file: 'Drawbar Lift Cylinder.jpg', desc: 'Drawbar Lift Cylinder: Silinder pengangkat drawbar.'},
        {file: 'Drawbar Lift GRADER.png', desc: 'Drawbar Lift: Komponen pengangkat drawbar.'},
        {file: 'Front Lamp.jpg', desc: 'Front Lamp: Lampu depan grader.'},
        {file: 'Front Wheel.jpg', desc: 'Front Wheel: Roda depan grader.'},
        {file: 'GD825A_2_OG.jpg', desc: 'GD825A: Model grader.'},
        {file: 'Rear Wheel.jpg', desc: 'Rear Wheel: Roda belakang grader.'},
        {file: 'Ripper.jpg', desc: 'Ripper: Alat penggembur tanah.'}
    ],
    _hasVideoFolder: true,
    _videoFolderName: 'videoGrader'
  },
  kompaktor: {
    _label: 'Kompaktor',
    _description: 'Kompaktor atau mesin pemadat adalah alat yang digunakan untuk memadatkan tanah, kerikil, atau aspal. Alat ini meningkatkan kepadatan material untuk menciptakan fondasi yang kokoh dan stabil.',
    _images: [
        {file: 'Air Condition (Sistem Pendingin Udara).png', desc: 'Air Condition: Sistem pendingin udara kabin.'},
        {file: 'Airway System (Sistem Udara).png', desc: 'Airway System: Sistem sirkulasi udara.'},
        {file: 'Articulate Frame (Rangka Artikulasi).png', desc: 'Articulate Frame: Rangka artikulasi kompaktor.'},
        {file: 'ChatGPT Image Jun 19, 2025, 07_56_51 PM.png', desc: 'Ilustrasi Kompaktor.'},
        {file: 'COMPACTOR.png', desc: 'Compactor: Tampilan utama alat.'},
        {file: 'Electrical System (Sistem Elektrikal).png', desc: 'Electrical System: Sistem kelistrikan.'},
        {file: 'Hood (Penutup Mesin).png', desc: 'Hood: Penutup mesin utama.'},
        {file: 'Hydraulic System (Sistem Hidrolik).png', desc: 'Hydraulic System: Sistem hidrolik kompaktor.'},
        {file: 'Mark (Penanda).png', desc: 'Mark: Penanda identitas alat.'},
        {file: 'Operation System (Sistem Operasi).jpg', desc: 'Operation System: Sistem operasi alat.'},
        {file: 'Power System (Sistem Daya).png', desc: 'Power System: Sistem daya penggerak.'},
        {file: 'Scraper (Pengikis).jpg', desc: 'Scraper: Alat pengikis permukaan.'},
        {file: 'Transmission System (Sistem Transmisi) (2).png', desc: 'Transmission System 2: Sistem transmisi cadangan.'},
        {file: 'Transmission System (Sistem Transmisi).png', desc: 'Transmission System: Sistem transmisi utama.'},
        {file: 'Vibratory Drum (Drum Vibrasi).png', desc: 'Vibratory Drum: Drum getar pemadat.'}
    ],
    _hasVideoFolder: true,
    _videoFolderName: 'videoKompaktor'
  },
  truk: {
    _label: 'Truk',
    _description: 'Truk (Dump Truck) adalah kendaraan yang digunakan untuk mengangkut material lepas seperti pasir, kerikil, atau tanah untuk keperluan konstruksi. Dilengkapi dengan bak hidrolik untuk mempermudah proses pembongkaran muatan (dumping).',
    _images: [
        {file: 'Body.png', desc: 'Body: Rangka utama truk.'},
        {file: 'Brake Air Tank.png', desc: 'Brake Air Tank: Tangki udara rem.'},
        {file: 'CABIN HINO 500.jpg', desc: 'Cabin Hino 500: Kabin truk Hino 500.'},
        {file: 'Cabin.png', desc: 'Cabin: Kabin truk.'},
        {file: 'engine.jpg', desc: 'Engine: Mesin utama truk.'},
        {file: 'Front Tyre (Ban Depan).png', desc: 'Front Tyre: Ban depan truk.'},
        {file: 'Hidrolik Dump.png', desc: 'Hidrolik Dump: Sistem hidrolik bak truk.'},
        {file: 'Radiator Guard (Pelindung Radiator).png', desc: 'Radiator Guard: Pelindung radiator.'},
        {file: 'Rear Tyre (Ban Belakang).png', desc: 'Rear Tyre: Ban belakang truk.'},
        {file: 'Spion.png', desc: 'Spion: Kaca spion truk.'}
    ],
    _hasVideoFolder: true,
    _videoFolderName: 'videoTruk'
  }
};