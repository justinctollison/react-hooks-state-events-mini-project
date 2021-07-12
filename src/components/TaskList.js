import React, { useState } from "react";
import Task from "./Task";
import NewTaskForm from "./NewTaskForm";
import CategoryFilter from "./CategoryFilter"
import { CATEGORIES, TASKS } from "../data";



function TaskList() {
  const [selected, setSelected] = useState("All");
  const [taskName, setTaskName] = useState("")
  const [taskCategory, setTaskCategory] = useState("Code")
  const [tasks, setTasks] = useState(TASKS)
  const [isOnList, setIsOnList] = useState(true)

  function handleDeleteFromList() {
    setIsOnList((isOnList) => !isOnList);
  }

  function handleTaskSubmit(newTask) {
    setTasks([...tasks, newTask])
  }

  function handleTaskName(event) {
    setTaskName(event.target.value)
  }

  function handleTaskCategory(event) {
    setTaskCategory(event.target.value)
  }

  function onTaskFormSubmit(event) {
    event.preventDefault()
    const newTask = {
      text: taskName,
      category: taskCategory,
    };
    handleTaskSubmit(newTask)
  }

   function handleCategory(event) {
     event.preventDefault();
    setSelected(event.target.value);
   }

  const tasksToDisplay = tasks.filter((task) => 
    (selected === "All") || task.category === selected)
    .filter((task) => isOnList === true)

    // console.log(tasks)
    // console.log(tasksToDisplay)
    // console.log(selected)

  

  return (
    <div className="tasks">
      <NewTaskForm handleTaskName={handleTaskName} handleTaskCategory={handleTaskCategory} onTaskFormSubmit={onTaskFormSubmit} taskName={taskName} taskCategory={taskCategory}/>
      <CategoryFilter categories={CATEGORIES} selected={selected} onHandleChange={handleCategory}/>
      {/* display a list of tasks using Task component */}
        {tasksToDisplay.map((task) => (
          <Task key={task.text} text={task.text} category={task.category} handleDeleteFromList={handleDeleteFromList} isOnList={isOnList}/>
        ))}
    </div>
  );
}

export default TaskList;
