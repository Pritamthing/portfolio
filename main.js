// Typing animation
const words = [
  "Scalable Microservices",
  "High-volume Data Pipelines",
  "Cloud-Native Architecture",
  "AI-driven Platforms",
];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typedSpan = document.getElementById("typed");

function typeEffect() {
  const fullWord = words[index];
  if (isDeleting) {
    currentText = fullWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    currentText = fullWord.substring(0, charIndex + 1);
    charIndex++;
  }
  typedSpan.textContent = currentText;
  if (!isDeleting && charIndex === fullWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1800);
    return;
  }
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % words.length;
    setTimeout(typeEffect, 300);
    return;
  }
  let speed = isDeleting ? 60 : 100;
  setTimeout(typeEffect, speed);
}
typeEffect();

// Intersection Observer for scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
);
reveals.forEach((el) => observer.observe(el));

// Additional smooth highlight for navbar links
document.querySelectorAll(".nav-links a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});
