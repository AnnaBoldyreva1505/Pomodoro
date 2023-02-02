import { initControl } from "./control.js";
import { state } from "./state.js";
import { initToDo } from "./todo.js";

const initPomodoro = () => {
  initControl();
  initToDo();

   state.activeTodo = {
      id: 'default',
     pomodoro: 0,
      title: "Помодоро",
   }
};

initPomodoro();
