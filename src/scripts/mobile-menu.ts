document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuOpen = document.querySelector("#mobile-menu-open");
  const mobileMenuClose = document.querySelector("#mobile-menu-close");
  const mobileMenu = document.querySelector("#mobile-menu");
  const mobileMenuBackdrop = document.querySelector("#mobile-menu-backdrop");

  const userPrefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const toggleMenu = ({ open }: { open?: boolean }) => {
    mobileMenu.animate(
      [
        {
          transform: open
            ? `translateX(-${window.innerWidth}px)`
            : `translateX(${window.innerWidth}px)`,
        },
      ],
      {
        duration: userPrefersReducedMotion ? 0 : 300,
        fill: "forwards",
        easing: open ? "ease-out" : "ease-in",
      },
    );
    if (!mobileMenuBackdrop.classList.contains("pointer-events-none") || open)
      mobileMenuBackdrop.classList.toggle("pointer-events-none");
    if (!mobileMenuBackdrop.classList.contains("opacity-0") || open)
      mobileMenuBackdrop.classList.toggle("opacity-0");
  };

  mobileMenuOpen.addEventListener("click", () => {
    toggleMenu({ open: true });
  });

  mobileMenuClose.addEventListener("click", () => {
    toggleMenu({ open: false });
  });

  mobileMenuBackdrop.addEventListener("click", () => {
    toggleMenu({ open: false });
  });

  mobileMenuBackdrop.addEventListener("touchmove", () => {
    toggleMenu({ open: false });
  });

  window.addEventListener("scroll", () => {
    toggleMenu({ open: false });
  });

  window.addEventListener("resize", () => {
    toggleMenu({ open: false });
  });
});
