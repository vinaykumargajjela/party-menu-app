// src/components/DishCard.js
import React from 'react';

const DishCard = ({ dish, onAddDish, onRemoveDish, isSelected, onViewIngredients }) => {
  const VegIndicator = () => {
    if (dish.type.toLowerCase() === 'veg') {
      return (
        <img
          src="https://res.cloudinary.com/dgemrhu2h/image/upload/v1757745757/Frame_19479_1_u7jfpr.png"
          alt="Veg"
          style={{ width: 18, height: 18, marginLeft: 8 }}
        />
      );
    } else if (dish.type.toLowerCase() === 'non-veg') {
      return (
        <img
          src="https://res.cloudinary.com/dgemrhu2h/image/upload/v1757745765/Frame_19479_mbzkvq.png"
          alt="Non Veg"
          style={{ width: 18, height: 18, marginLeft: 8 }}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <div className="dish-card">
      <div className="dish-details">
        <h3 className="dish-name">
          {dish.name} <VegIndicator />
        </h3>
        <p className="dish-description">
          {dish.description}
          <span
            style={{ color: '#000', fontWeight: 500, cursor: 'pointer', marginLeft: 4 }}
            onClick={() => onViewIngredients(dish, 'readmore')}
          >
            Read more
          </span>
        </p>
        <span className="ingredient-link" onClick={() => onViewIngredients(dish, 'ingredient')}>
          <img
            src="https://res.cloudinary.com/dgemrhu2h/image/upload/v1757599240/Group_1_c1oegk.jpg"
            alt="Ingredient Icon"
            style={{ width: 18, height: 18, verticalAlign: 'middle', marginRight: 4 }}
          />
          Ingredient
        </span>
      </div>
      <div className="dish-actions">
        <img src={dish.image} alt={dish.name} className="dish-image" />
        {isSelected ? (
          <button className="btn-remove" onClick={() => onRemoveDish(dish)}>
            Remove
          </button>
        ) : (
          <button className="btn-add" onClick={() => onAddDish(dish)}>
            Add +
          </button>
        )}
      </div>
    </div>
  );
};

export default DishCard;