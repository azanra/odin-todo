export const controller = (function () {
  const projectInputModal = document.querySelector("#projectInputModal");
  const createProjectBtn = document.querySelector("#createProjectBtn");
  const cancelAddNewProjectBtn = document.querySelector(
    "#cancelAddNewProjectBtn"
  );

  const createNewProjectController = () => {
    createProjectBtn.addEventListener("click", () => {
      projectInputModal.show();
      cancelAddNewProjectController();
    });
  };

  const cancelAddNewProjectController = () => {
    cancelAddNewProjectBtn.addEventListener("click", () => {
      projectInputModal.close();
    });
  };

  const listenToEvent = () => {
    createNewProjectController();
  };

  return { listenToEvent };
})();
