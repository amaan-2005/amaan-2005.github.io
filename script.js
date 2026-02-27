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
// ===== PREMIUM FLOATING TEXT BACKGROUND =====

const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const particles = [];
const text = "Amaan's Workspace";
const smallChars = "0123456789";

const particleCount = 80;

for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 0.5 + 0.2,
    text: Math.random() > 0.7 ? text : smallChars[Math.floor(Math.random() * smallChars.length)],
    opacity: Math.random() * 0.3 + 0.05
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {

    ctx.globalAlpha = p.opacity;
    ctx.fillStyle = "#3a3f47";
    ctx.font = `${p.size}px monospace`;

    ctx.fillText(p.text, p.x, p.y);

    p.y += p.speed;

    if (p.y > canvas.height + 50) {
      p.y = -50;
      p.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(draw);
}

draw();
