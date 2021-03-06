import { newList, newTask } from "./functions";
const task = function () {
  let lists = [];
  const addList = function (name) {
    let list = newList(name);
    lists.push(list);
  };
  const removeList = function (listIndex) {
    lists.splice(listIndex, 1);
  };
  const listName = function (listIndex) {
    return lists[listIndex].name;
  };
  const editList = function (listIndex, newName) {
    lists[listIndex].name = newName;
  };
  const addTask = function (
    listI,
    title,
    description,
    priority,
    checkbox,
    taskDate
  ) {
    let task = newTask(title, description, priority, checkbox, taskDate);
    lists[listI].tasks.push(task);
  };
  const removeTask = function (listIndex, taskIndex) {
    lists[listIndex].tasks.splice(taskIndex, 1);
  };
  const editTaskTitle = function (listIndex, taskIndex, newtitle) {
    lists[listIndex].tasks[taskIndex].title = newtitle;
  };
  const editTaskDesc = function (listIndex, taskIndex, newDescription) {
    lists[listIndex].tasks[taskIndex].description = newDescription;
  };
  const editpriority = function (listIndex, taskIndex, newpriority) {
    lists[listIndex].tasks[taskIndex].priority = newpriority;
  };
  const boxChange = function (listIndex, taskIndex, checkbox) {
    lists[listIndex].tasks[taskIndex].checkbox = checkbox;
  };
  const editTask = function (
    listIndex,
    taskIndex,
    newtitle,
    newDescription,
    newpriority
  ) {
    lists[listIndex].tasks[taskIndex].title = newtitle;
    lists[listIndex].tasks[taskIndex].description = newDescription;
    lists[listIndex].tasks[taskIndex].priority = newpriority;
  };

  return {
    addList: addList,
    removeList: removeList,
    addTask: addTask,
    removeTask: removeTask,
    editList: editList,
    editTaskTitle: editTaskTitle,
    editTaskDesc: editTaskDesc,
    editpriority: editpriority,
    listName: listName,
    editTask: editTask,
    boxChange: boxChange,
    lists,
  };
};
export { task };
