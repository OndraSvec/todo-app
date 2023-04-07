export default function createProject(name) {
  let projectName = name;
  const tasks = [];

  const getProjectName = () => projectName;
  function setProjectName(newProjectName) {
    projectName = newProjectName;
  }

  const getTasks = () => tasks;
  function setTasks(task) {
    tasks.push(task);
  }

  return { getProjectName, setProjectName, getTasks, setTasks };
}
