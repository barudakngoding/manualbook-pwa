export const imageData = {
  dozer: {
    _icon: [{ file: 'images/iconFolder/DOZER ICON.jpg' }],
    _label: 'Dozer',
    _description: 'Dozer adalah jenis traktor bertenaga yang dilengkapi dengan bilah logam besar (blade) di bagian depan.',
    _images: [
        {file: 'blade.png', desc: 'Blade: Komponen utama...', voice: 'voice/dozer/blade.mp3'},
        {file: 'BRACE.jpg', desc: 'Brace: Bagian penguat struktur.', voice: 'voice/dozer/brace.mp3'},
        {file: 'CABIN OP.jpg', desc: 'Cabin Operator: Ruang kendali operator.', voice: 'voice/dozer/cabin-op.mp3'},
        {file: 'CUTTING EDGE.jpg', desc: 'Cutting Edge: Bagian ujung blade...', voice: 'voice/dozer/cutting-edge.mp3'},
        {file: 'DALAM KABIN.png', desc: 'Inside Cabin: Tampilan bagian dalam kabin.', voice: 'voice/dozer/dalam-kabin.mp3'},
        {file: 'Engine Cover.jpg', desc: 'Engine Cover: Penutup mesin.', voice: 'voice/dozer/engine-cover.mp3'},
        {file: 'engine.png', desc: 'Engine: Mesin utama dozer.', voice: 'voice/dozer/engine.mp3'},
        {file: 'EXHAUST PIPE.jpg', desc: 'Exhaust Pipe: Pipa knalpot.', voice: 'voice/dozer/exhaust-pipe.mp3'},
        {file: 'Final Drive.jpg', desc: 'Final Drive: Sistem penggerak akhir.', voice: 'voice/dozer/final-drive.mp3'},
        {file: 'GAMBAR UTAMA.png', desc: 'Main Image: Tampilan keseluruhan dozer.', voice: 'voice/dozer/gambar-utama.mp3'},
        {file: 'IDLER.jpg', desc: 'Idler: Roda pemandu rantai track.', voice: 'voice/dozer/idler.mp3'},
        {file: 'LIFT CYLINDER.jpg', desc: 'Lift Cylinder: Silinder pengangkat blade.', voice: 'voice/dozer/lift-cylinder.mp3'},
        {file: 'Lower Roller.jpg', desc: 'Lower Roller: Roda penopang bagian bawah track.', voice: 'voice/dozer/lower-roller.mp3'},
        {file: 'OPERATOR SET.jpg', desc: 'Operator Set: Panel kontrol operator.', voice: 'voice/dozer/operator-set.mp3'},
        {file: 'Sprocket.jpg', desc: 'Sprocket: Roda gigi penggerak track.', voice: 'voice/dozer/sprocket.mp3'},
        {file: 'Straight Frame.jpg', desc: 'Straight Frame: Rangka lurus dozer.', voice: 'voice/dozer/straight-frame.mp3'},
        {file: 'Track Frame.png', desc: 'Track Frame: Rangka track.', voice: 'voice/dozer/track-frame.mp3'},
        {file: 'Track Shoe Assy (Assembly).jpg', desc: 'Track Shoe Assy: Rakitan sepatu track.', voice: 'voice/dozer/track-shoe-assy.mp3'},
        {file: 'Upper Roller.jpg', desc: 'Upper Roller: Roda penopang bagian atas track.', voice: 'voice/dozer/upper-roller.mp3'},
        {file: 'WORK LAMP.jpg', desc: 'Work Lamp: Lampu kerja dozer.', voice: 'voice/dozer/work-lamp.mp3'}
    ],
    _hasVideoFolder: true,
    _videoFolderName: 'Dozer.'
  },
  ekskavator: {
    _icon: [{ file: 'images/iconFolder/EXCAVATOR ICON.jpg' }],
    _label: 'Ekskavator',
    _description: 'Ekskavator adalah alat berat serbaguna...',
    _hasSubfoldersOnly: true,
    _hasVideoFolder: true,
    _videoFolderName: 'Ekskavator.',
    'general komponen': {
      _label: 'General Komponen',
      _description: 'Komponen umum yang membentuk bagian-bagian vital...',
      _images: [
        {file: 'bateray atau aki.jpeg', desc: 'Baterai atau Aki', voice: 'voice/ekskavator/baterai.mp3'},
        {file: 'engine.jpeg', desc: 'Engine', voice: 'voice/ekskavator/engine.mp3'},
        {file: 'komponen luar.jpeg', desc: 'Komponen Luar', voice: 'voice/ekskavator/komponen-luar.mp3'},
        {file: 'pump.jpeg', desc: 'Pump', voice: 'voice/ekskavator/pump.mp3'},
        {file: 'radiator.jpeg', desc: 'Radiator', voice: 'voice/ekskavator/radiator.mp3'},
        {file: 'swing motor.jpeg', desc: 'Swing Motor', voice: 'voice/ekskavator/swing-motor.mp3'}
      ]
    },
    'dalam kabin': {
        _label: 'Dalam Kabin',
        _description: 'Tampilan dan fungsi dari berbagai tuas...',
        _images: [
            {file: 'bagian dalam kabin.jpeg', desc: 'Bagian Dalam Kabin', voice: 'voice/ekskavator/bagian-dalam-kabin.mp3'},
            {file: 'fcd.jpeg', desc: 'FCD', voice: 'voice/ekskavator/fcd.mp3'},
            {file: 'jt kanan.jpeg', desc: 'JT Kanan', voice: 'voice/ekskavator/jt-kanan.mp3'},
            {file: 'jt kiri.jpeg', desc: 'JT Kiri', voice: 'voice/ekskavator/jt-kiri.mp3'},
            {file: 'monitor.jpeg', desc: 'Monitor', voice: 'voice/ekskavator/monitor.mp3'},
            {file: 'safety lock.jpeg', desc: 'Safety Lock', voice: 'voice/ekskavator/safety-lock.mp3'},
            {file: 'sl.jpeg', desc: 'SL', voice: 'voice/ekskavator/sl.mp3'},
            {file: 'ssl.jpeg', desc: 'SSL', voice: 'voice/ekskavator/ssl.mp3'},
            {file: 'starting swict.jpeg', desc: 'Starting Switch', voice: 'voice/ekskavator/starting-switch.mp3'},
            {file: 'travel lever.jpeg', desc: 'Travel Lever', voice: 'voice/ekskavator/travel-lever.mp3'},
            {file: 'travel pedal.jpeg', desc: 'Travel Pedal', voice: 'voice/ekskavator/travel-pedal.mp3'}
        ]
    },
    'lampu panel': {
        _label: 'Lampu Panel',
        _description: 'Berbagai lampu indikator pada panel monitor...',
        _images: [
            {file: 'AC.jpeg', desc: 'AC', voice: 'voice/ekskavator/ac.mp3'},
            {file: 'ALRM BUZZER.jpeg', desc: 'Alarm Buzzer', voice: 'voice/ekskavator/alarm-buzzer.mp3'},
            {file: 'AUTO DECELATOR.jpeg', desc: 'Auto Decelerator', voice: 'voice/ekskavator/auto-decelator.mp3'},
            {file: 'AUTO.jpeg', desc: 'Auto', voice: 'voice/ekskavator/auto.mp3'},
            {file: 'BUKU PADUAN.jpeg', desc: 'Buku Panduan', voice: 'voice/ekskavator/buku-paduan.mp3'},
            {file: 'HM DAN JAM.jpeg', desc: 'HM dan Jam', voice: 'voice/ekskavator/hm-dan-jam.mp3'},
            {file: 'MODE KERJA.jpeg', desc: 'Mode Kerja', voice: 'voice/ekskavator/mode-kerja.mp3'},
            {file: 'OFF.jpeg', desc: 'Off', voice: 'voice/ekskavator/off.mp3'},
            {file: 'PENGATURAN.jpeg', desc: 'Pengaturan', voice: 'voice/ekskavator/pengaturan.mp3'},
            {file: 'SWICTH BLOWER.jpeg', desc: 'Switch Blower', voice: 'voice/ekskavator/switch-blower.mp3'},
            {file: 'SWITCH WIFER.jpeg', desc: 'Switch Wiper', voice: 'voice/ekskavator/switch-wiper.mp3'},
            {file: 'TEMPERATUR AC.jpeg', desc: 'Temperatur AC', voice: 'voice/ekskavator/temperatur-ac.mp3'},
            {file: 'TEMPERATUR.jpeg', desc: 'Temperatur', voice: 'voice/ekskavator/temperatur.mp3'},
            {file: 'TRAVEL SPEED.jpeg', desc: 'Travel Speed', voice: 'voice/ekskavator/travel-speed.mp3'},
            {file: 'WATER WIFER.jpeg', desc: 'Water Wiper', voice: 'voice/ekskavator/water-wiper.mp3'}
        ]
    }
  },
  grader: {
    _icon: [{ file: 'images/iconFolder/GRADER ICON.png' }],
    _label: 'Grader',
    _description: 'Motor Grader, atau biasa disebut grader...',
    _images: [
        {file: 'Blade Lift Cylinder 1.jpg', desc: 'Blade Lift Cylinder 1', voice: 'voice/grader/blade-lift-cylinder-1.mp3'},
        {file: 'Blade Lift Cylinder.jpg', desc: 'Blade Lift Cylinder', voice: 'voice/grader/blade-lift-cylinder.mp3'},
        {file: 'Blade.png', desc: 'Blade', voice: 'voice/grader/blade.mp3'},
        {file: 'CABIN.png', desc: 'Cabin', voice: 'voice/grader/cabin.mp3'},
        {file: 'Drawbar Lift Cylinder.jpg', desc: 'Drawbar Lift Cylinder', voice: 'voice/grader/drawbar-lift-cylinder.mp3'},
        {file: 'Drawbar Lift GRADER.png', desc: 'Drawbar Lift Grader', voice: 'voice/grader/drawbar-lift-grader.mp3'},
        {file: 'Front Lamp.jpg', desc: 'Front Lamp', voice: 'voice/grader/front-lamp.mp3'},
        {file: 'Front Wheel.jpg', desc: 'Front Wheel', voice: 'voice/grader/front-wheel.mp3'},
        {file: 'GD825A_2_OG.jpg', desc: 'GD825A_2_OG', voice: 'voice/grader/gd825a.mp3'},
        {file: 'Rear Wheel.jpg', desc: 'Rear Wheel', voice: 'voice/grader/rear-wheel.mp3'},
        {file: 'Ripper.jpg', desc: 'Ripper', voice: 'voice/grader/ripper.mp3'}
    ],
    _hasVideoFolder: true,
    _videoFolderName: 'Grader.'
  },
  kompaktor: {
    _icon: [{ file: 'images/iconFolder/COMPACTOR ICON.jpg' }],
    _label: 'Kompaktor',
    _description: 'Kompaktor atau mesin pemadat adalah alat...',
    _images: [
        {file: 'Air Condition (Sistem Pendingin Udara).png', desc: 'Air Condition', voice: 'voice/kompaktor/air-condition.mp3'},
        {file: 'Airway System (Sistem Udara).png', desc: 'Airway System', voice: 'voice/kompaktor/airway-system.mp3'},
        {file: 'Articulate Frame (Rangka Artikulasi).png', desc: 'Articulate Frame', voice: 'voice/kompaktor/articulate-frame.mp3'},
        {file: 'ChatGPT Image Jun 19, 2025, 07_56_51 PM.png', desc: 'Ilustrasi Kompaktor', voice: 'voice/kompaktor/ilustrasi.mp3'},
        {file: 'COMPACTOR.png', desc: 'Compactor', voice: 'voice/kompaktor/compactor.mp3'},
        {file: 'Electrical System (Sistem Elektrikal).png', desc: 'Electrical System', voice: 'voice/kompaktor/electrical-system.mp3'},
        {file: 'Hood (Penutup Mesin).png', desc: 'Hood', voice: 'voice/kompaktor/hood.mp3'},
        {file: 'Hydraulic System (Sistem Hidrolik).png', desc: 'Hydraulic System', voice: 'voice/kompaktor/hydraulic-system.mp3'},
        {file: 'Mark (Penanda).png', desc: 'Mark', voice: 'voice/kompaktor/mark.mp3'},
        {file: 'Operation System (Sistem Operasi).jpg', desc: 'Operation System', voice: 'voice/kompaktor/operation-system.mp3'},
        {file: 'Power System (Sistem Daya).png', desc: 'Power System', voice: 'voice/kompaktor/power-system.mp3'},
        {file: 'Scraper (Pengikis).jpg', desc: 'Scraper', voice: 'voice/kompaktor/scraper.mp3'},
        {file: 'Transmission System (Sistem Transmisi) (2).png', desc: 'Transmission System (2)', voice: 'voice/kompaktor/transmission-system-2.mp3'},
        {file: 'Transmission System (Sistem Transmisi).png', desc: 'Transmission System', voice: 'voice/kompaktor/transmission-system.mp3'},
        {file: 'Vibratory Drum (Drum Vibrasi).png', desc: 'Vibratory Drum', voice: 'voice/kompaktor/vibratory-drum.mp3'}
    ],
    _hasVideoFolder: true,
    _videoFolderName: 'Kompaktor.'
  },
  truk: {
    _icon: [{ file: 'images/iconFolder/TRUCK ICON.png' }],
    _label: 'Truk',
    _description: 'Truk (Dump Truck) adalah kendaraan...',
    _images: [
        {file: 'Body.png', desc: 'Body', voice: 'voice/truk/body.mp3'},
        {file: 'Brake Air Tank.png', desc: 'Brake Air Tank', voice: 'voice/truk/brake-air-tank.mp3'},
        {file: 'CABIN HINO 500.jpg', desc: 'Cabin Hino 500', voice: 'voice/truk/cabin-hino-500.mp3'},
        {file: 'Cabin.png', desc: 'Cabin', voice: 'voice/truk/cabin.mp3'},
        {file: 'engine.jpg', desc: 'Engine', voice: 'voice/truk/engine.mp3'},
        {file: 'Front Tyre (Ban Depan).png', desc: 'Front Tyre', voice: 'voice/truk/front-tyre.mp3'},
        {file: 'Hidrolik Dump.png', desc: 'Hidrolik Dump', voice: 'voice/truk/hidrolik-dump.mp3'},
        {file: 'Radiator Guard (Pelindung Radiator).png', desc: 'Radiator Guard', voice: 'voice/truk/radiator-guard.mp3'},
        {file: 'Rear Tyre (Ban Belakang).png', desc: 'Rear Tyre', voice: 'voice/truk/rear-tyre.mp3'},
        {file: 'Spion.png', desc: 'Spion', voice: 'voice/truk/spion.mp3'}
    ],
    _hasVideoFolder: true,
    _videoFolderName: 'Truk.'
  }
};