:root {
  --bg: #020617;
  --bg-alt: #0b1120;
  --accent: #22c55e;
  --accent-soft: rgba(34, 197, 94, 0.2);
  --accent-blue: #38bdf8;
  --text: #e5e7eb;
  --muted: #9ca3af;
  --border: #1f2937;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: radial-gradient(circle at top, #0f172a 0, #020617 45%, #000 100%);
  color: var(--text);
  min-height: 100vh;
}

/* Floating algae particles background */
.algae-field {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -1;
  background: radial-gradient(circle at 10% 20%, rgba(34, 197, 94, 0.08) 0, transparent 40%),
              radial-gradient(circle at 80% 30%, rgba(56, 189, 248, 0.08) 0, transparent 45%),
              radial-gradient(circle at 30% 80%, rgba(34, 197, 94, 0.06) 0, transparent 40%);
  overflow: hidden;
}

.algae-field::before,
.algae-field::after {
  content: "";
  position: absolute;
  width: 160%;
  height: 160%;
  background-image: radial-gradient(circle, rgba(34, 197, 94, 0.18) 1px, transparent 0);
  background-size: 40px 40px;
  opacity: 0.25;
  animation: algaeDrift 40s linear infinite;
}

.algae-field::after {
  animation-duration: 55s;
  opacity: 0.18;
}

@keyframes algaeDrift {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-80px, -60px, 0);
  }
}

/* Navigation */
.nav {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 8%;
  backdrop-filter: blur(18px);
  background: rgba(2, 6, 23, 0.9);
  border-bottom: 1px solid rgba(148, 163, 184, 0.25);
}

.logo {
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.9rem;
}

.nav a {
  margin-left: 1.5rem;
  text-decoration: none;
  color: var(--muted);
  font-size: 0.9rem;
  position: relative;
}

.nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: width 0.2s ease-out;
}

.nav a:hover {
  color: var(--text);
}

.nav a:hover::after {
  width: 100%;
}

/* Sections */
.section {
  padding: 4rem 8%;
  position: relative;
}

.section h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.section-text {
  max-width: 720px;
  color: var(--muted);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

/* Hero */
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 3rem;
  align-items: center;
  padding-top: 5rem;
}

.hero h1 {
  font-size: 2.6rem;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.hero-subtitle {
  color: var(--muted);
  max-width: 560px;
  line-height: 1.7;
}

.hero-buttons {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.6rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.15s ease-out, box-shadow 0.15s ease-out,
    background 0.15s ease-out, color 0.15s ease-out;
}

.btn.primary {
  background: var(--accent);
  color: #022c22;
  box-shadow: 0 12px 30px rgba(34, 197, 94, 0.35);
}

.btn.primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 16px 40px rgba(34, 197, 94, 0.45);
}

.btn.ghost {
  border: 1px solid var(--border);
  background: rgba(15, 23, 42, 0.85);
  color: var(--text);
}

.btn.ghost:hover {
  background: rgba(15, 23, 42, 1);
}

/* Reactor visual */
.hero-visual {
  display: flex;
  justify-content: center;
}

.reactor-card {
  position: relative;
  width: 260px;
  height: 360px;
  border-radius: 1.5rem;
  background: radial-gradient(circle at top, #0ea5e9 0, #020617 55%);
  border: 1px solid rgba(148, 163, 184, 0.4);
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.9);
  overflow: hidden;
}

.reactor-inner {
  position: absolute;
  inset: 18px 22px 40px;
  border-radius: 1.1rem;
  background: radial-gradient(circle at bottom, rgba(34, 197, 94, 0.18) 0, #020617 60%);
  border: 1px solid rgba(148, 163, 184, 0.35);
}

.electrode {
  position: absolute;
  bottom: 18px;
  width: 18px;
  height: 80%;
  background: linear-gradient(180deg, #1f2937, #0f172a);
  border-radius: 999px;
  box-shadow: 0 0 0 1px rgba(148, 163, 184, 0.4);
}

.electrode-left {
  left: 26%;
}

.electrode-right {
  right: 26%;
}

/* Animated bubbles inside reactor */
.bubble {
  position: absolute;
  bottom: -40px;
  left: 50%;
  width: 26px;
  height: 26px;
  border-radius: 999px;
  background: radial-gradient(circle at 30% 30%, #e0f2fe 0, #38bdf8 40%, #0f172a 100%);
  opacity: 0.9;
  animation: bubbleRise 6s linear infinite;
}

.bubble-delay {
  left: 35%;
  width: 20px;
  height: 20px;
  animation-duration: 7.5s;
  animation-delay: 1.5s;
}

.bubble-small {
  left: 65%;
  width: 16px;
  height: 16px;
  animation-duration: 5.5s;
  animation-delay: 0.8s;
}

@keyframes bubbleRise {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  80% {
    transform: translateY(-260px) scale(1.1);
    opacity: 1;
  }
  100% {
    transform: translateY(-300px) scale(0.9);
    opacity: 0;
  }
}

.reactor-label {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(226, 232, 240, 0.9);
}

/* Cards and grids */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.card {
  padding: 1.5rem;
  border-radius: 1rem;
  background: linear-gradient(
    135deg,
    rgba(15, 23, 42, 0.95),
    rgba(15, 23, 42, 0.8)
  );
  border: 1px solid rgba(148, 163, 184, 0.35);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.8);
  transform: translateY(10px);
  opacity: 0;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.card h3 {
  margin-bottom: 0.6rem;
  font-size: 1.05rem;
}

.card p {
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

/* System blocks */
.system-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.system-block {
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.35);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.8);
  transform: translateY(10px);
  opacity: 0;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.system-block h3 {
  margin-bottom: 0.6rem;
}

.system-block p {
  color: var(--muted);
  margin-bottom: 0.6rem;
}

.system-block ul {
  list-style: disc;
  padding-left: 1.2rem;
  color: var(--muted);
  font-size: 0.9rem;
}

/* Data panel */
.data-panel {
  margin-top: 1.5rem;
  border-radius: 1rem;
  border: 1px solid rgba(148, 163, 184, 0.4);
  background: radial-gradient(circle at top left, var(--accent-soft), #020617);
  padding: 1.25rem 1.5rem;
}

.data-row {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px dashed rgba(148, 163, 184, 0.3);
  font-size: 0.9rem;
}

.data-row:last-child {
  border-bottom: none;
}

.label {
  color: var(--text);
  font-weight: 600;
}

.value {
  color: var(--muted);
}

/* Team */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.team-card {
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.35);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.8);
}

/* Footer */
.footer {
  padding: 2rem 8%;
  border-top: 1px solid rgba(31, 41, 55, 0.8);
  font-size: 0.85rem;
  color: var(--muted);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

/* Responsive */
@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
  }
  .hero-visual {
    order: -1;
    margin-bottom: 2rem;
  }
}
