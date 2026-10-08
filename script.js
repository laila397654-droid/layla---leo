document.addEventListener("DOMContentLoaded", () => {
  const giftScreen = document.getElementById("giftScreen");
  const letterScreen = document.getElementById("letterScreen");
  const musicScreen = document.getElementById("musicScreen");
  const openGift = document.getElementById("openGift");
  const scrollButton = document.getElementById("scrollButton");

  const audio = document.getElementById("audio");
  const playButton = document.getElementById("playButton");
  const progressBar = document.getElementById("progressBar");
  const time = document.getElementById("time");

  // فتح الهدية
  if (openGift) {
    openGift.addEventListener("click", () => {
      giftScreen.classList.add("hide");

      setTimeout(() => {
        giftScreen.style.display = "none";

        letterScreen.classList.add("show");
        letterScreen.scrollIntoView({
          behavior: "smooth"
        });
      }, 650);
    });
  }

  // الانتقال للموسيقى
  if (scrollButton) {
    scrollButton.addEventListener("click", () => {
      musicScreen.classList.add("visible");
      musicScreen.scrollIntoView({
        behavior: "smooth"
      });
    });
  }

  // تشغيل الأغنية
  if (playButton && audio) {
    playButton.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        playButton.textContent = "Ⅱ";
      } else {
        audio.pause();
        playButton.textContent = "▶";
      }
    });

    audio.addEventListener("timeupdate", () => {
      if (audio.duration) {
        const progress =
          (audio.currentTime / audio.duration) * 100;

        progressBar.style.width = progress + "%";

        const minutes =
          Math.floor(audio.currentTime / 60);

        const seconds =
          Math.floor(audio.currentTime % 60)
            .toString()
            .padStart(2, "0");

        time.textContent = `${minutes}:${seconds}`;
      }
    });
  }

  // النجوم
  const stars = document.querySelector(".stars");

  if (stars) {
    for (let i = 0; i < 55; i++) {
      const star = document.createElement("span");

      star.className = "star";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.animationDuration =
        (7 + Math.random() * 10) + "s";
      star.style.animationDelay =
        (-Math.random() * 12) + "s";
      star.style.transform =
        `scale(${0.5 + Math.random() * 1.2})`;

      stars.appendChild(star);
    }
  }
});
