import { newList, newTask } from "./functions";
const tasks = (function () {
  let lists = [];
  const addList = function (name) {
    let list = newList(name);
    lists.push(list);
  };
  const removeList = function (listIndex) {
    lists.splice(listIndex, 1);
  };
  const addTask = function (listI, title, description, priority) {
    let task = newTask(title, description, priority);
    lists[listI].tasks.push(task);
  };
  const removeTask = function (listIndex, taskIndex) {
    lists[listIndex].tasks.splice(taskIndex, 1);
  };
  return {
    addList: addList,
    removeList: removeList,
    addTask: addTask,
    removeTask: removeTask,
    lists,
  };
})();
tasks.addList("List0");
tasks.addList("List1");
tasks.addList("List2");
tasks.addList("List3");
tasks.addList("List4");
tasks.addList("List5");
tasks.addList("List6");
tasks.addTask(1, "0", "djdjjdj", "jdjdj");
tasks.addTask(1, "1", "djdjjdj", "jdjdj");
tasks.addTask(1, "2", "gone", "jdjdj");
tasks.addTask(1, "3", "djdjjdj", "jdjdj");
tasks.addTask(1, "4", "djdjjdj", "jdjdj");
console.log(tasks.lists);
tasks.removeTask(1, 2);
