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

export { newList, newTask, pColor, clearDetail, status };
