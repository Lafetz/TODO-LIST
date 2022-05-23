/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearDetail": () => (/* binding */ clearDetail),
/* harmony export */   "newList": () => (/* binding */ newList),
/* harmony export */   "newTask": () => (/* binding */ newTask),
/* harmony export */   "pColor": () => (/* binding */ pColor),
/* harmony export */   "status": () => (/* binding */ status)
/* harmony export */ });
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




/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "task": () => (/* binding */ task)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");

const task = function () {
  let lists = [];
  const addList = function (name) {
    let list = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.newList)(name);
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
    taskDate,
    priority,
    checkbox
  ) {
    let task = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.newTask)(title, description, priority, checkbox, taskDate);
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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.js */ "./src/functions.js");



const tasks = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.task)();

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
      displayTasks(i);
    });
    list.append(listName, removeBtn);
    removeBtn.addEventListener("click", () => {
      tasks.removeList(i);
      displayLists();
    });
    list.append(listName, removeBtn);
  }
};

const displayTasks = function (listIndex) {
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.clearDetail)();
  console.log(tasks.lists);
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
      //////////////////////////////////////////
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
    });
    taskTitle.textContent = tasks.lists[listIndex].tasks[i].title;
    const leftTask = document.createElement("div");
    leftTask.classList.add("leftTask");
    // // const dueDate = document.createElement("p");
    // dueDate.textContent = "None";
    const priority = document.createElement("div");
    priority.classList.add("priority");
    priority.style.backgroundColor = `${(0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.pColor)(
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
    console.log(dueDate.valueAsDate);
    e.preventDefault();
    tasks.addTask(
      listIndex,
      taskTitle.value,
      description.value,
      dueDate.valueAsDate
    );
    body.removeChild(bkBackground);
    displayTasks(listIndex);
  });
};
const statu = function (x) {
  if (x) return "Done";
  else return "not Done";
};

const taskDetail = function (listIndex, taskIndex) {
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.clearDetail)();

  const rightContainer = document.querySelector(".taskDetaill");
  const detail = document.createElement("div");
  detail.classList.add("taskDetail");
  const form = document.createElement("form");
  const name = document.createElement("input");
  const dueDate = document.createElement("div");
  dueDate.textContent = `Due Date${tasks.lists[listIndex].tasks[taskIndex].taskDate}`;

  const status = document.createElement("div");
  const stat = statu(tasks.lists[listIndex].tasks[taskIndex].checkbox);
  status.textContent = `Status:${stat}`; ////////////////////////////////////////
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

  const remove = document.createElement("button");
  remove.textContent = "Remove";
  remove.addEventListener("click", () => {
    tasks.removeTask(listIndex, taskIndex);
    (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.clearDetail)();
    displayTasks(listIndex);
  });
  let submit = document.createElement("button");
  submit.textContent = "edit";
  submit.classList.add("edit");
  form.append(name, descripition, priority, dueDate, status, submit, remove);
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
    (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.clearDetail)();
    displayTasks(listIndex);
  });
};

tasks.addList("List0");
tasks.addList("List1");
tasks.addTask(1, "get dinner ready", "order pizza", 1, false, `12-232-434`);
tasks.addTask(
  1,
  "feed birds",
  "give it to them before noon",
  2,
  false,
  `12-232-434`
);
tasks.addTask(1, "do this", "through this", 1, false, `12-232-434`);
tasks.addTask(1, "sleep", "before 6", 0, false, `12-232-434`);
tasks.addTask(
  1,
  "go to gym",
  "return the book on the way",
  1,
  true,
  `12-232-434`
);
displayLists();
listAdd();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0oscUJBQXFCO0FBQ3JCLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUV5RDs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDVjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxlQUFlLG1EQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtREFBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0I7Ozs7Ozs7VUNyRWhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmlDO0FBQ29COztBQUVyRCxjQUFjLDhDQUFJOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSwwREFBVztBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IseUNBQXlDO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHFEQUFNO0FBQzlDO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSwwREFBVzs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsaURBQWlEOztBQUVwRjtBQUNBO0FBQ0EsaUNBQWlDLEtBQUssR0FBRztBQUN6QztBQUNBO0FBQ0EsT0FBTyw4Q0FBOEM7QUFDckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saURBQWlEO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBVztBQUNmO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQVc7QUFDZjtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbmV3TGlzdCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGxldCBtZW1lYmVycyA9IFtdO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICB0YXNrczogbWVtZWJlcnMsXG4gIH07XG59O1xuY29uc3QgbmV3VGFzayA9IGZ1bmN0aW9uICh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBjaGVja2JveCwgdGFza0RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBwcmlvcml0eSxcbiAgICBjaGVja2JveCxcbiAgICB0YXNrRGF0ZSxcbiAgfTtcbn07XG5jb25zdCBwQ29sb3IgPSBmdW5jdGlvbiAoeCkge1xuICBpZiAoeCA9PSAwKSB7XG4gICAgcmV0dXJuIFwiZ3JlZW5cIjtcbiAgfSBlbHNlIGlmICh4ID09IDEpIHtcbiAgICByZXR1cm4gXCJ5ZWxsb3dcIjsgLy90aXRsZSBkZXNzYyBwcmlvcml0eVxuICB9IGVsc2UgcmV0dXJuIFwicmVkXCI7XG59O1xuY29uc3Qgc3RhdHVzID0gZnVuY3Rpb24gKHgpIHtcbiAgaWYgKHgpIHJldHVybiBcIkRvbmVcIjtcbiAgZWxzZSByZXR1cm4gXCJub3QgRG9uZVwiO1xufTtcblxuY29uc3QgY2xlYXJEZXRhaWwgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRldGFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0RldGFpbGxcIik7XG4gIGRldGFpbC50ZXh0Q29udGVudCA9IFwiXCI7XG59O1xuXG5leHBvcnQgeyBuZXdMaXN0LCBuZXdUYXNrLCBwQ29sb3IsIGNsZWFyRGV0YWlsLCBzdGF0dXMgfTtcbiIsImltcG9ydCB7IG5ld0xpc3QsIG5ld1Rhc2sgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmNvbnN0IHRhc2sgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBsaXN0cyA9IFtdO1xuICBjb25zdCBhZGRMaXN0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBsZXQgbGlzdCA9IG5ld0xpc3QobmFtZSk7XG4gICAgbGlzdHMucHVzaChsaXN0KTtcbiAgfTtcbiAgY29uc3QgcmVtb3ZlTGlzdCA9IGZ1bmN0aW9uIChsaXN0SW5kZXgpIHtcbiAgICBsaXN0cy5zcGxpY2UobGlzdEluZGV4LCAxKTtcbiAgfTtcbiAgY29uc3QgbGlzdE5hbWUgPSBmdW5jdGlvbiAobGlzdEluZGV4KSB7XG4gICAgcmV0dXJuIGxpc3RzW2xpc3RJbmRleF0ubmFtZTtcbiAgfTtcbiAgY29uc3QgZWRpdExpc3QgPSBmdW5jdGlvbiAobGlzdEluZGV4LCBuZXdOYW1lKSB7XG4gICAgbGlzdHNbbGlzdEluZGV4XS5uYW1lID0gbmV3TmFtZTtcbiAgfTtcbiAgY29uc3QgYWRkVGFzayA9IGZ1bmN0aW9uIChcbiAgICBsaXN0SSxcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICB0YXNrRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBjaGVja2JveFxuICApIHtcbiAgICBsZXQgdGFzayA9IG5ld1Rhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgY2hlY2tib3gsIHRhc2tEYXRlKTtcbiAgICBsaXN0c1tsaXN0SV0udGFza3MucHVzaCh0YXNrKTtcbiAgfTtcbiAgY29uc3QgcmVtb3ZlVGFzayA9IGZ1bmN0aW9uIChsaXN0SW5kZXgsIHRhc2tJbmRleCkge1xuICAgIGxpc3RzW2xpc3RJbmRleF0udGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gIH07XG4gIGNvbnN0IGVkaXRUYXNrVGl0bGUgPSBmdW5jdGlvbiAobGlzdEluZGV4LCB0YXNrSW5kZXgsIG5ld3RpdGxlKSB7XG4gICAgbGlzdHNbbGlzdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLnRpdGxlID0gbmV3dGl0bGU7XG4gIH07XG4gIGNvbnN0IGVkaXRUYXNrRGVzYyA9IGZ1bmN0aW9uIChsaXN0SW5kZXgsIHRhc2tJbmRleCwgbmV3RGVzY3JpcHRpb24pIHtcbiAgICBsaXN0c1tsaXN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0uZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgfTtcbiAgY29uc3QgZWRpdHByaW9yaXR5ID0gZnVuY3Rpb24gKGxpc3RJbmRleCwgdGFza0luZGV4LCBuZXdwcmlvcml0eSkge1xuICAgIGxpc3RzW2xpc3RJbmRleF0udGFza3NbdGFza0luZGV4XS5wcmlvcml0eSA9IG5ld3ByaW9yaXR5O1xuICB9O1xuICBjb25zdCBib3hDaGFuZ2UgPSBmdW5jdGlvbiAobGlzdEluZGV4LCB0YXNrSW5kZXgsIGNoZWNrYm94KSB7XG4gICAgbGlzdHNbbGlzdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLmNoZWNrYm94ID0gY2hlY2tib3g7XG4gIH07XG4gIGNvbnN0IGVkaXRUYXNrID0gZnVuY3Rpb24gKFxuICAgIGxpc3RJbmRleCxcbiAgICB0YXNrSW5kZXgsXG4gICAgbmV3dGl0bGUsXG4gICAgbmV3RGVzY3JpcHRpb24sXG4gICAgbmV3cHJpb3JpdHlcbiAgKSB7XG4gICAgbGlzdHNbbGlzdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLnRpdGxlID0gbmV3dGl0bGU7XG4gICAgbGlzdHNbbGlzdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgbGlzdHNbbGlzdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLnByaW9yaXR5ID0gbmV3cHJpb3JpdHk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRMaXN0OiBhZGRMaXN0LFxuICAgIHJlbW92ZUxpc3Q6IHJlbW92ZUxpc3QsXG4gICAgYWRkVGFzazogYWRkVGFzayxcbiAgICByZW1vdmVUYXNrOiByZW1vdmVUYXNrLFxuICAgIGVkaXRMaXN0OiBlZGl0TGlzdCxcbiAgICBlZGl0VGFza1RpdGxlOiBlZGl0VGFza1RpdGxlLFxuICAgIGVkaXRUYXNrRGVzYzogZWRpdFRhc2tEZXNjLFxuICAgIGVkaXRwcmlvcml0eTogZWRpdHByaW9yaXR5LFxuICAgIGxpc3ROYW1lOiBsaXN0TmFtZSxcbiAgICBlZGl0VGFzazogZWRpdFRhc2ssXG4gICAgYm94Q2hhbmdlOiBib3hDaGFuZ2UsXG4gICAgbGlzdHMsXG4gIH07XG59O1xuZXhwb3J0IHsgdGFzayB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0YXNrIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IHsgcENvbG9yLCBjbGVhckRldGFpbCB9IGZyb20gXCIuL2Z1bmN0aW9ucy5qc1wiO1xuXG5jb25zdCB0YXNrcyA9IHRhc2soKTtcblxuY29uc3QgZGlzcGxheUxpc3RzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBsaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdHNcIik7XG4gIGxpc3RzLnRleHRDb250ZW50ID0gXCJcIjtcblxuICBpZiAodGFza3MubGlzdHMubGVuZ3RoID09IDApIHtcbiAgICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XG4gICAgY29uc3QgcmlnaHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld1Rhc2tcIik7XG4gICAgdGFza3NEaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHJpZ2h0Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICByZXR1cm47XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5saXN0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxpc3QuY2xhc3NMaXN0LmFkZChcImxpc3RcIik7XG4gICAgY29uc3QgbGlzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG4gICAgbGlzdE5hbWUudGV4dENvbnRlbnQgPSB0YXNrcy5saXN0c1tpXS5uYW1lO1xuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcmVtb3ZlQnRuLnRleHRDb250ZW50ID0gXCJyZW1vdmVcIjtcblxuICAgIGxpc3RzLmFwcGVuZChsaXN0KTtcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkaXNwbGF5VGFza3MoaSk7XG4gICAgfSk7XG4gICAgbGlzdC5hcHBlbmQobGlzdE5hbWUsIHJlbW92ZUJ0bik7XG4gICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0YXNrcy5yZW1vdmVMaXN0KGkpO1xuICAgICAgZGlzcGxheUxpc3RzKCk7XG4gICAgfSk7XG4gICAgbGlzdC5hcHBlbmQobGlzdE5hbWUsIHJlbW92ZUJ0bik7XG4gIH1cbn07XG5cbmNvbnN0IGRpc3BsYXlUYXNrcyA9IGZ1bmN0aW9uIChsaXN0SW5kZXgpIHtcbiAgY2xlYXJEZXRhaWwoKTtcbiAgY29uc29sZS5sb2codGFza3MubGlzdHMpO1xuICBpZiAodGFza3MubGlzdHMubGVuZ3RoID09IDApIHJldHVybjtcbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xuXG4gIGNvbnN0IHJpZ2h0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdUYXNrXCIpO1xuICB0YXNrc0Rpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gIHJpZ2h0Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG5ld1Rhc2sudGV4dENvbnRlbnQgPSBcImFkZCB0YXNrXCI7XG4gIG5ld1Rhc2suY2xhc3NMaXN0LmFkZChcImFkZFRhc2tcIik7XG4gIG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhZGRUYXNrKGxpc3RJbmRleCk7XG4gIH0pO1xuICByaWdodENvbnRhaW5lci5hcHBlbmQobmV3VGFzayk7XG4gIGlmICh0YXNrcy5saXN0c1tsaXN0SW5kZXhdID09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcbiAgICBjb25zdCByaWdodENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3VGFza1wiKTtcbiAgICB0YXNrc0Rpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgcmlnaHRDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHJldHVybjtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxpc3RzW2xpc3RJbmRleF0udGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHRhc2tEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgdGFza0RldGFpbChsaXN0SW5kZXgsIGkpO1xuICAgIH0pO1xuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgIGlmICh0YXNrcy5saXN0c1tsaXN0SW5kZXhdLnRhc2tzW2ldLmNoZWNrYm94ID09IHRydWUpIHtcbiAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcImRvbmVcIik7XG4gICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiY2hlY2tlZFwiKTtcbiAgICB9XG4gICAgaWYgKHRhc2tzLmxpc3RzW2xpc3RJbmRleF0udGFza3NbaV0uY2hlY2tib3ggPT0gZmFsc2UpIHtcbiAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LnJlbW92ZShcImRvbmVcIik7XG4gICAgfVxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgIHRhc2tzLmxpc3RzW2xpc3RJbmRleF0udGFza3NbaV0uY2hlY2tib3ggPSB0cnVlO1xuICAgICAgICBkaXNwbGF5VGFza3MobGlzdEluZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tzLmxpc3RzW2xpc3RJbmRleF0udGFza3NbaV0uY2hlY2tib3ggPSBmYWxzZTtcbiAgICAgICAgZGlzcGxheVRhc2tzKGxpc3RJbmRleCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFza3MubGlzdHNbbGlzdEluZGV4XS50YXNrc1tpXS50aXRsZTtcbiAgICBjb25zdCBsZWZ0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGVmdFRhc2suY2xhc3NMaXN0LmFkZChcImxlZnRUYXNrXCIpO1xuICAgIC8vIC8vIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAvLyBkdWVEYXRlLnRleHRDb250ZW50ID0gXCJOb25lXCI7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcbiAgICBwcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgJHtwQ29sb3IoXG4gICAgICB0YXNrcy5saXN0c1tsaXN0SW5kZXhdLnRhc2tzW2ldLnByaW9yaXR5XG4gICAgKX1gO1xuXG4gICAgbGVmdFRhc2suYXBwZW5kKHByaW9yaXR5KTtcbiAgICB0YXNrRGl2LmFwcGVuZChjaGVja2JveCwgdGFza1RpdGxlLCBsZWZ0VGFzayk7XG4gICAgdGFza3NEaXYuYXBwZW5kKHRhc2tEaXYpO1xuICB9XG59O1xuY29uc3QgbGlzdEFkZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYWRkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkTGlzdFwiKTtcbiAgYWRkTGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBjb25zdCBsaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdHNcIik7XG4gICAgY29uc3QgbGlzdExhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmxlXCIpO1xuICAgIGxpc3RMYWJsZS50ZXh0Q29udGVudCA9IFwiTGlzdCBuYW1lXCI7XG4gICAgbGV0IGxpc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGxpc3RMYWJsZS5hcHBlbmQobGlzdE5hbWUpO1xuICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKFwic3VibWl0XCIpO1xuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwib2tcIjtcbiAgICBuZXdMaXN0LmFwcGVuZChsaXN0TGFibGUsIHN1Ym1pdCk7XG4gICAgbGlzdHMuYXBwZW5kQ2hpbGQobmV3TGlzdCk7XG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGFza3MuYWRkTGlzdChsaXN0TmFtZS52YWx1ZSk7XG5cbiAgICAgIGxpc3RzLnJlbW92ZUNoaWxkKG5ld0xpc3QpO1xuICAgICAgZGlzcGxheUxpc3RzKCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgYWRkVGFzayA9IGZ1bmN0aW9uIChsaXN0SW5kZXgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBia0JhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBia0JhY2tncm91bmQuY2xhc3NMaXN0LmFkZChcImJhY2tncm91bmRcIik7XG4gIGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbGV0IHRhc2tMYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgdGFza0xhYmxlLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIjtcbiAgdGFza0xhYmxlLmFwcGVuZCh0YXNrVGl0bGUpO1xuICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGxldCBkZXNMYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZGVzTGFibGUudGV4dENvbnRlbnQgPSBcImRlc2NyaXBpdGlvblwiO1xuICBkZXNMYWJsZS5hcHBlbmQoZGVzY3JpcHRpb24pO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYW5nZVwiKTtcbiAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwibWluXCIsIFwiMFwiKTtcbiAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwibWF4XCIsIFwiMlwiKTtcbiAgbGV0IHByaW9MYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcHJpb0xhYmxlLnRleHRDb250ZW50ID0gXCJwcmlvcml0eVwiO1xuICBwcmlvTGFibGUuYXBwZW5kKHByaW9yaXR5KTtcbiAgbGV0IFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIFN1Ym1pdC50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG5cbiAgbmV3VGFzay5hcHBlbmQodGFza0xhYmxlLCBkZXNMYWJsZSwgZHVlRGF0ZSwgcHJpb0xhYmxlLCBTdWJtaXQpO1xuICBia0JhY2tncm91bmQuYXBwZW5kKG5ld1Rhc2spO1xuICBib2R5LmFwcGVuZChia0JhY2tncm91bmQpO1xuICBTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZHVlRGF0ZS52YWx1ZUFzRGF0ZSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRhc2tzLmFkZFRhc2soXG4gICAgICBsaXN0SW5kZXgsXG4gICAgICB0YXNrVGl0bGUudmFsdWUsXG4gICAgICBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgIGR1ZURhdGUudmFsdWVBc0RhdGVcbiAgICApO1xuICAgIGJvZHkucmVtb3ZlQ2hpbGQoYmtCYWNrZ3JvdW5kKTtcbiAgICBkaXNwbGF5VGFza3MobGlzdEluZGV4KTtcbiAgfSk7XG59O1xuY29uc3Qgc3RhdHUgPSBmdW5jdGlvbiAoeCkge1xuICBpZiAoeCkgcmV0dXJuIFwiRG9uZVwiO1xuICBlbHNlIHJldHVybiBcIm5vdCBEb25lXCI7XG59O1xuXG5jb25zdCB0YXNrRGV0YWlsID0gZnVuY3Rpb24gKGxpc3RJbmRleCwgdGFza0luZGV4KSB7XG4gIGNsZWFyRGV0YWlsKCk7XG5cbiAgY29uc3QgcmlnaHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tEZXRhaWxsXCIpO1xuICBjb25zdCBkZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXRhaWwuY2xhc3NMaXN0LmFkZChcInRhc2tEZXRhaWxcIik7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGR1ZURhdGUudGV4dENvbnRlbnQgPSBgRHVlIERhdGUke3Rhc2tzLmxpc3RzW2xpc3RJbmRleF0udGFza3NbdGFza0luZGV4XS50YXNrRGF0ZX1gO1xuXG4gIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHN0YXQgPSBzdGF0dSh0YXNrcy5saXN0c1tsaXN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0uY2hlY2tib3gpO1xuICBzdGF0dXMudGV4dENvbnRlbnQgPSBgU3RhdHVzOiR7c3RhdH1gOyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIG5hbWUuc2V0QXR0cmlidXRlKFxuICAgIFwidmFsdWVcIixcbiAgICBgJHt0YXNrcy5saXN0c1tsaXN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0udGl0bGV9YFxuICApO1xuICBjb25zdCBkZXNjcmlwaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG5cbiAgZGVzY3JpcGl0aW9uLnRleHRDb250ZW50ID1cbiAgICB0YXNrcy5saXN0c1tsaXN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0uZGVzY3JpcHRpb247XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFuZ2VcIik7XG4gIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcIm1pblwiLCBcIjBcIik7XG5cbiAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwibWF4XCIsIFwiMlwiKTtcbiAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKFxuICAgIFwidmFsdWVcIixcbiAgICBgJHt0YXNrcy5saXN0c1tsaXN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0ucHJpb3JpdHl9YFxuICApO1xuXG4gIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHJlbW92ZS50ZXh0Q29udGVudCA9IFwiUmVtb3ZlXCI7XG4gIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tzLnJlbW92ZVRhc2sobGlzdEluZGV4LCB0YXNrSW5kZXgpO1xuICAgIGNsZWFyRGV0YWlsKCk7XG4gICAgZGlzcGxheVRhc2tzKGxpc3RJbmRleCk7XG4gIH0pO1xuICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0LnRleHRDb250ZW50ID0gXCJlZGl0XCI7XG4gIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKFwiZWRpdFwiKTtcbiAgZm9ybS5hcHBlbmQobmFtZSwgZGVzY3JpcGl0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSwgc3RhdHVzLCBzdWJtaXQsIHJlbW92ZSk7XG4gIGRldGFpbC5hcHBlbmQoZm9ybSk7XG4gIHJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbCk7XG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGFza3MuZWRpdFRhc2soXG4gICAgICBsaXN0SW5kZXgsXG4gICAgICB0YXNrSW5kZXgsXG4gICAgICBuYW1lLnZhbHVlLFxuICAgICAgZGVzY3JpcGl0aW9uLnZhbHVlLFxuICAgICAgcHJpb3JpdHkudmFsdWVcbiAgICApO1xuICAgIGNsZWFyRGV0YWlsKCk7XG4gICAgZGlzcGxheVRhc2tzKGxpc3RJbmRleCk7XG4gIH0pO1xufTtcblxudGFza3MuYWRkTGlzdChcIkxpc3QwXCIpO1xudGFza3MuYWRkTGlzdChcIkxpc3QxXCIpO1xudGFza3MuYWRkVGFzaygxLCBcImdldCBkaW5uZXIgcmVhZHlcIiwgXCJvcmRlciBwaXp6YVwiLCAxLCBmYWxzZSwgYDEyLTIzMi00MzRgKTtcbnRhc2tzLmFkZFRhc2soXG4gIDEsXG4gIFwiZmVlZCBiaXJkc1wiLFxuICBcImdpdmUgaXQgdG8gdGhlbSBiZWZvcmUgbm9vblwiLFxuICAyLFxuICBmYWxzZSxcbiAgYDEyLTIzMi00MzRgXG4pO1xudGFza3MuYWRkVGFzaygxLCBcImRvIHRoaXNcIiwgXCJ0aHJvdWdoIHRoaXNcIiwgMSwgZmFsc2UsIGAxMi0yMzItNDM0YCk7XG50YXNrcy5hZGRUYXNrKDEsIFwic2xlZXBcIiwgXCJiZWZvcmUgNlwiLCAwLCBmYWxzZSwgYDEyLTIzMi00MzRgKTtcbnRhc2tzLmFkZFRhc2soXG4gIDEsXG4gIFwiZ28gdG8gZ3ltXCIsXG4gIFwicmV0dXJuIHRoZSBib29rIG9uIHRoZSB3YXlcIixcbiAgMSxcbiAgdHJ1ZSxcbiAgYDEyLTIzMi00MzRgXG4pO1xuZGlzcGxheUxpc3RzKCk7XG5saXN0QWRkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=