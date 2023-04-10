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

function eventsData() {
  const addProjBtn = document.getElementById("project-add-btn");
  addProjBtn.addEventListener("click", addProjectData);

  function addProjectData() {
    const addProjInput = document.getElementById("np-input");
    if (addProjInput.checkValidity()) {
      const newProject = createProject(addProjInput.value);
      createProjects.addProjects(newProject.getInfo());
      console.log(createProjects.getProjects());
    }
  }
}

export { createProjects, eventsData };
