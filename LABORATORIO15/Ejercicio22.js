const sec = document.querySelector("section");

const viejo = sec.querySelector("h2");
if (viejo) viejo.remove();

const h2 = document.createElement("h2");
h2.textContent = "Título nuevo";
sec.appendChild(h2);

const p = document.createElement("p");
p.textContent = "Descripción generada";
sec.appendChild(p);

const ul = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + i;
    ul.appendChild(li);
}
sec.appendChild(ul);
