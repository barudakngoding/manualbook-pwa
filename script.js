import ekskavatorData from './data_ekskavator.js';

console.log('Script loaded');
console.log('Ekskavator Data:', ekskavatorData);

function showInfo(option, subOption = null) {
    const info = document.getElementById('info');
    const data = {
        'Ekskavator': ekskavatorData,
        'Bulldozer': { description: 'Informasi tentang Bulldozer.', images: [] },
        'Grader': { description: 'Informasi tentang Grader.', images: [] },
        'Crane': { description: 'Informasi tentang Crane.', images: [] }
    };

    if (!option) {
        info.innerHTML = '';
        return;
    }

    const selectedData = data[option];
    if (selectedData) {
        let content = `<h2>${option}</h2><p>${selectedData.description}</p>`;
        
        if (subOption && selectedData.subOptions && selectedData.subOptions[subOption]) {
            // Tampilkan gambar untuk sub-option yang dipilih
            content += `<h3>${subOption}</h3>`;
            content += '<div class="image-gallery">';
            selectedData.subOptions[subOption].forEach(image => {
                content += `<img src="${image}" alt="${subOption}" style="max-width: 300px; margin: 10px; border-radius: 8px;">`;
            });
            content += '</div>';
            content += `<button onclick="showInfo('${option}')">Kembali ke ${option}</button>`;
        } else if (selectedData.subOptions) {
            // Tampilkan semua sub-options dan kontennya langsung
            Object.keys(selectedData.subOptions).forEach(sub => {
                const subData = selectedData.subOptions[sub];
                content += `<div class="sub-section">`;
                content += `<h3>${sub}</h3>`;
                
                // Tambahkan deskripsi jika ada
                if (subData.description) {
                    content += `<p class="sub-description">${subData.description}</p>`;
                }
                
                content += '<div class="image-gallery">';
                // Handle both array and object structure
                const images = Array.isArray(subData) ? subData : subData.images;
                images.forEach(image => {
                    if (typeof image === 'string') {
                        // Old format - just image path
                        content += `<div class="image-item">`;
                        content += `<img src="${image}" alt="${sub}" style="max-width: 250px; margin: 8px; border-radius: 8px;">`;
                        content += `</div>`;
                    } else {
                        // New format - object with src and name
                        content += `<div class="image-item">`;
                        content += `<h4 class="image-name">${image.name}</h4>`;
                        content += `<img src="${image.src}" alt="${image.name}" style="max-width: 250px; margin: 8px; border-radius: 8px;">`;
                        content += `</div>`;
                    }
                });
                content += '</div>';
                content += '</div>';
            });
        }
        
        content += `<button onclick="showInfo()" style="margin-top: 20px;">Kembali ke Menu Utama</button>`;
        info.innerHTML = content;
    } else {
        console.error('No data found for option:', option);
    }
}

window.showInfo = showInfo;
