const professionalProjects = [
  {
    title: "Brett Ramsay",
    id: "brettRamsay",
    desktopUrl: "images/desktop/brett_ramsay_desktop.png",
    mobileUrl: "images/mobile/brett_ramsay_mobile.png",
  },
  {
    title: "Prohaska",
    id: "prohaska",
    desktopUrl: "images/desktop/prohaska_desktop.png",
    mobileUrl: "images/mobile/prohaska_mobile.png",
  },
  {
    title: "Wholly Veggie",
    id: "whollyVeggie",
    desktopUrl: "images/desktop/wholly_veggie_desktop.png",
    mobileUrl: "images/mobile/wholly_veggie_mobile.png",
  },
  {
    title: "Creative Wick",
    id: "creativeWick",
    desktopUrl: "images/desktop/creative_wick_desktop.png",
    mobileUrl: "images/mobile/creative_wick_mobile.png",
  },
  {
    title: "ExamHQ",
    id: "examhq",
    desktopUrl: "images/desktop/exam_hq_desktop.png",
    mobileUrl: "images/mobile/exam_hq_mobile.png",
  },
  {
    title: "Proper Nice",
    id: "properNice",
    desktopUrl: "images/desktop/proper_nice_desktop.png",
    mobileUrl: "images/mobile/proper_nice_mobile.png",
  },
];

const personalProjects = [
  {
    title: "Stardew Valley App",
    id: "stardewValley",
    desktopUrl: "images/desktop/stardew_app_desktop.png",
    mobileUrl: "images/mobile/stardew_app_mobile.png",
  },
  {
    title: "Library Catalogue",
    id: "libraryCatalogue",
    desktopUrl: "images/desktop/library_app_desktop.png",
    mobileUrl: "images/mobile/library_app_mobile.png",
  },
  {
    title: "Harvest Moon Weather Tracker",
    id: "harvestMoonWeather",
    desktopUrl: "images/desktop/harvest_moon_weather_calculator_desktop.png",
    mobileUrl: "images/mobile/harvest_moon_weather_calculator_mobile.png",
  },
  {
    title: "Google Search",
    id: "googleSearch",
    desktopUrl: "images/desktop/google_homepage_desktop.png",
    mobileUrl: "images/mobile/google_homepage_mobile.png",
  },
  {
    title: "Tic-Tac-Toe",
    id: "ticTacToe",
    desktopUrl: "images/desktop/tic_tac_toe_desktop.png",
    mobileUrl: "images/mobile/tic_tac_toe_mobile.png",
  },
  {
    title: "Weather App",
    id: "weatherApp",
    desktopUrl: "images/desktop/weather_app_desktop.png",
    mobileUrl: "images/mobile/weather_app_mobile.png",
  },
];

// InnerHTML method - template string / template literal injection
const buildProjectColumns = function (projectObject, rowName) {
  const projectColumn = document.createElement("div");
  const projectColumnClasses = ["col-sm-6", "col-md-4", "mb-3"];

  for (let classType of projectColumnClasses) {
    projectColumn.classList.add(classType);
  }

  const projectColumnInner = `
    <div class="project">
      <div class="project-image" style="background-image:url(${projectObject.desktopUrl})"></div>
      <div class="project-name">${projectObject.title}</div>
      <!-- Modal button -->
      <button type="button" id="targetButton-desktop" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${projectObject.id}-desktop">
        Desktop View
      </button>
      <!-- Desktop Modal -->
      <div class="modal fade" id="${projectObject.id}-desktop" tabindex="-1" aria-labelledby="${projectObject.id}Label-desktop" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="${projectObject.id}Label-desktop">${projectObject.title} - Desktop</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img class="img-fluid" id="modalImage-desktop" src=${projectObject.desktopUrl} />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- End Modal -->
      <!-- Modal button -->
      <button type="button" id="targetButton-mobile" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${projectObject.id}-mobile">
        Mobile View
      </button>
      <!-- Mobile Modal -->
      <div class="modal fade" id="${projectObject.id}-mobile" tabindex="-1" aria-labelledby="${projectObject.id}Label-mobile" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="${projectObject.id}Label-mobile">${projectObject.title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img class="img-fluid" id="modalImage-mobile" src=${projectObject.mobileUrl} />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- End Modal -->
      <div class="project-info"></div>
    </div>
  `;

  projectColumn.innerHTML = projectColumnInner;

  const projectsRow = document.getElementById(rowName);
  projectsRow.appendChild(projectColumn);
};

// Template Method - Modal creation
const createModal = function (project, projectObject, size) {
  const button = project.getElementById(`targetButton-${size}`);
  button.setAttribute("data-bs-target", `#${projectObject.id}Modal-${size}`);

  const modal = project.getElementById(`placeholderTarget-${size}`);
  modal.id = `${projectObject.id}Modal-${size}`;
  modal.setAttribute(
    "aria-labelledby",
    `${projectObject.id}ModalLabel-${size}`
  );

  const heading = project.getElementById(`placeholderTargetLabel-${size}`);
  heading.id = `${projectObject.id}ModalLabel-${size}`;
  heading.innerText = `${projectObject.title} - ${size}`;

  const image = project.getElementById(`modalImage-${size}`);
  image.src = projectObject[`${size}Url`];
};

const createGalleryCard = function (project, projectObject) {
  const desktopImageTop = project.querySelector(".project-image");
  desktopImageTop.style.backgroundImage = `url(${projectObject.desktopUrl})`;

  const topTitle = project.querySelector(".project-name");
  topTitle.innerText = projectObject.title;
};

// Template Method - Template cloning + card creation
const copyProjectTemplate = function (projectObject, rowName) {
  // Project Top
  const projectTemplate = document.getElementById("project-column");
  const project = projectTemplate.content.cloneNode(true);

  createGalleryCard(project, projectObject);

  createModal(project, projectObject, "desktop");
  createModal(project, projectObject, "mobile");

  const projectsRow = document.getElementById(rowName);
  projectsRow.appendChild(project);
};

const createGalleryFromTemplate = function () {
  for (let project of professionalProjects) {
    copyProjectTemplate(project, "professional-projects-row");
  }
  for (let project of personalProjects) {
    copyProjectTemplate(project, "personal-projects-row");
  }
};

const createGalleryFromScratch = function () {
  for (let project of professionalProjects) {
    buildProjectColumns(project, "professional-projects-row");
  }
  for (let project of personalProjects) {
    buildProjectColumns(project, "personal-projects-row");
  }
};

// IIFE to load gallery of projects
const createGalleryOnLoad = (function () {
  // If browser supports <template>, use template
  if ("content" in document.createElement("template")) {
    createGalleryFromTemplate();
    // Else use the innerHTML method
  } else {
    createGalleryFromScratch();
  }
})();
