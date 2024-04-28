// Variables
const navItems = document.getElementById("navLinks");
const navLinks = document.getElementsByClassName("nav-link-item");
const menuBtn = document.getElementById("menuButton");
const closeBtn = document.getElementById("closeButton");
const lightBtn = document.getElementById("lightMode");
const darkBtn = document.getElementById("darkMode");
let theme = "dark";

// Functions
function toggleMobileMenu() {
    navItems.classList.toggle("show");
    navItems.classList.toggle("hide");
}

function changeTheme() {
    lightBtn.classList.toggle("hide");
    darkBtn.classList.toggle("hide");
    if (theme === "dark") {
        // Change to light
        theme = "light";
        document.body.style.setProperty("--bg-color", "#fff");
        document.body.style.setProperty("--secondary-color", "#a3a3a3");
        document.body.style.setProperty("--text-color", "#000");
    } else {
        // Change to dark
        theme = "dark";
        document.body.style.setProperty("--bg-color", "#444");
        document.body.style.setProperty("--secondary-color", "#333");
        document.body.style.setProperty("--text-color", "#fff");
    }
}

function changeScreenSize() {
    console.log("changeScreenSize");
    if (window.innerWidth <= 1201) {
        navItems.classList.add("hide");
        navItems.classList.remove("show");
        closeBtn.classList.add("hide");
        menuBtn.classList.remove("hide");
    } else {
        navItems.style.zIndex = 0;
        closeBtn.classList.add("hide");
        menuBtn.classList.remove("hide");
        navItems.classList.remove("hide");
    }
}

// Event Listeners and things to run
navItems.addEventListener("transitionstart", function (event) {
    if (event.propertyName === "top") {
        closeBtn.classList.toggle("hide");
        menuBtn.classList.toggle("hide");
    }
});

window.addEventListener("resize", changeScreenSize);

navItems.addEventListener("transitionend", function (event) {
    if (event.propertyName === "top") {
        if (navItems.classList.contains("hide")) {
            navItems.style.zIndex = -1;
        }
        navItems.style.zIndex = 0;
    }
});

navItems.addEventListener("transitionstart", function (event) {
    navItems.style.zIndex = -1;
});

[].forEach.call(navLinks, function (navLink) {
    navLink.addEventListener("click", toggleMobileMenu);
});

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
