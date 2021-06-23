import { confirmOptions } from "./buildFromTemplate";

// InnerHTML method - template string / template literal injection
const buildProjectColumns = function (projectObject, rowName) {
  const projectColumn = document.createElement("div");
  const projectColumnClasses = ["col-md-6", "col-xl-4", "mb-5"];

  for (let classType of projectColumnClasses) {
    projectColumn.classList.add(classType);
  }

  const projectColumnInner = `
    <div class="project" id="${projectObject.id}">
      <div class="project-image" style="background-image:url(${projectObject.desktopUrl})"><div class="project-tech">${projectObject.techDetails}</div></div>
      <div class="project-name project-spacer h5">${projectObject.title}</div>
      <hr class="project-title-underline mx-auto project-spacer">
      <!-- Modal buttons -->
      <div class="button-row project-spacer">
        <button type="button" class="targetButton-desktop btn btn-primary my-2" data-bs-toggle="modal" data-bs-target="#${projectObject.id}Modal-desktop">
          ${projectObject.desktopButton}
        </button>
        <button type="button" class="targetButton-mobile btn btn-primary my-2" data-bs-toggle="modal" data-bs-target="#${projectObject.id}Modal-mobile">
          ${projectObject.mobileButton}
        </button>
      </div>
      <!-- End Modal buttons -->
      <!-- Desktop Modal -->
      <div class="modal fade" id="${projectObject.id}Modal-desktop" tabindex="-1" aria-labelledby="${projectObject.id}Label-desktop" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="${projectObject.id}Label-desktop">${projectObject.title} - Desktop</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img class="img-fluid modalImage-desktop" src=${projectObject.desktopUrl} />
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
      <!-- Mobile Modal -->
      <div class="modal fade" id="${projectObject.id}Modal-mobile" tabindex="-1" aria-labelledby="${projectObject.id}Label-mobile" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="${projectObject.id}Label-mobile">${projectObject.title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img class="img-fluid modalImage-mobile" src=${projectObject.mobileUrl} />
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
      <div class="project-info project-spacer">
        <a href="${projectObject.externalUrl}">${projectObject.externalLink}</a>
      </div>
    </div>
  `;

  projectColumn.innerHTML = projectColumnInner;

  rowName.appendChild(projectColumn);

  confirmOptions(projectObject);
};

const createGalleryFromScratch = function (
  professionalProjects,
  personalProjects
) {
  const professionalRow = document.getElementById("professional-projects-row");
  const personalRow = document.getElementById("personal-projects-row");

  if (professionalRow) {
    for (let project of professionalProjects) {
      buildProjectColumns(project, professionalRow);
    }
  }

  if (personalRow) {
    for (let project of personalProjects) {
      buildProjectColumns(project, personalRow);
    }
  }
};

export { createGalleryFromScratch };
