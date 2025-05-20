import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ChoicePage from './pages/ChoicePage';
import AddItemManually from './pages/AddItemManually';
import AutoGenExpirPage from './pages/AutoGenExpirPage';
import Suggestions from './pages/Suggestions';
const App = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={ 
            <Home
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              foodItems={foodItems}
              setFoodItems={setFoodItems}
            />
          }
        />
        <Route path="/choice_page" element={<ChoicePage />} />
        <Route
          path="/add_item_manually"
          element={
            <AddItemManually
              setFoodItems={setFoodItems}
              foodItems={foodItems}
            />
          }
        />
        <Route
          path="/auto_generate_expiry_date"
          element={
            <AutoGenExpirPage
              setFoodItems={setFoodItems}
              foodItems={foodItems}
            />
          }
        />
        <Route path="/suggestions" element={<Suggestions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
