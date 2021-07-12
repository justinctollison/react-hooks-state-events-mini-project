import React, { useState } from "react";

function CategoryFilter( {categories, onHandleChange} ) {
  // const [isSelected, setSelected] = useState(false)

  // function handleSelected() {
  //   setSelected((isSelected) => !isSelected)
  // }
 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => 
        <button key={category} value={category} onClick={onHandleChange}
        
        >
          {category}
        </button>
      )}
    </div>
  );
}

export default CategoryFilter;
