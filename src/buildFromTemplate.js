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

const createGalleryFromTemplate = function (
  professionalProjects,
  personalProjects
) {
  for (let project of professionalProjects) {
    copyProjectTemplate(project, "professional-projects-row");
  }
  for (let project of personalProjects) {
    copyProjectTemplate(project, "personal-projects-row");
  }
};

export { createGalleryFromTemplate };