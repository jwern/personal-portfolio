// Template Method - Modal creation
const createModal = function (project, projectObject, size) {
  const button = project.querySelector(`.targetButton-${size}`);
  button.setAttribute("data-bs-target", `#${projectObject.id}Modal-${size}`);
  button.textContent = projectObject[`${size}Button`];

  const modal = project.getElementById(`placeholderTarget-${size}`);
  modal.id = `${projectObject.id}Modal-${size}`;
  modal.setAttribute(
    "aria-labelledby",
    `${projectObject.id}ModalLabel-${size}`
  );

  const heading = project.getElementById(`placeholderTargetLabel-${size}`);
  heading.id = `${projectObject.id}ModalLabel-${size}`;
  heading.innerText = `${projectObject.title} - ${size}`;

  const image = project.querySelector(`.modalImage-${size}`);
  image.src = projectObject[`${size}Url`];
};

const createGalleryCard = function (project, projectObject) {
  const projectOuter = project.querySelector(".project");
  projectOuter.id = projectObject.id;

  const desktopImageTop = project.querySelector(".project-image");
  desktopImageTop.style.backgroundImage = `url(${projectObject.desktopUrl})`;
  desktopImageTop.addEventListener("click", () => {
    desktopImageTop.classList.toggle("display-tech");
  });

  const techDetails = project.querySelector(".project-tech");
  techDetails.innerText = projectObject.techDetails;

  const topTitle = project.querySelector(".project-name");
  topTitle.innerText = projectObject.title;
};

const addProjectInfo = function (project, projectObject) {
  const infoDiv = project.querySelector(".project-info");
  const infoLink = document.createElement("a");

  infoLink.innerText = projectObject.externalLink;
  infoLink.href = projectObject.externalUrl;

  infoDiv.appendChild(infoLink);
};

// Remove elements set to 'false' in project options
const confirmOptions = function (projectObject) {
  const project = document.getElementById(projectObject.id);

  if (!projectObject.showMobile) {
    const buttonRow = project.querySelector(".button-row");
    const mobileButton = project.querySelector(".targetButton-mobile");

    buttonRow.removeChild(mobileButton);

    const mobileModal = project.querySelector(
      `#${projectObject.id}Modal-mobile`
    );

    project.removeChild(mobileModal);
  }
};

// Template Method - Template cloning + card creation
const copyProjectTemplate = function (projectObject, rowName) {
  // Project Top
  const projectTemplate = document.getElementById("project-column");
  const project = projectTemplate.content.cloneNode(true);

  createGalleryCard(project, projectObject);

  createModal(project, projectObject, "desktop");
  createModal(project, projectObject, "mobile");

  addProjectInfo(project, projectObject);

  rowName.appendChild(project);
  confirmOptions(projectObject);
};

const createGalleryFromTemplate = function (
  professionalProjects,
  personalProjects
) {
  const professionalRow = document.getElementById("professional-projects-row");
  const personalRow = document.getElementById("personal-projects-row");

  if (professionalRow) {
    for (let project of professionalProjects) {
      copyProjectTemplate(project, professionalRow);
    }
  }

  if (personalRow) {
    for (let project of personalProjects) {
      copyProjectTemplate(project, personalRow);
    }
  }
};

export { createGalleryFromTemplate, confirmOptions };
