window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  const panels = document.querySelectorAll(".panel");

  panels.forEach((panel, i) => {
    const img = panel.querySelector("img");

    gsap.fromTo(img,
      {
        opacity: 0,
        scale: 1.2
      },
      {
        opacity: 1,
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: panel,
          start: "top 80%",       // Start earlier
          end: "bottom 20%",      // End later — longer distance = slower scroll effect
          scrub: true,
        }
      }
    );
  });
});
