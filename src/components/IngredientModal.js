// src/components/IngredientModal.js
import React, { useState } from 'react';

const IngredientModal = ({ dish, onClose, modalType }) => {
  const [showIngredients, setShowIngredients] = useState(modalType === 'ingredient');

  if (!dish) return null;

  const handleShowIngredients = () => setShowIngredients(true);

  if (!showIngredients) {
    return (
      <div className="modal-overlay" onClick={onClose} style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
        <div
          className="modal-content read-more-modal"
          onClick={e => e.stopPropagation()}
          style={{
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            maxWidth: 450,
            width: '100%',
            margin: 0,
            position: 'relative',
            bottom: 0,
            left: 0,
            right: 0,
            boxShadow: '0 -4px 24px rgba(0,0,0,0.18)',
            background: '#fff',
            paddingBottom: 24
          }}
        >
          <div style={{padding: 16}}>
            <img
              src={dish.image}
              alt={dish.name}
              className="modal-dish-image"
              style={{
                borderRadius: 20,
                width: '100%',
                height: 160,
                objectFit: 'cover',
                background: '#f8f6f2',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
              }}
            />
          </div>
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
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 1000, background: 'rgba(0,0,0,0.7)' }}>
      <div
        className="modal-content ingredient-modal"
        onClick={e => e.stopPropagation()}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          maxWidth: '450px',
          margin: '0 auto',
          borderRadius: 0,
          background: '#fff',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'none',
          padding: 0
        }}
      >
        {/* Header with back arrow and title */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', padding: '18px 0 0 18px', minHeight: 48 }}>
            <img
              src="https://res.cloudinary.com/dgemrhu2h/image/upload/v1757686475/Group_1000007397_s73ggc.png"
              alt="Back"
              style={{ width: 28, height: 28, cursor: 'pointer', marginRight: 10 }}
              onClick={onClose}
            />
            <span style={{ fontWeight: 700, fontSize: 19 }}>Ingredient list</span>
          </div>
          <hr style={{
            border: 'none',
            borderTop: '1.5px solid #ececec',
            margin: '10px 0 0 0',
            boxShadow: '0 2px 6px 0 rgba(0,0,0,0.04)'
          }} />
        </div>
        <div className="ingredient-modal-header" style={{ paddingTop: 16 }}>
          <div className="ingredient-modal-info">
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
          </div>
          <img src={dish.image} alt={dish.name} />
        </div>
        <div className="ingredient-modal-body" style={{ flex: 1, overflowY: 'auto' }}>
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