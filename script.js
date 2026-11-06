const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

function closeMenu() {
  if (!menuButton || !mainNav) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  mainNav.classList.remove("is-open");
}

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    mainNav.classList.toggle("is-open", isOpen);
  });

  mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 680) closeMenu();
  });
}

const filterButtons = [...document.querySelectorAll(".filter-button")];
const projectCards = [...document.querySelectorAll(".project-card")];
const workCount = document.querySelector("#work-count");

function applyFilter(filter) {
  let visible = 0;
  projectCards.forEach((card) => {
    const show = filter === "all" || card.dataset.category === filter;
    card.hidden = !show;
    if (show) visible += 1;
  });

  filterButtons.forEach((button) => {
    const active = button.dataset.filter === filter;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  if (workCount) {
    workCount.textContent = `Showing ${String(visible).padStart(2, "0")} project${visible === 1 ? "" : "s"}`;
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => applyFilter(button.dataset.filter));
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const navLinks = [...document.querySelectorAll('.main-nav a[href^="#"]')];
if ("IntersectionObserver" in window && navLinks.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  }, { rootMargin: "-38% 0px -52% 0px" });

  ["work", "about", "toolkit", "contact"].forEach((id) => {
    const section = document.getElementById(id);
    if (section) sectionObserver.observe(section);
  });
}

const heroArt = document.querySelector(".hero-art");
if (heroArt && window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  heroArt.addEventListener("pointermove", (event) => {
    const bounds = heroArt.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    heroArt.style.setProperty("--tilt-x", `${-y * 12}deg`);
    heroArt.style.setProperty("--tilt-y", `${x * 12}deg`);
  });
  heroArt.addEventListener("pointerleave", () => {
    heroArt.style.setProperty("--tilt-x", "0deg");
    heroArt.style.setProperty("--tilt-y", "0deg");
  });
}
