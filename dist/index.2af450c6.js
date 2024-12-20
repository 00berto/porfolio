// Crear 100 cuadrados de diferentes tamaños y posiciones aleatorias
/*
function square() {
  const container = document.getElementById("square");

  for (let i = 0; i < 80; i++) {
    const square = document.createElement("div");
    square.classList.add("square-random");

    square.style.width = Math.random() * 50 + "px"; //valor decimal hasta 50
    square.style.height = Math.random() * 50 + "px";
    square.style.left = Math.random() * window.innerWidth + "px";
    square.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(square);

    container.appendChild(square);
  }
}

square();

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas

  // Dibujar un círculo que se mueve
  ctx.beginPath();
  ctx.arc(x, canvas.height / 2, 50, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();

  x += 1; // Mover el círculo hacia la derecha

  requestAnimationFrame(draw); // Llamar a la función draw de forma recursiva
}

let x = 0;
draw();*/ const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
// Ajustar el tamaño del canvas al tamaño del contenedor
canvas.width = canvas.parentElement.clientWidth;
canvas.height = canvas.parentElement.clientHeight;
// Función para dibujar el fondo (puedes personalizarla)
function draw() {
    ctx.fillStyle = "rgba(0, 0, 255, 0.1)"; // Color azul semitransparente
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Aquí puedes agregar más elementos para tu animación
    // Por ejemplo, dibujar círculos aleatorios:
    ctx.beginPath();
    ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 10, 0, 2 * Math.PI);
    ctx.fill();
}
// Animar el fondo
setInterval(draw, 10);

//# sourceMappingURL=index.2af450c6.js.map
