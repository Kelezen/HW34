import "./style.css";
import forest from "./images.jpg";

const img = document.createElement("img");

img.src = forest;

document.body.appendChild(img)

const h1 = document.createElement("h1");

h1.textContent = "Webpack Font";

document.body.appendChild(h1);;

console.log("Webpack works!");