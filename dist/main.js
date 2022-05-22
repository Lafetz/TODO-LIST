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
/* harmony export */   "newList": () => (/* binding */ newList),
/* harmony export */   "newTask": () => (/* binding */ newTask),
/* harmony export */   "pColor": () => (/* binding */ pColor)
/* harmony export */ });
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
  const addTask = function (listI, title, description, priority) {
    let task = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.newTask)(title, description, priority);
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
      priority.style.backgroundColor = `${(0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.pColor)(
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7O0FBRW9DOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJXO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbURBQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtREFBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0I7Ozs7Ozs7VUM3Q2hCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmlDO0FBQ087QUFDeEMsY0FBYyw4Q0FBSTs7QUFFbEI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHlDQUF5QztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxxREFBTTtBQUNoRDtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbmV3TGlzdCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGxldCBtZW1lYmVycyA9IFtdO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICB0YXNrczogbWVtZWJlcnMsXG4gIH07XG59O1xuY29uc3QgbmV3VGFzayA9IGZ1bmN0aW9uICh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgcHJpb3JpdHksXG4gIH07XG59O1xuY29uc3QgcENvbG9yID0gZnVuY3Rpb24gKHgpIHtcbiAgaWYgKHggPT0gMCkge1xuICAgIHJldHVybiBcImdyZWVuXCI7XG4gIH0gZWxzZSBpZiAoeCA9PSAxKSB7XG4gICAgcmV0dXJuIFwieWVsbG93XCI7XG4gIH0gZWxzZSByZXR1cm4gXCJyZWRcIjtcbn07XG5cbmV4cG9ydCB7IG5ld0xpc3QsIG5ld1Rhc2ssIHBDb2xvciB9O1xuIiwiaW1wb3J0IHsgbmV3TGlzdCwgbmV3VGFzayB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuY29uc3QgdGFzayA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGxpc3RzID0gW107XG4gIGNvbnN0IGFkZExpc3QgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIGxldCBsaXN0ID0gbmV3TGlzdChuYW1lKTtcbiAgICBsaXN0cy5wdXNoKGxpc3QpO1xuICB9O1xuICBjb25zdCByZW1vdmVMaXN0ID0gZnVuY3Rpb24gKGxpc3RJbmRleCkge1xuICAgIGxpc3RzLnNwbGljZShsaXN0SW5kZXgsIDEpO1xuICB9O1xuICBjb25zdCBsaXN0TmFtZSA9IGZ1bmN0aW9uIChsaXN0SW5kZXgpIHtcbiAgICByZXR1cm4gbGlzdHNbbGlzdEluZGV4XS5uYW1lO1xuICB9O1xuICBjb25zdCBlZGl0TGlzdCA9IGZ1bmN0aW9uIChsaXN0SW5kZXgsIG5ld05hbWUpIHtcbiAgICBsaXN0c1tsaXN0SW5kZXhdLm5hbWUgPSBuZXdOYW1lO1xuICB9O1xuICBjb25zdCBhZGRUYXNrID0gZnVuY3Rpb24gKGxpc3RJLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KSB7XG4gICAgbGV0IHRhc2sgPSBuZXdUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpO1xuICAgIGxpc3RzW2xpc3RJXS50YXNrcy5wdXNoKHRhc2spO1xuICB9O1xuICBjb25zdCByZW1vdmVUYXNrID0gZnVuY3Rpb24gKGxpc3RJbmRleCwgdGFza0luZGV4KSB7XG4gICAgbGlzdHNbbGlzdEluZGV4XS50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgfTtcbiAgY29uc3QgZWRpdFRhc2tUaXRsZSA9IGZ1bmN0aW9uIChsaXN0SW5kZXgsIHRhc2tJbmRleCwgbmV3dGl0bGUpIHtcbiAgICBsaXN0c1tsaXN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0udGl0bGUgPSBuZXd0aXRsZTtcbiAgfTtcbiAgY29uc3QgZWRpdFRhc2tEZXNjID0gZnVuY3Rpb24gKGxpc3RJbmRleCwgdGFza0luZGV4LCBuZXdEZXNjcmlwdGlvbikge1xuICAgIGxpc3RzW2xpc3RJbmRleF0udGFza3NbdGFza0luZGV4XS5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICB9O1xuICBjb25zdCBlZGl0cHJpb3JpdHkgPSBmdW5jdGlvbiAobGlzdEluZGV4LCB0YXNrSW5kZXgsIG5ld3ByaW9yaXR5KSB7XG4gICAgbGlzdHNbbGlzdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLnByaW9yaXR5ID0gbmV3cHJpb3JpdHk7XG4gIH07XG4gIHJldHVybiB7XG4gICAgYWRkTGlzdDogYWRkTGlzdCxcbiAgICByZW1vdmVMaXN0OiByZW1vdmVMaXN0LFxuICAgIGFkZFRhc2s6IGFkZFRhc2ssXG4gICAgcmVtb3ZlVGFzazogcmVtb3ZlVGFzayxcbiAgICBlZGl0TGlzdDogZWRpdExpc3QsXG4gICAgZWRpdFRhc2tUaXRsZTogZWRpdFRhc2tUaXRsZSxcbiAgICBlZGl0VGFza0Rlc2M6IGVkaXRUYXNrRGVzYyxcbiAgICBlZGl0cHJpb3JpdHk6IGVkaXRwcmlvcml0eSxcbiAgICBsaXN0TmFtZTogbGlzdE5hbWUsXG4gICAgbGlzdHMsXG4gIH07XG59O1xuZXhwb3J0IHsgdGFzayB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0YXNrIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IHsgcENvbG9yIH0gZnJvbSBcIi4vZnVuY3Rpb25zLmpzXCI7XG5jb25zdCB0YXNrcyA9IHRhc2soKTtcblxuY29uc3QgZGlzcGxheUxpc3RzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBsaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdHNcIik7XG4gIGxpc3RzLnRleHRDb250ZW50ID0gXCJcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5saXN0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxpc3QuY2xhc3NMaXN0LmFkZChcImxpc3RcIik7XG4gICAgY29uc3QgbGlzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG4gICAgbGlzdE5hbWUudGV4dENvbnRlbnQgPSB0YXNrcy5saXN0c1tpXS5uYW1lO1xuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcmVtb3ZlQnRuLnRleHRDb250ZW50ID0gXCJyZW1vdmVcIjtcbiAgICBsaXN0LmFwcGVuZChsaXN0TmFtZSwgcmVtb3ZlQnRuKTtcbiAgICBsaXN0cy5hcHBlbmQobGlzdCk7XG4gICAgZGlzcGxheVRhc2tzKGxpc3QsIGkpO1xuICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGFza3MucmVtb3ZlTGlzdChpKTtcbiAgICAgIGNvbnNvbGUubG9nKHRhc2tzLmxpc3RzKTtcbiAgICAgIGRpc3BsYXlMaXN0cygpO1xuICAgIH0pO1xuICAgIGxpc3QuYXBwZW5kKGxpc3ROYW1lLCByZW1vdmVCdG4pO1xuICB9XG59O1xuXG5jb25zdCBkaXNwbGF5VGFza3MgPSBmdW5jdGlvbiAoZGl2LCBsaXN0SW5kZXgpIHtcbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xuXG4gIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tzRGl2LmlubmVySFRNTCA9IFwiIFwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGlzdHNbbGlzdEluZGV4XS50YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBcImVycm9yXCI7XG4gICAgICBjb25zdCBsZWZ0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZWZ0VGFzay5jbGFzc0xpc3QuYWRkKFwibGVmdFRhc2tcIik7XG4gICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gXCJOb25lXCI7XG4gICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XG4gICAgICBwcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgJHtwQ29sb3IoXG4gICAgICAgIHRhc2tzLmxpc3RzW2xpc3RJbmRleF0udGFza3NbaV0ucHJpb3JpdHlcbiAgICAgICl9YDtcbiAgICAgIGxlZnRUYXNrLmFwcGVuZChkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgICB0YXNrRGl2LmFwcGVuZCh0YXNrVGl0bGUsIGxlZnRUYXNrKTtcbiAgICAgIHRhc2tzRGl2LmFwcGVuZCh0YXNrRGl2KTtcbiAgICB9XG4gIH0pO1xufTtcbmNvbnN0IGxpc3RBZGQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGFkZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZExpc3RcIik7XG4gIGFkZExpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBuZXdMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgY29uc3QgbGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RzXCIpO1xuICAgIGNvbnN0IGxpc3RMYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJsZVwiKTtcbiAgICBsaXN0TGFibGUudGV4dENvbnRlbnQgPSBcIkxpc3QgbmFtZVwiO1xuICAgIGxldCBsaXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBsaXN0TGFibGUuYXBwZW5kKGxpc3ROYW1lKTtcbiAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXQuY2xhc3NMaXN0LmFkZChcInN1Ym1pdFwiKTtcbiAgICBzdWJtaXQudGV4dENvbnRlbnQgPSBcIm9rXCI7XG4gICAgbmV3TGlzdC5hcHBlbmQobGlzdExhYmxlLCBzdWJtaXQpO1xuICAgIGxpc3RzLmFwcGVuZENoaWxkKG5ld0xpc3QpO1xuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRhc2tzLmFkZExpc3QobGlzdE5hbWUudmFsdWUpO1xuICAgICAgY29uc29sZS5sb2codGFza3MubGlzdHMpO1xuICAgICAgbGlzdHMucmVtb3ZlQ2hpbGQobmV3TGlzdCk7XG4gICAgICBkaXNwbGF5TGlzdHMoKTtcbiAgICB9KTtcbiAgfSk7XG59O1xudGFza3MuYWRkTGlzdChcIkxpc3QwXCIpO1xudGFza3MuYWRkTGlzdChcIkxpc3QxXCIpO1xudGFza3MuYWRkVGFzaygxLCBcImdldCBkaW5uZXIgcmVhZHlcIiwgXCJvcmRlciBwaXp6YVwiLCAxKTtcbnRhc2tzLmFkZFRhc2soMSwgXCJmZWVkIGJpcmRzXCIsIFwiZ2l2ZSBpdCB0byB0aGVtIGJlZm9yZSBub29uXCIsIDIpO1xudGFza3MuYWRkVGFzaygxLCBcImRvIHRoaXNcIiwgXCJ0aHJvdWdoIHRoaXNcIiwgMSk7XG50YXNrcy5hZGRUYXNrKDEsIFwic2xlZXBcIiwgXCJiZWZvcmUgNlwiLCAwKTtcbnRhc2tzLmFkZFRhc2soMSwgXCJnbyB0byBneW1cIiwgXCJyZXR1cm4gdGhlIGJvb2sgb24gdGhlIHdheVwiLCAxKTtcbmRpc3BsYXlMaXN0cygpO1xubGlzdEFkZCgpO1xuXG4vLyBjb25zb2xlLmxvZyh0YXNrcy5saXN0c1sxXSk7XG5cbi8vIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbi8vIGR1ZURhdGUudGV4dENvbnRlbnQgPSBcIk5vbmVcIjtcbi8vIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICBwcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9YCR7dGFza3MubGlzdHNbXX1gXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=