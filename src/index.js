import { firstTask, secondTask, firstProject } from "./components/todolist";

console.log(
  firstProject.addTasks(firstTask.getInfo()),
  firstProject.addTasks(secondTask.getInfo()),
  firstProject.getTasks()
);
