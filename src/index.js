import createTask from "./components/tasks";

const firstTask = createTask(
  "Call Mike",
  "Ask him about that thing.",
  "Today",
  "High"
);

console.log(
  firstTask.getTitle(),
  firstTask.setTitle("Call Amber"),
  firstTask.getTitle()
);
