// Menú desplegable (celular)
var btn = document.getElementById('menu-btn');
var nav = document.getElementById('menu');
if (btn && nav) {
  btn.addEventListener('click', function () {
    var abierto = nav.classList.toggle('abierto');
    btn.setAttribute('aria-expanded', abierto ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('abierto'); btn.setAttribute('aria-expanded', 'false'); }
  });
}
// Lightbox para fotos
function abrirLightbox(src, texto) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-caption').textContent = texto || '';
  document.getElementById('lightbox').style.display = 'block';
}
function cerrarLightbox() { document.getElementById('lightbox').style.display = 'none'; }
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') cerrarLightbox(); });