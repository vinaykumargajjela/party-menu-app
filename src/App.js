// src/App.js
import React, { useState, useMemo } from 'react';
import './App.css';
import { dishes as mockDishes } from './data/mockDishes';
import Filters from './components/Filters';
import DishList from './components/DishList';
import IngredientModal from './components/IngredientModal';

// Helper to distinguish modal type
const MODAL_TYPE = {
  INGREDIENT: 'ingredient',
  READ_MORE: 'readmore',
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState('MAIN COURSE');
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState(null);
  const [modalType, setModalType] = useState(null);

  // Count only selected dishes from MAIN COURSE
  const mainCourseSelectedCount = selectedDishes.filter(dish => dish.mealType === 'MAIN COURSE').length;

  const categories = ['STARTER', 'MAIN COURSE', 'DESSERT', 'SIDES'];

  const handleAddDish = (dishToAdd) => {
    setSelectedDishes((prevDishes) => [...prevDishes, dishToAdd]);
  };

  const handleRemoveDish = (dishToRemove) => {
    setSelectedDishes((prevDishes) => prevDishes.filter((dish) => dish.id !== dishToRemove.id));
  };

  // Called for both 'Read more' and 'Ingredient', pass type
  const handleViewIngredients = (dish, type = MODAL_TYPE.INGREDIENT) => {
    setCurrentDish(dish);
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentDish(null);
    setModalType(null);
  };

  const filteredDishes = useMemo(() => {
    return mockDishes.filter(dish => dish.mealType === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="search-bar" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <img
            src="https://res.cloudinary.com/dgemrhu2h/image/upload/v1757686475/Group_1000007397_s73ggc.png"
            alt="Back"
            className="back-btn"
            style={{ width: 24, height: 24, position: 'absolute', left: 8, cursor: 'pointer', zIndex: 2 }}
          />
          <input type="text" placeholder="Search dish for your party...." style={{ flex: 1, paddingLeft: 40, paddingRight: 36 }} />
          <img
            src="https://res.cloudinary.com/dgemrhu2h/image/upload/v1757686237/fi_711319_zabqpt.png"
            alt="Search"
            className="search-icon"
            style={{ width: 24, height: 24, position: 'absolute', right: 8, cursor: 'pointer' }}
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
        {/* Main Courses Selected section below filters */}
        <div style={{ display: 'flex', alignItems: 'center', margin: '12px 0', padding: '0 16px', justifyContent: 'space-between' }}>
          <span style={{ fontWeight: 700, fontSize: 16, color: '#000' }}>
            Main Courses Selected ({mainCourseSelectedCount})
          </span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="https://res.cloudinary.com/dgemrhu2h/image/upload/v1757687046/Frame_19480_fwki6v.png"
              alt="Veg"
              style={{ width: 24, height: 24, marginRight: 8 }}
            />
            <img
              src="https://res.cloudinary.com/dgemrhu2h/image/upload/v1757687036/Frame_1000008679_m5xblc.png"
              alt="Non Veg"
              style={{ width: 24, height: 24 }}
            />
          </div>
        </div>
        <DishList
          dishes={filteredDishes}
          onAddDish={handleAddDish}
          onRemoveDish={handleRemoveDish}
          selectedDishes={selectedDishes}
          onViewIngredients={handleViewIngredients}
        />
      </main>

      <footer className="app-footer">
        <div className="total-dishes" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ margin: 0, padding: 15 }}>Total Dish Selected: {selectedDishes.length}</p>
          <img
            src="https://res.cloudinary.com/dgemrhu2h/image/upload/v1757746698/Group_1000007396_1_xrxy3u.png"
            alt="Footer Icon"
            style={{ height: 22, marginLeft: 8,padding: 15 }}
          />
        </div>
        <button className="continue-btn">Continue</button>
      </footer>
      
  {isModalOpen && <IngredientModal dish={currentDish} onClose={handleCloseModal} modalType={modalType} />}
    </div>
  );
}

export default App;