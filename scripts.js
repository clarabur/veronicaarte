// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const artworks = document.querySelectorAll('.artwork');
    const overlay = document.getElementById('artwork-overlay');
    const overlayImg = document.getElementById('overlay-img');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayDescription = document.getElementById('overlay-description');
    const overlayPrice = document.getElementById('overlay-price');
    const overlayClose = document.getElementById('overlay-close');

    artworks.forEach(artwork => {
        artwork.addEventListener('click', () => {
            // Muestra el overlay con la información de la obra clickeada
            const imgSrc = artwork.querySelector('img').src;
            const title = artwork.querySelector('h2').textContent;
            const description = artwork.querySelector('p').textContent;
            const price = artwork.querySelector('.price').textContent;

            overlayImg.src = imgSrc;
            overlayTitle.textContent = title;
            overlayDescription.textContent = description;
            overlayPrice.textContent = price;
            overlay.style.display = 'flex';
        });
    });

    // Añade un evento para cerrar el overlay al hacer clic en el botón de cerrar
    overlayClose.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    // También cierra el overlay al hacer clic en cualquier parte del overlay
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});
