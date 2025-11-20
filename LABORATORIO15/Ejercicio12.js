const p = document.getElementById("parrafo");
const nuevo = document.createElement("div");
nuevo.textContent = "Párrafo reemplazado";
p.replaceWith(nuevo);
