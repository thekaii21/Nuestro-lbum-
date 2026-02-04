const claveCorrecta = "01-08";
let clave = prompt("Ingresa nuestra fecha 💝 (dd-mm)");

if (clave !== claveCorrecta) {
  document.body.innerHTML = `
    <div style="text-align:center; padding:50px; font-family:Arial;">
      <h1>❤️ Esta página no es para ti ❤️</h1>
    </div>
  `;
} else {
  // ❤️ Lluvia de corazones
  for (let i = 0; i < 40; i++) {
    crearCorazon();
  }
}

function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.innerHTML = "💖";
  corazon.classList.add("corazon");
  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.animationDuration = 3 + Math.random() * 3 + "s";
  document.body.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 6000);
}

window.addEventListener("load", () => {
  const contenedor = document.getElementById("contenedor");
  contenedor.style.opacity = 0;

  setTimeout(() => {
    contenedor.style.transition = "opacity 1.5s";
    contenedor.style.opacity = 1;
  }, 200);
});
