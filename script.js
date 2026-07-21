// Reveal method steps and other cards on scroll
const revealElements = document.querySelectorAll(
  ".method-step, .build-card, .recognition-card"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.2,
  }
);

revealElements.forEach((el) => observer.observe(el));
