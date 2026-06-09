// A. Theme Engine Configuration Storage
const themeToggle = document.getElementById("theme-toggle");
const activeTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", activeTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// B. JavaScript Custom Text Typing Animation Terminal
const phrases = [
  "WEB DEVELOPER.",
  "UI DESIGNER.",
  "DATABASE DEVELOPER.",
  "HARDWARE CONSULTANT."
];

let phraseIdx = 0;
let charIdx = 0;
let isDeleting = false;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenPhrases = 2000; 

function typeEffect() {
  const targetElement = document.getElementById("typing-text");
  if (!targetElement) return;

  const currentPhrase = phrases[phraseIdx];

  if (isDeleting) {
    targetElement.textContent = currentPhrase.substring(0, charIdx - 1);
    charIdx--;
  } else {
    targetElement.textContent = currentPhrase.substring(0, charIdx + 1);
    charIdx++;
  }

  let nextActionDelay = isDeleting ? erasingSpeed : typingSpeed;

  if (!isDeleting && charIdx === currentPhrase.length) {
    nextActionDelay = delayBetweenPhrases; // Pause at completion boundary
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    phraseIdx = (phraseIdx + 1) % phrases.length; // Shift to next competency profile
    nextActionDelay = 500;
  }

  setTimeout(typeEffect, nextActionDelay);
}

// Initiate Typing Engine on interface readiness loop
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeEffect, 500);
});

// C. Calendar Footer Mapping
document.getElementById("year").textContent = new Date().getFullYear();

// D. Modal View Mechanism
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");

function openModal(imgSrc, title) {
  modal.classList.add("show");
  modalImg.src = imgSrc;
  modalTitle.textContent = title || "Image View";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("show");
  modalImg.src = "";
  document.body.style.overflow = "";
}

document.querySelectorAll(".project-media").forEach(btn => {
  btn.addEventListener("click", () => {
    openModal(btn.getAttribute("data-img"), btn.getAttribute("data-title"));
  });
});

modal.addEventListener("click", (e) => {
  if (e.target && e.target.getAttribute("data-close") === "1") closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// E. Mobile Navigation Menu Toggle Engine
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Auto close menu context whenever links are hit
document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});