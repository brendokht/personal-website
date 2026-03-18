document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuOpen = document.querySelector("#mobile-menu-open");
  const mobileMenuClose = document.querySelector("#mobile-menu-close");
  const mobileMenu = document.querySelector("#mobile-menu");
  const mobileMenuBackdrop = document.querySelector("#mobile-menu-backdrop");

  const userPrefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const toggleMenu = ({ open }: { open?: boolean }) => {
    if (open) {
      mobileMenuBackdrop.classList.toggle("opacity-0");
      mobileMenu.animate(
        [{ transform: `translateX(-${window.innerWidth}px)` }],
        {
          duration: userPrefersReducedMotion ? 0 : 300,
          fill: "forwards",
          easing: "ease-out",
        },
      );
      mobileMenuBackdrop.classList.toggle("pointer-events-auto");
      mobileMenuBackdrop.classList.toggle("pointer-events-none");
    } else {
      if (!mobileMenuBackdrop.classList.contains("pointer-events-auto"))
        mobileMenuBackdrop.classList.toggle("pointer-events-auto");
      if (!mobileMenuBackdrop.classList.contains("pointer-events-none"))
        mobileMenuBackdrop.classList.toggle("pointer-events-none");
      if (!mobileMenuBackdrop.classList.contains("opacity-0")) {
        mobileMenuBackdrop.classList.toggle("opacity-0");
        mobileMenu.animate(
          [{ transform: `translateX(${window.innerWidth}px)` }],
          {
            duration: userPrefersReducedMotion ? 0 : 300,
            fill: "forwards",
            easing: "ease-in",
          },
        );
      }
    }
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

  mobileMenuBackdrop.addEventListener("scroll", () => {
    toggleMenu({ open: false });
  });

  mobileMenuBackdrop.addEventListener("touchmove", () => {
    toggleMenu({ open: false });
  });

  window.addEventListener("resize", () => {
    toggleMenu({ open: false });
  });
});
