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
  }
  // Tambahkan video lain sesuai kebutuhan
];

// Render video ke dalam #app
const app = document.getElementById('app');

videoData.forEach((video) => {
  const container = document.createElement('div');
  container.className = 'video-container';

  const title = document.createElement('div');
  title.className = 'video-title';
  title.textContent = `[${video.category}] ${video.title}`;

  const iframe = document.createElement('iframe');
  iframe.src = video.url;
  iframe.allow = 'autoplay';
  iframe.allowFullscreen = true;

  container.appendChild(title);
  container.appendChild(iframe);
  app.appendChild(container);
});
