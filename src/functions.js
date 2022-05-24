import isBefore from "date-fns/isBefore";
import getWeek from "date-fns/getWeek";
const newList = function (name) {
  let memebers = [];

  return {
    name: name,
    tasks: memebers,
  };
};
const newTask = function (title, description, priority, checkbox, taskDate) {
  return {
    title,
    description,
    priority,
    checkbox,
    taskDate,
  };
};
const pColor = function (x) {
  if (x == 0) {
    return "green";
  } else if (x == 1) {
    return "yellow"; //title dessc priority
  } else return "red";
};
const status = function (x) {
  if (x) return "Done";
  else return "not Done";
};

const clearDetail = function () {
  const detail = document.querySelector(".taskDetaill");
  detail.textContent = "";
};
const dateArray = function (tasks, listIndex, taskIndex) {
  return [
    tasks.lists[listIndex].tasks[taskIndex].taskDate[0],
    tasks.lists[listIndex].tasks[taskIndex].taskDate[1],
    tasks.lists[listIndex].tasks[taskIndex].taskDate[2],
  ];
};

const sortTask = function (listIndex) {
  let sortedTask;
  tasks.lists[listIndex].tasks.sort((a, b) => {
    const aDate = new Date(...a.taskDate);
    const bDate = new Date(...a.taskDate);
    if (isBefore(b, a)) return -1;
  });
};
const filterToday = function (tasks) {
  for (let i; i < tasks.lists.length; i++) {
    for (let j; j < tasks.lists.length; j++) {
      tasks.lists[i].tasks = tasks.lists[i].tasks.filter(() => {
        let taskDate = new Date(
          tasks.lists[listIndex].tasks[taskIndex].taskDate[0],
          tasks.lists[listIndex].tasks[taskIndex].taskDate[1],
          tasks.lists[listIndex].tasks[taskIndex].taskDate[2]
        );
        let currentDate = new Date();

        if (getWeek(taskDate == currentDate)) {
          console.log(true);
          return true;
        }
      });
    }
  }
};

export {
  newList,
  newTask,
  pColor,
  clearDetail,
  status,
  dateArray,
  filterToday,
};
