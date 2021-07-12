import React, { useState } from "react";

function CategoryFilter( {categories, onHandleChange} ) {
  const [selected, setSelected] = useState(false)

  function handleSelected() {
    setSelected((selected) => !selected)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => 
        <button key={category} value={category} onClick={(event) => {onHandleChange(event); handleSelected()}} className={selected ? "selected" : ""}
        
        >
          {category}
        </button>
      )}
    </div>
  );
}

export default CategoryFilter;
