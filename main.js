document.addEventListener("DOMContentLoaded", () => {
  setupAccordion();
  setupSmoothAnchors();
  syncContactLinks();
});

function setupAccordion() {
  const accordion = document.querySelector("[data-accordion]");
  if (!accordion) return;

  accordion.addEventListener("click", (event) => {
    const button = event.target.closest(".accordion__item");
    if (!button) return;
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", (!expanded).toString());
  });
}

function setupSmoothAnchors() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href").slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", `#${targetId}`);
    });
  });
}

function syncContactLinks() {
  const contactUrl = "https://forms.gle/6bDedvsMUF1WjwCg7"; 
  const linkTargets = ["#contact-link", "#contact-button", "footer .footer-links a[href*=\"forms.gle\"]"];
  linkTargets.forEach((selector) => {
    document.querySelectorAll(selector).forEach((node) => {
      node.href = contactUrl;
    });
  });
}
