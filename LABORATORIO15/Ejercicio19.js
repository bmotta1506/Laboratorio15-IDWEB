const cantidad = document.querySelectorAll("div").length;

const p = document.createElement("p");
p.textContent = "Cantidad de <div>: " + cantidad;

document.body.appendChild(p);
