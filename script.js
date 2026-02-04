const claveCorrecta = "01-08";
let clave = prompt("Ingresa nuestra fecha 💝 (dd-mm)");

if (clave !== claveCorrecta) {
  document.body.innerHTML = `
    <div style="text-align:center; padding:50px; font-family:Arial;">
      <h1>❤️ Esta página no es para ti ❤️</h1>
    </div>
  `;
} else {
  // Esperamos un poquito para que el navegador renderice
  setTimeout(() => {
    iniciarLluviaDeCorazones();
  }, 300);
}

// 💖 FUNCIÓN LLUVIA
function iniciarLluviaDeCorazones() {
  const intervalo = setInterval(() => {
    crearCorazon();
  }, 200);

  // Detener la lluvia después de 6 segundos
  setTimeout(() => {
    clearInterval(intervalo);
  }, 6000);
}

function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.className = "corazon";
  corazon.textContent = "💖";

  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.fontSize = 20 + Math.random() * 20 + "px";
  corazon.style.animationDuration = 4 + Math.random() * 2 + "s";

  document.body.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 6000);
}
