const h3 = document.createElement("h3");
h3.textContent = "Título insertado";

const primerP = document.querySelector("p");
document.body.insertBefore(h3, primerP);
