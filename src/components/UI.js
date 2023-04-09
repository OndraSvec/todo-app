import createProject from "./projects";
import createProjects from "./todolist";

export default function events() {
  const navMenu = document.getElementById("navMenu");
  navMenu.addEventListener("click", toggleSBMC);

  function toggleSBMC() {
    const sideBar = document.querySelector(".side-bar");
    sideBar.classList.toggle("slideIn");

    const mainCont = document.querySelector(".main-content");
    mainCont.classList.toggle("slideOut");
  }

  const addProjectsBtn = document.getElementById("addProjects");
  addProjectsBtn.addEventListener("click", showAddProjectForm);

  function handleProjectForm(display1, display2) {
    const projectForm = document.querySelector(".np-form");
    projectForm.setAttribute("style", `display: ${display1};`);
    addProjectsBtn.setAttribute("style", `display: ${display2};`);
  }

  function showAddProjectForm() {
    handleProjectForm("block", "none");
  }

  const addProjCancBtn = document.getElementById("project-add-cancel-btn");
  addProjCancBtn.addEventListener("click", hideAddProjectForm);

  function hideAddProjectForm() {
    handleProjectForm("none", "block");
  }

  const addProjBtn = document.getElementById("project-add-btn");
  addProjBtn.addEventListener("click", addProject);

  function addProject() {
    const addProjInput = document.getElementById("np-input");
    if (addProjInput.checkValidity()) {
      hideAddProjectForm();
      const newProject = createProject(addProjInput.value);
      createProjects.addProjects(newProject.getInfo());
      removeInputVal(addProjInput);
      displayProjectSideBar(newProject);
    }
  }

  function removeInputVal(node) {
    const targetNode = node;
    targetNode.value = "";
  }

  function displayProjectSideBar(project) {
    const projectDisplayBtn = document.createElement("btn");
    projectDisplayBtn.classList.add("add-project");
    projectDisplayBtn.textContent = project.getProjectName();
    const projectsDiv = document.querySelector(".projects");
    const newProjDiv = document.querySelector(".new-project");
    projectsDiv.insertBefore(projectDisplayBtn, newProjDiv);
    projectDisplayBtn.addEventListener("click", showProjectTasks);
  }

  function showProjectTasks(e) {
    const mainContentHeader = document.createElement("h3");
    mainContentHeader.textContent = `${e.target.textContent}`;

    const mainContent = document.querySelector(".main-content");
    removeContent(mainContent);
    mainContent.appendChild(mainContentHeader);
  }

  function removeContent(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.lastChild);
    }
  }
}
