const navItems = document.getElementById("navLinks");
const navLinks = document.getElementsByClassName("nav-link-item");

navItems.addEventListener("transitionend", function (event) {
    if (navItems.classList.contains("hidden")) {
        navItems.style.zIndex = -1;
    }
    navItems.style.zIndex = 0;
});

navItems.addEventListener("transitionstart", function (event) {
    navItems.style.zIndex = -1;
});

[].forEach.call(navLinks, function (navLink) {
    navLink.addEventListener("click", function (event) {
        navItems.classList.toggle("show");
        navItems.classList.toggle("hidden");
    });
});

function toggleMobileMenu() {
    navItems.classList.toggle("show");
    navItems.classList.toggle("hidden");
}
