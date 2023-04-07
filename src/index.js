import { firstTask, secondTask, firstProject } from "./components/todolist";

console.log(
  firstProject.setTasks(firstTask.getInfo()),
  firstProject.setTasks(secondTask.getInfo()),
  firstProject.getTasks()
);
