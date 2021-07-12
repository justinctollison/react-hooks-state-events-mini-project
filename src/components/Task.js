import React, { useState } from "react";

function Task({text, category}) {
  const [isOnList, setIsOnList] = useState(true)

  function handleDeleteFromList() {
    setIsOnList((isOnList) => !isOnList);
  }


  return (
    <div className="task" value={category}>
      <div className="label">
        {category}
      </div>
      <div className="text" value={text}>
        {text}
      </div>
      <button 
        className={isOnList ? "delete" : "add"}
        onClick={handleDeleteFromList}
      >X
      </button>
    </div>
  );
}

export default Task;
