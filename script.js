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
