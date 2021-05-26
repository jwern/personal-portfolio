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
      <div class="project-info">
        <a href="${projectObject.externalUrl}">${projectObject.externalLink}</a>
      </div>
    </div>
  `;

  projectColumn.innerHTML = projectColumnInner;

  const projectsRow = document.getElementById(rowName);
  projectsRow.appendChild(projectColumn);
};

const createGalleryFromScratch = function (
  professionalProjects,
  personalProjects
) {
  for (let project of professionalProjects) {
    buildProjectColumns(project, "professional-projects-row");
  }
  for (let project of personalProjects) {
    buildProjectColumns(project, "personal-projects-row");
  }
};

export { createGalleryFromScratch };
