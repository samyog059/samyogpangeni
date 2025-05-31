const reveals = document.querySelectorAll('.reveal');

function revealElements() {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

// Run on scroll
window.addEventListener('scroll', revealElements);

// ✅ Also run once on load
window.addEventListener('load', revealElements);


// Slider functionality
const slides = document.querySelectorAll(".slider img");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

leftArrow?.addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

rightArrow?.addEventListener("click", () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});
