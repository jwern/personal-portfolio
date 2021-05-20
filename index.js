/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#weatherAppDesktopModal">
  Desktop View
</button>
<div class="modal fade" id="weatherAppDesktopModal" tabindex="-1" aria-labelledby="weatherAppDesktopModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title" id="weatherAppDesktopModalLabel">
          Weather App - Desktop
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img class="img-fluid" src="images/weather_app_desktop.png" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Close
        </button>
      </div>
    </div>
  </div>
</div> */

function createDesktopModal(modalId, appName, imageUrl) {
  const modalContainer = document.createElement("div");

  const containerAttributes = {
    tabindex: "-1",
    "aria-labelledby": `${modalId}Label`,
    "aria-hidden": "true",
  };
  for (let attr in containerAttributes) {
    modalContainer.setAttribute(attr, containerAttributes[attr]);
  }

  modalContainer.classList.add("modal");
  modalContainer.classList.add("fade");
  modalContainer.id = modalId;

  const modalDialog = document.createElement("div");

  const dialogClasses = [
    "modal-dialog",
    "modal-dialog-scrollable",
    "modal-dialog-centered",
    "modal-xl",
  ];
  for (let cls of dialogClasses) {
    modalDialog.classList.add(cls);
  }

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");

  const modalTitle = document.createElement("h5");
  modalTitle.classList.add("modal-title");
  modalTitle.id = `${modalId}Label`;
  modalTitle.innerText = appName;

  const modalXButton = document.createElement("button");

  const xButtonAttributes = {
    type: "button",
    "data-bs-dismiss": "modal",
    "aria-label": "Close",
  };
  for (let attr in xButtonAttributes) {
    modalXButton.setAttribute(attr, xButtonAttributes[attr]);
  }

  modalXButton.classList.add("btn-close");

  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(modalXButton);

  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");

  const modalImage = document.createElement("img");
  modalImage.classList.add("img-fluid");
  modalImage.src = imageUrl;

  modalBody.appendChild(modalImage);

  const modalFooter = document.createElement("div");
  modalFooter.classList.add("modal-footer");

  const modalCloseButton = document.createElement("button");
  modalCloseButton.classList.add("btn");
  modalCloseButton.classList.add("btn-secondary");
  modalCloseButton.setAttribute("type", "button");
  modalCloseButton.setAttribute("data-bs-dismiss", "modal");
  modalCloseButton.innerText = "Close";

  modalFooter.appendChild(modalCloseButton);

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);

  modalDialog.appendChild(modalContent);

  modalContainer.appendChild(modalDialog);

  return modalContainer;
}

const myModal = createDesktopModal(
  "weatherAppDesktopModal",
  "Weather App - Desktop",
  "images/weather_app_desktop.png"
);
document.body.appendChild(myModal);
