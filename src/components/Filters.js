// src/components/Filters.js
import React from 'react';

const Filters = ({ categories, selectedCategory, onCategoryChange, selectedDishes }) => {
  const getSelectedCountForCategory = (category) => {
    return selectedDishes.filter(dish => dish.mealType === category).length;
  };

  return (
    <div className="filters">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => onCategoryChange(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()} {getSelectedCountForCategory(category)}
        </button>
      ))}
    </div>
  );
};

export default Filters;