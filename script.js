(() => {
  const root = document.querySelector("[data-parallax-root]");
  const layers = root ? [...root.querySelectorAll("[data-speed]")] : [];
  const header = document.querySelector(".site-header");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let ticking = false;

  const render = () => {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    }

    if (!root || reduceMotion.matches) {
      layers.forEach((layer) => layer.style.removeProperty("--parallax-y"));
      ticking = false;
      return;
    }

    const bounds = root.getBoundingClientRect();
    const progress = Math.min(Math.max(-bounds.top, 0), bounds.height);

    layers.forEach((layer) => {
      const speed = Number.parseFloat(layer.dataset.speed || "0");
      const offset = progress * speed;
      layer.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
    });

    ticking = false;
  };

  const requestRender = () => {
    if (!ticking) {
      window.requestAnimationFrame(render);
      ticking = true;
    }
  };

  window.addEventListener("scroll", requestRender, { passive: true });
  window.addEventListener("resize", requestRender);

  if (typeof reduceMotion.addEventListener === "function") {
    reduceMotion.addEventListener("change", requestRender);
  }

  requestRender();
})();
