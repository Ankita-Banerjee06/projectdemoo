// ---------------------------------------------------------
// Add / edit your projects here. Each one becomes a clickable
// card that opens its live Vercel link in a new tab.
//
//   title -> project name
//   desc  -> one-line description
//   url   -> your live Vercel deployment link
//   tags  -> array of short tech/category labels
//   image -> (optional) path to a screenshot, e.g. "images/travelai.png"
//            leave blank/omit to show the card without a picture
// ---------------------------------------------------------
const PROJECTS = [
  {
    title: "TravelAI",
    desc: "AI-powered, budget-aware travel planning that intelligently combines multi-destination itinerary generation with personalized cost optimization, creating practical trips tailored to the traveler's needs and budget.",
    url: "https://travelai-ruby.vercel.app/dashboard",
    tags: ["React", "Vite", "Python"],
    image: "images/travelai.jpg"
  },
  {
    title: "Humanizer",
    desc: "Context-aware LLM-based agent that goes beyond grammar correction by understanding the writer's intent, tone, and context to produce natural, human-like text.",
    url: "https://humanizer-seven-ashy.vercel.app/",
    tags: ["AI", "LLM"],
    image: "images/humanizer.jpg"
  },
  {
    title: "Proposal Generator",
    desc: "Generates polished, ready-to-send business proposals in under a minute — describe the job and get a professional proposal instantly, built for small businesses that need to move fast.",
    url: "https://proposal-generator-rlao.vercel.app/",
    tags: ["Python", "React"],
    image: "images/proposalgenerator.jpg"
  },
  {
    title: "Dabar (Demo)",
    desc: "A personal finance assistant that helps you track spending, manage budgets, and stay on top of your money — turning raw transactions into a clear picture of where your finances stand.",
    url: "https://dabar-demo.vercel.app/",
    tags: ["Python", "HTML", "CSS"],
    image: "images/dabar.jpg"
  },
  {
    title: "Accounting Website (Demo)",
    desc: "Just a landing page — a clean, modern design for a chartered accounting & advisory firm, built with React.",
    url: "https://accounting-kappa-liard.vercel.app/",
    tags: ["React"],
    image: "images/accounting.jpg"
  },
  {
    title: "Sage",
    desc: "An intelligent AI assistant powered by GPT-4o-mini — ask it anything, share images, or speak, and Sage understands context across text, vision, and voice to hold a genuinely natural conversation.",
    url: "https://kbass.vercel.app/",
    tags: ["LLM", "Python"],
    image: "images/sage.png"
  }
];

function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  if (!PROJECTS.length) {
    grid.innerHTML = `<p style="color: var(--text-muted)">No projects added yet — edit the PROJECTS array in script.js.</p>`;
    return;
  }

  grid.innerHTML = PROJECTS.map((p, i) => `
    <a class="project-card" style="${p.image ? `--card-image:url('${p.image}')` : ""}" href="${p.url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${p.title} live site">
      <div class="project-card-bg"></div>
      <div class="project-card-overlay"></div>
      <span class="project-index">${String(i + 1).padStart(2, "0")}</span>
      <span class="project-arrow-btn" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </span>
      <div class="project-content">
        <div class="project-tags">
          ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
        <span class="project-title">${p.title}</span>
        <p class="project-desc">${p.desc}</p>
      </div>
    </a>
  `).join("");
}

document.getElementById("year").textContent = new Date().getFullYear();
renderProjects();
