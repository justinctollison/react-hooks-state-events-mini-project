import React, { useState } from "react";
import Task from "./Task";
import NewTaskForm from "./NewTaskForm";
import CategoryFilter from "./CategoryFilter"


function TaskList({tasks, categories, onTaskFormSubmit}) {
   const [selected, setSelected] = useState("All");

   console.log(selected)

   function handleCategory(event) {
     event.preventDefault();
    setSelected(event.target.value);
   }

  const tasksToDisplay = tasks.filter((task) => 
    (selected === "All") || task.category === selected)
    // .filter((task) => task.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="tasks">
      <NewTaskForm onHandleChange={handleCategory} onTaskFormSubmit={onTaskFormSubmit}/>
      <CategoryFilter categories={categories} selected={selected} onHandleChange={handleCategory}/>
      {/* display a list of tasks using Task component */}
        {tasksToDisplay.map((task) => (
          <Task key={task.text} text={task.text} category={task.category} />
        ))}
    </div>
  );
}

export default TaskList;
