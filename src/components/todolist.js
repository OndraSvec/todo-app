export const createProjects = (() => {
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
