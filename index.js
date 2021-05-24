// function modalTemplate(title) {
//   // maybe the wrong element?
//   // "create DOM element from string" https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro
//   // look into templates & adding variable data to them
//   const element = document.createElement("template");
//   document.innerHTML = `
//     <div class="modal fade" id="weatherAppMobileModal" tabindex="-1" aria-labelledby="weatherAppMobileModalLabel" aria-hidden="true">
//       <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
//         <div class="modal-content">
//           <div class="modal-header">
//             <h5 class="modal-title" id="weatherAppMobileModalLabel">
//               ${title}
//             </h5>
//             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//           </div>
//           <div class="modal-body">
//             <img class="img-fluid" src="images/weather_app_mobile.png" />
//           </div>
//           <div class="modal-footer">
//             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   `;

//   // return something
// }

// function createElementWithClasses(elementType, classArray) {
//   const newElement = document.createElement(elementType);

//   for (let newClass of classArray) {
//     newElement.classList.add(newClass);
//   }

//   return newElement;
// }

// function createModalContainer(modalId) {
//   const containerClasses = ["modal", "fade"];
//   const container = createElementWithClasses("div", containerClasses);
//   const containerAttributes = {
//     tabindex: "-1",
//     "aria-labelledby": `${modalId}Label`,
//     "aria-hidden": "true",
//   };
//   for (let attr in containerAttributes) {
//     container.setAttribute(attr, containerAttributes[attr]);
//   }

//   container.id = modalId;

//   return container;
// }

// function createModalDialog(size) {
//   const dialogClasses = [
//     "modal-dialog",
//     "modal-dialog-scrollable",
//     "modal-dialog-centered",
//   ];

//   if (size === "Desktop") {
//     dialogClasses.push("modal-xl");
//   }

//   const dialog = createElementWithClasses("div", dialogClasses);

//   return dialog;
// }

// function createModalTitle(modalId, appName) {
//   const title = createElementWithClasses("h5", ["modal-title"]);
//   title.id = `${modalId}Label`;
//   title.innerText = appName;

//   return title;
// }

// function createModalXButton() {
//   const xButton = createElementWithClasses("button", ["btn-close"]);

//   const xButtonAttributes = {
//     type: "button",
//     "data-bs-dismiss": "modal",
//     "aria-label": "Close",
//   };

//   for (let attr in xButtonAttributes) {
//     xButton.setAttribute(attr, xButtonAttributes[attr]);
//   }

//   return xButton;
// }

// function createModalImage(imageUrl) {
//   const image = createElementWithClasses("img", ["img-fluid"]);
//   image.src = imageUrl;

//   return image;
// }

// function createModalCloseButton() {
//   const closeButton = createElementWithClasses("button", [
//     "btn",
//     "btn-secondary",
//   ]);

//   closeButton.setAttribute("type", "button");
//   closeButton.setAttribute("data-bs-dismiss", "modal");
//   closeButton.innerText = "Close";

//   return closeButton;
// }

// function createModal(modalId, appName, imageUrl, size) {
//   const modalContainer = createModalContainer(modalId);
//   const modalDialog = createModalDialog(size);
//   const modalContent = createElementWithClasses("div", ["modal-content"]);
//   const modalHeader = createElementWithClasses("div", ["modal-header"]);
//   const modalTitle = createModalTitle(modalId, appName);
//   const modalXButton = createModalXButton();

//   modalHeader.appendChild(modalTitle);
//   modalHeader.appendChild(modalXButton);

//   const modalBody = createElementWithClasses("div", ["modal-body"]);
//   const modalImage = createModalImage(imageUrl);

//   modalBody.appendChild(modalImage);

//   const modalFooter = createElementWithClasses("div", ["modal-footer"]);
//   const modalCloseButton = createModalCloseButton();

//   modalFooter.appendChild(modalCloseButton);

//   modalContent.appendChild(modalHeader);
//   modalContent.appendChild(modalBody);
//   modalContent.appendChild(modalFooter);

//   modalDialog.appendChild(modalContent);

//   modalContainer.appendChild(modalDialog);

//   return modalContainer;
// }

// const myModal = createModal(
//   "weatherAppDesktopModal",
//   "Weather App - Desktop",
//   "images/weather_app_desktop.png",
//   "Desktop"
// );

// const mobileModal = createModal(
//   "weatherAppMobileModal",
//   "Weather App - Mobile",
//   "images/weather_app_mobile.png",
//   "Mobile"
// );
// document.body.appendChild(myModal);
// document.body.appendChild(mobileModal);

// const copyTemplate = function (modalId, title, url) {
//   const desktopTemplate = document.getElementById("modal-desktop-template");
//   const clone = desktopTemplate.content.cloneNode(true);

//   const idTag = clone.querySelector("#placeholder-id");
//   idTag.id = modalId;
//   idTag.setAttribute("aria-labelledby", `${modalId}label`);

//   const titleTag = clone.querySelector("#placeholder-title");
//   titleTag.id = `${modalId}label`;
//   titleTag.innerText = title;

//   const imgTag = clone.querySelector("#modal-desktop-image");
//   imgTag.src = url;

//   document.body.appendChild(clone);
// };

const professionalProjects = [
  {
    title: "Brett Ramsay",
    id: "brettRamsay",
    DesktopUrl: "images/brett_ramsay_desktop.png",
    MobileUrl: "images/brett_ramsay_mobile.png",
  },
  {
    title: "Prohaska",
    id: "prohaska",
    DesktopUrl: "images/prohaska_desktop.png",
    MobileUrl: "images/prohaska_mobile.png",
  },
  {
    title: "Wholly Veggie",
    id: "whollyVeggie",
    DesktopUrl: "images/wholly_veggie_desktop_orig_wide.png",
    MobileUrl: "images/wholly_veggie_mobile_orig.png",
  },
  {
    title: "Creative Wick",
    id: "creativeWick",
    DesktopUrl: "images/creative_wick_desktop.png",
    MobileUrl: "images/creative_wick_mobile.png",
  },
  {
    title: "ExamHQ",
    id: "examhq",
    DesktopUrl: "images/exam_hq_desktop.png",
    MobileUrl: "images/exam_hq_mobile.png",
  },
  {
    title: "Proper Nice",
    id: "properNice",
    DesktopUrl: "images/proper_nice_desktop.png",
    MobileUrl: "images/proper_nice_mobile.png",
  },
];

const personalProjects = [
  {
    title: "Stardew Valley App",
    id: "stardewValley",
    DesktopUrl: "images/stardew_app_desktop.png",
    MobileUrl: "images/stardew_app_mobile.png",
  },
  {
    title: "Library Catalogue",
    id: "libraryCatalogue",
    DesktopUrl: "images/library_app_desktop.png",
    MobileUrl: "images/library_app_mobile.png",
  },
  {
    title: "Harvest Moon Weather Tracker",
    id: "harvestMoonWeather",
    DesktopUrl: "images/harvest_moon_weather_calculator_desktop.png",
    MobileUrl: "images/harvest_moon_weather_calculator_mobile.png",
  },
  {
    title: "Google Search",
    id: "googleSearch",
    DesktopUrl: "images/google_homepage_desktop.png",
    MobileUrl: "images/google_homepage_mobile.png",
  },
  {
    title: "Tic-Tac-Toe",
    id: "ticTacToe",
    DesktopUrl: "images/tic_tac_toe_desktop.png",
    MobileUrl: "images/tic_tac_toe_mobile.png",
  },
  {
    title: "Weather App",
    id: "weatherApp",
    DesktopUrl: "images/weather_app_desktop.png",
    MobileUrl: "images/weather_app_mobile.png",
  },
];

const createModal = function (project, projectObject, size) {
  const button = project.getElementById(`targetButton${size}`);
  button.setAttribute("data-bs-target", `#${projectObject.id}${size}Modal`);

  const modal = project.getElementById(`placeholderTarget${size}`);
  modal.id = `${projectObject.id}${size}Modal`;
  modal.setAttribute("aria-labelledby", `${projectObject.id}${size}ModalLabel`);

  const heading = project.getElementById(`placeholderTarget${size}Label`);
  heading.id = `${projectObject.id}${size}ModalLabel`;
  heading.innerText = `${projectObject.title} - ${size}`;

  const image = project.getElementById(`modal${size}Image`);
  image.src = projectObject[`${size}Url`];
};

const copyProjectTemplate = function (projectObject, rowName) {
  // Project Top
  const projectTemplate = document.getElementById("project-column");
  const project = projectTemplate.content.cloneNode(true);

  const desktopImageTop = project.querySelector(".project-image");
  desktopImageTop.style.backgroundImage = `url(${projectObject.DesktopUrl})`;

  const topTitle = project.querySelector(".project-name");
  topTitle.innerText = projectObject.title;

  createModal(project, projectObject, "Desktop");
  createModal(project, projectObject, "Mobile");

  const projectsRow = document.getElementById(rowName);
  projectsRow.appendChild(project);
};

// Future fix: move from global scope
// Also: check if modals can be combined into single template
// with any variable classes added on demand
for (let project of professionalProjects) {
  copyProjectTemplate(project, "professional-projects-row");
}

for (let project of personalProjects) {
  copyProjectTemplate(project, "personal-projects-row");
}
