import { createProjects } from "./todolist";

export default function createTask(title, description, dueDate, priority) {
  let taskTitle = title;
  const getTitle = () => taskTitle;
  function setTitle(newTitle) {
    taskTitle = newTitle;
  }
  let taskDescription = description;
  const getDescription = () => taskDescription;
  function setDescription(newDescription) {
    taskDescription = newDescription;
  }

  let taskDueDate = dueDate;
  const getDueDate = () => taskDueDate;
  function setDueDate(newDueDate) {
    taskDueDate = newDueDate;
  }

  let taskPriority = priority;
  const getPriority = () => taskPriority;
  function setPriority(newPriority) {
    taskPriority = newPriority;
  }

  const taskInfo = {
    Title: getTitle(),
    Description: getDescription(),
    DueDate: getDueDate(),
    Priority: getPriority(),
  };
  const getInfo = () => taskInfo;

  return {
    getTitle,
    setTitle,
    getDescription,
    setDescription,
    getDueDate,
    setDueDate,
    getPriority,
    setPriority,
    getInfo,
  };
}

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
      const newTaskDivHeadExp = document.createElement("btn");
      const newTaskDivHeadRemove = document.createElement("btn");
      const newTaskDivExp = document.createElement("div");
      newTaskDivExp.classList.add("new-task-body");

      newTaskDivHeadTitle.textContent = task.Title;
      newTaskDivHeadExp.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Expand</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>';
      newTaskDivHeadExp.setAttribute("id", "nt-head-expand");

      newTaskDivHeadRemove.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Remove</title><path d="M3,16.74L7.76,12L3,7.26L7.26,3L12,7.76L16.74,3L21,7.26L16.24,12L21,16.74L16.74,21L12,16.24L7.26,21L3,16.74M12,13.41L16.74,18.16L18.16,16.74L13.41,12L18.16,7.26L16.74,5.84L12,10.59L7.26,5.84L5.84,7.26L10.59,12L5.84,16.74L7.26,18.16L12,13.41Z" /></svg>';
      newTaskDivHeadRemove.setAttribute("id", "nt-head-remove");

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
