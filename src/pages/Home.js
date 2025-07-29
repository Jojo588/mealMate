import React, {useEffect, useState} from 'react';
import ExpirySection from '../components/ExpirySection';
import Header from "../components/Header.js";
import SuggestionsSection from '../components/SuggestionsSection.js';
import { useLocation } from 'react-router-dom';

const Home = ({ foodItems, setFoodItems, searchTerm, setSearchTerm }) => {
  const location = useLocation();
  const isTrackExpiryDates = location.pathname === '/track_expiry_dates';
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("fridgeItems")) || [];
    setFoodItems(stored);
  }, [setFoodItems]);

  // Applying search filtering directly here
  const filteredFood = foodItems.filter(item =>
    item.itemName && item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  function handleDelete(indexToDelete) {

    const updated = foodItems.filter((_, index) => index !== indexToDelete);
    setFoodItems(updated);
    localStorage.setItem("fridgeItems", JSON.stringify(updated));
    
  }

// hiding suggestions section when the search button is being filled
const [check, setCheck] = useState(true)
function checkIfEmpty(e) {
  const value = e.target.value;
  setSearchTerm(value);

  if (value.trim() !== "") {
    setCheck(false); // hide suggestions while typing
  } else {
    setCheck(true);  // show suggestions again when cleared
  }
}

  return (
    <>
{isTrackExpiryDates && (
  <>
    <Header 
      searchTerm={searchTerm}
      checkIfEmpty={checkIfEmpty}
    />

    <div className="h-20" />

    {check && <SuggestionsSection />}

    <div className="p-6">
      {check ? (
        <h1 className="text-2xl font-bold mb-4 capitalize">monitor expiring Food Items</h1>
      ) : (
        <h1 className="text-2xl font-bold mb-4 capitalize">search results</h1>
      )}
    </div>
  </>
)}
      <div>
        {filteredFood.length === 0 ? (
          <p>No food item added! add new food item</p>
        ) : (
          filteredFood.map((item, index) => (
            <ExpirySection
              key={index}
              itemName={item.itemName}
              quantity={item.quantity}
              expiryDate={item.expiryDate}
              autoExpiry={item.expire}
              onDelete={() => handleDelete(index)}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Home;
