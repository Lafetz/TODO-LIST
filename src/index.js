import { task } from "./task.js";
import { pColor } from "./functions.js";
const tasks = task();

const displayLists = function () {
  const lists = document.querySelector(".lists");
  lists.textContent = "";
  for (let i = 0; i < tasks.lists.length; i++) {
    const list = document.createElement("div");
    list.classList.add("list");
    const listName = document.createElement("h5");
    listName.textContent = tasks.lists[i].name;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "remove";
    list.append(listName, removeBtn);
    lists.append(list);
    displayTasks(list, i);
    removeBtn.addEventListener("click", () => {
      tasks.removeList(i);
      console.log(tasks.lists);
      displayLists();
    });
    list.append(listName, removeBtn);
  }
};

const displayTasks = function (div, listIndex) {
  const tasksDiv = document.querySelector(".tasks");

  div.addEventListener("click", () => {
    tasksDiv.innerHTML = " ";
    for (let i = 0; i < tasks.lists[listIndex].tasks.length; i++) {
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task");
      const taskTitle = document.createElement("p");
      taskTitle.textContent = "error";
      const leftTask = document.createElement("div");
      leftTask.classList.add("leftTask");
      const dueDate = document.createElement("p");
      dueDate.textContent = "None";
      const priority = document.createElement("div");
      priority.classList.add("priority");
      priority.style.backgroundColor = `${pColor(
        tasks.lists[listIndex].tasks[i].priority
      )}`;
      leftTask.append(dueDate, priority);
      taskDiv.append(taskTitle, leftTask);
      tasksDiv.append(taskDiv);
    }
  });
};
const listAdd = function () {
  const addList = document.querySelector(".addList");
  addList.addEventListener("click", () => {
    const newList = document.createElement("form");
    const lists = document.querySelector(".lists");
    const listLable = document.createElement("lable");
    listLable.textContent = "List name";
    let listName = document.createElement("input");
    listLable.append(listName);
    let submit = document.createElement("button");
    submit.classList.add("submit");
    submit.textContent = "ok";
    newList.append(listLable, submit);
    lists.appendChild(newList);
    submit.addEventListener("click", (e) => {
      e.preventDefault();
      tasks.addList(listName.value);
      console.log(tasks.lists);
      lists.removeChild(newList);
      displayLists();
    });
  });
};
tasks.addList("List0");
tasks.addList("List1");
tasks.addTask(1, "get dinner ready", "order pizza", 1);
tasks.addTask(1, "feed birds", "give it to them before noon", 2);
tasks.addTask(1, "do this", "through this", 1);
tasks.addTask(1, "sleep", "before 6", 0);
tasks.addTask(1, "go to gym", "return the book on the way", 1);
displayLists();
listAdd();

// console.log(tasks.lists[1]);

// const dueDate = document.createElement("p");
// dueDate.textContent = "None";
// const priority = document.createElement("div");
//  priority.style.backgroundColor=`${tasks.lists[]}`
