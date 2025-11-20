document.addEventListener('DOMContentLoaded', () => {

  const ul = document.getElementById('lista');
  if (!ul) {
    console.error('No se encontró el elemento #lista en el documento.');
    return;
  }

  const items = ul.querySelectorAll('li');
  if (items.length === 0) {
    console.warn('No hay <li> dentro de #lista.');
  }

  items.forEach(li => {
    li.classList.add('resaltado');
    if (li.classList.contains('oculto')) {
      li.classList.remove('oculto');
    }
  });

  console.log(`Procesados ${items.length} elementos <li>.`);
});