// src/components/IngredientModal.js
import React from 'react';

const IngredientModal = ({ dish, onClose, modalType }) => {
  const [showIngredientList, setShowIngredientList] = React.useState(false);
  if (!dish) {
    return null;
  }

  // If modalType is 'readmore', show the screenshot layout
  if (modalType === 'readmore' && !showIngredientList) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()} style={{ borderRadius: 20, padding: 0, maxWidth: 370, background: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}>
          {/* Dish image full width at top */}
          <div style={{ position: 'relative', width: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20, overflow: 'hidden' }}>
            <img src={dish.image} alt={dish.name} style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }} />
          </div>
          {/* Dish name, Remove button, and description */}
          <div style={{ padding: '18px 18px 0 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: '#222', display: 'flex', alignItems: 'center' }}>
                {dish.name}
                {/* Veg/Non-veg icon if needed */}
                {dish.type && (
                  <img
                    src={dish.type.toLowerCase() === 'veg'
                      ? 'https://res.cloudinary.com/dgemrhu2h/image/upload/v1757745757/Frame_19479_1_u7jfpr.png'
                      : dish.type.toLowerCase() === 'non-veg'
                        ? 'https://res.cloudinary.com/dgemrhu2h/image/upload/v1757745765/Frame_19479_mbzkvq.png'
                        : ''}
                    alt={dish.type}
                    style={{ width: 18, height: 18, marginLeft: 8 }}
                  />
                )}
              </h3>
              <button className="btn-remove" style={{ color: '#ff9a00', background: 'none', border: 'none', fontWeight: 600, fontSize: 16, cursor: 'pointer', padding: '4px 0' }} onClick={onClose}>Remove</button>
            </div>
            <div style={{ margin: '10px 0 0 0', fontSize: 15, color: '#222' }}>
              <span style={{ fontWeight: 700 }}>North Indian </span>
              <span style={{ color: '#222', fontWeight: 400 }}>{dish.description}</span>
            </div>
          </div>
          {/* Ingredient section at bottom */}
          <div style={{ padding: '0 18px 18px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 18, cursor: 'pointer' }} onClick={() => setShowIngredientList(true)}>
              <img src="https://res.cloudinary.com/dgemrhu2h/image/upload/v1757749911/fi_8508747_syu7cu.png" alt="ingredient" style={{ width: 18, height: 18, marginRight: 6 }} />
              <span style={{ color: '#ff9a00', fontWeight: 600, fontSize: 15, letterSpacing: 0.1 }}>Ingredient</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // Show ingredient list if modalType is 'ingredient' or user clicked Ingredient in readmore modal
  else if (modalType === 'ingredient' || showIngredientList) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()} style={{ borderRadius: 16, padding: 0, maxWidth: 370, background: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,0.18)', minWidth: 0 }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-start', padding: '20px 16px 0 16px' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h3 style={{ margin: 0, fontSize: 19, fontWeight: 700, color: '#222', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{dish.name}</h3>
              <div style={{ fontSize: 13, color: '#444', margin: '8px 0 0 0', maxWidth: 180, whiteSpace: 'normal', overflow: 'hidden', textOverflow: 'ellipsis' }}>{dish.description}</div>
            </div>
            <img src={dish.image} alt={dish.name} style={{ width: 110, height: 90, objectFit: 'cover', borderRadius: 8, marginLeft: 12, background: '#f8f6f2' }} />
          </div>
          {/* Ingredients section */}
          <div style={{ padding: '0 16px 16px 16px' }}>
            <div style={{ fontWeight: 700, fontSize: 16, margin: '18px 0 0 0' }}>Ingredients</div>
            <div style={{ color: '#888', fontSize: 13, marginBottom: 8 }}>For 2 people</div>
            <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0 0 8px 0' }} />
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                {dish.ingredients && dish.ingredients.map((ingredient, idx) => (
                  <tr key={idx}>
                    <td style={{ fontSize: 15, color: '#222', padding: '6px 0', textAlign: 'left', width: '60%' }}>{ingredient.name}</td>
                    <td style={{ fontSize: 15, color: '#222', padding: '6px 0', textAlign: 'right', width: '40%' }}>{ingredient.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
};

export default IngredientModal;