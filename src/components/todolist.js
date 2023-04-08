import createTask from "./tasks";
import createProject from "./projects";

const createProjects = (() => {
  const projects = [];

  const getProjects = () => projects;
  function addProjects(project) {
    projects.push(project);
  }

  return {
    getProjects,
    addProjects,
  };
})();

const firstTask = createTask(
  "Call Mike",
  "Ask him about that thing.",
  "Today",
  "High"
);

const secondTask = createTask(
  "Call Mom",
  "Ask her how she is doing",
  "Now",
  "High"
);

const firstProject = createProject("Call");

firstProject.addTasks(firstTask.getInfo());
firstProject.addTasks(secondTask.getInfo());
firstProject.getTasks();

createProjects.addProjects(firstProject.getTasks());

export default createProjects;
