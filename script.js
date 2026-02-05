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

  corazon.addEventListener("click", () => {
  corazon.classList.add("explota");
  setTimeout(() => corazon.remove(), 600);
});


  document.body.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 6000);
}

// ✨ ANIMACIÓN AL SCROLL
const elementos = document.querySelectorAll(".bloque, img, .carta");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("activo");
      }
    });
  },
  { threshold: 0.2 }
);

elementos.forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});

// 💕 CORAZONES AL TOCAR
document.addEventListener("touchstart", e => {
  const x = e.touches[0].clientX;
  const y = e.touches[0].clientY;
  crearCorazonToque(x, y);
});

function crearCorazonToque(x, y) {
  const corazon = document.createElement("div");
  corazon.className = "corazon";
  corazon.textContent = "💗";

  corazon.style.left = x + "px";
  corazon.style.top = y + "px";
  corazon.style.fontSize = "24px";
  corazon.style.animationDuration = "1.5s";

  document.body.appendChild(corazon);

  setTimeout(() => corazon.remove(), 1500);
}
