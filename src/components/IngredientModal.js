// src/components/IngredientModal.js
import React, { useState } from 'react';

const IngredientModal = ({ dish, onClose, modalType }) => {
  const [showIngredients, setShowIngredients] = useState(modalType === 'ingredient');

  if (!dish) return null;

  const handleShowIngredients = () => setShowIngredients(true);

  if (!showIngredients) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content read-more-modal" onClick={e => e.stopPropagation()}>
          <img src={dish.image} alt={dish.name} className="modal-dish-image" />
          <div className="modal-details-container">
            <div className="modal-dish-header">
              <h3>{dish.name}</h3>
              <button className="btn-remove-modal" onClick={onClose}>Remove</button>
            </div>
            <p className="modal-dish-description">
              <span className="font-bold">North Indian </span>{dish.description}
            </p>
            <button className="ingredient-link-modal" onClick={handleShowIngredients}>
              <img src="https://res.cloudinary.com/dgemrhu2h/image/upload/v1757749911/fi_8508747_syu7cu.png" alt="ingredient" />
              Ingredient
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content ingredient-modal" onClick={e => e.stopPropagation()}>
        <div className="ingredient-modal-header">
          <div className="ingredient-modal-info">
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
          </div>
          <img src={dish.image} alt={dish.name} />
        </div>
        <div className="ingredient-modal-body">
          <h4>Ingredients</h4>
          <p className="serving-info">For 2 people</p>
          <hr />
          <ul className="ingredients-list">
            {dish.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span>{ingredient.name}</span>
                <span>{ingredient.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IngredientModal;