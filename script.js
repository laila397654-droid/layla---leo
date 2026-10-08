const giftScreen = document.getElementById("giftScreen");
const letterScreen = document.getElementById("letterScreen");
const musicScreen = document.getElementById("musicScreen");
const openGift = document.getElementById("openGift");
const scrollButton = document.getElementById("scrollButton");

const audio = document.getElementById("audio");
const playButton = document.getElementById("playButton");
const progressBar = document.getElementById("progressBar");
const time = document.getElementById("time");

openGift.addEventListener("click", () => {
  giftScreen.classList.add("hide");

  setTimeout(() => {
    giftScreen.style.display = "none";
    letterScreen.classList.add("show");

    setTimeout(() => {
      letterScreen.scrollIntoView({ behavior: "smooth" });
    }, 80);
  }, 650);
});

scrollButton.addEventListener("click", () => {
  musicScreen.classList.add("visible");
  musicScreen.scrollIntoView({ behavior: "smooth" });
});

playButton.addEventListener("click", () => {
  // Placeholder player: the visual player is ready.
  // Add your audio file later and set: audio.src = "song.mp3";
  playButton.textContent = playButton.textContent === "▶" ? "Ⅱ" : "▶";
});

// The player is currently visual-only.
// When you have the audio file, set audio.src = "song.mp3" and these events
// can be restored for real playback.

// Tiny semi-transparent moving stars
const stars = document.querySelector(".stars");
for (let i = 0; i < 55; i++) {
  const star = document.createElement("span");
  star.className = "star";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.animationDuration = (7 + Math.random() * 10) + "s";
  star.style.animationDelay = (-Math.random() * 12) + "s";
  star.style.transform = `scale(${0.5 + Math.random() * 1.2})`;
  stars.appendChild(star);
}
