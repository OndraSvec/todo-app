import createTask from "./tasks";
import { renderTasks, removeContent } from "./renderingFunctions";
import createProject from "./projects";
import { createProjects } from "./todolist";

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

  function handleProjectForm(target, display1, display2) {
    const projectForm = document.querySelector(target);
    projectForm.setAttribute("style", `display: ${display1};`);
    addProjectsBtn.setAttribute("style", `display: ${display2};`);
  }

  function showAddProjectForm() {
    handleProjectForm(".np-form", "block", "none");
  }

  const addProjCancBtn = document.getElementById("project-add-cancel-btn");
  addProjCancBtn.addEventListener("click", hideAddProjectForm);

  function hideAddProjectForm() {
    handleProjectForm(".np-form", "none", "block");
  }

  const addProjBtn = document.getElementById("project-add-btn");
  addProjBtn.addEventListener("click", addProject);

  function addProject() {
    const addProjInput = document.getElementById("np-input");
    if (addProjInput.checkValidity()) {
      hideAddProjectForm();
      displayProjectSideBar(addProjInput);
      const newProject = createProject(addProjInput.value);
      createProjects.addProjects(newProject.getInfo());
      console.log(createProjects.getProjects());
      removeInputVal(addProjInput);
    }
  }

  function removeInputVal(node) {
    const targetNode = node;
    targetNode.value = "";
  }

  function addProjectHandleBtnEvent(target, func) {
    const targetElement = document.getElementById(target);
    targetElement.addEventListener("click", func);
  }

  function displayProjectSideBar(project) {
    const projectDisplayBtn = document.createElement("button");
    projectDisplayBtn.classList.add("add-project");
    projectDisplayBtn.textContent = project.value;
    const projectsDiv = document.querySelector(".projects");
    const newProjDiv = document.querySelector(".new-project");
    projectsDiv.insertBefore(projectDisplayBtn, newProjDiv);
    projectDisplayBtn.addEventListener("click", showProject);
  }

  function showProject(e) {
    const mainContentProjHeader = document.createElement("h3");
    mainContentProjHeader.textContent = `${e.target.textContent}`;
    mainContentProjHeader.setAttribute("id", "mc-proj-head-h3");

    const mainContentProjEdit = document.createElement("button");
    mainContentProjEdit.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Edit</title><path d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" /></svg>';
    mainContentProjEdit.setAttribute("id", "mc-proj-head-edit");

    const mainContentProjRemove = document.createElement("button");
    mainContentProjRemove.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Remove</title><path d="M3,16.74L7.76,12L3,7.26L7.26,3L12,7.76L16.74,3L21,7.26L16.24,12L21,16.74L16.74,21L12,16.24L7.26,21L3,16.74M12,13.41L16.74,18.16L18.16,16.74L13.41,12L18.16,7.26L16.74,5.84L12,10.59L7.26,5.84L5.84,7.26L10.59,12L5.84,16.74L7.26,18.16L12,13.41Z" /></svg>';
    mainContentProjRemove.setAttribute("id", "mc-proj-head-remove");

    const mainContentProjAddTask = document.createElement("button");
    mainContentProjAddTask.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Add task</title><path d="M4,9H9V4H15V9H20V15H15V20H9V15H4V9M11,13V18H13V13H18V11H13V6H11V11H6V13H11Z" /></svg>';
    mainContentProjAddTask.setAttribute("id", "mc-proj-head-add");

    const mainContentProjExpand = document.createElement("button");
    mainContentProjExpand.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Expand</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>';
    mainContentProjExpand.setAttribute("id", "mc-proj-head-expand");

    [
      mainContentProjEdit,
      mainContentProjRemove,
      mainContentProjAddTask,
      mainContentProjExpand,
    ].forEach((element) => element.classList.add("mc-proj-head-btns"));

    const mainContentHeadDiv = document.createElement("div");
    mainContentHeadDiv.classList.add("main-content-project-header");
    [
      mainContentProjHeader,
      mainContentProjExpand,
      mainContentProjAddTask,
      mainContentProjEdit,
      mainContentProjRemove,
    ].forEach((element) => mainContentHeadDiv.appendChild(element));

    const mainContentTaskDiv = document.createElement("div");
    mainContentTaskDiv.classList.add("mc-project-task-div");

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("main-content-project");
    [mainContentHeadDiv, mainContentTaskDiv].forEach((element) =>
      projectDiv.appendChild(element)
    );

    const mainContent = document.querySelector(".main-content");
    removeContent(mainContent);
    mainContent.appendChild(projectDiv);
    renderTasks(e, e.target.textContent);

    addProjectHandleBtnEvent("mc-proj-head-expand", expandTaskList);
    addProjectHandleBtnEvent("mc-proj-head-add", showAddTaskForm);
    /*
    addProjectHandleBtnEvent("mc-proj-head-edit", editProj);
    addProjectHandleBtnEvent("mc-proj-head-remove", removeProj;
    */
  }

  function expandTaskList() {
    const taskDiv = document.querySelector(".mc-project-task-div");
    if (taskDiv.childNodes.length > 0) {
      taskDiv.classList.toggle("expanded");
    }
  }

  function showAddTaskForm() {
    const form = document.querySelector("form");
    form.classList.add("active");
    showOverlay();

    form.addEventListener("submit", addTask);
    const cancelBtn = document.getElementById("addTask-cancel-btn");
    cancelBtn.addEventListener("click", cancelTaskForm);
  }

  function hideAddTaskForm() {
    const form = document.querySelector("form");
    form.classList.remove("active");
  }

  function showOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.classList.add("overlay");
  }

  function hideOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.classList.remove("overlay");
  }

  function addTask(e) {
    e.preventDefault();
    const expandedDiv = document.querySelector(".mc-project-task-div");
    const formInputTitle = document.getElementById("title");
    const formInputDescription = document.getElementById("description");
    const formInputPriority = document.getElementById("priority");
    const formInputDueDate = document.getElementById("dueDate");

    const newTask = createTask(
      formInputTitle.value,
      formInputDescription.value,
      formInputDueDate.value,
      formInputPriority.value
    );
    const projectToAddTaskDOM =
      document.getElementById("mc-proj-head-h3").textContent;
    const projectToAddTaskData = createProjects
      .getProjects()
      .find((element) => element.Name === projectToAddTaskDOM);

    projectToAddTaskData.Tasks.push(newTask.getInfo());
    console.log(createProjects.getProjects());
    removeContent(expandedDiv);
    renderTasks(e, projectToAddTaskDOM);

    [
      formInputTitle,
      formInputDescription,
      formInputPriority,
      formInputDueDate,
    ].forEach((element) => removeInputVal(element));
    hideAddTaskForm();
    hideOverlay();
  }

  function cancelTaskForm() {
    const formInputTitle = document.getElementById("title");
    const formInputDescription = document.getElementById("description");
    const formInputPriority = document.getElementById("priority");
    const formInputDueDate = document.getElementById("dueDate");
    [
      formInputTitle,
      formInputDescription,
      formInputPriority,
      formInputDueDate,
    ].forEach((element) => removeInputVal(element));
    hideAddTaskForm();
    hideOverlay();
  }
}
