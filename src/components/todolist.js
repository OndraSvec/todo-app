import createTask from "./tasks";
import createProject from "./projects";

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

export { firstTask, secondTask, firstProject };
