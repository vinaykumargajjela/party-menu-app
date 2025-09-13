// src/components/DishCard.js
import React from 'react';

const VegIndicator = ({ type }) => {
  const imageUrl =
    type.toLowerCase() === 'veg'
      ? "https://res.cloudinary.com/dgemrhu2h/image/upload/v1757745757/Frame_19479_1_u7jfpr.png"
      : "https://res.cloudinary.com/dgemrhu2h/image/upload/v1757745765/Frame_19479_mbzkvq.png";
  
  return <img src={imageUrl} alt={type} className="veg-indicator-icon" />;
};

const DishCard = ({ dish, onAddDish, onRemoveDish, isSelected, onViewIngredients }) => {
  return (
    <div className="dish-card">
      <div className="dish-details">
        <h3 className="dish-name">
          {dish.name} <VegIndicator type={dish.type} />
        </h3>
        <p className="dish-description">
          {dish.description}
          <span
            className="read-more-link"
            onClick={() => onViewIngredients(dish, 'readmore')}
          >
            Read more
          </span>
        </p>
        <button className="ingredient-link" onClick={() => onViewIngredients(dish, 'ingredient')}>
          <img
            src="https://res.cloudinary.com/dgemrhu2h/image/upload/v1757599240/Group_1_c1oegk.jpg"
            alt="Ingredient Icon"
            className="ingredient-icon"
          />
          Ingredient
        </button>
      </div>
      <div className="dish-actions">
        <img src={dish.image} alt={dish.name} className="dish-image" />
        <button
          className={isSelected ? "btn-remove" : "btn-add"}
          onClick={() => (isSelected ? onRemoveDish(dish) : onAddDish(dish))}
        >
          {isSelected ? "Remove" : "Add +"}
        </button>
      </div>
    </div>
  );
};

export default DishCard;