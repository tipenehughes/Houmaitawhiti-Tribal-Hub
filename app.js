// Nav bar links hover state

const navigation = document.getElementById("navigation");
const navLinks = document.querySelectorAll(".nav-link");

navigation.addEventListener("mouseenter", () => {
    navLinks.forEach((item) => {
        item.classList.add("nav-link-hover");
    });
});

navigation.addEventListener("mouseleave", () => {
    navLinks.forEach((item) => {
        item.classList.remove("nav-link-hover");
    });
});
