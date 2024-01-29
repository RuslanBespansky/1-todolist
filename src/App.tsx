import React, { useState } from "react";
import "./App.css";
import { TaskType, TodoList } from "./TodoList";
import { Console, log } from "console";
import { v1 } from "uuid";

export type FilterValuesType = "all" | "active" | "completed";

function App() {
  const todoListTitle = "What to lern";
  const [tasks, setTasks] = useState<Array<TaskType>>([
    { id: v1(), title: "HTML", isDone: false },
    { id: v1(), title: "CSS", isDone: false },
    { id: v1(), title: "JS/TS", isDone: true },
    { id: v1(), title: "React", isDone: true },
  ]);

  const removeTask = (taskId: string) => {
    const nextState: Array<TaskType> = tasks.filter(
      (task) => task.id !== taskId
    );
    setTasks(nextState);
  };

  const [filter, setFilter] = useState<FilterValuesType>("all");
 



  function addTask(title:string) {
    let newTask = { id: v1(), title, isDone: false };
    // let newTasks = [newTask, ...tasks];
    setTasks([newTask, ...tasks]);
  }





  const changeTodoListFilter = (filter: FilterValuesType) => {
    setFilter(filter);
  };

  const tasksForTodoList: Array<TaskType> =
    filter === "active"
      ? tasks.filter((t) => !t.isDone)
      : filter === "completed"
      ? tasks.filter((t) => t.isDone)
      : tasks;

  return (
    <div className="App">
      <TodoList
        title={todoListTitle}
        tasks={tasksForTodoList}
        removeTask={removeTask}
        changeTodoListFilter={changeTodoListFilter}
        addTask={addTask}
      />
      {/* <TodoList title="What to read" tasks={tasks} />
      <TodoList title="What to buy" tasks={tasks} /> */}
    </div>
  );
}

export default App;
