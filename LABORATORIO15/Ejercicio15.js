const main = document.querySelector("main");
const article = document.querySelector("article");

const clon = article.cloneNode(true);
main.appendChild(clon);
