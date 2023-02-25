const features_button = document.querySelector(".features_btn");
const features_nav = document.querySelector(".features_nav");

const company_button = document.querySelector(".company_btn");
const company_nav = document.querySelector(".company_nav");

features_button.addEventListener("click", () => {
    if (company_button.getAttribute("aria-expanded") === "true") {
        company_button.setAttribute("aria-expanded", "false");
        company_nav.setAttribute("aria-hidden", "true");
    }

    if (features_button.getAttribute("aria-expanded") === "false") {
        features_button.setAttribute("aria-expanded", "true");
        features_nav.setAttribute("aria-hidden", "false");
    }
    else {
        features_button.setAttribute("aria-expanded", "false");
        features_nav.setAttribute("aria-hidden", "true");
    }
});

company_button.addEventListener("click", () => {
    if (features_button.getAttribute("aria-expanded") === "true") {
        features_button.setAttribute("aria-expanded", "false");
        features_nav.setAttribute("aria-hidden", "true");
    }

    if (company_button.getAttribute("aria-expanded") === "false") {
        company_button.setAttribute("aria-expanded", "true");
        company_nav.setAttribute("aria-hidden", "false");
    }
    else {
        company_button.setAttribute("aria-expanded", "false");
        company_nav.setAttribute("aria-hidden", "true");
    }
});

// ! Media Querry

const mediaQuery = window.matchMedia('(max-width: 800px)');

const primary_nav = document.querySelector(".primary_nav");
const primary_menu_btn = document.querySelector(".button_nav");
const button_hamburger = document.querySelector(".hamburger");
const button_close = document.querySelector(".menu_close2");

function handleMediaChange(event) {
  if (event.matches) {
    if (button_hamburger.hasAttribute("data-close")) {
        button_hamburger.toggleAttribute("data-close");
    }
    if (primary_menu_btn.hasAttribute("data-close")) {
        primary_menu_btn.toggleAttribute("data-close");
    }
    if (button_close.hasAttribute("data-show")) {
        button_close.toggleAttribute("data-show");
    }
    primary_nav.toggleAttribute("aria-hidden");
    primary_nav.setAttribute("aria-hidden", "true");
    primary_menu_btn.toggleAttribute("data-show");
  } else {
    primary_nav.toggleAttribute("aria-hidden");
    if (primary_menu_btn.hasAttribute("data-show")) {
        primary_menu_btn.toggleAttribute("data-show");
    }
  }
}

handleMediaChange(mediaQuery); // initial call

mediaQuery.addListener(handleMediaChange); // add listener for changes


primary_menu_btn.addEventListener("click", () => {
    if (primary_nav.getAttribute("aria-hidden") === "true") {
        primary_nav.setAttribute("aria-hidden", "false");
        button_hamburger.toggleAttribute("data-close");
        primary_menu_btn.toggleAttribute("data-close");
        document.querySelector(".menu_button").setAttribute("aria-label", "Close Menu");
        button_close.toggleAttribute("data-show");
    }
    else {
        primary_nav.setAttribute("aria-hidden", "true");
        button_hamburger.toggleAttribute("data-close");
        primary_menu_btn.toggleAttribute("data-close");
        document.querySelector(".menu_button").setAttribute("aria-label", "Menu");
        button_close.toggleAttribute("data-show");
    }
});

button_close.addEventListener("click", () => {
    if (primary_nav.getAttribute("aria-hidden") === "true") {
        primary_nav.setAttribute("aria-hidden", "false");
        button_hamburger.toggleAttribute("data-close");
        primary_menu_btn.toggleAttribute("data-close");
        document.querySelector(".menu_button").setAttribute("aria-label", "Close Menu");
        button_close.toggleAttribute("data-show");
    }
    else {
        primary_nav.setAttribute("aria-hidden", "true");
        button_hamburger.toggleAttribute("data-close");
        primary_menu_btn.toggleAttribute("data-close");
        document.querySelector(".menu_button").setAttribute("aria-label", "Menu");
        button_close.toggleAttribute("data-show");
    }
});