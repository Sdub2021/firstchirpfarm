const header = document.querySelector(".site-header");
const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (header && document.body.classList.contains("page-home")) {
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

document.querySelectorAll("form[data-farm-form]").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const notice = form.querySelector(".notice");
    if (notice) {
      notice.style.display = "block";
      notice.textContent =
        "Thank you. This first site is a preview — your message has been noted on the page so we can wire it to email next.";
    }
    form.reset();
  });
});
