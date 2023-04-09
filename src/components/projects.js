export default function createProject(name) {
  let projectName = name;
  const tasks = [];

  const getProjectName = () => projectName;
  function setProjectName(newProjectName) {
    projectName = newProjectName;
  }

  const getTasks = () => tasks;
  function addTasks(task) {
    tasks.push(task);
  }

  const projectInfo = {
    Name: getProjectName(),
    Tasks: getTasks(),
  };

  const getInfo = () => projectInfo;

  return { getProjectName, setProjectName, getTasks, addTasks, getInfo };
}
