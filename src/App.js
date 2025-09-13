// src/App.js
import React, { useState, useMemo, useCallback } from 'react';
import './App.css';
import { dishes as mockDishes } from './data/mockDishes';
import Filters from './components/Filters';
import DishList from './components/DishList';
import IngredientModal from './components/IngredientModal';

const MODAL_TYPE = {
  INGREDIENT: 'ingredient',
  READ_MORE: 'readmore',
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState('MAIN COURSE');
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [modalState, setModalState] = useState({ isOpen: false, dish: null, type: null });
  const [searchQuery, setSearchQuery] = useState('');

  // Get selected count for the current category
  const selectedCategoryCount = useMemo(() => {
    return selectedDishes.filter(dish => dish.mealType === selectedCategory).length;
  }, [selectedDishes, selectedCategory]);

  const categories = ['STARTER', 'MAIN COURSE', 'DESSERT', 'SIDES'];

  // Helper to get display name for header (e.g., Dessert Selected)
  const getCategoryHeader = (category) => {
    switch (category) {
      case 'STARTER':
        return 'Starter Selected';
      case 'MAIN COURSE':
        return 'Main Course Selected';
      case 'DESSERT':
        return 'Dessert Selected';
      case 'SIDES':
        return 'Sides Selected';
      default:
        return '';
    }
  };

  const handleAddDish = useCallback((dishToAdd) => {
    setSelectedDishes(prev => [...prev, dishToAdd]);
  }, []);

  const handleRemoveDish = useCallback((dishToRemove) => {
    setSelectedDishes(prev => prev.filter(dish => dish.id !== dishToRemove.id));
  }, []);

  const openModal = useCallback((dish, type = MODAL_TYPE.INGREDIENT) => {
    setModalState({ isOpen: true, dish, type });
  }, []);

  const closeModal = useCallback(() => {
    setModalState({ isOpen: false, dish: null, type: null });
  }, []);

  // Filter dishes by selected category and search query (case-insensitive)
  const filteredDishes = useMemo(() => {
    return mockDishes
      .filter(dish => dish.mealType === selectedCategory)
      .filter(dish =>
        dish.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
      );
  }, [selectedCategory, searchQuery]);

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="search-bar">
          <img
            src="https://res.cloudinary.com/dgemrhu2h/image/upload/v1757686475/Group_1000007397_s73ggc.png"
            alt="Back"
            className="back-btn"
          />
          <input
            type="text"
            placeholder="Search dish for your party...."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <img
            src="https://res.cloudinary.com/dgemrhu2h/image/upload/v1757686237/fi_711319_zabqpt.png"
            alt="Search"
            className="search-icon"
          />
        </div>
      </header>

      <main>
        <Filters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedDishes={selectedDishes}
        />
        <div className="main-course-header">
          <span>{getCategoryHeader(selectedCategory)} ({selectedCategoryCount})</span>
          <div className="veg-non-veg-icons">
            <img src="https://res.cloudinary.com/dgemrhu2h/image/upload/v1757687046/Frame_19480_fwki6v.png" alt="Veg" />
            <img src="https://res.cloudinary.com/dgemrhu2h/image/upload/v1757687036/Frame_1000008679_m5xblc.png" alt="Non Veg" />
          </div>
        </div>
        <DishList
          dishes={filteredDishes}
          onAddDish={handleAddDish}
          onRemoveDish={handleRemoveDish}
          selectedDishes={selectedDishes}
          onViewIngredients={openModal}
        />
      </main>

      <footer className="app-footer">
        <div className="total-dishes-summary">
          <p>Total Dish Selected: {selectedDishes.length}</p>
          <img src="https://res.cloudinary.com/dgemrhu2h/image/upload/v1757746698/Group_1000007396_1_xrxy3u.png" alt="Footer Icon" />
        </div>
        <button className="continue-btn">Continue</button>
      </footer>
      
      {modalState.isOpen && (
        <IngredientModal
          dish={modalState.dish}
          onClose={closeModal}
          modalType={modalState.type}
        />
      )}
    </div>
  );
}

export default App;