import { task } from "./task.js";
import { pColor, clearDetail, dateArray, filterToday } from "./functions.js";
import format from "date-fns/format";
import isBefore from "date-fns/isBefore";

let tasks = task();

const sortTask = function (listIndex) {
  if (tasks.lists[listIndex] == undefined) return;
  tasks.lists[listIndex].tasks.sort((a, b) => {
    const aDate = new Date(a.taskDate[0], a.taskDate[1], a.taskDate[2]);
    const bDate = new Date(b.taskDate[0], b.taskDate[1], b.taskDate[2]);
    if (isBefore(bDate, aDate)) {
      return 1;
    } else return -1;
  });
};
const saveLocal = function () {
  localStorage.setItem(
    "storage",
    JSON.stringify({
      key: tasks,
    })
  );
  let oop = localStorage.getItem("storage");
  console.log(JSON.parse(oop).key.lists);
};
const getLocal = function () {
  let oop = localStorage.getItem("storage");

  return JSON.parse(oop).key;
};
const displayLists = function () {
  const lists = document.querySelector(".lists");
  lists.textContent = "";
  if (tasks.lists.length == 0) {
    const tasksDiv = document.querySelector(".tasks");
    const rightContainer = document.querySelector(".newTask");
    tasksDiv.textContent = "";
    rightContainer.textContent = "";
    return;
  }
  for (let i = 0; i < tasks.lists.length; i++) {
    const list = document.createElement("div");
    list.classList.add("list");
    const listName = document.createElement("h5");
    listName.textContent = tasks.lists[i].name;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "remove";

    lists.append(list);
    list.addEventListener("click", () => {
      sortTask(i);
      displayTasks(i);
    });
    list.append(listName, removeBtn);
    removeBtn.addEventListener("click", () => {
      tasks.removeList(i);
      saveLocal();
      displayLists();
    });
    list.append(listName, removeBtn);
  }
};

const displayTasks = function (listIndex) {
  clearDetail();

  if (tasks.lists.length == 0) return;
  const tasksDiv = document.querySelector(".tasks");

  const rightContainer = document.querySelector(".newTask");
  tasksDiv.textContent = "";
  rightContainer.textContent = "";
  const newTask = document.createElement("button");
  newTask.textContent = "add task";
  newTask.classList.add("addTask");
  newTask.addEventListener("click", () => {
    addTask(listIndex);
    saveLocal();
  });
  rightContainer.append(newTask);
  if (tasks.lists[listIndex] == undefined) {
    const tasksDiv = document.querySelector(".tasks");
    const rightContainer = document.querySelector(".newTask");
    tasksDiv.textContent = "";
    rightContainer.textContent = "";
    return;
  }
  for (let i = 0; i < tasks.lists[listIndex].tasks.length; i++) {
    const taskDiv = document.createElement("div");

    taskDiv.addEventListener("click", () => {
      taskDetail(listIndex, i);
    });
    taskDiv.classList.add("task");
    const taskTitle = document.createElement("p");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    if (tasks.lists[listIndex].tasks[i].checkbox == true) {
      taskDiv.classList.add("done");
      checkbox.setAttribute("checked", "checked");
    }
    if (tasks.lists[listIndex].tasks[i].checkbox == false) {
      taskDiv.classList.remove("done");
    }
    checkbox.addEventListener("change", (event) => {
      if (event.currentTarget.checked) {
        tasks.lists[listIndex].tasks[i].checkbox = true;
        displayTasks(listIndex);
        saveLocal();
      } else {
        tasks.lists[listIndex].tasks[i].checkbox = false;
        displayTasks(listIndex);
        saveLocal();
      }
    });
    taskTitle.textContent = tasks.lists[listIndex].tasks[i].title;
    const leftTask = document.createElement("div");
    leftTask.classList.add("leftTask");
    // // const dueDate = document.createElement("p");
    // dueDate.textContent = "None";
    const priority = document.createElement("div");
    priority.classList.add("priority");
    priority.style.backgroundColor = `${pColor(
      tasks.lists[listIndex].tasks[i].priority
    )}`;

    leftTask.append(priority);
    taskDiv.append(checkbox, taskTitle, leftTask);
    tasksDiv.append(taskDiv);
  }
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

      lists.removeChild(newList);
      displayLists();
    });
  });
};

const addTask = function (listIndex) {
  const body = document.querySelector("body");
  const bkBackground = document.createElement("div");
  bkBackground.classList.add("background");
  const newTask = document.createElement("form");
  let taskTitle = document.createElement("input");
  let taskLable = document.createElement("label");
  taskLable.textContent = "Title:";
  taskLable.append(taskTitle);
  let description = document.createElement("input");
  let desLable = document.createElement("label");
  desLable.textContent = "descripition";
  desLable.append(description);
  const dueDate = document.createElement("input");
  dueDate.setAttribute("type", "date");
  let priority = document.createElement("input");
  priority.setAttribute("type", "range");
  priority.setAttribute("min", "0");
  priority.setAttribute("max", "2");
  let prioLable = document.createElement("label");
  prioLable.textContent = "priority";
  prioLable.append(priority);
  let Submit = document.createElement("button");
  Submit.textContent = "Add";

  newTask.append(taskLable, desLable, dueDate, prioLable, Submit);
  bkBackground.append(newTask);
  body.append(bkBackground);
  Submit.addEventListener("click", (e) => {
    e.preventDefault();
    tasks.addTask(
      listIndex,
      taskTitle.value,
      description.value,
      priority.value,
      false,
      dueDate.value.split("-")
    );
    body.removeChild(bkBackground);
    displayTasks(listIndex);
    sortTask(listIndex);
  });
};
const statu = function (x) {
  if (x) return "Done";
  else return "not Done";
};

const taskDetail = function (listIndex, taskIndex) {
  clearDetail();

  const rightContainer = document.querySelector(".taskDetaill");
  const detail = document.createElement("div");
  detail.classList.add("taskDetail");
  const form = document.createElement("form");
  const name = document.createElement("input");
  const dueDate = document.createElement("div");

  const arrayDate = dateArray(tasks, listIndex, taskIndex);

  dueDate.textContent = `Due Date${format(new Date(...arrayDate), "PPPP")}`; ///////////////////////////////////////////

  const status = document.createElement("div");
  const stat = statu(tasks.lists[listIndex].tasks[taskIndex].checkbox);
  status.textContent = `Status:${stat}`;
  name.setAttribute(
    "value",
    `${tasks.lists[listIndex].tasks[taskIndex].title}`
  );
  const descripition = document.createElement("textarea");

  descripition.textContent =
    tasks.lists[listIndex].tasks[taskIndex].description;
  const priority = document.createElement("input");
  priority.setAttribute("type", "range");
  priority.setAttribute("min", "0");

  priority.setAttribute("max", "2");
  priority.setAttribute(
    "value",
    `${tasks.lists[listIndex].tasks[taskIndex].priority}`
  );
  const priorityLable = document.createElement("label");
  priorityLable.textContent = "Priority";
  priorityLable.append(priority);
  const remove = document.createElement("button");
  remove.textContent = "Remove";
  remove.addEventListener("click", () => {
    tasks.removeTask(listIndex, taskIndex);
    clearDetail();
    saveLocal();
    displayTasks(listIndex);
  });
  let submit = document.createElement("button");
  submit.textContent = "edit";
  submit.classList.add("edit");

  form.append(
    name,
    descripition,
    priorityLable,
    dueDate,
    status,
    submit,
    remove
  );

  detail.append(form);
  rightContainer.appendChild(detail);
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    tasks.editTask(
      listIndex,
      taskIndex,
      name.value,
      descripition.value,
      priority.value
    );
    clearDetail();
    displayTasks(listIndex);
    saveLocal();
  });
};

tasks.addList("List0");
tasks.addList("List1");
tasks.addTask(1, "get dinner ready", "order pizza", 1, false, [0, 0, 4]);
tasks.addTask(
  1,
  "feed birds",
  "give it to them before noon",
  2,
  false,
  [0, 0, 3]
);
tasks.addTask(1, "do this", "through this", 1, false, [24, 5, 2022]);
tasks.addTask(1, "sleep", "before 6", 0, false, [0, 0, 3]);
tasks.addTask(1, "go to gym", "return the book on the way", 1, true, [0, 0, 5]);

const thisDay = function () {
  const today = document.querySelector(".today");

  today.addEventListener("click", () => {
    const rightContainer = document.querySelector(".newTask");
    const tasksDiv = document.querySelector(".tasks");
    tasksDiv.textContent = "";
    rightContainer.textContent = "";
    tasks.lists.forEach((list, listIndex) => {
      if (tasks.lists.length == 0) return;

      if (tasks.lists[listIndex] == undefined) {
        const tasksDiv = document.querySelector(".tasks");
        const rightContainer = document.querySelector(".newTask");
        tasksDiv.textContent = "";
        rightContainer.textContent = "";
        return;
      }
      for (let i = 0; i < tasks.lists[listIndex].tasks.length; i++) {
        const taskDiv = document.createElement("div");

        taskDiv.addEventListener("click", () => {
          taskDetail(listIndex, i);
        });
        taskDiv.classList.add("task");
        const taskTitle = document.createElement("p");
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        if (tasks.lists[listIndex].tasks[i].checkbox == true) {
          taskDiv.classList.add("done");
          checkbox.setAttribute("checked", "checked");
        }
        if (tasks.lists[listIndex].tasks[i].checkbox == false) {
          taskDiv.classList.remove("done");
        }
        checkbox.addEventListener("change", (event) => {
          if (event.currentTarget.checked) {
            tasks.lists[listIndex].tasks[i].checkbox = true;
            displayTasks(listIndex);
          } else {
            tasks.lists[listIndex].tasks[i].checkbox = false;
            displayTasks(listIndex);
          }
          saveLocal();
        });
        taskTitle.textContent = tasks.lists[listIndex].tasks[i].title;
        const leftTask = document.createElement("div");
        leftTask.classList.add("leftTask");
        // // const dueDate = document.createElement("p");
        // dueDate.textContent = "None";
        const priority = document.createElement("div");
        priority.classList.add("priority");
        priority.style.backgroundColor = `${pColor(
          tasks.lists[listIndex].tasks[i].priority
        )}`;

        leftTask.append(priority);
        taskDiv.append(checkbox, taskTitle, leftTask);
        tasksDiv.append(taskDiv);
      }
      //
    });
  });
};

thisDay();
displayLists();
listAdd();
