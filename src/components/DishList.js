// src/components/DishList.js
import React from 'react';
import DishCard from './DishCard';

const DishList = ({ dishes, onAddDish, onRemoveDish, selectedDishes, onViewIngredients }) => {
  return (
    <div className="dish-list">
      <div className="dish-list-header">
        <h2 className="category-title">North Indian</h2>
        <img
          src="https://res.cloudinary.com/dgemrhu2h/image/upload/v1757745460/Group_1000007396_kgnjwq.png"
          alt="North Indian Icon"
          className="category-icon"
        />
      </div>
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          dish={dish}
          onAddDish={onAddDish}
          onRemoveDish={onRemoveDish}
          isSelected={selectedDishes.some(d => d.id === dish.id)}
          onViewIngredients={onViewIngredients}
        />
      ))}
    </div>
  );
};

export default DishList;