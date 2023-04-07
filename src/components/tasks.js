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
  return {
    getTitle,
    setTitle,
    getDescription,
    setDescription,
    getDueDate,
    setDueDate,
    getPriority,
    setPriority,
  };
}
