const claveCorrecta = "01-08";
const contenedor = document.getElementById("contenedor");

let clave = prompt("💖 Ingresa nuestra fecha especial (dd-mm)");

if (clave !== claveCorrecta) {
  document.body.innerHTML = `
    <div style="text-align:center; padding:50px; font-family:Arial;">
      <h1>❤️ Esta página no es para ti ❤️</h1>
    </div>
  `;
} else {
  // Ocultamos el contenido al inicio
  contenedor.style.opacity = 0;

  window.addEventListener("load", () => {
    setTimeout(() => {
      contenedor.style.transition = "opacity 1.5s";
      contenedor.style.opacity = 1;
    }, 200);
  });
}
