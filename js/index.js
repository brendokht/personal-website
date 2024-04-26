const navItems = document.getElementById("navLinks");
const navLinks = document.getElementsByClassName("nav-link-item");
const menuBtn = document.getElementById("menuButton");
const closeBtn = document.getElementById("closeButton");

navItems.addEventListener("transitionstart", function (event) {
    if (event.propertyName === "top") {
        closeBtn.classList.toggle("hide");
        menuBtn.classList.toggle("hide");
    }
});

navItems.addEventListener("transitionend", function (event) {
    if (event.propertyName === "top") {
        if (navItems.classList.contains("hidden")) {
            navItems.style.zIndex = -1;
        }
        navItems.style.zIndex = 0;
    }
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

if (window.innerWidth >= 768) {
    navItems.classList.remove("hidden");
} else if (window.innerWidth <= 480) {
    navItems.classList.add("hidden");
    navItems.classList.remove("show");
}
