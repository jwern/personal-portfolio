import {
  webPageTitle, // String
  navBrand, // String or HTML as template string
  navLinks, // Object with link text as key and link URL as value, e.g. { navText: url }
  introParagraph, // String or template string
} from "./contactInfo.js";

const setPageTitle = function () {
  document.title = webPageTitle;
};

const setNavbarBrand = function () {
  const brand = document.querySelector(".navbar-brand");
  brand.innerHTML = navBrand; // Using innerHTML in case you're using a logo img
};

const buildNavLinks = function () {
  const navUL = document.getElementById("nav-links");
  for (let link in navLinks) {
    const navLI = document.createElement("li");
    navLI.classList.add("nav-item");

    // This innerHTML is so we can encode our email to prevent listing it directly (spam protection)
    navLI.innerHTML = `<a href="${navLinks[link]}" class="nav-link">${link}</a>`;

    navUL.appendChild(navLI);
  }
};

const addIntroParagraph = function () {
  const introContainer = document.getElementById("intro-paragraph");
  // innerText will maintain line breaks if you use a template string
  introContainer.innerText = introParagraph;
};

const buildHeaderWithData = function () {
  setPageTitle();
  setNavbarBrand();
  buildNavLinks();
  addIntroParagraph();
};

export { buildHeaderWithData };
