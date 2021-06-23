import { buildHeaderWithData } from "./header.js";
import { createGalleryFromTemplate } from "./buildFromTemplate.js";
import { createGalleryFromScratch } from "./alternativeTemplateBuild.js";
import {
  professionalProjects,
  personalProjects,
} from "./custom/projectsList.js";
import "./style.scss";

const createProjectGallery = function () {
  if (professionalProjects.length <= 0) {
    const professionalRow = document.getElementById(
      "professional-projects-row"
    );
    professionalRow.remove();
  }

  if (personalProjects.length <= 0) {
    const personalRow = document.getElementById("personal-projects-row");
    personalRow.remove();
  }

  // If browser supports <template>, use template
  if ("content" in document.createElement("template")) {
    createGalleryFromTemplate(professionalProjects, personalProjects);
    // Else use the innerHTML method
  } else {
    createGalleryFromScratch(professionalProjects, personalProjects);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  buildHeaderWithData();
  createProjectGallery();
});
