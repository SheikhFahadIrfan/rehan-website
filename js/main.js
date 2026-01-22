
(function () {
    const btn = document.querySelector("[data-burger]");
    const drawer = document.querySelector("[data-drawer]");
    if (!btn || !drawer) return;
  
    btn.addEventListener("click", () => {
      const open = drawer.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  })();