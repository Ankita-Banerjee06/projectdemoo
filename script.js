// ---------------------------------------------------------
// Add / edit your projects here. Each one becomes a clickable
// card that opens its live Vercel link in a new tab.
//
//   title    -> project name
//   desc     -> one-line description
//   url      -> your live Vercel deployment link
//   tags     -> array of short tech/category labels
//   gradient -> CSS gradient for the card thumbnail
// ---------------------------------------------------------
const PROJECTS = [
  {
    title: "Project One",
    desc: "A short description of what this project does and the problem it solves.",
    url: "https://your-project-one.vercel.app",
    tags: ["React", "Vercel"],
    gradient: "linear-gradient(135deg, #7c5cff, #5cd6ff)"
  },
  {
    title: "Project Two",
    desc: "A short description of what this project does and the problem it solves.",
    url: "https://your-project-two.vercel.app",
    tags: ["Next.js", "API"],
    gradient: "linear-gradient(135deg, #ff5c8a, #ffb35c)"
  },
  {
    title: "Project Three",
    desc: "A short description of what this project does and the problem it solves.",
    url: "https://your-project-three.vercel.app",
    tags: ["Full Stack"],
    gradient: "linear-gradient(135deg, #22c55e, #5cd6ff)"
  }
];

function initials(title) {
  return title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  if (!PROJECTS.length) {
    grid.innerHTML = `<p style="color: var(--text-muted)">No projects added yet — edit the PROJECTS array in script.js.</p>`;
    return;
  }

  grid.innerHTML = PROJECTS.map((p) => `
    <a class="project-card" href="${p.url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${p.title} live site">
      <div class="project-thumb" style="background:${p.gradient}">${initials(p.title)}</div>
      <div class="project-body">
        <div class="project-title-row">
          <span class="project-title">${p.title}</span>
          <svg class="project-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tags">
          ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
    </a>
  `).join("");
}

document.getElementById("year").textContent = new Date().getFullYear();
renderProjects();
