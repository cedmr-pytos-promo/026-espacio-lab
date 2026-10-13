function abrirLightbox(src, texto) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox-img').alt = texto || '';
    document.getElementById('lightbox-caption').textContent = texto || '';
    document.getElementById('lightbox').classList.add('abierto');
}

function cerrarLightbox() {
    document.getElementById('lightbox').classList.remove('abierto');
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') cerrarLightbox();
});