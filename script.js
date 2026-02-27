// PROFILE POPUP TOGGLE
const profilePic = document.getElementById("profilePic");
const profilePopup = document.getElementById("profilePopup");

profilePic.addEventListener("click", () => {
  profilePopup.style.display =
    profilePopup.style.display === "block" ? "none" : "block";
});

window.addEventListener("click", function(e) {
  if (!profilePic.contains(e.target) && !profilePopup.contains(e.target)) {
    profilePopup.style.display = "none";
  }
});

// AUTO GRID GENERATOR
const grid = document.getElementById("postGrid");

if (typeof posts !== "undefined") {
  posts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .forEach(post => {

      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h2 onclick="location.href='${post.file}'">${post.title}</h2>
        <div class="date">${post.date}</div>
      `;

      grid.appendChild(card);
    });
}
// ===== ULTRA PREMIUM PARALLAX FLOATING BACKGROUND =====

const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

let mouseX = 0;
let mouseY = 0;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

const layers = [];

const textMain = "Amaan's Workspace";
const smallChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const layerSettings = [
  { count: 25, size: 28, speed: 0.2, opacity: 0.06 },
  { count: 40, size: 18, speed: 0.4, opacity: 0.1 },
  { count: 60, size: 12, speed: 0.6, opacity: 0.15 }
];

layerSettings.forEach(layer => {
  for (let i = 0; i < layer.count; i++) {
    layers.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: layer.size + Math.random() * 6,
      speed: layer.speed,
      text: Math.random() > 0.6
        ? textMain
        : smallChars[Math.floor(Math.random() * smallChars.length)],
      opacity: layer.opacity,
      depth: Math.random() * 0.5 + 0.5
    });
  }
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  layers.forEach(p => {

    const offsetX = (mouseX - canvas.width / 2) * 0.0005 * p.depth;
    const offsetY = (mouseY - canvas.height / 2) * 0.0005 * p.depth;

    ctx.globalAlpha = p.opacity;
    ctx.fillStyle = "#3b3f47";
    ctx.font = `${p.size}px monospace`;

    ctx.fillText(p.text, p.x + offsetX, p.y + offsetY);

    p.y += p.speed;

    if (p.y > canvas.height + 50) {
      p.y = -50;
      p.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(draw);
}

draw();
