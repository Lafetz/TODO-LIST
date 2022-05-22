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

export { newList, newTask };
