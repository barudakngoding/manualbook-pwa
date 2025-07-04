export const imageData = {
  dozer: {
    _icon: [{ file: 'images/iconFolder/D_ICON.jpg' }],
    _label: 'Dozer',
    _description: 'Dozer adalah jenis traktor bertenaga yang dilengkapi dengan bilah logam besar (blade) di bagian depan.',
    _images: [
      { file: 'blade.png', desc: 'Blade: Komponen utama...', voice: 'voice/dozer/blade.mp3' }, // Changed
      { file: 'BRACE.jpg', desc: 'Brace: Bagian penguat struktur.', voice: 'voice/dozer/BRACE.mp3' }, // Changed
      { file: 'CABIN OP.jpg', desc: 'Cabin Operator: Ruang kendali operator.', voice: 'voice/dozer/CABIN OP.mp3' }, // Changed
      { file: 'CUTTING EDGE.jpg', desc: 'Cutting Edge: Bagian ujung blade...', voice: 'voice/dozer/CUTTING EDGE.mp3' }, // Changed
      { file: 'DALAM KABIN.png', desc: 'Inside Cabin: Tampilan bagian dalam kabin.', voice: 'voice/dozer/DALAM KABIN.mp3' }, // Changed
      { file: 'Engine Cover.jpg', desc: 'Engine Cover: Penutup mesin.', voice: 'voice/dozer/Engine Cover.mp3' }, // Changed
      { file: 'engine.png', desc: 'Engine: Mesin utama dozer.', voice: 'voice/dozer/engine.mp3' }, // Changed
      { file: 'EXHAUST PIPE.jpg', desc: 'Exhaust Pipe: Pipa knalpot.', voice: 'voice/dozer/EXHAUST PIPE.mp3' }, // Changed
      { file: 'Final Drive.jpg', desc: 'Final Drive: Sistem penggerak akhir.', voice: 'voice/dozer/Final Drive.mp3' }, // Changed
      { file: 'GAMBAR UTAMA.png', desc: 'Main Image: Tampilan keseluruhan dozer.', voice: 'voice/dozer/GAMBAR UTAMA.mp3' }, // Changed
      { file: 'IDLER.jpg', desc: 'Idler: Roda pemandu rantai track.', voice: 'voice/dozer/IDLER.mp3' }, // Changed
      { file: 'LIFT CYLINDER.jpg', desc: 'Lift Cylinder: Silinder pengangkat blade.', voice: 'voice/dozer/LIFT CYLINDER.mp3' }, // Changed
      { file: 'Lower Roller.jpg', desc: 'Lower Roller: Roda penopang bagian bawah track.', voice: 'voice/dozer/Lower Roller.mp3' }, // Changed
      { file: 'OPERATOR SET.jpg', desc: 'Operator Set: Panel kontrol operator.', voice: 'voice/dozer/OPERATOR SET.mp3' }, // Changed
      { file: 'Sprocket.jpg', desc: 'Sprocket: Roda gigi penggerak track.', voice: 'voice/dozer/Sprocket.mp3' }, // Changed
      { file: 'Straight Frame.jpg', desc: 'Straight Frame: Rangka lurus dozer.', voice: 'voice/dozer/Straight Frame.mp3' }, // Changed
      { file: 'Track Frame.png', desc: 'Track Frame: Rangka track.', voice: 'voice/dozer/Track Frame.mp3' }, // Changed
      { file: 'Track Shoe Assy (Assembly).jpg', desc: 'Track Shoe Assy: Rakitan sepatu track.', voice: 'voice/dozer/Track Shoe Assy (Assembly).mp3' }, // Changed
      { file: 'Upper Roller.jpg', desc: 'Upper Roller: Roda penopang bagian atas track.', voice: 'voice/dozer/Upper Roller.mp3' }, // Changed
      { file: 'WORK LAMP.jpg', desc: 'Work Lamp: Lampu kerja dozer.', voice: 'voice/dozer/WORK LAMP.mp3' } // Changed
    ],
    _hasVideoFolder: true,
    _videoFolderName: 'Dozer.'
  },
  ekskavator: {
    _icon: [{ file: 'images/iconFolder/E_ICON.jpg' }],
    _label: 'Ekskavator',
    _description: 'Ekskavator adalah alat berat serbaguna...',
    _hasSubfoldersOnly: true,
    _hasVideoFolder: true,
    _videoFolderName: 'Ekskavator.',
    'general-komponen': {
      _label: 'General Komponen',
      _description: 'Komponen umum yang membentuk bagian-bagian vital...',
      _images: [
        { file: 'bateray atau aki.jpeg', desc: 'Baterai atau Aki', voice: 'voice/ekskavator/general komponen/bateray atau aki.mp3' },
        { file: 'engine.jpeg', desc: 'Engine', voice: 'voice/ekskavator/general komponen/engine.mp3' },
        { file: 'komponen luar.jpeg', desc: 'Komponen Luar', voice: 'voice/ekskavator/general komponen/komponen luar.mp3' },
        { file: 'pump.jpeg', desc: 'Pump', voice: 'voice/ekskavator/general komponen/pump.mp3' },
        { file: 'radiator.jpeg', desc: 'Radiator', voice: 'voice/ekskavator/general komponen/Radiator.mp3' },
        { file: 'swing motor.jpeg', desc: 'Swing Motor', voice: 'voice/ekskavator/general komponen/swing motor.mp3' }
      ]
    },
    'dalam-kabin': {
      _label: 'Dalam Kabin',
      _description: 'Tampilan dan fungsi dari berbagai tuas...',
      _images: [
        { file: 'bagian dalam kabin.jpeg', desc: 'Bagian Dalam Kabin', voice: 'voice/ekskavator/dalam kabin/dalam kabin.mp3' },
        { file: 'fcd.jpeg', desc: 'FCD', voice: 'voice/ekskavator/dalam kabin/fcd.mp3' },
        { file: 'jt kanan.jpeg', desc: 'JT Kanan', voice: 'voice/ekskavator/dalam kabin/jt kanan.mp3' },
        { file: 'jt kiri.jpeg', desc: 'JT Kiri', voice: 'voice/ekskavator/dalam kabin/jt kiri.mp3' },
        { file: 'monitor.jpeg', desc: 'Monitor', voice: 'voice/ekskavator/dalam kabin/monitor.mp3' },
        { file: 'safety lock.jpeg', desc: 'Safety Lock', voice: 'voice/ekskavator/dalam kabin/safety lock.mp3' },
        { file: 'sl.jpeg', desc: 'SL', voice: 'voice/ekskavator/dalam kabin/sl.mp3' },
        { file: 'ssl.jpeg', desc: 'SSL', voice: 'voice/ekskavator/dalam kabin/ssl.mp3' },
        { file: 'starting swict.jpeg', desc: 'Starting Switch', voice: 'voice/ekskavator/dalam kabin/starting swict.mp3' },
        { file: 'travel lever.jpeg', desc: 'Travel Lever', voice: 'voice/ekskavator/dalam kabin/travel lever.mp3' },
        { file: 'travel pedal.jpeg', desc: 'Travel Pedal', voice: 'voice/ekskavator/dalam kabin/travel pedal.mp3' }
      ]
    },
    'lampu-panel': {
      _label: 'Lampu Panel',
      _description: 'Berbagai lampu indikator pada panel monitor...',
      _images: [
        { file: 'AC.jpeg', desc: 'AC', voice: 'voice/ekskavator/lampu panel/AC.mp3' },
        { file: 'ALRM BUZZER.jpeg', desc: 'Alarm Buzzer', voice: 'voice/ekskavator/lampu panel/ALRM BUZZER.mp3' },
        { file: 'AUTO DECELATOR.jpeg', desc: 'Auto Decelerator', voice: 'voice/ekskavator/lampu panel/AUTO DECELATOR.mp3' },
        { file: 'AUTO.jpeg', desc: 'Auto', voice: 'voice/ekskavator/lampu panel/AUTO.mp3' },
        { file: 'BUKU PADUAN.jpeg', desc: 'Buku Panduan', voice: 'voice/ekskavator/lampu panel/BUKU PADUAN.mp3' },
        { file: 'HM DAN JAM.jpeg', desc: 'HM dan Jam', voice: 'voice/ekskavator/lampu panel/HM DAN JAM.mp3' },
        { file: 'MODE KERJA.jpeg', desc: 'Mode Kerja', voice: 'voice/ekskavator/lampu panel/MODE KERJA.mp3' },
        { file: 'OFF.jpeg', desc: 'Off', voice: 'voice/ekskavator/lampu panel/OFF.mp3' },
        { file: 'PENGATURAN.jpeg', desc: 'Pengaturan', voice: 'voice/ekskavator/lampu panel/PENGATURAN.mp3' },
        { file: 'SWICTH BLOWER.jpeg', desc: 'Switch Blower', voice: 'voice/ekskavator/lampu panel/SWICTH BLOWER.mp3' },
        { file: 'SWITCH WIFER.jpeg', desc: 'Switch Wiper', voice: 'voice/ekskavator/lampu panel/SWITCH WIFER.mp3' },
        { file: 'TEMPERATUR AC.jpeg', desc: 'Temperatur AC', voice: 'voice/ekskavator/lampu panel/TEMPERATUR AC.mp3' },
        { file: 'TEMPERATUR.jpeg', desc: 'Temperatur', voice: 'voice/ekskavator/lampu panel/TEMPERATUR.mp3' },
        { file: 'TRAVEL SPEED.jpeg', desc: 'Travel Speed', voice: 'voice/ekskavator/lampu panel/TRAVEL SPEED.mp3' },
        { file: 'WATER WIFER.jpeg', desc: 'Water Wiper', voice: 'voice/ekskavator/lampu panel/WATER WIFER.mp3' }
      ]
    },
    'undercarriage': {
      _label: 'Undercarriage',
      _description: 'Bagian bawah ekskavator yang terdiri dari berbagai komponen...',
      _images: [
        { file: 'komponen Undercarriage.jpeg', desc: 'Komponen Undercarriage', voice: 'voice/ekskavator/undercarriage/komponen Undercarriage.mp3' },
        { file: 'Undercarriage.jpeg', desc: 'Undercarriage', voice: 'voice/ekskavator/undercarriage/Undercarriage.mp3' }
      ]
    }
  },
  grader: {
    _icon: [{ file: 'images/iconFolder/G_ICON.png' }],
    _label: 'Grader',
    _description: 'Motor Grader, atau biasa disebut grader...',
    _images: [
      { file: 'Blade Lift Cylinder 1.jpg', desc: 'Blade Lift Cylinder 1', voice: 'voice/grader/Blade Lift Cylinder 1.mp3' }, // Changed
      { file: 'Blade Lift Cylinder.jpg', desc: 'Blade Lift Cylinder', voice: 'voice/grader/Blade Lift Cylinder.mp3' }, // Changed
      { file: 'Blade.png', desc: 'Blade', voice: 'voice/grader/Blade.mp3' }, // Changed
      { file: 'CABIN.png', desc: 'Cabin', voice: 'voice/grader/CABIN.mp3' }, // Changed
      { file: 'Drawbar Lift Cylinder.jpg', desc: 'Drawbar Lift Cylinder', voice: 'voice/grader/Drawbar Lift Cylinder.mp3' }, // Changed
      { file: 'Drawbar Lift GRADER.png', desc: 'Drawbar Lift Grader', voice: 'voice/grader/Drawbar Lift GRADER.mp3' }, // Changed
      { file: 'Front Lamp.jpg', desc: 'Front Lamp', voice: 'voice/grader/Front Lamp.mp3' }, // Changed
      { file: 'Front Wheel.jpg', desc: 'Front Wheel', voice: 'voice/grader/Front Wheel.mp3' }, // Changed
      { file: 'GD825A_2_OG.jpg', desc: 'GD825A_2_OG', voice: 'voice/grader/GD825A_2_OG.mp3' }, // Changed
      { file: 'Rear Wheel.jpg', desc: 'Rear Wheel', voice: 'voice/grader/Rear Wheel.mp3' }, // Changed
      { file: 'Ripper.jpg', desc: 'Ripper', voice: 'voice/grader/Ripper.mp3' } // Changed
    ],
    _hasVideoFolder: true,
    _videoFolderName: 'Grader.'
  },

  kompaktor: {
    _icon: [{ file: 'images/iconFolder/C_ICON.jpg' }],
    _label: 'Kompaktor',
    _description: 'Kompaktor atau mesin pemadat adalah alat...',
    _images: [
      { file: 'Air Condition (Sistem Pendingin Udara).png', desc: 'Air Condition', voice: 'voice/kompaktor/Air Condition (Sistem Pendingin Udara).mp3' }, // Changed
      { file: 'Airway System (Sistem Udara).png', desc: 'Airway System', voice: 'voice/kompaktor/Airway System (Sistem Udara).mp3' }, // Changed
      { file: 'Articulate Frame (Rangka Artikulasi).png', desc: 'Articulate Frame', voice: 'voice/kompaktor/Articulate Frame (Rangka Artikulasi).mp3' }, // Changed
      { file: 'ChatGPT Image Jun 19, 2025, 07_56_51 PM.png', desc: 'Ilustrasi Kompaktor', voice: 'voice/kompaktor/ChatGPT Image Jun 19, 2025, 07_56_51 PM.mp3' }, // Changed
      { file: 'COMPACTOR.png', desc: 'Compactor', voice: 'voice/kompaktor/COMPACTOR.mp3' }, // Changed
      { file: 'Electrical System (Sistem Elektrikal).png', desc: 'Electrical System', voice: 'voice/kompaktor/Electrical System (Sistem Elektrikal).mp3' }, // Changed
      { file: 'Hood (Penutup Mesin).png', desc: 'Hood', voice: 'voice/kompaktor/Hood (Penutup Mesin).mp3' }, // Changed
      { file: 'Hydraulic System (Sistem Hidrolik).png', desc: 'Hydraulic System', voice: 'voice/kompaktor/Hydraulic System (Sistem Hidrolik).mp3' }, // Changed
      { file: 'Mark (Penanda).png', desc: 'Mark', voice: 'voice/kompaktor/Mark (Penanda).mp3' }, // Changed
      { file: 'Operation System (Sistem Operasi).jpg', desc: 'Operation System', voice: 'voice/kompaktor/Operation System (Sistem Operasi).mp3' }, // Changed
      { file: 'Power System (Sistem Daya).png', desc: 'Power System', voice: 'voice/kompaktor/Power System (Sistem Daya).mp3' }, // Changed
      { file: 'Scraper (Pengikis).jpg', desc: 'Scraper', voice: 'voice/kompaktor/Scraper (Pengikis).mp3' }, // Changed
      { file: 'Transmission System (Sistem Transmisi) (2).png', desc: 'Transmission System (2)', voice: 'voice/kompaktor/Transmission System (Sistem Transmisi) (2).mp3' }, // Changed
      { file: 'Transmission System (Sistem Transmisi).png', desc: 'Transmission System', voice: 'voice/kompaktor/Transmission System (Sistem Transmisi).mp3' }, // Changed
      { file: 'Vibratory Drum (Drum Vibrasi).png', desc: 'Vibratory Drum', voice: 'voice/kompaktor/Vibratory Drum (Drum Vibrasi).mp3' } // Changed
    ],
    _hasVideoFolder: true,
    _videoFolderName: 'Kompaktor.'
  },

  truk: {
    _icon: [{ file: 'images/iconFolder/T_ICON.png' }],
    _label: 'Truk',
    _description: 'Truk (Dump Truck) adalah kendaraan...',
    _images: [
      { file: 'Body.png', desc: 'Body', voice: 'voice/truk/Body.mp3' }, // Changed
      { file: 'Brake Air Tank.png', desc: 'Brake Air Tank', voice: 'voice/truk/Brake Air Tank.mp3' }, // Changed
      { file: 'CABIN HINO 500.jpg', desc: 'Cabin Hino 500', voice: 'voice/truk/CABIN HINO 500.mp3' }, // Changed
      { file: 'Cabin.png', desc: 'Cabin', voice: 'voice/truk/Cabin.mp3' }, // Changed
      { file: 'engine.jpg', desc: 'Engine', voice: 'voice/truk/engine.mp3' }, // Changed
      { file: 'Front Tyre (Ban Depan).png', desc: 'Front Tyre', voice: 'voice/truk/Front Tyre (Ban Depan).mp3' }, // Changed
      { file: 'Hidrolik Dump.png', desc: 'Hidrolik Dump', voice: 'voice/truk/Hidrolik Dump.mp3' }, // Changed
      { file: 'Radiator Guard (Pelindung Radiator).png', desc: 'Radiator Guard', voice: 'voice/truk/Radiator Guard (Pelindung Radiator).mp3' }, // Changed
      { file: 'Rear Tyre (Ban Belakang).png', desc: 'Rear Tyre', voice: 'voice/truk/Rear Tyre (Ban Belakang).mp3' }, // Changed
      { file: 'Spion.png', desc: 'Spion', voice: 'voice/truk/Spion.mp3' } // Changed
    ],
    _hasVideoFolder: true,
    _videoFolderName: 'Truk.'
  }
};