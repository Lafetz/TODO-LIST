import { task } from "./task.js";
const tasks = task();
tasks.addList("List0");
tasks.addList("List1");
tasks.addList("List2");
tasks.addList("List3");
tasks.addList("List4");
tasks.addList("List5");
tasks.addList("List6");
tasks.addTask(1, "get dinner ready", "order pizza", 1);
tasks.addTask(1, "feed birds", "give it to them before noon", 2);
tasks.addTask(1, "do this", "through this", 2);
tasks.addTask(1, "sleep", "before 6", 3);
tasks.addTask(1, "go to gym", "return the book on the way", 1);

console.log(tasks.lists[1]);
