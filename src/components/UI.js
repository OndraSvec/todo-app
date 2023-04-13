import createTask from "./tasks";
import {
  renderTasks,
  renderProjects,
  renderToday,
  removeContent,
  findProjIndex,
  renderWeek,
} from "./renderingFunctions";
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

  const showTodayBtn = document.getElementById("today-btn");
  showTodayBtn.addEventListener("click", renderToday);

  const showWeekBtn = document.getElementById("thisWeek-btn");
  showWeekBtn.addEventListener("click", renderWeek);

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
      renderProjects(addProjInput.value, showProject);
      const newProject = createProject(addProjInput.value);
      createProjects.addProjects(newProject.getInfo());
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

  function showProject(e) {
    const mainContentProjHeader = document.createElement("h3");
    mainContentProjHeader.textContent = `${e.target.textContent}`;
    mainContentProjHeader.setAttribute("id", "mc-proj-head-h3");

    const mainContentProjRemove = document.createElement("button");
    mainContentProjRemove.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,16.74L7.76,12L3,7.26L7.26,3L12,7.76L16.74,3L21,7.26L16.24,12L21,16.74L16.74,21L12,16.24L7.26,21L3,16.74M12,13.41L16.74,18.16L18.16,16.74L13.41,12L18.16,7.26L16.74,5.84L12,10.59L7.26,5.84L5.84,7.26L10.59,12L5.84,16.74L7.26,18.16L12,13.41Z" /></svg>';
    mainContentProjRemove.setAttribute("id", "mc-proj-head-remove");
    mainContentProjRemove.setAttribute("title", "Remove");

    const mainContentProjAddTask = document.createElement("button");
    mainContentProjAddTask.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,9H9V4H15V9H20V15H15V20H9V15H4V9M11,13V18H13V13H18V11H13V6H11V11H6V13H11Z" /></svg>';
    mainContentProjAddTask.setAttribute("id", "mc-proj-head-add");
    mainContentProjAddTask.setAttribute("title", "Add task");

    const mainContentProjExpand = document.createElement("button");
    mainContentProjExpand.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>';
    mainContentProjExpand.setAttribute("id", "mc-proj-head-expand");
    mainContentProjExpand.setAttribute("title", "Expand");

    [
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
    if (mainContentTaskDiv.classList.contains("expanded")) {
      document
        .getElementById("mc-proj-head-expand")
        .firstChild.setAttribute("style", "transform: rotate(180deg);");
    } else {
      document
        .getElementById("mc-proj-head-expand")
        .firstChild.setAttribute("style", "transform: rotate(0deg);");
    }

    addProjectHandleBtnEvent("mc-proj-head-expand", expandTaskList);
    addProjectHandleBtnEvent("mc-proj-head-add", showAddTaskForm);
    addProjectHandleBtnEvent("mc-proj-head-remove", removeProj);
  }

  function expandTaskList() {
    const taskDiv = document.querySelector(".mc-project-task-div");
    if (taskDiv.childNodes.length > 0) {
      taskDiv.classList.toggle("expanded");
      if (taskDiv.classList.contains("expanded")) {
        document
          .getElementById("mc-proj-head-expand")
          .firstChild.setAttribute("style", "transform: rotate(180deg);");
      } else {
        document
          .getElementById("mc-proj-head-expand")
          .firstChild.setAttribute("style", "transform: rotate(0deg);");
      }
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
    document
      .getElementById("mc-proj-head-expand")
      .firstChild.setAttribute("style", "transform: rotate(180deg);");
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

  function removeProj() {
    const projArr = createProjects.getProjects();
    const mainContDiv = document.querySelector(".main-content");
    const projSideDiv = document.querySelector(".projects-buttons");

    projArr.splice(findProjIndex(), 1);
    removeContent(mainContDiv);
    removeContent(projSideDiv);
    projArr.forEach((element) => renderProjects(element.Name, showProject));
  }
}
