import React from "react";

function NewTaskForm({handleTaskCategory, onTaskFormSubmit, handleTaskName, taskCategory, taskName}) {


  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
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
