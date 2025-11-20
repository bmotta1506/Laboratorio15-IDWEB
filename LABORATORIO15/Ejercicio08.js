const colores = ["lightblue", "lightgreen", "lightpink", "khaki"];
const divs = document.querySelectorAll("div");

divs.forEach((div, i) => {
    div.style.backgroundColor = colores[i % colores.length];
});
