const secciones = document.querySelectorAll("section");

secciones.forEach((sec, i) => {
    sec.dataset.index = i;
});
