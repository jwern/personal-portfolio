import { createGalleryFromTemplate } from "./buildFromTemplate.js";
import { createGalleryFromScratch } from "./alternativeTemplateBuild.js";
import { professionalProjects, personalProjects } from "./projectsList.js";
import "./style.scss";

// IIFE to load gallery of projects
const createGalleryOnLoad = (function () {
  // If browser supports <template>, use template
  if ("content" in document.createElement("template")) {
    createGalleryFromTemplate(professionalProjects, personalProjects);
    // Else use the innerHTML method
  } else {
    createGalleryFromScratch(professionalProjects, personalProjects);
  }
})();
