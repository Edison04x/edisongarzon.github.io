// --- Año dinámico ---
document.getElementById("year").textContent = new Date().getFullYear();

// --- Fade-in al hacer scroll ---
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".fade-in").forEach(section => {
  observer.observe(section);
});

// --- Fondo de estrellas fugaces ---
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.zIndex = "-1"; // detras de todo
canvas.style.pointerEvents = "none"; // no molesta clics
const ctx = canvas.getContext("2d");

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});

class ShootingStar {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * w;
    this.y = Math.random() * h / 2;
    this.len = 50 + Math.random() * 100;
    this.speed = 1 + Math.random() * 2; // más lento
    this.angle = Math.PI / 4;
    this.opacity = 0.5 + Math.random() * 0.5;
  }
  update() {
    this.x += this.speed * Math.cos(this.angle);
    this.y += this.speed * Math.sin(this.angle);
    this.opacity -= 0.002; // más lento desvanecimiento
    if (this.opacity <= 0 || this.x > w || this.y > h) {
      this.reset();
    }
  }
  draw() {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x - this.len * Math.cos(this.angle), this.y - this.len * Math.sin(this.angle));
    ctx.strokeStyle = `rgba(255,255,255,${this.opacity})`;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

const stars = Array.from({length: 10}, () => new ShootingStar());

function animate() {
  ctx.clearRect(0,0,w,h);
  stars.forEach(star => {
    star.update();
    star.draw();
  });
  requestAnimationFrame(animate);
}

animate();
