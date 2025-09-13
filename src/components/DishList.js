// src/components/DishList.js
import React from 'react';
import DishCard from './DishCard';

const DishList = ({ dishes, onAddDish, onRemoveDish, selectedDishes, onViewIngredients }) => {
  return (
    <div className="dish-list">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2 className="category-title" style={{ margin: 0 }}>North Indian</h2>
        <img
          src="https://res.cloudinary.com/dgemrhu2h/image/upload/v1757745460/Group_1000007396_kgnjwq.png"
          alt="North Indian Icon"
          style={{ height: 24, marginLeft: 8 }}
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