import React, { ChangeEvent, useState,KeyboardEvent } from "react";
import { Button } from "./Button";
import { FilterValuesType } from "./App";

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type TodoListPropsType = {
  title: string;
  tasks: Array<TaskType>;
  removeTask: (taskId: string) => void;
  changeTodoListFilter: (filter: FilterValuesType) => void;
  addTask: (title: string) => void;
};

export const TodoList: React.FC<TodoListPropsType> = ({
  title,
  tasks,
  addTask,
  removeTask,
  changeTodoListFilter,
}) => {
  const [taskTitle, setTaskTitle] = useState("");

  const addNewTaskTitleHandler = () => {
    addTask(taskTitle)
    setTaskTitle("")
  }

  const setTaskTitleHandler = (e:ChangeEvent<HTMLInputElement>) => setTaskTitle(e.currentTarget.value)
  const addTaskOnKeyDownHandler = (e:KeyboardEvent<HTMLInputElement> ) => e.key === "Enter" && addNewTaskTitleHandler()
  const changeFilterHandlerCreator = (filter:FilterValuesType) => {
  return () => changeTodoListFilter(filter)

  }

  const tasksItems: JSX.Element =
    tasks.length !== 0 ? (
      <ul>
        {tasks.map((task) => {

          const removeTaskHandler = () => removeTask(task.id)
          return (
            <li key={task.id}>
              <input type="checkbox" checked={task.isDone} />{" "}
              <span>{task.title}</span>
              <button onClick={removeTaskHandler}>x</button>
            </li>
          );
        })}
      </ul>
    ) : (
      <span>До свидание</span>
    );

  // // const title = props.title
  // //   const { title } = props;

  // // const tasksList:Array<JSX.Element> = []
  // // for (let i = 0; i < tasks.length; i++) {
  // //   const task:JSX.Element = <li>
  // //   <input type="checkbox" checked={tasks[i].isDone} /> <span>{tasks[i].title}</span>
  // // </li>
  // // tasksList.push(task)

  // }
  // удалили
  // const tasksList:Array<JSX.Element> = tasks.map(task => {
  //   return (
  //     <li>
  //        <input type="checkbox" checked={task.isDone} /> <span>{task.title}</span>
  //      </li>
  //   )
  // })

  return (
    <div className="todolist">
      <h3>{title}</h3>
      <div>
        <input
          value={taskTitle}
          onChange={setTaskTitleHandler}
          onKeyDown={addTaskOnKeyDownHandler }
        />
        <Button
          isDisabled={!taskTitle}
          title="+"
          OnClickHandler={addNewTaskTitleHandler}
          
        />
        {taskTitle.length > 15 && <div style={{color:"red"}}>I recommend a shorter name</div>}
      </div>
      {tasksItems}
      <div>
        <Button
          title="All"
          OnClickHandler={changeFilterHandlerCreator("all")}
        />
        <Button
          title="Active"
          OnClickHandler={changeFilterHandlerCreator("active")}
        />
        <Button
          title="Completed"
          OnClickHandler={changeFilterHandlerCreator("completed")}
        />
      </div>
    </div>
  );
};
