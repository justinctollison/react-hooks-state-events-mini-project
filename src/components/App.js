import React, { useState } from "react";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)

  function handleTaskSubmit(newTask) {
    setTasks([...tasks, newTask])
  }

  console.log(tasks)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <TaskList tasks={TASKS} categories={CATEGORIES} onTaskFormSubmit={handleTaskSubmit}/>
    </div>
  );
}

export default App;
