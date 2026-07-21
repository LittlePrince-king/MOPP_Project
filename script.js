// ==========================================================================
// FLOATING ALGAE PARTICLES & PARALLAX BACKGROUND
// ==========================================================================

const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

// Handle window resizing
window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

// Algae Particle Class
class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.radius = Math.random() * 3 + 1;
    this.color = Math.random() > 0.4 ? 'rgba(57, 255, 20, ' : 'rgba(30, 94, 38, ';
    this.opacity = Math.random() * 0.5 + 0.2;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      this.reset();
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color + this.opacity + ')';
    ctx.shadowBlur = 8;
    ctx.shadowColor = '#39ff14';
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}

// Instantiate particles
const PARTICLE_COUNT = 60;
for (let i = 0; i < PARTICLE_COUNT; i++) {
  particles.push(new Particle());
}

// Track scroll for parallax effect
let scrollY = window.scrollY;
window.addEventListener('scroll', () => {
  scrollY = window.scrollY;
});

// Render loop
function animate() {
  ctx.clearRect(0, 0, width, height);

  particles.forEach((p, idx) => {
    p.update();
    
    // Parallax offset applied to vertical position based on scroll
    const parallaxY = p.y - (scrollY * (idx % 3 + 1) * 0.05);
    const wrappedY = (parallaxY % height + height) % height;

    ctx.beginPath();
    ctx.arc(p.x, wrappedY, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color + p.opacity + ')';
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

// Start animation on load
animate();
