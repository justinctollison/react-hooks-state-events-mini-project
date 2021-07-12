import React, { useState } from "react";

function NewTaskForm({onTaskFormSubmit}) {
  const [taskName, setTaskName] = useState("")
  const [taskCategory, setTaskCategory] = useState("Code")


  function handleTaskName(event) {
    setTaskName(event.target.value)
  }

  function handleTaskCategory(event) {
    setTaskCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newTask = {
      text: taskName,
      category: taskCategory,
    };
    onTaskFormSubmit(newTask)
  }

  console.log(taskCategory)

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Task
        <input type="text" name="text" onChange={handleTaskName} value={taskName}/>
      </label>

      
      <label>
        Category
        <select name="category" onChange={handleTaskCategory} value={taskCategory}>
          {/* render <option> elements for each category here */}
          <option value="All">All</option>
          <option value="Code">Code</option>
          <option value="Food">Food</option>
          <option value="Money">Money</option>
          <option value="Misc">Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
