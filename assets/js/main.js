import { profile } from "./data/portfolio.js";
import { createProjectCard } from "./components/project-card.js";

function renderStats() {
  const container = document.querySelector("#stats-grid");
  for (const [index, stat] of profile.stats.entries()) {
    const item = document.createElement("div");
    item.className = "stat-item";
    item.innerHTML = `
      <span class="stat-index">0${index + 1} /</span>
      <span class="stat-value">${stat.value}</span>
      <span class="stat-label">${stat.label}</span>
    `;
    container.append(item);
  }
}

function renderExpertise() {
  const container = document.querySelector("#expertise-grid");
  for (const item of profile.expertise) {
    const card = document.createElement("article");
    card.className = "expertise-card";
    card.innerHTML = `
      <span class="expertise-number">${item.number}</span>
      <div class="expertise-icon" aria-hidden="true">${["⌁", "↗", "◎"][Number(item.number) - 1]}</div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="tag-list">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
    `;
    container.append(card);
  }
}

function renderProjects() {
  const container = document.querySelector("#project-list");
  for (const project of profile.projects) {
    container.append(createProjectCard(project));
  }
}

function setupNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation");

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isExpanded));
    toggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("navigation-open", !isExpanded);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
      navigation.classList.remove("navigation-open");
    }
  });
}

renderStats();
renderExpertise();
renderProjects();
setupNavigation();
