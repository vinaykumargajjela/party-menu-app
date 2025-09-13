// src/data/mockDishes.js

export const dishes = [
  // --- MAIN COURSE (10 items) ---
  {
    "id": 1,
    "name": "Tandoori Chicken",
    "description": "Chicken marinated in yogurt and spices, grilled to perfection.",
    "image": "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=880&q=80",
    "mealType": "MAIN COURSE",
    "type": "NON-VEG",
    "ingredients": [
      { "name": "Chicken", "quantity": "1 kg" },
      { "name": "Yogurt", "quantity": "1 cup" },
      { "name": "Tandoori Masala", "quantity": "3 tbsp" },
      { "name": "Ginger-Garlic Paste", "quantity": "2 tbsp" }
    ]
  },
  {
    "id": 2,
    "name": "Dal Makhni",
    "description": "Creamy black lentils simmered with butter and spices.",
    "image": "https://media.istockphoto.com/id/531238750/photo/dal-makhani-or-dal-makhani-or-daal-makhni.jpg?s=1024x1024&w=is&k=20&c=2NDd-19L7RBaYsJFlXTJ4XTfAmW_bSbKWrYIJc_kx_I=",
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "ingredients": [
      { "name": "Black Lentils", "quantity": "1 cup" },
      { "name": "Kidney Beans", "quantity": "1/4 cup" },
      { "name": "Butter", "quantity": "1/2 cup" },
      { "name": "Cream", "quantity": "1/4 cup" }
    ]
  },
  {
    "id": 3,
    "name": "Chicken Biryani",
    "description": "Spiced chicken cooked with aromatic basmati rice.",
    "image": "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "mealType": "MAIN COURSE",
    "type": "NON-VEG",
    "ingredients": [
      { "name": "Basmati Rice", "quantity": "2 cups" },
      { "name": "Chicken", "quantity": "500g" },
      { "name": "Onions", "quantity": "2 large" },
      { "name": "Biryani Masala", "quantity": "3 tbsp" }
    ]
  },
  {
    "id": 4,
    "name": "Kadhai Paneer",
    "description": "Paneer cooked in spicy tomato gravy with bell peppers.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "ingredients": [
      { "name": "Paneer", "quantity": "250g" },
      { "name": "Bell Peppers", "quantity": "2" },
      { "name": "Onion", "quantity": "1 large" },
      { "name": "Tomato", "quantity": "2 medium" }
    ]
  },
  {
    "id": 5,
    "name": "Butter Chicken",
    "description": "Tender chicken in creamy tomato-based gravy.",
    "image": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=774&q=80",
    "mealType": "MAIN COURSE",
    "type": "NON-VEG",
    "ingredients": [
      { "name": "Chicken", "quantity": "500g" },
      { "name": "Butter", "quantity": "100g" },
      { "name": "Tomato Puree", "quantity": "1 cup" },
      { "name": "Cream", "quantity": "1/2 cup" }
    ]
  },
  {
    "id": 6,
    "name": "Veg Pulao",
    "description": "Fragrant rice with mixed vegetables and mild spices.",
    "image": "https://media.istockphoto.com/id/2226918933/photo/veg-briyani.jpg?s=2048x2048&w=is&k=20&c=eaUCo0xTyxXUZL5z7HqtPY2k1U9drJ7pKIoihBxPWrI=",
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "ingredients": [
      { "name": "Basmati Rice", "quantity": "2 cups" },
      { "name": "Mixed Vegetables", "quantity": "1 cup" },
      { "name": "Ghee", "quantity": "2 tbsp" },
      { "name": "Spices", "quantity": "as needed" }
    ]
  },
  {
    "id": 7,
    "name": "Chicken Curry",
    "description": "Classic chicken curry cooked in rich spices.",
    "image": "https://images.unsplash.com/photo-1708782344490-9026aaa5eec7?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "mealType": "MAIN COURSE",
    "type": "NON-VEG",
    "ingredients": [
      { "name": "Chicken", "quantity": "500g" },
      { "name": "Onions", "quantity": "2" },
      { "name": "Tomato Puree", "quantity": "1 cup" },
      { "name": "Spices", "quantity": "as needed" }
    ]
  },
  {
    "id": 8,
    "name": "Palak Paneer",
    "description": "Spinach cooked with paneer cubes and spices.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Spinach", "quantity": "1 bunch" },
      { "name": "Cream", "quantity": "1/4 cup" },
      { "name": "Spices", "quantity": "as needed" }
    ]
  },
  {
    "id": 9,
    "name": "Mutton Rogan Josh",
    "description": "Tender mutton pieces cooked in rich Kashmiri gravy.",
    "image": "https://media.istockphoto.com/id/1253934130/photo/mutton-masala-curry-in-plastic-container-for-home-delivery.jpg?s=2048x2048&w=is&k=20&c=bMwquDa7-ElH16olQPY84O6OCZ-oc7olKHfY68GqCAg=",
    "mealType": "MAIN COURSE",
    "type": "NON-VEG",
    "ingredients": [
      { "name": "Mutton", "quantity": "500g" },
      { "name": "Yogurt", "quantity": "1/2 cup" },
      { "name": "Spices", "quantity": "as needed" },
      { "name": "Onions", "quantity": "2 large" }
    ]
  },
  {
    "id": 10,
    "name": "Chole Masala",
    "description": "Spicy chickpeas cooked in rich onion-tomato gravy.",
    "image": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=774&q=80",
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "ingredients": [
      { "name": "Chickpeas", "quantity": "1 cup" },
      { "name": "Onion", "quantity": "1 large" },
      { "name": "Tomato Puree", "quantity": "1 cup" },
      { "name": "Spices", "quantity": "as needed" }
    ]
  },

  // --- STARTERS (10 items) ---
  {
    "id": 11,
    "name": "Paneer Tikka",
    "description": "Paneer cubes marinated in spices and grilled in a tandoor.",
    "image": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=774&q=80",
    "mealType": "STARTER",
    "type": "VEG",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Yogurt", "quantity": "1/2 cup" },
      { "name": "Gram Flour", "quantity": "2 tbsp" },
      { "name": "Spices", "quantity": "as needed" }
    ]
  },
  {
    "id": 12,
    "name": "Fried Avocado Tacos",
    "description": "Crispy fried avocado tacos with chipotle mayo.",
    "image": "https://media.istockphoto.com/id/1165287342/photo/shrimp-tacos-seafood-fajitas-with-cabbage-onion-parsley-in-tortillas-served-on-wooden-cutting.jpg?s=2048x2048&w=is&k=20&c=oY8zhxaB6aKytx4R6lAeEngGqwopbbG5I781MeajYp0=",
    "mealType": "STARTER",
    "type": "VEG",
    "ingredients": [
      { "name": "Avocado", "quantity": "2" },
      { "name": "Corn Tortillas", "quantity": "8" },
      { "name": "Chipotle Mayo", "quantity": "1/2 cup" },
      { "name": "Cabbage Slaw", "quantity": "1 cup" }
    ]
  },
  {
    "id": 13,
    "name": "Spring Rolls",
    "description": "Crispy rolls stuffed with mixed vegetables.",
    "image": "https://media.istockphoto.com/id/1313085999/photo/fried-vegetable-spring-rolls-with-sweet-chili-and-soya-sauce-on-wooden-board.jpg?s=2048x2048&w=is&k=20&c=RtrpCemTFqPaeIgcaznHPna6dy_ODZXZtKjkt-kXCm0=",
    "mealType": "STARTER",
    "type": "VEG",
    "ingredients": [
      { "name": "Spring Roll Wrappers", "quantity": "10 sheets" },
      { "name": "Cabbage", "quantity": "1 cup" },
      { "name": "Carrots", "quantity": "1 cup" },
      { "name": "Soy Sauce", "quantity": "2 tbsp" }
    ]
  },
  {
    "id": 14,
    "name": "Chicken Wings",
    "description": "Spicy and crispy chicken wings served with dip.",
    "image": "https://plus.unsplash.com/premium_photo-1669742928112-19364a33b530?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "mealType": "STARTER",
    "type": "NON-VEG",
    "ingredients": [
      { "name": "Chicken Wings", "quantity": "500g" },
      { "name": "Chili Powder", "quantity": "1 tbsp" },
      { "name": "Garlic Paste", "quantity": "1 tbsp" },
      { "name": "Oil", "quantity": "2 tbsp" }
    ]
  },
  {
    "id": 15,
    "name": "Hummus with Pita",
    "description": "Creamy hummus served with soft pita bread.",
    "image": "https://images.unsplash.com/photo-1683725519288-eab9fa352335?q=80&w=950&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "mealType": "STARTER",
    "type": "VEG",
    "ingredients": [
      { "name": "Chickpeas", "quantity": "1 cup" },
      { "name": "Tahini", "quantity": "2 tbsp" },
      { "name": "Olive Oil", "quantity": "2 tbsp" },
      { "name": "Garlic", "quantity": "2 cloves" }
    ]
  },
  {
    "id": 16,
    "name": "Bruschetta",
    "description": "Grilled bread with tomato and basil topping.",
    "image": "https://images.unsplash.com/photo-1593642532871-8b12e02d091c?auto=format&fit=crop&w=774&q=80",
    "mealType": "STARTER",
    "type": "VEG",
    "ingredients": [
      { "name": "Baguette Bread", "quantity": "1 loaf" },
      { "name": "Tomatoes", "quantity": "2 large" },
      { "name": "Basil Leaves", "quantity": "1/4 cup" },
      { "name": "Olive Oil", "quantity": "2 tbsp" }
    ]
  },
  {
    "id": 17,
    "name": "Prawn Cocktail",
    "description": "Fresh prawns served with cocktail sauce.",
    "image": "https://images.unsplash.com/photo-1691201659377-978b28daa417?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "mealType": "STARTER",
    "type": "NON-VEG",
    "ingredients": [
      { "name": "Prawns", "quantity": "200g" },
      { "name": "Lettuce", "quantity": "1 cup" },
      { "name": "Cocktail Sauce", "quantity": "1/2 cup" },
      { "name": "Lemon", "quantity": "1" }
    ]
  },
  {
    "id": 18,
    "name": "Stuffed Mushrooms",
    "description": "Mushrooms stuffed with cheese and herbs.",
    "image": "https://media.istockphoto.com/id/1219786190/photo/baked-champignons-mushrooms-filled-with-cheese-parsley-and-roasted-garlic-in-black-bowl.jpg?s=2048x2048&w=is&k=20&c=_srZgEXSSuY6IXib9vNbR74a42hCr0DRZQRkj1Ch7pA=",
    "mealType": "STARTER",
    "type": "VEG",
    "ingredients": [
      { "name": "Mushrooms", "quantity": "10 large" },
      { "name": "Cheese", "quantity": "1/2 cup" },
      { "name": "Herbs", "quantity": "as needed" },
      { "name": "Bread Crumbs", "quantity": "1/2 cup" }
    ]
  },
  {
    "id": 19,
    "name": "Crab Cakes",
    "description": "Delicious crab patties served with aioli.",
    "image": "https://media.istockphoto.com/id/645780408/photo/crispy-golden-fish-cakes.jpg?s=2048x2048&w=is&k=20&c=_t2Blwzqp6vHzH-_ZVd2PqMCzNXSFsACui7RRfSF0q4=",
    "mealType": "STARTER",
    "type": "NON-VEG",
    "ingredients": [
      { "name": "Crab Meat", "quantity": "200g" },
      { "name": "Breadcrumbs", "quantity": "1 cup" },
      { "name": "Eggs", "quantity": "2" },
      { "name": "Mayonnaise", "quantity": "1/2 cup" }
    ]
  },

  // ... Similarly continue with Desserts (ids 21-30) and Sides (ids 31-40)

  // Example for Dessert:
  {
    "id": 20,
    "name": "Gulab Jamun",
    "description": "Soft balls of milk solids soaked in rose syrup.",
    "image": "https://media.istockphoto.com/id/163064596/photo/gulab-jamun.jpg?s=2048x2048&w=is&k=20&c=xCoJpX9VGS0EcxjhRJEjD1Egtuo9R5yis5oJlYa57jk=",
    "mealType": "DESSERT",
    "type": "VEG",
    "ingredients": [
      { "name": "Khoya", "quantity": "200g" },
      { "name": "Sugar", "quantity": "1.5 cups" },
      { "name": "Cardamom", "quantity": "4 pods" },
      { "name": "Rose Water", "quantity": "1 tsp" }
    ]
  },
  {
    "id": 21,
    "name": "Rasgulla",
    "description": "Soft, spongy balls made from chhena soaked in sugar syrup.",
    "image": "https://media.istockphoto.com/id/1044080542/photo/indian-rasgulla-or-rosogulla-dessert-sweet-served-in-a-bowl-selective-focus.jpg?s=2048x2048&w=is&k=20&c=BpjzhGcvqwuDT0G5n_RXplzZDP1H-UfbJevzRQrFlnQ=",
    "mealType": "DESSERT",
    "type": "VEG",
    "ingredients": [
      { "name": "Chhena (Paneer)", "quantity": "250g" },
      { "name": "Sugar", "quantity": "2 cups" },
      { "name": "Water", "quantity": "4 cups" },
      { "name": "Cardamom", "quantity": "2 pods" }
    ]
  },
  {
    "id": 22,
    "name": "Jalebi",
    "description": "Deep-fried spirals soaked in sugar syrup, served hot and crispy.",
    "image": "https://media.istockphoto.com/id/1430753492/photo/indian-sweet-jalebi.jpg?s=2048x2048&w=is&k=20&c=46r_vAMFhQ25HG4xZGL5g0WIyOySGYfjLa7VrajE-pw=",
    "mealType": "DESSERT",
    "type": "VEG",
    "ingredients": [
      { "name": "Maida (Flour)", "quantity": "1 cup" },
      { "name": "Sugar", "quantity": "1.5 cups" },
      { "name": "Saffron", "quantity": "A pinch" },
      { "name": "Water", "quantity": "As required" }
    ]
  },
  {
    "id": 23,
    "name": "Kheer",
    "description": "Traditional Indian rice pudding flavored with cardamom and garnished with nuts.",
    "image": "https://media.istockphoto.com/id/980089086/photo/rice-pudding-or-kheer-from-india-called-also-called-firnee-served-in-a-bowl-selective-focus.jpg?s=2048x2048&w=is&k=20&c=3hqiq2gnPlo7MfQmzhpKx8AtyPcAIkEWqL0okkkpAsY=",
    "mealType": "DESSERT",
    "type": "VEG",
    "ingredients": [
      { "name": "Rice", "quantity": "1/2 cup" },
      { "name": "Milk", "quantity": "1 liter" },
      { "name": "Sugar", "quantity": "1 cup" },
      { "name": "Cardamom", "quantity": "4 pods" },
      { "name": "Cashews & Raisins", "quantity": "2 tbsp" }
    ]
  },
  {
    "id": 24,
    "name": "Barfi",
    "description": "Dense milk-based sweet, flavored with cardamom and garnished with nuts.",
    "image": "https://media.istockphoto.com/id/1428238507/photo/singhara-barfi-or-singhada-burfi%C2%A0or-halwa-made-using-water-chestnut-flour-fasting-or-upwas.jpg?s=2048x2048&w=is&k=20&c=NinvdwJ5NDnM1zhh1yWW09_Jxkq4d19PWFtiVjnmaZs=",
    "mealType": "DESSERT",
    "type": "VEG",
    "ingredients": [
      { "name": "Condensed Milk", "quantity": "1 cup" },
      { "name": "Sugar", "quantity": "1 cup" },
      { "name": "Cardamom Powder", "quantity": "1 tsp" },
      { "name": "Chopped Nuts", "quantity": "2 tbsp" }
    ]
  },
  {
    "id": 25,
    "name": "Halwa",
    "description": "Sweet, dense pudding made from semolina and ghee, garnished with nuts.",
    "image": "https://media.istockphoto.com/id/1252284886/photo/amaranth-pudding-rajgiri-halwa.jpg?s=2048x2048&w=is&k=20&c=bqAy8Y83HoAH8EGojKa09zB1x7Cf91KsECZvt0iuAC8=",
    "mealType": "DESSERT",
    "type": "VEG",
    "ingredients": [
      { "name": "Semolina (Suji)", "quantity": "1 cup" },
      { "name": "Sugar", "quantity": "3/4 cup" },
      { "name": "Ghee", "quantity": "4 tbsp" },
      { "name": "Water", "quantity": "2 cups" },
      { "name": "Cardamom", "quantity": "1 tsp" }
    ]
  },

  // Example for Side:
  {
    "id": 26,
    "name": "Garlic Naan",
    "description": "Soft leavened flatbread with garlic flavor.",
    "image": "https://media.istockphoto.com/id/1135777102/photo/traditional-flat-bread.jpg?s=2048x2048&w=is&k=20&c=M6qRQqrfgKKiWQnVnbIrnYrkabKWvvyMcoM9SQIUTo8=",
    "mealType": "SIDES",
    "type": "VEG",
    "ingredients": [
      { "name": "All-purpose Flour", "quantity": "2 cups" },
      { "name": "Yogurt", "quantity": "1/4 cup" },
      { "name": "Garlic", "quantity": "4 cloves" },
      { "name": "Butter", "quantity": "2 tbsp" }
    ]
  },
  {
    "id": 27,
    "name": "Papad",
    "description": "Thin, crispy, and spiced lentil wafers served as a side.",
    "image": "https://media.istockphoto.com/id/666595984/photo/indian-snacks-deep-fried-crackers-or-papad-mung-dal-and-urad-dal-papad-an-indian-fried-dish.jpg?s=2048x2048&w=is&k=20&c=S22CnsCtND1qFssEMAFiZ09DYtLy04pK42kkwstSIpI=",
    "mealType": "SIDES",
    "type": "VEG",
    "ingredients": [
      { "name": "Urad Dal Flour", "quantity": "1 cup" },
      { "name": "Salt", "quantity": "1 tsp" },
      { "name": "Black Pepper", "quantity": "1 tsp" },
      { "name": "Cumin Seeds", "quantity": "1 tsp" }
    ]
  },
  {
    "id": 28,
    "name": "Raita",
    "description": "Yogurt mixed with vegetables and spices, served cold.",
    "image": "https://media.istockphoto.com/id/1056787708/photo/sauce-of-yogurt-with-herbs-spices-and-cucumber-close-up-on-the-table-raita-horizontal-top-view.jpg?s=2048x2048&w=is&k=20&c=XIY-AnM4lDg_-Yd5F29t_KaygQ3FFpk5KohE0mRG3P0=",
    "mealType": "SIDES",
    "type": "VEG",
    "ingredients": [
      { "name": "Yogurt", "quantity": "1 cup" },
      { "name": "Cucumber", "quantity": "1 small" },
      { "name": "Cumin Powder", "quantity": "1 tsp" },
      { "name": "Salt", "quantity": "As per taste" }
    ]
  },
  {
    "id": 29,
    "name": "Chutney",
    "description": "Tangy and spicy condiment made from fresh herbs and spices.",
    "image": "https://media.istockphoto.com/id/1322502420/photo/ajvar-paprika-spread-pepper-based-condiment-made-from-red-bell-peppers.jpg?s=1024x1024&w=is&k=20&c=kYRwO192RydoYEHP8iRDWsPeZHLvNgT8QP8VqiU0MZg=",
    "mealType": "SIDES",
    "type": "VEG",
    "ingredients": [
      { "name": "Coriander Leaves", "quantity": "1 cup" },
      { "name": "Green Chili", "quantity": "2" },
      { "name": "Lemon Juice", "quantity": "1 tbsp" },
      { "name": "Salt", "quantity": "As per taste" }
    ]
  },
  {
    "id": 30,
    "name": "Pickle",
    "description": "Spicy preserved vegetables or fruits to complement meals.",
    "image": "https://media.istockphoto.com/id/1257037672/photo/indian-homemade-raw-mango-pickle-or-aam-ka-achar-or-kairi-loncha-in-a-bowl.jpg?s=2048x2048&w=is&k=20&c=7krGW7Op554Xe4RBu3tbhAskYwhLGmzJ95lQXog_z2g=",
    "mealType": "SIDES",
    "type": "VEG",
    "ingredients": [
      { "name": "Mango", "quantity": "500g" },
      { "name": "Mustard Seeds", "quantity": "1 tbsp" },
      { "name": "Chili Powder", "quantity": "1 tbsp" },
      { "name": "Salt", "quantity": "As per taste" },
      { "name": "Oil", "quantity": "1 cup" }
    ]
  },
  {
    "id": 31,
    "name": "Fried Chillies",
    "description": "Crispy and spicy fried green chillies served as a crunchy side.",
    "image": "https://media.istockphoto.com/id/901083158/photo/hot-and-spicy-chinese-chicken-dish.jpg?s=2048x2048&w=is&k=20&c=Ghz4TOqgCSFp8tMqlWWj4aQAYGRog27c5N7VOVzhHeA=",
    "mealType": "SIDES",
    "type": "VEG",
    "ingredients": [
      { "name": "Green Chillies", "quantity": "10" },
      { "name": "Salt", "quantity": "1 tsp" },
      { "name": "Oil", "quantity": "For frying" }
    ]
  },
  {
    "id": 32,
    "name": "Sev",
    "description": "Crunchy snack made from gram flour, often served as a side or garnish.",
    "image": "https://media.istockphoto.com/id/1413566890/photo/shegaon-or-rajasthani-aloo-pyas-ki-kachori-served-with-tamarind-chutney-and-sev-kachori-or.jpg?s=2048x2048&w=is&k=20&c=XQRbNuH1ug-VuDiwZ83u9v3fjoVKinKmlHQsOmdgcK0=",
    "mealType": "SIDES",
    "type": "VEG",
    "ingredients": [
      { "name": "Gram Flour (Besan)", "quantity": "2 cups" },
      { "name": "Turmeric Powder", "quantity": "1/2 tsp" },
      { "name": "Salt", "quantity": "1 tsp" },
      { "name": "Oil", "quantity": "For deep frying" }
    ]
  }
];
