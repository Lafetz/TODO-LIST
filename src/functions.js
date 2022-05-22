const newList = function (name) {
  let memebers = [];

  return {
    name: name,
    tasks: memebers,
  };
};
const newTask = function (title, description, priority) {
  return {
    title,
    description,
    priority,
  };
};
const pColor = function (x) {
  if (x == 0) {
    return "green";
  } else if (x == 1) {
    return "yellow";
  } else return "red";
};

export { newList, newTask, pColor };
