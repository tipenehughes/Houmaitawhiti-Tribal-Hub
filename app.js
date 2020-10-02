// Nav bar links hover state

const navigation = document.getElementById("navigation");
const navLinks = document.querySelectorAll(".nav-link");
const navImage = document.querySelector(".nav-image");

navigation.addEventListener("mouseenter", () => {
    navLinks.forEach((item) => {
        item.classList.add("nav-link-active");
    });
    navImage.classList.add("nav-image-active");
});

navigation.addEventListener("mouseleave", () => {
    navLinks.forEach((item) => {
        item.classList.remove("nav-link-active");
    });
    navImage.classList.remove("nav-image-active");
});

// Flickity

let elem = document.querySelector(".main-carousel");
let flkty = new Flickity(elem, {
    // options
    cellAlign: "center",
    contain: true,
    imagesLoaded: true,
    wrapAround: true,
    isLoaded: true,
    autoPlay: 4000,
    fullscreen: true,
});
