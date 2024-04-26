const navItems = document.getElementById("navLinks");
const navLinks = document.getElementsByClassName("nav-link-item");
const menuBtn = document.getElementById("menuButton");
const closeBtn = document.getElementById("closeButton");
const lightBtn = document.getElementById("lightMode");
const darkBtn = document.getElementById("darkMode");

let theme = "dark";

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

function changeTheme() {
    lightBtn.classList.toggle("hide");
    darkBtn.classList.toggle("hide");
    if (theme === "dark") {
        // Change to light
        theme = "light";
        document.body.style.setProperty("--bg-color", "#fff");
        document.body.style.setProperty("--secondary-color", "#bbbbbb");
        document.body.style.setProperty("--text-color", "#000");
    } else {
        // Change to dark
        theme = "dark";
        document.body.style.setProperty("--bg-color", "#444");
        document.body.style.setProperty("--secondary-color", "#333");
        document.body.style.setProperty("--text-color", "#fff");
    }
}

if (window.innerWidth <= 768) {
    closeBtn.classList.add("hide");
}

if (theme === "dark") {
    document.body.style.setProperty("--bg-color", "#444");
    document.body.style.setProperty("--secondary-color", "#333");
    document.body.style.setProperty("--text-color", "#fff");
} else if (theme === "light") {
    document.body.style.setProperty("--bg-color", "#fff");
    document.body.style.setProperty("--secondary-color", "#bbbbbb");
    document.body.style.setProperty("--text-color", "#000");
} else {
    console.log("Error occured. Defaulting to dark theme.");
    document.body.style.setProperty("--bg-color", "#444");
    document.body.style.setProperty("--secondary-color", "#333");
    document.body.style.setProperty("--text-color", "#fff");
}
