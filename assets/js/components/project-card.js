export function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = `project-card project-${project.accent}`;
  article.innerHTML = `
    <div class="project-visual" aria-hidden="true">
      <span class="project-number">${project.number}</span>
      <span class="project-icon">${project.icon}</span>
      <span class="visual-corner"></span>
    </div>
    <div class="project-info">
      <p class="project-category">${project.category}</p>
      <h3>${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-outcome"><span>↳</span> ${project.outcome}</div>
    </div>
    <span class="project-arrow" aria-hidden="true">↗</span>
  `;
  return article;
}
