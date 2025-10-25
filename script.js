// ======== Text Typing Animation ========
const roles = [
  "Frontend Developer",
  "Creative Designer",
  "Tech Explorer",
  "Dream Builder"
];

let roleIndex = 0;
let charIndex = 0;
const typingEl = document.getElementById("typing");

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    typingEl.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 100);
  } else {
    setTimeout(eraseRole, 1500);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    typingEl.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 60);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (typingEl) typeRole();
});

// ======== Reveal Animation on Scroll ========
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  for (const el of reveals) {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  }
});

// ======== Download Button Particle Effect ========
const downloadBtn = document.getElementById("downloadBtn");
if (downloadBtn) {
  downloadBtn.addEventListener("click", (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Particle burst
    for (let i = 0; i < 18; i++) {
      const particle = document.createElement("span");
      particle.classList.add("particle");
      particle.style.left = x + "px";
      particle.style.top = y + "px";
      particle.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;

      btn.appendChild(particle);

      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 80 + 40;
      const duration = 600 + Math.random() * 400;

      particle.animate(
        [
          {
            transform: `translate(0,0) scale(1)`,
            opacity: 1,
          },
          {
            transform: `translate(${Math.cos(angle) * distance}px, ${
              Math.sin(angle) * distance
            }px) scale(0)`,
            opacity: 0,
          },
        ],
        {
          duration,
          easing: "ease-out",
          fill: "forwards",
        }
      );

      setTimeout(() => particle.remove(), duration);
    }
  });
}