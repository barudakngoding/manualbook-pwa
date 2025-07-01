const videoData = [
  // Video Dozer
  {
    category: 'Dozer.',
    title: 'Cara kerja dozer cocok untuk pemula.mp4',
    url: 'https://drive.google.com/file/d/1To9jdMVbsF4pXMtxp08ZHryYmuRFao9F/preview'
  }, {
    category: 'Dozer.',
    title: 'CARA PENGOPERASIAN DOZER D65.mp4',
    url: 'https://drive.google.com/file/d/1xcD5xXTxMA5zxYFECtbh95CYFtN3Em_9/preview'
  }, {
    category: 'Dozer.',
    title: 'P2H dan Pengoperasian Dozer Komatsu D65P.mp4',
    url: 'https://drive.google.com/file/d/1oH3cXYw3TTCsmdKrWITpY777z_XNZXkh/preview'
  },

  // Video Ekskavator
  {
    category: 'Ekskavator.',
    title: 'BELAJAR EXCAVATOR - PENGENALAN KOMPONEN LUAR EXCAVATOR',
    url: 'https://drive.google.com/file/d/11UeaPtOj39BAygP9Ty2464S-smZjQ78T/preview'
  }, {
    category: 'Ekskavator.',
    title: 'CARA EXCAVATOR NAIK DI TANJAKAN - TEKNIK 1',
    url: 'https://drive.google.com/file/d/1RQuCQ0V-qOHzd-RBUl1mlrIIHv4Yuj6W/preview'
  }, {
    category: 'Ekskavator.',
    title: 'CARA JACK SWING EXCAVATOR - KOMBINASI SATU TRACK',
    url: 'https://drive.google.com/file/d/1pcm1ozEqqwDgTj5wYNGs97EhVxb1ylod/preview'
  }, {
    category: 'Ekskavator.',
    title: 'CARA MEMERIKSA OLI HIDROLIK EXCAVATOR',
    url: 'https://drive.google.com/file/d/1XG-U4BL6uGu7NHy6ltZJzwAJBPDdmbib/preview'
  }, {
    category: 'Ekskavator.',
    title: 'CARA MENGOPERASIKAN PEDAL TRACK HANDLE TRACK EXCAVATOR KHUSUS PEMULA',
    url: 'https://drive.google.com/file/d/1sdgbS84NF8Vn3wk2Cx1ZoHH-IvPw_j88/preview'
  }, {
    category: 'Ekskavator.',
    title: 'CARA PARKIR EXCAVATOR YG BENAR',
    url: 'https://drive.google.com/file/d/1xtB10FJM80LYslQaA4y-UVucDQKljAcm/preview'
  }, {
    category: 'Ekskavator.',
    title: 'CARA PASANG TRACK PADA EXCAVATOR',
    url: 'https://drive.google.com/file/d/16f2ScxWDBUnYBRK7Cap8J3q9fDlHHvLu/preview'
  }, {
    category: 'Ekskavator.',
    title: 'CARA POMPA GREASE KOMPONEN EXCAVATOR',
    url: 'https://drive.google.com/file/d/1EKXOFdancPtaUyuIb08nvrxyx9Qr1an5/preview'
  }, {
    category: 'Ekskavator.',
    title: 'Loading di Tambang',
    url: 'https://drive.google.com/file/d/1ObuXjpkVUhuJs8Ei7-2EBFzR0Ocbny4V/preview'
  }, {
    category: 'Ekskavator.',
    title: 'NAMA DAN FUNGSI INSTRUMEN PANEL EXCAVATOR',
    url: 'https://drive.google.com/file/d/1s7X0xSMNd_sBBMjgHVMJY7w82EqOjtSU/preview'
  }, {
    category: 'Ekskavator.',
    title: 'P2H EXCAVATOR KOMATSU PC 200',
    url: 'https://drive.google.com/file/d/1N145v-ODiGadDKMXwxacLv6IYfyxi-rW/preview'
  }, {
    category: 'Ekskavator.',
    title: 'PERMAINAN DI KABIN EXCAVATOR',
    url: 'https://drive.google.com/file/d/1ZLjg7nJvy26RqRVGoU74vuyAADCrQfDn/preview'
  }, {
    category: 'Ekskavator.',
    title: 'TIPS BELAJAR MENGOPERASIKAN EXCAVATOR KOMATSU PC 200',
    url: 'https://drive.google.com/file/d/1vnHFwNNQNnPH1Ec4Gc-puQNsyxQBx5vB/preview'
  },

  // Video Grader
  {
    category: 'Grader.',
    title: 'Belajar Control Lever',
    url: 'https://drive.google.com/file/d/1XyfzrLuSZUXqulHQox8SQCjsBIQg3N1c/preview'
  }, {
    category: 'Grader.',
    title: 'MONITOR PANEL MOTOR GRADER 825A-2 KOMATSU',
    url: 'https://drive.google.com/file/d/1ascFPpyPUFaY7aDPjK1qJUYBjyx8ww-V/preview'
  }, {
    category: 'Grader.',
    title: 'INSTRUMENT PANEL MOTOR GRADER 825A-2 KOMATSU',
    url: 'https://drive.google.com/file/d/1zRn1OtrB39GM8thGi8b3AeIPe_cPI7Xg/preview'
  }, {
    category: 'Grader.',
    title: 'CARA MENGOPERASIKAN MOTOR GRADER 825 KOMATSU',
    url: 'https://drive.google.com/file/d/1p8h33yWxCjmFpE0xVUU1FvTN3MmNWXFd/preview'
  }, {
    category: 'Grader.',
    title: 'Fungsi Control Lever Motor Grader 825A-2 KOMATSU',
    url: 'https://drive.google.com/file/d/1hmq4RWz4OsL2DPYn8Yf1pWVeUp6rRG5U/preview'
  }, {
    category: 'Grader.',
    title: 'P2H & KOMPONEN MOTOR GRADER 825 KOMATSU',
    url: 'https://drive.google.com/file/d/1qPyG_ILsdTUnu59Zd5VfbbiTGGlZX4_0/preview'
  },

  // Video Kompaktor
  {
    category: 'Kompaktor.',
    title: 'P2H COMPACT XCMG',
    url: 'https://drive.google.com/file/d/1bBTFVVwWFzLL9Dx0aFet0JUcr18J_3Q1/preview'
  }, {
    category: 'Kompaktor.',
    title: 'Training Skill Up Compact',
    url: 'https://drive.google.com/file/d/1Hxi6W-sHR5QJHHHgzACSp1ieVnfNx4p0/preview'
  }, {
    category: 'Kompaktor.',
    title: 'VIBRO XCMG',
    url: 'https://drive.google.com/file/d/1VaBOAH7DQqMN8qNOcnCi2eJyadABIf37/preview'
  },

  // Video Truk
  {
    category: 'Truk.',
    title: 'Trik Menguasai Body Mobil (Pemula)',
    url: 'https://drive.google.com/file/d/1zAIRuNXoO0lEnyf0wsTONOmwK5JKTOTd/preview'
  }, {
    category: 'Truk.',
    title: 'Haruskah Injak Kopling Saat Pindah?',
    url: 'https://drive.google.com/file/d/1YjjPyd8JK1UyRqAwE8YudiwnHohDmVG3/preview'
  }, {
    category: 'Truk.',
    title: 'Bongkar Muatan Hino 500 FM 260 JD',
    url: 'https://drive.google.com/file/d/1f-5XW1WpnIzlWnpo7Wv6BTDFQXON7sdv/preview'
  }, {
    category: 'Truk.',
    title: 'Dumping Sambil Berjalan',
    url: 'https://drive.google.com/file/d/1q1I0mPhbXPeNzzhIHX0bbRNUDiKTD_XM/preview'
  }, {
    category: 'Truk.',
    title: 'HINO 500 Gear Shifting Tutorial',
    url: 'https://drive.google.com/file/d/1TzzzsLzXl67uJ6kojMaAvZrLoDs6_5ao/preview'
  }, {
    category: 'Truk.',
    title: '4 Hal Saat Test Praktek',
    url: 'https://drive.google.com/file/d/1iNAbzxjLeAL6BMBmThctk3e-lahoEb2O/preview'
  }, {
    category: 'Truk.',
    title: 'Teknik Transmisi HINO 500 FM 260 JD',
    url: 'https://drive.google.com/file/d/1-D71CQtd9IADvmeWm4HswvtrAQxhfh4D/preview'
  }, {
    category: 'Truk.',
    title: 'P2H Unit HINO 500 Sebelum Hidupkan Engine',
    url: 'https://drive.google.com/file/d/1jin12jkclTPJl-51Io9V-IZ-IH7e8ORw/preview'
  }, {
    category: 'Truk.',
    title: 'Trik Dasar Menguasai Lever Dump Truck Hino 500',
    url: 'https://drive.google.com/file/d/19gg-YoZsMrFGNeILNyw6C5evTiTpPTrs/preview'
  },
];

export default videoData;
