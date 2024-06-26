import React, { useState } from "react";

function CategoryFilter({categories,handleCategoryClick}) {
  const [isSelected, setIsSelected] = useState("All");

  function handleButtonClick(category){
    setIsSelected(category)
    handleCategoryClick(category);
  }

  const categoryList=categories.map(category=>{
    return (
      <button 
        key={category} 
        onClick={() => {handleButtonClick(category)}} 
        className={isSelected===category? "selected":""}
      >
        {category}
      </button>
  )})

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryList}
    </div>
  );
}

export default CategoryFilter;
