// /**
//  * Sending custom variables as one object.
//  * This by default will allow you to add any additional values if you resend the customObj.
//  */
// // Define an object to hold the custom variables
// var customObj = {};
// // Define and set variables
// var usernameU = "McAwesome";
// var sessionU = "12afe34df";
// var referrerU = "" + document.referrer;
// // Fill the customObj with the earlier created custom variables
// customObj.Username = usernameU;
// customObj.SessionID = sessionU;
// customObj.DocumentReferrer = referrerU;
// //Send custom variables by assigning the customObj to the 'custom' object in Usabilla
// window.usabilla_live("data", {
//     custom: customObj,
// });

// /** Updating/appending custom variables using one object
//  * If you want update or append value to the Custom Variables you can simply use the customObj.
//  * Update or append any value that you have and update them in the customObj and resend it again using the customObj
//  */
// // Update the variables and value
// usernameU = "McAwesomeNew";
// //Update or append them to the customObj
// customObj.Username = usernameU;
// //Resend if you changed/added values in the customObj
// function updateUsblCustomVar() {
//     window.usabilla_live("data", {
//         custom: customObj,
//     });
// }

// gtag("event", "optimize.callback", {
//     callback: (value, name) =>
//         console.log("Experiment with ID: " + name + " is on variant: " + value),
// });

// Nav bar links hover state

const navigation = document.getElementById("navigation");
const navLinks = document.querySelectorAll(".nav-link");
const navImage = document.querySelector(".nav-image");
let elem = document.querySelector(".main-carousel");

navigation.addEventListener("mouseenter", () => {
    navLinks.forEach((item) => {
        item.classList.add("nav-link-active");
    });
    navigation.classList.add("navigation-hover");
    navImage.classList.add("nav-image-active");
});

navigation.addEventListener("mouseleave", () => {
    navLinks.forEach((item) => {
        item.classList.remove("nav-link-active");
    });
    navigation.classList.remove("navigation-hover");
    navImage.classList.remove("nav-image-active");
    if (window.scrollY > 10) {
        navigation.classList.add("scrolled-down");
        navigation.classList.remove("scrolled-up");
    }
});

// Nav bar scroll

function upAction() {
    navigation.classList.remove("scrolled-down");
    navigation.classList.add("scrolled-up", "navigation-hover");
    navImage.classList.add("nav-image-active");
    navLinks.forEach((item) => {
        item.classList.add("nav-link-active");
    });
}

function downAction() {
    navigation.classList.add("scrolled-down");
    navigation.classList.remove("scrolled-up", "navigation-hover");
    navImage.classList.remove("nav-image-active");
    navLinks.forEach((item) => {
        item.classList.remove("nav-link-active");
    });
}

const scrollTop = function () {
    return window.scrollY;
};

let scrollState = 0;

const scrollDetect = function (down, up) {
    // Current scroll position
    const currentScroll = scrollTop();
    if (currentScroll > scrollState) {
        down();
    } else if (window.scrollY === 0) {
        navLinks.forEach((item) => {
            item.classList.remove("nav-link-active");
        });
        navigation.classList.remove("navigation-hover");
        navImage.classList.remove("nav-image-active");
    } else {
        up();
    }
    // Set previous scroll position
    scrollState = scrollTop();
};

window.addEventListener("scroll", function () {
    scrollDetect(downAction, upAction);
});

// Hamburger menu

const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.querySelector(".mobile-nav-overlay-hidden");
const menuOptions = document.querySelectorAll(".mobile-menu-item");
const noscroll = document.querySelector(".noscroll");
const body = document.getElementById("body");

mobileMenu.addEventListener("click", function (e) {
    menuOverlay.classList.toggle("is-visible");
    body.classList.toggle("noscroll");
});

for (let i = 0; i < menuOptions.length; i++) {
    menuOptions[i].addEventListener("click", function () {
        menuOverlay.classList.remove("is-visible");
        if (body.classList.contains("noscroll")) {
            body.classList.remove("noscroll");
        }
    });
}

// Flickity

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
