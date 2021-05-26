import { buildHeaderWithData } from "./header.js";
import { createGalleryFromTemplate } from "./buildFromTemplate.js";
import { createGalleryFromScratch } from "./alternativeTemplateBuild.js";
import { professionalProjects, personalProjects } from "./projectsList.js";
import "./style.scss";

const createProjectGallery = function () {
  // If browser supports <template>, use template
  if ("content" in document.createElement("template")) {
    createGalleryFromTemplate(professionalProjects, personalProjects);
    // Else use the innerHTML method
  } else {
    createGalleryFromScratch(professionalProjects, personalProjects);
  }
};

// IIFE to build & load all non-hard-coded elements
const buildOnLoad = (function () {
  buildHeaderWithData();
  createProjectGallery();
})();
