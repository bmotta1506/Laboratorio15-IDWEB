const cont = document.getElementById("contenedor");
const ps = Array.from(cont.querySelectorAll("p"));
ps.sort((a, b) => a.textContent.localeCompare(b.textContent));
ps.forEach(p => cont.appendChild(p));
