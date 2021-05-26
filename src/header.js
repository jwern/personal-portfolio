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

    const navAnchor = document.createElement("a");
    navAnchor.classList.add("nav-link");
    navAnchor.innerText = link;
    navAnchor.href = `${navLinks[link]}`;

    navLI.appendChild(navAnchor);
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
