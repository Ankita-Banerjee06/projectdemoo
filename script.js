// ---------------------------------------------------------
// Add / edit your projects here. Each one becomes a clickable
// card that opens its live Vercel link in a new tab.
//
//   title -> project name
//   desc  -> one-line description
//   url   -> your live deployment link. Omit/leave blank for a project
//            that only runs locally — its card won't be clickable and
//            will show a "Local" badge instead of "Live".
//   tags  -> array of short tech/category labels
//   status -> (optional) "live" (default, shown when a url is set) or
//            "local" (shown when there's no url) — set explicitly to
//            override, e.g. a deployed project you don't want linked yet.
//   image -> (optional) path to a screenshot, e.g. "images/travelai.png"
//            leave blank/omit to show the card without a picture
//   imageFit -> (optional) "cover" (default, fills the tile, crops edges —
//            best for photos) or "contain" (shows the whole image, letterboxed
//            — best for UI/product screenshots with text near the edges)
// ---------------------------------------------------------
const PROJECTS = [
  {
    title: "Transly",
    desc: "An AI-powered translation platform that translates text and images across languages, so you can point it at a photo or a document and get an accurate translation back.",
    tags: ["AI", "Translation"],
    status: "local",
    image: "images/transly.jpg"
  },
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
    url: "https://humanizer-g4aq878c1-ankita-r-projects6.vercel.app/",
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
  },
  {
    title: "Pre Sale Agent",
    desc: "An AI-powered presale agent that automates lead qualification and proposal creation.",
    url: "https://presalesaiagent.vestaging.in/",
    tags: ["AI", "Automation"],
    image: "images/presaleagent.png?v=2",
    imageFit: "contain"
  },
  {
    title: "VLQ",
    desc: "VLQ (Visual Learning & Quizzing) is an AI-powered educational platform that makes learning easier through visual explanations, interactive comics, quizzes, collaborative learning, homework, and progress analytics. It supports both students and teachers with engaging tools for understanding, practicing, and tracking learning progress.",
    url: "https://comic-1-zbq8.onrender.com/",
    tags: ["Python", "React"],
    image: "images/vlq.jpg"
  }
];

function projectStatus(p) {
  const isLive = Boolean(p.url);
  return { isLive, status: p.status || (isLive ? "live" : "local") };
}

function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  if (!PROJECTS.length) {
    grid.innerHTML = `<p style="color: var(--text-muted)">No projects added yet — edit the PROJECTS array in script.js.</p>`;
    return;
  }

  grid.innerHTML = PROJECTS.map((p, i) => {
    const { isLive, status } = projectStatus(p);
    const tag = isLive ? "a" : "div";
    const linkAttrs = isLive ? `href="${p.url}" target="_blank" rel="noopener noreferrer"` : "";
    const styleAttrs = `${p.image ? `--card-image:url('${p.image}');` : ""}${p.imageFit === "contain" ? " --card-image-size: contain; --card-image-position: center 30%;" : ""}`;

    return `
    <${tag} class="project-card${p.imageFit === "contain" ? " fit-contain" : ""}${isLive ? "" : " project-card-static"}" style="${styleAttrs}" ${linkAttrs} aria-label="${isLive ? `Open ${p.title} live site` : `${p.title} — local project`}">
      <div class="project-card-bg"></div>
      <div class="project-card-overlay"></div>
      <span class="project-index">${String(i + 1).padStart(2, "0")}</span>
      ${isLive ? `
      <span class="project-arrow-btn" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </span>` : ""}
      <div class="project-content">
        <div class="project-tags">
          <span class="tag tag-status tag-${status}"><span class="status-dot"></span>${status === "local" ? "Local" : "Live"}</span>
          ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
        <span class="project-title">${p.title}</span>
        <p class="project-desc">${p.desc}</p>
      </div>
    </${tag}>
  `;
  }).join("");
}

document.getElementById("year").textContent = new Date().getFullYear();
renderProjects();
