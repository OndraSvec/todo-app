import { createProjects } from "./todolist";

export function renderTasks(e, nodeName) {
  const projectsArray = createProjects.getProjects();
  const projectToRender = projectsArray.find(
    (element) => element.Name === nodeName
  );
  const tasksToRender = projectToRender.Tasks;
  const expandedDiv = document.querySelector(".mc-project-task-div");

  if (tasksToRender.length > 0) {
    tasksToRender.forEach((task) => {
      const newTaskDiv = document.createElement("div");
      newTaskDiv.classList.add("new-task");
      const newTaskDivHead = document.createElement("div");
      newTaskDivHead.classList.add("new-task-head");
      const newTaskDivHeadTitle = document.createElement("p");
      const newTaskDivHeadExp = document.createElement("button");
      const newTaskDivHeadRemove = document.createElement("button");
      const newTaskDivExp = document.createElement("div");
      newTaskDivExp.classList.add("new-task-body");

      newTaskDivHeadTitle.textContent = task.Title;
      newTaskDivHeadExp.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>';
      newTaskDivHeadExp.setAttribute("id", "nt-head-expand");
      newTaskDivHeadExp.setAttribute("title", "Expand");

      newTaskDivHeadExp.addEventListener("click", expandTaskInfo);

      newTaskDivHeadRemove.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,16.74L7.76,12L3,7.26L7.26,3L12,7.76L16.74,3L21,7.26L16.24,12L21,16.74L16.74,21L12,16.24L7.26,21L3,16.74M12,13.41L16.74,18.16L18.16,16.74L13.41,12L18.16,7.26L16.74,5.84L12,10.59L7.26,5.84L5.84,7.26L10.59,12L5.84,16.74L7.26,18.16L12,13.41Z" /></svg>';
      newTaskDivHeadRemove.setAttribute("id", "nt-head-remove");
      newTaskDivHeadRemove.setAttribute("title", "Remove");

      newTaskDivHeadRemove.addEventListener("click", removeTask);

      [newTaskDivHeadExp, newTaskDivHeadRemove].forEach((element) =>
        element.classList.add("new-task-head-btn")
      );

      [newTaskDivHeadTitle, newTaskDivHeadExp, newTaskDivHeadRemove].forEach(
        (element) => newTaskDivHead.appendChild(element)
      );

      [newTaskDivHead, newTaskDivExp].forEach((element) =>
        newTaskDiv.appendChild(element)
      );
      expandedDiv.appendChild(newTaskDiv);
    });
    expandedDiv.classList.add("expanded");
  }
}

export function removeContent(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.lastChild);
  }
}

function findProj() {
  const targetProject = document.getElementById("mc-proj-head-h3").textContent;
  const projectsArr = createProjects.getProjects();
  const targetProjectData = projectsArr.find(
    (element) => element.Name === targetProject
  );
  return targetProjectData;
}

function findTaskIndex(e) {
  const nodeTarget = e.target.parentNode.firstChild.textContent;
  const targetIndex = findProj().Tasks.findIndex(
    (task) => task.Title === nodeTarget
  );

  return targetIndex;
}

export function findProjIndex() {
  const targetProject = document.getElementById("mc-proj-head-h3").textContent;
  const projectsArr = createProjects.getProjects();
  const targetProjectDataIndex = projectsArr.findIndex(
    (element) => element.Name === targetProject
  );
  return targetProjectDataIndex;
}

function removeTask(e) {
  const expandedDiv = document.querySelector(".mc-project-task-div");
  const projectToRemoveFrom =
    document.getElementById("mc-proj-head-h3").textContent;

  findProj().Tasks.splice(findTaskIndex(e), 1);
  removeContent(expandedDiv);
  renderTasks(e, projectToRemoveFrom);
  if (!findProj().Tasks.length) {
    expandedDiv.classList.remove("expanded");
    document
      .getElementById("mc-proj-head-expand")
      .firstChild.setAttribute("style", "transform: rotate(0deg);");
  }
}

function expandTaskInfo(e) {
  const taskBody = e.target.parentNode.nextSibling;
  taskBody.classList.toggle("expanded");
  if (!taskBody.classList.contains("expanded")) {
    removeContent(taskBody);
    e.target.firstChild.setAttribute("style", "transform: rotate(0deg);");
  } else {
    const taskDesc = document.createElement("p");
    const taskPrior = document.createElement("p");
    const taskDueD = document.createElement("p");

    taskDesc.textContent = `Description: ${
      findProj().Tasks[findTaskIndex(e)].Description
    }`;
    taskPrior.textContent = `Priority: ${
      findProj().Tasks[findTaskIndex(e)].Priority
    }`;
    taskDueD.textContent = `DueDate: ${
      findProj().Tasks[findTaskIndex(e)].DueDate
    }`;

    [taskDesc, taskPrior, taskDueD].forEach((element) =>
      taskBody.appendChild(element)
    );
    e.target.firstChild.setAttribute("style", "transform: rotate(180deg);");
  }
}

export function renderProjects(project, func) {
  const projectDisplayBtn = document.createElement("button");
  projectDisplayBtn.classList.add("add-project");
  projectDisplayBtn.textContent = project;
  const projectsDiv = document.querySelector(".projects-buttons");
  projectDisplayBtn.addEventListener("click", func);
  projectsDiv.appendChild(projectDisplayBtn);
}

export function renderToday() {
  const mainCont = document.querySelector(".main-content");
  removeContent(mainCont);
  const todayDiv = document.createElement("div");
  todayDiv.classList.add("main-content-today");

  const projArray = createProjects.getProjects();
  const filteredProj = projArray.filter((project) =>
    project.Tasks.some(
      (task) =>
        task.DueDate.split("T")[0] === new Date().toISOString().split("T")[0]
    )
  );
  if (filteredProj.length > 0) {
    const filteredTasks = [];
    filteredProj.forEach((project) =>
      project.Tasks.forEach((task) =>
        task.DueDate.split("T")[0] === new Date().toISOString().split("T")[0]
          ? filteredTasks.push(task)
          : ""
      )
    );
    filteredTasks
      .sort((a, b) =>
        a.DueDate > b.DueDate ? 1 : a.DueDate === b.DueDate ? 0 : -1
      )
      .forEach((task) => {
        const todayTaskDiv = document.createElement("div");
        const todTaskTitle = document.createElement("p");
        const todTaskTime = document.createElement("p");

        todTaskTitle.textContent = task.Title;
        todTaskTime.textContent = task.DueDate.split("T")[1];

        [todTaskTitle, todTaskTime].forEach((element) =>
          todayTaskDiv.appendChild(element)
        );
        todayDiv.appendChild(todayTaskDiv);
      });
  } else {
    todayDiv.setAttribute("style", "text-align: center;");
    todayDiv.textContent = "No tasks today.";
  }
  mainCont.appendChild(todayDiv);
}

export function renderWeek() {
  const mainCont = document.querySelector(".main-content");
  removeContent(mainCont);
  const todayDiv = document.createElement("div");
  todayDiv.classList.add("main-content-thisWeek");

  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 7);
  const startDateISO = startDate.toISOString();
  const endDateISO = endDate.toISOString().split("T")[0];

  const projArray = createProjects.getProjects();
  const filteredProj = projArray.filter((project) =>
    project.Tasks.some(
      (task) =>
        task.DueDate >= startDateISO && task.DueDate.split("T")[0] <= endDateISO
    )
  );

  if (filteredProj.length > 0) {
    const filteredTasks = [];
    filteredProj.forEach((project) =>
      project.Tasks.forEach((task) =>
        task.DueDate >= startDateISO && task.DueDate.split("T")[0] <= endDateISO
          ? filteredTasks.push(task)
          : ""
      )
    );
    filteredTasks
      .sort((a, b) =>
        a.DueDate > b.DueDate ? 1 : a.DueDate === b.DueDate ? 0 : -1
      )
      .forEach((task) => {
        const todayTaskDiv = document.createElement("div");
        const todTaskTitle = document.createElement("p");
        const todTaskDate = document.createElement("p");

        todTaskTitle.textContent = task.Title;
        todTaskDate.textContent = `${new Date(
          task.DueDate.split("T")[0]
        ).toLocaleString("en-us", { weekday: "long" })} ${
          task.DueDate.split("-")[2].split("T")[0]
        }.`;

        [todTaskTitle, todTaskDate].forEach((element) =>
          todayTaskDiv.appendChild(element)
        );
        todayDiv.appendChild(todayTaskDiv);
      });
  } else {
    todayDiv.setAttribute("style", "text-align: center;");
    todayDiv.textContent = "No tasks over the next seven days.";
  }
  mainCont.appendChild(todayDiv);
}
