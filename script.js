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
// GREY CODE BACKGROUND
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for(let i=0; i<columns; i++){
  drops[i] = 1;
}

function draw(){
  ctx.fillStyle = "rgba(11,14,20,0.08)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "#2f323a";
  ctx.font = fontSize + "px monospace";

  for(let i=0; i<drops.length; i++){
    const text = letters.charAt(Math.floor(Math.random()*letters.length));
    ctx.fillText(text, i*fontSize, drops[i]*fontSize);

    if(drops[i]*fontSize > canvas.height && Math.random() > 0.975){
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 50);
