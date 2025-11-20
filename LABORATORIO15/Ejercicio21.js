const cont = document.getElementById("contenedor");
for (let i = 1; i <= 3; i++) {
    const p = document.createElement("p");
    p.textContent = "Párrafo " + i;
    cont.appendChild(p);
}
cont.children[1].remove();
