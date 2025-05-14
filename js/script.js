document.addEventListener("DOMContentLoaded", () => {
  const texts = ["Weather Aware", "Data Rich", "Deep Insights"];
  let i = 0;

  const fadeBox = document.querySelector(".hero-text");
  const fadeText = document.getElementById("fade-text");

  function fadeOutIn() {
    fadeBox.classList.add("fade-out");

    setTimeout(() => {
      i = (i + 1) % texts.length;
      fadeText.textContent = texts[i];
      fadeBox.classList.remove("fade-out");
      fadeBox.classList.add("fade-in");
    }, 1000);
  }

  setInterval(fadeOutIn, 4000);
});